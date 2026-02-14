"use client";

import { useRef, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import WebIcon from "@mui/icons-material/Web";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BusinessIcon from "@mui/icons-material/Business";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useLang } from "@/providers/LangProvider";

const PRODUCTS = [
  {
    icon: <WebIcon sx={{ fontSize: 44 }} />,
    titleKey: "product.1.title",
    subtitleKey: "product.1.subtitle",
    descKey: "product.1.desc",
    tagKeys: ["product.1.tag1", "product.1.tag2", "product.1.tag3"],
    usecaseKey: "product.1.usecase",
    color: "#3b82f6",
    goals: ["Fast", "SEO-friendly", "Low maintenance", "Affordable"],
  },
  {
    icon: <DashboardCustomizeIcon sx={{ fontSize: 44 }} />,
    titleKey: "product.2.title",
    subtitleKey: "product.2.subtitle",
    descKey: "product.2.desc",
    tagKeys: ["product.2.tag1", "product.2.tag2", "product.2.tag3"],
    usecaseKey: "product.2.usecase",
    color: "#8b5cf6",
    goals: ["Reliable", "Fast development", "Scalable", "Easy maintenance"],
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 44 }} />,
    titleKey: "product.3.title",
    subtitleKey: "product.3.subtitle",
    descKey: "product.3.desc",
    tagKeys: ["product.3.tag1", "product.3.tag2", "product.3.tag3"],
    usecaseKey: "product.3.usecase",
    color: "#10b981",
    goals: ["Enterprise-grade", "Scalable", "Reliable", "Long-term support"],
  },
];

export default function ProductSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

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
    <section
      id="products"
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Chip
            label={t("services.chip")}
            size="small"
            sx={{
              bgcolor: "#eff6ff",
              color: "#3b82f6",
              fontWeight: 700,
              mb: 2,
            }}
          />
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            {t("services.title1")}{" "}
            <span className="text-accent">{t("services.titleAccent")}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t("services.sub")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <Card
              key={i}
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid #e5e7eb",
                transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 150}ms`,
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: `0 24px 48px ${product.color}18`,
                  borderColor: product.color,
                },
              }}
            >
              <CardContent sx={{ p: 4, flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Icon + badge */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl"
                    style={{
                      backgroundColor: `${product.color}12`,
                      color: product.color,
                    }}
                  >
                    {product.icon}
                  </div>
                  <Chip
                    label={t(product.subtitleKey)}
                    size="small"
                    sx={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      bgcolor: `${product.color}10`,
                      color: product.color,
                    }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-2">
                  {t(product.titleKey)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {t(product.descKey)}
                </p>

                {/* Goals checklist */}
                <div className="space-y-2 mb-5">
                  {product.goals.map((goal) => (
                    <div key={goal} className="flex items-center gap-2">
                      <CheckCircleOutlineIcon
                        sx={{ fontSize: 18, color: product.color }}
                      />
                      <span className="text-gray-600 text-sm">{goal}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {product.tagKeys.map((tagKey) => (
                    <Chip
                      key={tagKey}
                      label={t(tagKey)}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        bgcolor: `${product.color}10`,
                        color: product.color,
                      }}
                    />
                  ))}
                </div>

                {/* Use cases */}
                <p className="text-xs text-gray-400 italic mb-4">
                  {t(product.usecaseKey)}
                </p>

                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    color: product.color,
                    p: 0,
                    "&:hover": { bgcolor: "transparent", opacity: 0.8 },
                  }}
                >
                  {t("product.learnMore")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
