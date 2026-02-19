"use client";

import { useLang } from "@/providers/LangProvider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WebIcon from "@mui/icons-material/Web";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SpeedIcon from "@mui/icons-material/Speed";
import SearchIcon from "@mui/icons-material/Search";
import DevicesIcon from "@mui/icons-material/Devices";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Footer from "@/components/Footer";

export default function ClinicWebsitePage() {
  const { t } = useLang();

  const FEATURES = [
    {
      icon: <SpeedIcon sx={{ fontSize: 32 }} />,
      titleKey: "service1.feature1.title",
      descKey: "service1.feature1.desc",
    },
    {
      icon: <SearchIcon sx={{ fontSize: 32 }} />,
      titleKey: "service1.feature2.title",
      descKey: "service1.feature2.desc",
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 32 }} />,
      titleKey: "service1.feature3.title",
      descKey: "service1.feature3.desc",
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
      titleKey: "service1.feature4.title",
      descKey: "service1.feature4.desc",
    },
  ];

  const BENEFITS = [
    "service1.benefit1",
    "service1.benefit2",
    "service1.benefit3",
    "service1.benefit4",
    "service1.benefit5",
    "service1.benefit6",
  ];

  const PERFECT_FOR = [
    "service1.perfectFor1",
    "service1.perfectFor2",
    "service1.perfectFor3",
    "service1.perfectFor4",
    "service1.perfectFor5",
    "service1.perfectFor6",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Button
            href="/#products"
            startIcon={<ArrowBackIcon />}
            sx={{ color: "rgba(255,255,255,0.7)", mb: 4, "&:hover": { color: "#fff" } }}
          >
            {t("service.backToServices")}
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-500/20 text-blue-400">
              <WebIcon sx={{ fontSize: 48 }} />
            </div>
            <Chip
              label={t("product.1.subtitle")}
              sx={{ bgcolor: "rgba(59,130,246,0.2)", color: "#60a5fa", fontWeight: 600 }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t("service1.heroTitle")}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">
            {t("service1.heroDesc")}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["product.1.tag1", "product.1.tag2", "product.1.tag3"].map((tagKey) => (
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
            {t("service1.sectionTitle")}
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            {t("service1.sectionDesc")}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-500 text-sm">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Chip label={t("services.chip")} sx={{ bgcolor: "#eff6ff", color: "#3b82f6", fontWeight: 700, mb: 2 }} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t("service1.benefitsTitle")}
              </h2>
              <div className="space-y-4">
                {BENEFITS.map((benefitKey, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircleIcon sx={{ color: "#3b82f6", mt: 0.5 }} />
                    <span className="text-gray-600">{t(benefitKey)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-primary mb-4">{t("service.perfectFor")}</h3>
              <div className="space-y-3">
                {PERFECT_FOR.map((itemKey) => (
                  <div key={itemKey} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    {t(itemKey)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("service1.ctaTitle")}
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            {t("service1.ctaDesc")}
          </p>
          <Button
            href="/#contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#fff",
              color: "#2563eb",
              px: 6,
              py: 1.5,
              fontWeight: 700,
              borderRadius: "9999px",
              "&:hover": { bgcolor: "#f0f9ff" },
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
