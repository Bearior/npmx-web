"use client";

import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Slider from "@mui/material/Slider";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { MODULE_BY_ID, PRESET_BY_ID, STUDENT_STEPS } from "@/lib/configurator/catalog";
import { formatTHB, nearestUpgrade } from "@/lib/configurator/price";
import type { Lang, ModuleId, OptionId, Price } from "@/lib/configurator/types";
import { useLang } from "@/providers/LangProvider";

type Props = {
  cost: Price;
  effective: ModuleId[];
  options: OptionId[];
  autoAddedCount: number;
  students: number;
  onStudentsChange: (n: number) => void;
  onQuote: () => void;
  onCopyLink: () => void;
  copied: boolean;
  onApplyPreset: (id: "bronze" | "silver" | "gold") => void;
};

export default function PriceRail({
  cost,
  effective,
  options,
  autoAddedCount,
  students,
  onStudentsChange,
  onQuote,
  onCopyLink,
  copied,
  onApplyPreset,
}: Props) {
  const { lang, t } = useLang();
  const upgrade = nearestUpgrade(effective, options, students);
  // A share link can carry any student count, not only a slider stop — snap to the closest.
  const stepIndex = STUDENT_STEPS.reduce(
    (best, value, i) =>
      Math.abs(value - students) < Math.abs(STUDENT_STEPS[best] - students) ? i : best,
    0
  );
  const savings = cost.listSetupTHB - cost.setupTHB;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {cost.matchedPreset && (
        <Chip
          label={`${PRESET_BY_ID[cost.matchedPreset].emoji} ${PRESET_BY_ID[cost.matchedPreset].name[lang as Lang]}`}
          size="small"
          sx={{ mb: 1.5, fontWeight: 700, bgcolor: "#eff6ff", color: "#2563eb" }}
        />
      )}

      <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
        {t("build.setupFee")}
      </p>
      <p className="text-3xl font-extrabold tracking-tight text-primary">
        {formatTHB(cost.setupTHB)}
      </p>
      {savings > 0 && (
        <p className="text-[11.5px] font-semibold text-emerald-600">
          {t("build.saves")} {formatTHB(savings)}
        </p>
      )}

      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
        {t("build.monthlyFee")}
      </p>
      {cost.isCustom ? (
        <p className="text-xl font-bold text-primary">{t("build.contactForPricing")}</p>
      ) : (
        <p className="text-2xl font-extrabold tracking-tight text-primary">
          {formatTHB(cost.monthlyTHB)}
          <span className="text-sm font-medium text-slate-400">{t("build.perMonthShort")}</span>
        </p>
      )}

      <div className="mt-5">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
            {t("build.students")}
          </p>
          <p className="text-[13px] font-bold text-primary">
            {students.toLocaleString("en-US")}
          </p>
        </div>
        <Slider
          value={stepIndex}
          onChange={(_, v) => onStudentsChange(STUDENT_STEPS[v as number])}
          min={0}
          max={STUDENT_STEPS.length - 1}
          step={1}
          marks
          size="small"
          sx={{ color: "#3b82f6", mt: 0.5 }}
        />
        <p className="text-[11px] text-slate-500">
          {cost.band.label[lang as Lang]}
          {cost.band.multiplier !== null && ` · ×${cost.band.multiplier}`}
        </p>
      </div>

      <div className="mt-4 border-t border-slate-100 pt-3 text-[12px] text-slate-500">
        <p>
          <span className="font-bold text-primary">{effective.length}</span> {t("build.modulesWord")}
          {autoAddedCount > 0 && (
            <>
              {" · "}
              <span className="font-bold text-emerald-600">{autoAddedCount}</span>{" "}
              {t("build.autoIncluded")}
            </>
          )}
        </p>
      </div>

      {upgrade && (
        <button
          onClick={() => onApplyPreset(upgrade.tier)}
          className="mt-3 w-full rounded-xl border border-amber-300 bg-amber-50 px-3 py-2.5 text-left transition-colors hover:bg-amber-100"
        >
          <p className="flex items-center gap-1.5 text-[11.5px] font-bold text-amber-800">
            <TrendingUpIcon sx={{ fontSize: 15 }} />
            {t("build.upgradeHint")} {PRESET_BY_ID[upgrade.tier].emoji}{" "}
            {PRESET_BY_ID[upgrade.tier].name[lang as Lang]}
          </p>
          <p className="mt-0.5 text-[11px] text-amber-700">
            {t("build.addWord")}{" "}
            {upgrade.missing.map((id) => MODULE_BY_ID[id].name[lang as Lang]).join(", ")} —{" "}
            {t("build.saves")} {formatTHB(upgrade.savesTHB)}
          </p>
        </button>
      )}

      <Button
        fullWidth
        variant="contained"
        onClick={onQuote}
        sx={{
          mt: 2.5,
          bgcolor: "#3b82f6",
          borderRadius: "9999px",
          py: 1.3,
          fontWeight: 700,
          textTransform: "none",
          fontSize: "0.95rem",
          "&:hover": { bgcolor: "#2563eb" },
        }}
      >
        {t("build.getQuote")}
      </Button>

      <Button
        fullWidth
        startIcon={<ContentCopyIcon sx={{ fontSize: 15 }} />}
        onClick={onCopyLink}
        sx={{
          mt: 1,
          color: copied ? "#10b981" : "#64748b",
          textTransform: "none",
          fontSize: "0.8rem",
          fontWeight: 600,
        }}
      >
        {copied ? t("build.copied") : t("build.copyLink")}
      </Button>
    </div>
  );
}
