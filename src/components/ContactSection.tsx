"use client";

import { useRef, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import { useLang } from "@/providers/LangProvider";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useLang();

  const CONTACT_INFO = [
    { icon: <EmailIcon />, labelKey: "contact.email", value: "hello@npmxtech.com" },
    { icon: <PhoneIcon />, labelKey: "contact.phone", value: "+66 (0) 98-765-4321" },
    { icon: <LocationOnIcon />, labelKey: "contact.office", value: "Bangkok, Thailand" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Chip
            label={t("contact.chip")}
            size="small"
            sx={{
              bgcolor: "#eff6ff",
              color: "#3b82f6",
              fontWeight: 700,
              mb: 2,
            }}
          />
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            {t("contact.title1")}{" "}
            <span className="text-accent">{t("contact.titleAccent")}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t("contact.sub")}
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 gap-12 items-start"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              {t("contact.getInTouch")}
            </h3>
            <div className="space-y-6">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">
                      {t(item.labelKey)}
                    </p>
                    <p className="text-primary font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 aspect-video bg-gray-100 flex items-center justify-center">
              <p className="text-gray-400 text-sm">
                {t("contact.map")}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-6">
              {t("contact.formTitle")}
            </h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <TextField
                  label={t("contact.firstName")}
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={inputSx}
                />
                <TextField
                  label={t("contact.lastName")}
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={inputSx}
                />
              </div>
              <TextField
                label={t("contact.emailField")}
                variant="outlined"
                size="small"
                fullWidth
                sx={inputSx}
              />
              <TextField
                label={t("contact.subject")}
                variant="outlined"
                size="small"
                fullWidth
                sx={inputSx}
              />
              <TextField
                label={t("contact.message")}
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={4}
                sx={inputSx}
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                fullWidth
                sx={{
                  bgcolor: "#3b82f6",
                  borderRadius: 3,
                  py: 1.5,
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": { bgcolor: "#2563eb" },
                }}
              >
                {t("contact.send")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    "&:hover fieldset": { borderColor: "#3b82f6" },
    "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
  },
};
