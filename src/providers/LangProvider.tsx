"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { dict } from "./translations";

export type Lang = "en" | "th";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "th" : "en"));

  // Sync html lang attribute with current language
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    return dict[key]?.[lang] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

