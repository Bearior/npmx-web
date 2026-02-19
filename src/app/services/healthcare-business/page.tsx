"use client";

import { useLang } from "@/providers/LangProvider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GroupsIcon from "@mui/icons-material/Groups";
import InventoryIcon from "@mui/icons-material/Inventory";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Footer from "@/components/Footer";

export default function HealthcareBusinessPage() {
  const { t } = useLang();

  const FEATURES = [
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 32 }} />,
      titleKey: "service5.feature1.title",
      descKey: "service5.feature1.desc",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 32 }} />,
      titleKey: "service5.feature2.title",
      descKey: "service5.feature2.desc",
    },
    {
      icon: <InventoryIcon sx={{ fontSize: 32 }} />,
      titleKey: "service5.feature3.title",
      descKey: "service5.feature3.desc",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 32 }} />,
      titleKey: "service5.feature4.title",
      descKey: "service5.feature4.desc",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-rose-500/20 rounded-full blur-[80px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Button
            href="/#products"
            startIcon={<ArrowBackIcon />}
            sx={{ color: "rgba(255,255,255,0.7)", mb: 4, "&:hover": { color: "#fff" } }}
          >
            {t("service.backToServices")}
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-pink-500/20 text-pink-400">
              <StorefrontIcon sx={{ fontSize: 48 }} />
            </div>
            <Chip
              label={t("product.5.subtitle")}
              sx={{ bgcolor: "rgba(236,72,153,0.2)", color: "#f472b6", fontWeight: 600 }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t("service5.heroTitle")}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">
            {t("service5.heroDesc")}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["product.5.tag1", "product.5.tag2", "product.5.tag3"].map((tagKey) => (
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
            {t("service5.sectionTitle")}
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            {t("service5.sectionDesc")}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-pink-200 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-pink-50 text-pink-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-500 text-sm">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Chip label={t("services.chip")} sx={{ bgcolor: "#fce7f3", color: "#db2777", fontWeight: 700, mb: 2 }} />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            {t("product.5.usecase")}
          </h2>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Chip label={t("services.chip")} sx={{ bgcolor: "#fce7f3", color: "#db2777", fontWeight: 700, mb: 2 }} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t("service5.sectionTitle")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[t("product.5.usecase")].map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircleIcon sx={{ color: "#ec4899", mt: 0.5, fontSize: 20 }} />
                    <span className="text-gray-600 text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-primary mb-4">{t("service.perfectFor")}</h3>
              <div className="space-y-3">
                {["service1.perfectFor1", "service1.perfectFor2", "service1.perfectFor4", "service1.perfectFor5"].map((itemKey) => (
                  <div key={itemKey} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                    {t(itemKey)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("service5.ctaTitle")}
          </h2>
          <p className="text-pink-100 text-lg mb-8">
            {t("service5.ctaDesc")}
          </p>
          <Button
            href="/#contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#fff",
              color: "#db2777",
              px: 6,
              py: 1.5,
              fontWeight: 700,
              borderRadius: "9999px",
              "&:hover": { bgcolor: "#fdf2f8" },
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
