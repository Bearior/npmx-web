/* Pricing engine. Pure. Spec §2, §6. */

import {
  BASE_MONTHLY_THB,
  BASE_SETUP_THB,
  MODULE_BY_ID,
  PRESETS,
  STUDENT_BANDS,
} from "./catalog";
import type { ModuleId, OptionId, Price, StudentBand, TierId } from "./types";

export function bandFor(students: number): StudentBand {
  return (
    STUDENT_BANDS.find((b) => b.maxStudents !== null && students <= b.maxStudents) ??
    STUDENT_BANDS[STUDENT_BANDS.length - 1]
  );
}

/**
 * Exact-match against a tier, so the UI can quote the bundle instead of the
 * à la carte sum. Both modules and options must match.
 */
export function matchPreset(
  effective: readonly ModuleId[],
  options: readonly OptionId[]
): TierId | undefined {
  const has = (a: readonly string[], b: readonly string[]) =>
    a.length === b.length && [...a].sort().join() === [...b].sort().join();

  return PRESETS.find(
    (p) => has(p.modules, effective) && has(p.options, options)
  )?.id;
}

/** Options only count when their parent module is in the build. */
export function activeOptions(
  effective: readonly ModuleId[],
  options: readonly OptionId[]
): OptionId[] {
  const live = new Set(effective);
  return options.filter((oid) =>
    effective.some(
      (mid) => live.has(mid) && MODULE_BY_ID[mid].options?.some((o) => o.id === oid)
    )
  );
}

export function price(
  effective: readonly ModuleId[],
  options: readonly OptionId[],
  students: number
): Price {
  const band = bandFor(students);
  const opts = activeOptions(effective, options);

  let listSetup = BASE_SETUP_THB;
  let listMonthly = BASE_MONTHLY_THB;

  for (const id of effective) {
    const m = MODULE_BY_ID[id];
    if (!m) continue;
    listSetup += m.setupTHB;
    listMonthly += m.monthlyTHB;
    for (const o of m.options ?? []) {
      if (opts.includes(o.id)) {
        listSetup += o.setupTHB;
        listMonthly += o.monthlyTHB;
      }
    }
  }

  const matchedPreset = matchPreset(effective, opts);
  const bundle = matchedPreset
    ? PRESETS.find((p) => p.id === matchedPreset)
    : undefined;

  const setupTHB = bundle ? bundle.setupTHB : listSetup;
  const baseMonthly = bundle ? bundle.monthlyTHB : listMonthly;
  const isCustom = band.multiplier === null;

  return {
    setupTHB,
    monthlyTHB: isCustom ? 0 : roundTo(baseMonthly * (band.multiplier as number), 100),
    listSetupTHB: listSetup,
    listMonthlyTHB: isCustom ? 0 : roundTo(listMonthly * (band.multiplier as number), 100),
    band,
    matchedPreset,
    isCustom,
  };
}

/**
 * How close the current build is to a tier, so the discount reads as an upsell
 * rather than fine print. Only suggests a tier that is a strict superset.
 */
export function nearestUpgrade(
  effective: readonly ModuleId[],
  options: readonly OptionId[],
  students: number
): { tier: TierId; missing: ModuleId[]; savesTHB: number } | undefined {
  if (matchPreset(effective, options)) return undefined;
  const have = new Set(effective);

  for (const p of PRESETS) {
    const missing = p.modules.filter((m) => !have.has(m));
    const extra = effective.filter((m) => !p.modules.includes(m));
    if (extra.length || !missing.length || missing.length > 3) continue;

    const full = price(p.modules, p.options, students);
    const alc = full.listSetupTHB - full.setupTHB;
    if (alc > 0) return { tier: p.id, missing, savesTHB: alc };
  }
  return undefined;
}

function roundTo(value: number, step: number): number {
  return Math.round(value / step) * step;
}

export function formatTHB(value: number): string {
  return `฿${value.toLocaleString("en-US")}`;
}
