"use client";

import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import { useLang } from "@/providers/LangProvider";

export default function Footer() {
  const { t } = useLang();

  const FOOTER_LINKS: Record<string, string[]> = {
    [t("footer.services")]: [
      t("product.1.title"),
      t("product.2.title"),
      t("product.3.title"),
    ],
    [t("footer.company")]: [
      t("nav.about"),
      t("nav.team"),
      t("nav.contact"),
    ],
    [t("footer.legal")]: ["Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-extrabold mb-3">
              <span className="text-accent">NPMx</span> Tech
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-1">
              <IconButton size="small" sx={{ color: "#9ca3af" }}>
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "#9ca3af" }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "#9ca3af" }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-500 text-sm hover:text-accent transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
