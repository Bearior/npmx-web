"use client";

import { useRef, useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { useLang } from "@/providers/LangProvider";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  const STATS = [
    { icon: <RocketLaunchIcon />, value: "20+", labelKey: "about.stat1" },
    { icon: <GroupsIcon />, value: "10+", labelKey: "about.stat2" },
    { icon: <FavoriteIcon />, value: "15+", labelKey: "about.stat3" },
    { icon: <WorkHistoryIcon />, value: "6+", labelKey: "about.stat4" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const leftCls = visible
    ? "opacity-100 translate-x-0"
    : "opacity-0 -translate-x-12";

  const rightCls = visible
    ? "opacity-100 translate-x-0"
    : "opacity-0 translate-x-12";

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${leftCls}`}>
            <Chip
              label={t("about.chip")}
              size="small"
              sx={{
                bgcolor: "#eff6ff",
                color: "#3b82f6",
                fontWeight: 700,
                mb: 2,
              }}
            />
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
              {t("about.title1")}{" "}
              <span className="text-accent">{t("about.titleAccent")}</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("about.p2")}
            </p>
          </div>

          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-200 ${rightCls}`}
          >
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-slate-50 to-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-extrabold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1 font-medium">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
