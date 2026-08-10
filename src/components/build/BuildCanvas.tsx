"use client";

import { forwardRef, useState } from "react";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  BASE_FEATURES,
  BASE_MONTHLY_THB,
  BASE_SETUP_THB,
  CATEGORIES,
  MODULE_BY_ID,
} from "@/lib/configurator/catalog";
import { formatTHB } from "@/lib/configurator/price";
import { requiredBy } from "@/lib/configurator/resolve";
import type { Lang, ModuleId, OptionId } from "@/lib/configurator/types";
import { useLang } from "@/providers/LangProvider";

type Props = {
  effective: ModuleId[];
  selected: ModuleId[];
  autoAdded: ModuleId[];
  options: OptionId[];
  isOver: boolean;
  /** Prerequisites the hovering module would pull in, previewed before release. */
  pendingAdds: ModuleId[];
  pendingName?: string;
  onRemove: (id: ModuleId) => void;
  onToggleOption: (id: OptionId) => void;
};

const BuildCanvas = forwardRef<HTMLDivElement, Props>(function BuildCanvas(
  {
    effective,
    selected,
    autoAdded,
    options,
    isOver,
    pendingAdds,
    pendingName,
    onRemove,
    onToggleOption,
  },
  ref
) {
  const { lang, t } = useLang();
  const [baseOpen, setBaseOpen] = useState(false);
  const autoSet = new Set<string>(autoAdded);

  const groups = CATEGORIES.map((c) => ({
    category: c,
    modules: effective.filter((id) => MODULE_BY_ID[id]?.category === c.id),
  })).filter((g) => g.modules.length > 0);

  return (
    <div
      ref={ref}
      className={[
        "rounded-2xl border-2 p-4 md:p-5 transition-colors min-h-[420px]",
        // On desktop the box is pinned to a fixed height, so the module list
        // scrolls internally while the base header and drop zone stay put.
        "lg:h-full lg:min-h-0 lg:flex lg:flex-col",
        isOver ? "border-accent bg-blue-50/60" : "border-slate-200 bg-slate-50/50",
      ].join(" ")}
    >
      {/* Locked base — the canvas is never empty */}
      <div className="rounded-xl border-2 border-accent/40 bg-blue-50 overflow-hidden mb-3 lg:shrink-0">
        <button
          onClick={() => setBaseOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            <LockIcon sx={{ fontSize: 17, color: "#3b82f6" }} />
            <span className="font-bold text-primary text-sm truncate">
              {t("build.baseTitle")}
            </span>
            <Chip
              label={`${BASE_FEATURES.length} ${t("build.featuresWord")}`}
              size="small"
              sx={{ height: 20, fontSize: 10, fontWeight: 700, bgcolor: "#dbeafe", color: "#2563eb" }}
            />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-sm font-bold text-accent">{formatTHB(BASE_SETUP_THB)}</span>
            <span className="hidden sm:inline text-xs text-slate-400">
              +{formatTHB(BASE_MONTHLY_THB)}
              {t("build.perMonthShort")}
            </span>
            <ExpandMoreIcon
              sx={{
                fontSize: 20,
                color: "#94a3b8",
                transform: baseOpen ? "rotate(180deg)" : "none",
                transition: "transform .2s",
              }}
            />
          </div>
        </button>
        {baseOpen && (
          <div className="grid sm:grid-cols-2 gap-x-4 gap-y-1 px-4 pb-3 border-t border-blue-200 pt-3">
            {BASE_FEATURES.map((f) => (
              <div key={f.name.en} className="flex items-start gap-1.5 text-[12px] text-slate-600">
                <CheckCircleIcon sx={{ fontSize: 13, color: "#3b82f6", mt: 0.25 }} />
                <span>{f.name[lang as Lang]}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Added modules, filed into category order. Scrolls independently on desktop. */}
      <div className="lg:flex-1 lg:min-h-0 lg:overflow-y-auto lg:-mr-1.5 lg:pr-1.5">
      {groups.map(({ category, modules }) => (
        <div key={category.id} className="mb-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400 mb-1.5 px-1">
            {category.name[lang as Lang]}
          </p>
          <div className="space-y-2">
            {modules.map((id) => {
              const m = MODULE_BY_ID[id];
              const isAuto = autoSet.has(id);
              const parents = isAuto ? requiredBy(id, selected) : [];

              return (
                <div
                  key={id}
                  className={[
                    "rounded-xl border bg-white px-3.5 py-2.5 animate-fade-in",
                    isAuto ? "border-dashed border-emerald-300" : "border-slate-200",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[13.5px] font-semibold text-primary">
                          {m.name[lang as Lang]}
                        </span>
                        {isAuto && (
                          <Chip
                            label={t("build.autoIncluded")}
                            size="small"
                            sx={{
                              height: 18,
                              fontSize: 9.5,
                              fontWeight: 700,
                              bgcolor: "#10b981",
                              color: "#fff",
                            }}
                          />
                        )}
                      </div>
                      {isAuto && parents.length > 0 && (
                        <p className="mt-0.5 text-[11px] text-emerald-700">
                          {t("build.requiredBy")}{" "}
                          {parents.map((p) => MODULE_BY_ID[p].name[lang as Lang]).join(", ")}
                        </p>
                      )}
                      <p className="mt-1 text-[12px] font-bold text-accent">
                        {formatTHB(m.setupTHB)}
                        {m.monthlyTHB > 0 && (
                          <span className="ml-1.5 font-medium text-slate-400">
                            +{formatTHB(m.monthlyTHB)}
                            {t("build.perMonthShort")}
                          </span>
                        )}
                        {m.monthlyNote && (
                          <span className="ml-1.5 font-medium text-amber-600">
                            {m.monthlyNote[lang as Lang]}
                          </span>
                        )}
                      </p>
                    </div>
                    <IconButton
                      size="small"
                      aria-label={t("build.remove")}
                      onClick={() => onRemove(id)}
                      sx={{ color: "#cbd5e1", "&:hover": { color: "#ef4444" } }}
                    >
                      <CloseIcon sx={{ fontSize: 17 }} />
                    </IconButton>
                  </div>

                  {m.options?.map((o) => (
                    <label
                      key={o.id}
                      className="mt-2 flex items-start gap-2 rounded-lg bg-slate-50 px-2.5 py-1.5 cursor-pointer"
                    >
                      <Switch
                        size="small"
                        checked={options.includes(o.id)}
                        onChange={() => onToggleOption(o.id)}
                        sx={{ mt: -0.3 }}
                      />
                      <span className="min-w-0">
                        <span className="block text-[12px] font-semibold text-primary">
                          {o.name[lang as Lang]}
                        </span>
                        <span className="block text-[11px] text-slate-500">
                          {o.desc[lang as Lang]}
                        </span>
                        <span className="block mt-0.5 text-[11.5px] font-bold text-accent">
                          +{formatTHB(o.setupTHB)}
                          <span className="ml-1 font-medium text-slate-400">
                            +{formatTHB(o.monthlyTHB)}
                            {t("build.perMonthShort")}
                          </span>
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      </div>

      {/* Drop zone — previews what a release would pull in. Stays visible while the list scrolls. */}
      <div
        className={[
          "rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors lg:mt-3 lg:shrink-0",
          isOver ? "border-accent bg-white" : "border-slate-300",
        ].join(" ")}
      >
        <p className="text-[13px] font-medium text-slate-500">
          {isOver && pendingName ? pendingName : t("build.dropHere")}
        </p>
        {isOver && pendingAdds.length > 0 && (
          <p className="mt-1.5 text-[12px] font-semibold text-emerald-600">
            {t("build.willAlsoAdd")}{" "}
            {pendingAdds.map((id) => MODULE_BY_ID[id].name[lang as Lang]).join(", ")}
          </p>
        )}
      </div>
    </div>
  );
});

export default BuildCanvas;
