/* Custom LMS configurator — shared types.
   Pure data contracts, no React. See docs/superpowers/specs/2026-08-10-lms-configurator-design.md */

export type Lang = "en" | "th";

export type Localized = { en: string; th: string };

export type CategoryId =
  | "brand"
  | "users"
  | "courses"
  | "exams"
  | "grading-ai"
  | "classroom"
  | "money";

export type ModuleId =
  | "staff-roles"
  | "grading-queue"
  | "writing-speaking-exams"
  | "ai-essay-scoring"
  | "classroom-stream"
  | "people-roster"
  | "assignments"
  | "classroom-chat"
  | "certificates"
  | "custom-domain"
  | "custom-design"
  | "parent-accounts"
  | "badges"
  | "payments-promptpay"
  | "trial-funnel"
  | "ai-study-assistant"
  | "advanced-analytics";

export type OptionId = "chat-open-to-all";

export type TierId = "bronze" | "silver" | "gold";

export type ModuleOption = {
  id: OptionId;
  name: Localized;
  desc: Localized;
  setupTHB: number;
  monthlyTHB: number;
};

export type Module = {
  id: ModuleId;
  category: CategoryId;
  name: Localized;
  desc: Localized;
  /** Source difficulty score /10 — kept for traceability back to the feature table. */
  difficulty: number;
  setupTHB: number;
  monthlyTHB: number;
  /** Extra billing note shown next to the monthly figure, e.g. "+ AI usage". */
  monthlyNote?: Localized;
  /** Direct prerequisites only. The engine takes the transitive closure. */
  requires: ModuleId[];
  options?: ModuleOption[];
  status: "available" | "roadmap";
};

export type BaseFeature = {
  name: Localized;
  difficulty: number;
};

export type Category = {
  id: CategoryId;
  name: Localized;
};

export type StudentBand = {
  /** Upper bound, inclusive. null = unbounded (quote-only). */
  maxStudents: number | null;
  /** Applied to the monthly total. null = no automatic price. */
  multiplier: number | null;
  label: Localized;
};

export type Preset = {
  id: TierId;
  name: Localized;
  emoji: string;
  modules: ModuleId[];
  options: OptionId[];
  /** Bundle prices, quoted at the ≤500-student reference band. */
  setupTHB: number;
  monthlyTHB: number;
};

/** What the user explicitly chose. Never the resolved set — see spec §8. */
export type Build = {
  selected: ModuleId[];
  options: OptionId[];
  students: number;
};

export type Price = {
  setupTHB: number;
  monthlyTHB: number;
  band: StudentBand;
  /** Set when the effective set exactly equals a tier, so the UI can show bundle pricing. */
  matchedPreset?: TierId;
  /** True above the top band — no automatic price, contact sales. */
  isCustom: boolean;
  /** À la carte totals, always computed. Used to show the bundle saving. */
  listSetupTHB: number;
  listMonthlyTHB: number;
};
