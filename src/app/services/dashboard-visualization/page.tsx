"use client";

import { useLang } from "@/providers/LangProvider";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InsightsIcon from "@mui/icons-material/Insights";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SpeedIcon from "@mui/icons-material/Speed";
import TimelineIcon from "@mui/icons-material/Timeline";
import BarChartIcon from "@mui/icons-material/BarChart";
import TuneIcon from "@mui/icons-material/Tune";
import Footer from "@/components/Footer";

export default function DashboardVisualizationPage() {
  const { t } = useLang();

  const FEATURES = [
    {
      icon: <SpeedIcon sx={{ fontSize: 32 }} />,
      titleKey: "service8.feature1.title",
      descKey: "service8.feature1.desc",
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 32 }} />,
      titleKey: "service8.feature2.title",
      descKey: "service8.feature2.desc",
    },
    {
      icon: <BarChartIcon sx={{ fontSize: 32 }} />,
      titleKey: "service8.feature3.title",
      descKey: "service8.feature3.desc",
    },
    {
      icon: <TuneIcon sx={{ fontSize: 32 }} />,
      titleKey: "service8.feature4.title",
      descKey: "service8.feature4.desc",
    },
  ];

  const CAPABILITIES = [
    "service8.cap1", "service8.cap2", "service8.cap3", "service8.cap4", "service8.cap5",
    "service8.cap6", "service8.cap7", "service8.cap8", "service8.cap9", "service8.cap10",
  ];

  const DASHBOARD_TYPES = [
    { titleKey: "service8.dashboard1.title", descKey: "service8.dashboard1.desc" },
    { titleKey: "service8.dashboard2.title", descKey: "service8.dashboard2.desc" },
    { titleKey: "service8.dashboard3.title", descKey: "service8.dashboard3.desc" },
    { titleKey: "service8.dashboard4.title", descKey: "service8.dashboard4.desc" },
  ];

  const IDEAL_FOR = [
    "service8.ideal1", "service8.ideal2", "service8.ideal3",
    "service8.ideal4", "service8.ideal5", "service8.ideal6",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[80px]" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Button
            href="/#products"
            startIcon={<ArrowBackIcon />}
            sx={{ color: "rgba(255,255,255,0.7)", mb: 4, "&:hover": { color: "#fff" } }}
          >
            Back to Services
          </Button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-sky-500/20 text-sky-400">
              <InsightsIcon sx={{ fontSize: 48 }} />
            </div>
            <Chip
              label={t("service8.heroTag")}
              sx={{ bgcolor: "rgba(14,165,233,0.2)", color: "#7dd3fc", fontWeight: 600 }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t("service8.heroTitle")}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mb-8">
            {t("service8.heroDesc")}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {["service8.tag1", "service8.tag2", "service8.tag3"].map((tagKey) => (
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
            {t("service8.sectionTitle")}
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            {t("service8.sectionDesc")}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-sky-200 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-sky-50 text-sky-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-500 text-sm">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Types */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Chip label={t("service8.dashboardChip")} sx={{ bgcolor: "#e0f2fe", color: "#0284c7", fontWeight: 700, mb: 2 }} />
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            {t("service8.dashboardTitle")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {DASHBOARD_TYPES.map((dashboard, i) => (
              <div key={i} className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100">
                <h3 className="text-xl font-bold text-primary mb-3">{t(dashboard.titleKey)}</h3>
                <p className="text-gray-600">{t(dashboard.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Chip label={t("service8.capabilitiesChip")} sx={{ bgcolor: "#e0f2fe", color: "#0284c7", fontWeight: 700, mb: 2 }} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t("service8.capabilitiesTitle")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {CAPABILITIES.map((capKey, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircleIcon sx={{ color: "#0ea5e9", mt: 0.5, fontSize: 20 }} />
                    <span className="text-gray-600 text-sm">{t(capKey)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-primary mb-4">{t("service8.idealFor")}</h3>
              <div className="space-y-3">
                {IDEAL_FOR.map((itemKey) => (
                  <div key={itemKey} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-sky-500" />
                    {t(itemKey)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("service8.ctaTitle")}
          </h2>
          <p className="text-sky-100 text-lg mb-8">
            {t("service8.ctaDesc")}
          </p>
          <Button
            href="/#contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#fff",
              color: "#0284c7",
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
