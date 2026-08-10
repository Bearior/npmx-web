/* Shareable build links. Spec §8.
   Stores what the user *selected*, never the resolved set — so if a dependency
   edge changes later, old links re-resolve correctly instead of encoding a
   stale expansion. */

import { DEFAULT_STUDENTS, MODULE_BY_ID } from "./catalog";
import type { Build, ModuleId, OptionId } from "./types";

const KNOWN_OPTIONS: OptionId[] = ["chat-open-to-all"];

export function encodeBuild(build: Build): string {
  const params = new URLSearchParams();
  if (build.selected.length) params.set("m", build.selected.join(","));
  if (build.options.length) params.set("o", build.options.join(","));
  if (build.students !== DEFAULT_STUDENTS) params.set("s", String(build.students));
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}

/**
 * Absent or malformed params fall back to a base-only build.
 * Unknown ids are reported rather than thrown, so the page still renders and
 * the UI can tell the visitor something was skipped.
 */
export function decodeBuild(search: string | URLSearchParams): {
  build: Build;
  unknown: string[];
} {
  const params =
    typeof search === "string" ? new URLSearchParams(search) : search;

  const unknown: string[] = [];

  const rawModules = splitList(params.get("m"));
  const selected = rawModules.filter((id): id is ModuleId => {
    const ok = MODULE_BY_ID[id]?.status === "available";
    if (!ok) unknown.push(id);
    return ok;
  });

  const rawOptions = splitList(params.get("o"));
  const options = rawOptions.filter((id): id is OptionId => {
    const ok = (KNOWN_OPTIONS as string[]).includes(id);
    if (!ok) unknown.push(id);
    return ok;
  });

  const parsed = Number.parseInt(params.get("s") ?? "", 10);
  const students =
    Number.isFinite(parsed) && parsed > 0 ? Math.min(parsed, 100_000) : DEFAULT_STUDENTS;

  return {
    build: { selected: dedupe(selected), options: dedupe(options), students },
    unknown,
  };
}

export function shareUrl(build: Build, origin?: string): string {
  const base =
    origin ?? (typeof window !== "undefined" ? window.location.origin : "https://www.npmxtech.com");
  return `${base}/build${encodeBuild(build)}`;
}

function splitList(value: string | null): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function dedupe<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}
