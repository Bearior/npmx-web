"use client";

import { useRef, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import WebIcon from "@mui/icons-material/Web";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BusinessIcon from "@mui/icons-material/Business";
import PsychologyIcon from "@mui/icons-material/Psychology";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import InsightsIcon from "@mui/icons-material/Insights";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
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
    href: "/services/clinic-website",
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
    href: "/services/patient-platform",
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
    href: "/services/enterprise-medical",
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 44 }} />,
    titleKey: "product.4.title",
    subtitleKey: "product.4.subtitle",
    descKey: "product.4.desc",
    tagKeys: ["product.4.tag1", "product.4.tag2", "product.4.tag3"],
    usecaseKey: "product.4.usecase",
    color: "#f59e0b",
    goals: ["AI-powered", "Predictive analytics", "Personalized care", "Longevity insights"],
    href: "/services/ai-precision-medicine",
  },
];

const BUSINESS_PRODUCTS = [
  {
    icon: <StorefrontIcon sx={{ fontSize: 44 }} />,
    titleKey: "product.5.title",
    subtitleKey: "product.5.subtitle",
    descKey: "product.5.desc",
    tagKeys: ["product.5.tag1", "product.5.tag2", "product.5.tag3"],
    usecaseKey: "product.5.usecase",
    color: "#ec4899",
    goals: ["Financial tracking", "Staff management", "Inventory control", "Business growth"],
    href: "/services/healthcare-business",
  },
  {
    icon: <AutoGraphIcon sx={{ fontSize: 44 }} />,
    titleKey: "product.6.title",
    subtitleKey: "product.6.subtitle",
    descKey: "product.6.desc",
    tagKeys: ["product.6.tag1", "product.6.tag2", "product.6.tag3"],
    usecaseKey: "product.6.usecase",
    color: "#6366f1",
    goals: ["Predict patient visits", "Reduce churn", "Optimize campaigns", "Increase retention"],
    href: "/services/ai-client-prediction",
  },
  {
    icon: <AccountBalanceWalletIcon sx={{ fontSize: 44 }} />,
    titleKey: "product.7.title",
    subtitleKey: "product.7.subtitle",
    descKey: "product.7.desc",
    tagKeys: ["product.7.tag1", "product.7.tag2", "product.7.tag3"],
    usecaseKey: "product.7.usecase",
    color: "#14b8a6",
    goals: ["Real-time tracking", "Expense management", "Profit analysis", "Auto reporting"],
    href: "/services/financial-tracking",
  },
  {
    icon: <InsightsIcon sx={{ fontSize: 44 }} />,
    titleKey: "product.8.title",
    subtitleKey: "product.8.subtitle",
    descKey: "product.8.desc",
    tagKeys: ["product.8.tag1", "product.8.tag2", "product.8.tag3"],
    usecaseKey: "product.8.usecase",
    color: "#0ea5e9",
    goals: ["KPI monitoring", "Trend analysis", "Custom reports", "Visual insights"],
    href: "/services/dashboard-visualization",
  },
];

export default function ProductSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [businessExpanded, setBusinessExpanded] = useState(true);
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  href={product.href}
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

        {/* Divider - Clickable to toggle */}
        <button
          onClick={() => setBusinessExpanded(!businessExpanded)}
          className="flex items-center gap-4 my-16 w-full group cursor-pointer bg-transparent border-none"
        >
          <div className="flex-1 h-px bg-gray-200 group-hover:bg-gray-300 transition-colors" />
          <div className="flex items-center gap-2">
            <span className="text-gray-400 group-hover:text-gray-600 text-sm font-medium uppercase tracking-wider transition-colors">
              Business Operations
            </span>
            {businessExpanded ? (
              <ExpandLessIcon sx={{ color: "#9ca3af", fontSize: 20 }} className="group-hover:text-gray-600" />
            ) : (
              <ExpandMoreIcon sx={{ color: "#9ca3af", fontSize: 20 }} className="group-hover:text-gray-600" />
            )}
          </div>
          <div className="flex-1 h-px bg-gray-200 group-hover:bg-gray-300 transition-colors" />
        </button>

        {/* Business Products - Collapsible */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500 ease-in-out overflow-hidden ${
            businessExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {BUSINESS_PRODUCTS.map((product, i) => (
            <Card
              key={i}
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid #e5e7eb",
                transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${(i + 4) * 150}ms`,
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
                  href={product.href}
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
