"use client";

import { useLang } from "@/providers/LangProvider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PieChartIcon from "@mui/icons-material/PieChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Footer from "@/components/Footer";

export default function FinancialTrackingPage() {
  const { t } = useLang();

  const FEATURES = [
    {
      icon: <ReceiptLongIcon sx={{ fontSize: 32 }} />,
      titleKey: "service7.feature1.title",
      descKey: "service7.feature1.desc",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
      titleKey: "service7.feature2.title",
      descKey: "service7.feature2.desc",
    },
    {
      icon: <PieChartIcon sx={{ fontSize: 32 }} />,
      titleKey: "service7.feature3.title",
      descKey: "service7.feature3.desc",
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 32 }} />,
      titleKey: "service7.feature4.title",
      descKey: "service7.feature4.desc",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[80px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Button
            href="/#products"
            startIcon={<ArrowBackIcon />}
            sx={{ color: "rgba(255,255,255,0.7)", mb: 4, "&:hover": { color: "#fff" } }}
          >
            {t("service.backToServices")}
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-teal-500/20 text-teal-400">
              <AccountBalanceWalletIcon sx={{ fontSize: 48 }} />
            </div>
            <Chip
              label={t("product.7.subtitle")}
              sx={{ bgcolor: "rgba(20,184,166,0.2)", color: "#5eead4", fontWeight: 600 }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t("service7.heroTitle")}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">
            {t("service7.heroDesc")}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["product.7.tag1", "product.7.tag2", "product.7.tag3"].map((tagKey) => (
              <Chip
                key={tagKey}
                label={t(tagKey)}
                sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: 500 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            {t("service7.sectionTitle")}
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            {t("service7.sectionDesc")}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-teal-200 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal-50 text-teal-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-500 text-sm">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Chip label={t("services.chip")} sx={{ bgcolor: "#ccfbf1", color: "#0d9488", fontWeight: 700, mb: 2 }} />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            {t("product.7.usecase")}
          </h2>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Chip label={t("services.chip")} sx={{ bgcolor: "#ccfbf1", color: "#0d9488", fontWeight: 700, mb: 2 }} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t("service7.sectionTitle")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[t("product.7.usecase")].map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircleIcon sx={{ color: "#14b8a6", mt: 0.5, fontSize: 20 }} />
                    <span className="text-gray-600 text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-primary mb-4">{t("service.builtFor")}</h3>
              <div className="space-y-3">
                {["service1.perfectFor1", "service1.perfectFor2", "service1.perfectFor3", "service1.perfectFor6"].map((itemKey) => (
                  <div key={itemKey} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                    {t(itemKey)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-cyan-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("service7.ctaTitle")}
          </h2>
          <p className="text-teal-100 text-lg mb-8">
            {t("service7.ctaDesc")}
          </p>
          <Button
            href="/#contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#fff",
              color: "#0d9488",
              px: 6,
              py: 1.5,
              fontWeight: 700,
              borderRadius: "9999px",
              "&:hover": { bgcolor: "#f0fdfa" },
            }}
          >
            {t("service.getStarted")}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
