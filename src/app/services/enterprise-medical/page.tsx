"use client";

import { useLang } from "@/providers/LangProvider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BusinessIcon from "@mui/icons-material/Business";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SecurityIcon from "@mui/icons-material/Security";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Footer from "@/components/Footer";

export default function EnterpriseMedicalPage() {
  const { t } = useLang();

  const FEATURES = [
    {
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 32 }} />,
      titleKey: "service3.feature1.title",
      descKey: "service3.feature1.desc",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
      titleKey: "service3.feature2.title",
      descKey: "service3.feature2.desc",
    },
    {
      icon: <CloudSyncIcon sx={{ fontSize: 32 }} />,
      titleKey: "service3.feature3.title",
      descKey: "service3.feature3.desc",
    },
    {
      icon: <AccountTreeIcon sx={{ fontSize: 32 }} />,
      titleKey: "service3.feature4.title",
      descKey: "service3.feature4.desc",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-teal-500/20 rounded-full blur-[80px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Button
            href="/#products"
            startIcon={<ArrowBackIcon />}
            sx={{ color: "rgba(255,255,255,0.7)", mb: 4, "&:hover": { color: "#fff" } }}
          >
            {t("service.backToServices")}
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500/20 text-emerald-400">
              <BusinessIcon sx={{ fontSize: 48 }} />
            </div>
            <Chip
              label={t("product.3.subtitle")}
              sx={{ bgcolor: "rgba(16,185,129,0.2)", color: "#6ee7b7", fontWeight: 600 }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t("service3.heroTitle")}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">
            {t("service3.heroDesc")}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["product.3.tag1", "product.3.tag2", "product.3.tag3"].map((tagKey) => (
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
            {t("service3.sectionTitle")}
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            {t("service3.sectionDesc")}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-50 text-emerald-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-500 text-sm">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Chip label={t("services.chip")} sx={{ bgcolor: "#d1fae5", color: "#059669", fontWeight: 700, mb: 2 }} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t("service3.capabilitiesTitle")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[t("product.3.usecase")].map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircleIcon sx={{ color: "#10b981", mt: 0.5, fontSize: 20 }} />
                    <span className="text-gray-600 text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-primary mb-4">{t("service.builtFor")}</h3>
              <div className="space-y-3">
                {["service1.perfectFor1", "service1.perfectFor2", "service1.perfectFor3", "service1.perfectFor6"].map((itemKey) => (
                  <div key={itemKey} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    {t(itemKey)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("service3.ctaTitle")}
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            {t("service3.ctaDesc")}
          </p>
          <Button
            href="/#contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#fff",
              color: "#059669",
              px: 6,
              py: 1.5,
              fontWeight: 700,
              borderRadius: "9999px",
              "&:hover": { bgcolor: "#ecfdf5" },
            }}
          >
            {t("service.contactUs")}
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
