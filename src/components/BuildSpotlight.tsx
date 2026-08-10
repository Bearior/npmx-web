"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { BASE_SETUP_THB, MODULE_BY_ID } from "@/lib/configurator/catalog";
import { formatTHB } from "@/lib/configurator/price";
import type { Lang } from "@/lib/configurator/types";
import { useLang } from "@/providers/LangProvider";

/* Home-page spotlight for /build. Names and prices come from the catalogue so
   this can never drift out of sync with the configurator itself. */

const SHELF_PREVIEW = ["classroom-stream", "parent-accounts", "payments-promptpay"] as const;
/* grading-queue requires staff-roles — the preview shows that pull happening. */
const CANVAS_PREVIEW = ["grading-queue", "staff-roles"] as const;
const PREVIEW_TOTAL_THB =
  BASE_SETUP_THB + CANVAS_PREVIEW.reduce((sum, id) => sum + MODULE_BY_ID[id].setupTHB, 0);
const BULLETS = ["homeBuild.b1", "homeBuild.b2", "homeBuild.b3"];

export default function BuildSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { lang, t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] p-8 shadow-2xl transition-all duration-700 md:p-14 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute -left-20 top-0 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[110px]" />
          <div className="absolute -right-10 bottom-0 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[90px]" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Pitch */}
            <div>
              <Chip
                icon={<AutoAwesomeIcon sx={{ fontSize: 15 }} />}
                label={t("homeBuild.badge")}
                size="small"
                sx={{
                  bgcolor: "rgba(59,130,246,0.2)",
                  color: "#60a5fa",
                  fontWeight: 700,
                  mb: 2.5,
                  "& .MuiChip-icon": { color: "#60a5fa" },
                }}
              />
              <h2 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                {t("build.title")}
              </h2>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
                {t("homeBuild.desc")}
              </p>

              <ul className="mb-8 space-y-2.5">
                {BULLETS.map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-white/85">
                    <CheckCircleIcon sx={{ fontSize: 19, color: "#60a5fa", mt: 0.15 }} />
                    <span className="text-[15px]">{t(key)}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-5">
                <Button
                  href="/build"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: "#3b82f6",
                    borderRadius: "9999px",
                    px: 4.5,
                    py: 1.6,
                    fontWeight: 700,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": { bgcolor: "#2563eb" },
                  }}
                >
                  {t("homeBuild.cta")}
                </Button>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">
                    {t("homeBuild.startingAt")}
                  </p>
                  <p className="text-xl font-extrabold text-white">
                    {formatTHB(BASE_SETUP_THB)}
                  </p>
                </div>
              </div>
            </div>

            {/* Miniature of the configurator */}
            <div
              className={`transition-all delay-200 duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-sm">
                <div className="grid grid-cols-[1fr_auto_1.25fr] items-center gap-3">
                  {/* shelf */}
                  <div className="space-y-2">
                    {SHELF_PREVIEW.map((id) => (
                      <div
                        key={id}
                        className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2 py-1.5"
                      >
                        <DragIndicatorIcon sx={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }} />
                        <span className="truncate text-[10.5px] font-medium text-white/80">
                          {MODULE_BY_ID[id].name[lang as Lang]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <ArrowForwardIcon sx={{ fontSize: 18, color: "rgba(255,255,255,0.35)" }} />

                  {/* canvas */}
                  <div className="space-y-2 rounded-xl border border-dashed border-white/25 p-2.5">
                    <div className="rounded-lg bg-accent/25 px-2.5 py-1.5">
                      <p className="text-[10.5px] font-bold text-white">
                        {t("build.baseTitle")}
                      </p>
                      <p className="text-[10px] text-white/60">{formatTHB(BASE_SETUP_THB)}</p>
                    </div>
                    {CANVAS_PREVIEW.map((id, i) => (
                      <div
                        key={id}
                        className={`rounded-lg px-2.5 py-1.5 ${
                          i === 1
                            ? "border border-dashed border-emerald-400/50 bg-emerald-400/10"
                            : "bg-white/12"
                        }`}
                      >
                        <p className="truncate text-[10.5px] font-semibold text-white">
                          {MODULE_BY_ID[id].name[lang as Lang]}
                        </p>
                        {i === 1 && (
                          <p className="text-[9.5px] font-bold text-emerald-300">
                            {t("build.autoIncluded")}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex items-end justify-between border-t border-white/15 pt-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/40">
                    {t("build.setupFee")}
                  </span>
                  <span className="text-lg font-extrabold text-white">
                    {formatTHB(PREVIEW_TOTAL_THB)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
