"use client";

import Chip from "@mui/material/Chip";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { CATEGORIES, MODULES } from "@/lib/configurator/catalog";
import { formatTHB } from "@/lib/configurator/price";
import type { Lang, ModuleId } from "@/lib/configurator/types";
import { useLang } from "@/providers/LangProvider";

type Props = {
  effective: ModuleId[];
  draggingId?: ModuleId;
  onBeginDrag: (id: ModuleId) => (e: React.PointerEvent) => void;
  onRoadmapClick: (id: ModuleId) => void;
};

export default function ModuleShelf({
  effective,
  draggingId,
  onBeginDrag,
  onRoadmapClick,
}: Props) {
  const { lang, t } = useLang();
  const inBuild = new Set<string>(effective);

  // `courses` has no optional modules, so it never renders — see spec §3.2.
  const groups = CATEGORIES.map((c) => ({
    category: c,
    modules: MODULES.filter((m) => m.category === c.id),
  })).filter((g) => g.modules.length > 0);

  return (
    <div className="space-y-6">
      {groups.map(({ category, modules }) => (
        <div key={category.id}>
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400 mb-2">
            {category.name[lang as Lang]}
          </p>
          <div className="space-y-2">
            {modules.map((m) => {
              const used = inBuild.has(m.id);
              const roadmap = m.status === "roadmap";
              const isDragging = draggingId === m.id;

              return (
                <div
                  key={m.id}
                  onPointerDown={roadmap ? undefined : onBeginDrag(m.id)}
                  onClick={roadmap ? () => onRoadmapClick(m.id) : undefined}
                  style={{ touchAction: "pan-y" }}
                  className={[
                    "group relative rounded-xl border px-3 py-2.5 transition-all select-none",
                    roadmap
                      ? "border-dashed border-slate-300 bg-slate-50 cursor-pointer opacity-70"
                      : used
                        ? "border-slate-200 bg-slate-50 opacity-45 cursor-default"
                        : "border-slate-200 bg-white cursor-grab hover:border-accent hover:shadow-md active:cursor-grabbing",
                    isDragging ? "opacity-30" : "",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-2">
                    {!roadmap && !used && (
                      <DragIndicatorIcon
                        sx={{ fontSize: 16, color: "#cbd5e1", mt: 0.2 }}
                        className="group-hover:text-accent"
                      />
                    )}
                    {used && <CheckIcon sx={{ fontSize: 16, color: "#10b981", mt: 0.2 }} />}
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-semibold leading-tight text-primary">
                        {m.name[lang as Lang]}
                      </p>
                      {roadmap ? (
                        <Chip
                          label={t("build.comingSoon")}
                          size="small"
                          sx={{
                            mt: 0.6,
                            height: 18,
                            fontSize: 10,
                            fontWeight: 700,
                            bgcolor: "#e2e8f0",
                            color: "#64748b",
                          }}
                        />
                      ) : (
                        <p className="mt-1 text-[12px] font-bold text-accent">
                          {formatTHB(m.setupTHB)}
                          {m.monthlyTHB > 0 && (
                            <span className="ml-1.5 font-medium text-slate-400">
                              +{formatTHB(m.monthlyTHB)}
                              {t("build.perMonthShort")}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                    {!roadmap && !used && (
                      <AddIcon
                        sx={{ fontSize: 18, color: "#cbd5e1" }}
                        className="group-hover:text-accent"
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
