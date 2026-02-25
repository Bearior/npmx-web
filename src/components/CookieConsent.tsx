"use client";

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CookieIcon from "@mui/icons-material/Cookie";
import { useLang } from "@/providers/LangProvider";

const COOKIE_CONSENT_KEY = "npmx-cookie-consent";

export function useCookieConsent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(localStorage.getItem(COOKIE_CONSENT_KEY) === "true");
  }, []);

  return accepted;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    // Small delay so it doesn't flash on page load
    const timer = setTimeout(() => {
      if (localStorage.getItem(COOKIE_CONSENT_KEY) !== "true") {
        setVisible(true);
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 animate-fade-in"
      style={{ animation: "slideUp 0.4s ease-out" }}
    >
      <div className="max-w-4xl mx-auto bg-[#0f172a]/95 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Icon + Text */}
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 mt-0.5">
              <CookieIcon sx={{ color: "#f59e0b", fontSize: 28 }} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">
                {t("cookie.title")}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                {t("cookie.description")}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <Button
              onClick={handleDecline}
              variant="outlined"
              size="small"
              sx={{
                color: "rgba(255,255,255,0.6)",
                borderColor: "rgba(255,255,255,0.2)",
                borderRadius: "9999px",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                flex: { xs: 1, sm: "none" },
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.4)",
                  bgcolor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              {t("cookie.decline")}
            </Button>
            <Button
              onClick={handleAccept}
              variant="contained"
              size="small"
              sx={{
                bgcolor: "#3b82f6",
                borderRadius: "9999px",
                textTransform: "none",
                fontWeight: 700,
                px: 4,
                flex: { xs: 1, sm: "none" },
                "&:hover": { bgcolor: "#2563eb" },
              }}
            >
              {t("cookie.accept")}
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
