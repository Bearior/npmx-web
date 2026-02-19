"use client";

import { useRef, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLang } from "@/providers/LangProvider";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const { t } = useLang();

  const CONTACT_INFO = [
    { icon: <EmailIcon />, labelKey: "contact.email", value: "npmxtech@gmail.com" },
    { icon: <PhoneIcon />, labelKey: "contact.phone", value: "+66 (0) 93-662-9299" },
    { icon: <LocationOnIcon />, labelKey: "contact.office", value: "Bangkok, Thailand" },
  ];

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, email, subject, message } = formData;
    const fullName = `${firstName} ${lastName}`.trim();
    const body = `Name: ${fullName}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:npmxtech@gmail.com?subject=${encodeURIComponent(subject || "Contact from Website")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

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

            <a
              href="https://www.linkedin.com/company/npmx-technologies/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-2xl overflow-hidden border border-gray-200 aspect-video bg-gradient-to-br from-[#0077b5]/10 to-[#0077b5]/5 flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:border-[#0077b5]/30 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-[#0077b5] text-white flex items-center justify-center">
                <LinkedInIcon sx={{ fontSize: 32 }} />
              </div>
              <p className="text-[#0077b5] font-semibold text-lg">{t("contact.followLinkedIn")}</p>
              <p className="text-gray-500 text-sm">NPMX Technologies</p>
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-6">
              {t("contact.formTitle")}
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <TextField
                  label={t("contact.firstName")}
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleInputChange("firstName")}
                  sx={inputSx}
                />
                <TextField
                  label={t("contact.lastName")}
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleInputChange("lastName")}
                  sx={inputSx}
                />
              </div>
              <TextField
                label={t("contact.emailField")}
                variant="outlined"
                size="small"
                fullWidth
                value={formData.email}
                onChange={handleInputChange("email")}
                sx={inputSx}
              />
              <TextField
                label={t("contact.subject")}
                variant="outlined"
                size="small"
                fullWidth
                value={formData.subject}
                onChange={handleInputChange("subject")}
                sx={inputSx}
              />
              <TextField
                label={t("contact.message")}
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange("message")}
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
