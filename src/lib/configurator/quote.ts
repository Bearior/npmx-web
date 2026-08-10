/* Quote delivery via the site's existing mailto: pattern. Spec §9.

   URL-encoded Thai costs ~9 characters per glyph (ค → %E0%B8%84), so a Gold
   build's Thai module list would push the mailto body past 2,000 characters,
   where browsers and mail clients truncate silently. The body therefore carries
   English module ids, both totals, and the share URL — compact, and the URL
   reconstructs the exact build when opened. */

import { MODULE_BY_ID, QUOTE_EMAIL } from "./catalog";
import { formatTHB } from "./price";
import { shareUrl } from "./share";
import type { Build, ModuleId, OptionId, Price } from "./types";

export function quoteMailto(
  build: Build,
  effective: readonly ModuleId[],
  options: readonly OptionId[],
  cost: Price
): string {
  const lines: string[] = [
    "Custom LMS — quote request",
    "",
    `Students: ${build.students}`,
    `Setup: ${formatTHB(cost.setupTHB)}`,
    cost.isCustom
      ? "Monthly: contact for pricing (over 5,000 students)"
      : `Monthly: ${formatTHB(cost.monthlyTHB)}`,
    cost.matchedPreset ? `Package: ${cost.matchedPreset}` : "Package: custom build",
    "",
    `Modules (${effective.length}):`,
    ...effective.map((id) => `  - ${id} (${MODULE_BY_ID[id]?.name.en ?? id})`),
  ];

  if (options.length) {
    lines.push("", `Options: ${options.join(", ")}`);
  }

  lines.push("", "Restore this build:", shareUrl(build), "", "---", "Name:", "Phone:", "School / centre:");

  const subject = `Custom quote — ${effective.length} modules — ${formatTHB(cost.setupTHB)}`;
  return `mailto:${QUOTE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
