/* Dependency resolution — "make features come together".
   Pure functions over the catalogue graph. No React. Spec §6. */

import { MODULE_BY_ID, MODULES } from "./catalog";
import type { ModuleId } from "./types";

function isSelectable(id: string): id is ModuleId {
  const m = MODULE_BY_ID[id];
  return !!m && m.status === "available";
}

/**
 * Transitive closure over `requires`.
 * Unknown and roadmap ids are dropped silently so an evolving catalogue
 * never produces a broken build from an old share link.
 */
export function resolve(selected: readonly string[]): {
  effective: ModuleId[];
  autoAdded: ModuleId[];
} {
  const seeds = selected.filter(isSelectable);
  const effective = new Set<ModuleId>();
  const queue = [...seeds];

  while (queue.length) {
    const id = queue.shift() as ModuleId;
    if (effective.has(id)) continue;
    effective.add(id);
    for (const dep of MODULE_BY_ID[id].requires) {
      if (!effective.has(dep) && isSelectable(dep)) queue.push(dep);
    }
  }

  const seedSet = new Set<string>(seeds);
  const all = Array.from(effective);
  return {
    effective: order(all),
    autoAdded: order(all.filter((id) => !seedSet.has(id))),
  };
}

/**
 * Everything in `within` that would break if `id` disappeared — direct and
 * transitive. Powers the cascade dialog.
 */
export function dependents(id: ModuleId, within: readonly ModuleId[]): ModuleId[] {
  const pool = within.filter((m) => m !== id);
  const doomed = new Set<ModuleId>();
  let grew = true;

  while (grew) {
    grew = false;
    for (const candidate of pool) {
      if (doomed.has(candidate)) continue;
      const needs = MODULE_BY_ID[candidate].requires;
      if (needs.some((r) => r === id || doomed.has(r))) {
        doomed.add(candidate);
        grew = true;
      }
    }
  }

  return order(Array.from(doomed));
}

/**
 * Remove `id` and everything that depends on it. Never leaves an invalid build.
 *
 * `id` may be auto-added rather than explicitly selected — in that case the
 * selected modules that pulled it in are what actually get removed.
 * `alsoRemoved` reports the real delta in the effective set, so auto-added
 * modules that fall away are surfaced to the user too.
 */
export function remove(
  selected: readonly string[],
  id: ModuleId
): { next: ModuleId[]; alsoRemoved: ModuleId[] } {
  const before = resolve(selected).effective;
  if (!before.includes(id)) {
    return { next: selected.filter(isSelectable), alsoRemoved: [] };
  }

  const doomed = new Set<string>([id, ...dependents(id, before)]);
  const next = selected.filter((s): s is ModuleId => isSelectable(s) && !doomed.has(s));
  const after = new Set(resolve(next).effective);

  return {
    next,
    alsoRemoved: before.filter((m) => m !== id && !after.has(m)),
  };
}

/** Prerequisites a drop would pull in, for the drop-zone preview. */
export function wouldAdd(selected: readonly string[], id: ModuleId): ModuleId[] {
  const before = new Set(resolve(selected).effective);
  if (before.has(id)) return [];
  const after = resolve([...selected, id]).effective;
  return after.filter((m) => m !== id && !before.has(m));
}

/** Which explicitly-chosen modules are keeping `id` in the build. Feeds the "รวมอัตโนมัติ" note. */
export function requiredBy(id: ModuleId, selected: readonly string[]): ModuleId[] {
  return order(
    selected
      .filter(isSelectable)
      .filter((s) => s !== id && resolve([s]).effective.indexOf(id) !== -1)
  );
}

/** Stable catalogue order, so the canvas and share links never reshuffle. */
function order(ids: ModuleId[]): ModuleId[] {
  const rank = new Map(MODULES.map((m, i) => [m.id, i]));
  return [...ids].sort((a, b) => (rank.get(a) ?? 0) - (rank.get(b) ?? 0));
}
