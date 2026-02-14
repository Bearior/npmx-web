"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TranslateIcon from "@mui/icons-material/Translate";
import { useLang } from "@/providers/LangProvider";

const NAV_KEYS = [
  { key: "nav.home", href: "#hero" },
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#products" },
  { key: "nav.team", href: "#team" },
  { key: "nav.contact", href: "#contact" },
];

export default function TopMenu() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navCls = scrolled
    ? "bg-white/90 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  const logoCls = scrolled ? "text-primary" : "text-white";

  const linkCls = scrolled ? "text-gray-700" : "text-white/90";

  const toggleBorderCls = scrolled
    ? "border-gray-300 text-gray-600 hover:border-accent hover:text-accent"
    : "border-white/30 text-white/80 hover:border-white hover:text-white";

  const toggleBorderClsMobile = scrolled
    ? "border-gray-300 text-gray-600"
    : "border-white/30 text-white/80";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navCls}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-[68px] px-6">
          <Link href="#hero" className="flex items-center gap-2 group">
            <div
              className={`text-2xl font-extrabold tracking-tight transition-colors ${logoCls}`}
            >
              <span className="text-accent">NPMx</span> 
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_KEYS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-accent after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${linkCls}`}
              >
                {t(link.key)}
              </Link>
            ))}

            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${toggleBorderCls}`}
            >
              <TranslateIcon sx={{ fontSize: 16 }} />
              {lang === "en" ? "TH" : "EN"}
            </button>

            <Link
              href="#contact"
              className="ml-2 px-5 py-2 rounded-full bg-accent text-white text-sm font-semibold hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
            >
              {t("nav.getInTouch")}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-full border transition-all ${toggleBorderClsMobile}`}
            >
              <TranslateIcon sx={{ fontSize: 14 }} />
              {lang === "en" ? "TH" : "EN"}
            </button>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              className="!text-inherit"
            >
              <MenuIcon
                className={scrolled ? "text-primary" : "text-white"}
                fontSize="large"
              />
            </IconButton>
          </div>
        </div>
      </nav>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 280, bgcolor: "#0f172a", color: "#fff" },
        }}
      >
        <div className="flex justify-end p-3">
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon className="text-white" />
          </IconButton>
        </div>
        <List>
          {NAV_KEYS.map((link) => (
            <ListItemButton
              key={link.key}
              component="a"
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              sx={{
                "&:hover": { bgcolor: "rgba(59,130,246,0.15)" },
                px: 4,
                py: 1.5,
              }}
            >
              <ListItemText
                primary={t(link.key)}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
