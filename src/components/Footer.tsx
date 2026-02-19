"use client";

import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import { useLang } from "@/providers/LangProvider";

export default function Footer() {
  const { t } = useLang();

  const SERVICES = [
    { label: t("product.1.title"), href: "/services/clinic-website" },
    { label: t("product.2.title"), href: "/services/patient-platform" },
    { label: t("product.3.title"), href: "/services/enterprise-medical" },
    { label: t("product.4.title"), href: "/services/ai-precision-medicine" },
  ];

  const BUSINESS = [
    { label: t("product.5.title"), href: "/services/healthcare-business" },
    { label: t("product.6.title"), href: "/services/ai-client-prediction" },
    { label: t("product.7.title"), href: "/services/financial-tracking" },
    { label: t("product.8.title"), href: "/services/dashboard-visualization" },
  ];

  const COMPANY = [
    { label: t("nav.about"), href: "/#about" },
    { label: t("nav.team"), href: "/#team" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-extrabold mb-3">
                <span className="text-accent">NPMx</span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-1">
              <IconButton 
                size="small" 
                sx={{ color: "#9ca3af", "&:hover": { color: "#0077b5" } }}
                href="https://www.linkedin.com/company/npmx-technologies/"
                target="_blank"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ color: "#9ca3af", "&:hover": { color: "#3b82f6" } }}
                href="mailto:npmxtech@gmail.com"
              >
                <EmailIcon fontSize="small" />
              </IconButton>
            </div>
          </div>

          {/* Healthcare Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Operations */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              {t("footer.business")}
            </h4>
            <ul className="space-y-2">
              {BUSINESS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 text-sm hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              {t("contact.chip")}
            </h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="mailto:npmxtech@gmail.com" className="hover:text-accent transition-colors">
                  npmxtech@gmail.com
                </a>
              </li>
              <li>Bangkok, Thailand</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            {t("footer.copyright")}
          </p>
          <p className="text-gray-600 text-xs">
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
