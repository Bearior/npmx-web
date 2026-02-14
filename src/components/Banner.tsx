"use client";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useLang } from "@/providers/LangProvider";

const HEADLINE_KEYS = ["hero.h1.1", "hero.h1.2", "hero.h1.3"];

export default function Banner() {
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const { t } = useLang();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setHeadlineIdx((prev) => (prev + 1) % HEADLINE_KEYS.length);
        setFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const fadeCls = fade
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-float [animation-delay:3s]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
          {t("hero.tag")}
        </p>
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6 transition-all duration-500 ${fadeCls}`}
        >
          {t(HEADLINE_KEYS[headlineIdx])}
        </h1>
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:0.3s]">
          {t("hero.sub")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:0.6s]">
          <Button
            variant="contained"
            href="#products"
            size="large"
            sx={{
              bgcolor: "#3b82f6",
              borderRadius: "9999px",
              px: 5,
              py: 1.5,
              fontWeight: 700,
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": { bgcolor: "#2563eb" },
            }}
          >
            {t("hero.cta1")}
          </Button>
          <Button
            variant="outlined"
            href="#about"
            size="large"
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.3)",
              borderRadius: "9999px",
              px: 5,
              py: 1.5,
              fontWeight: 700,
              textTransform: "none",
              fontSize: "1rem",
              "&:hover": {
                borderColor: "#3b82f6",
                bgcolor: "rgba(59,130,246,0.1)",
              },
            }}
          >
            {t("hero.cta2")}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ArrowDownwardIcon sx={{ color: "rgba(255,255,255,0.5)", fontSize: 32 }} />
        </a>
      </div>
    </section>
  );
}
