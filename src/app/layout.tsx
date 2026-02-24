import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { LangProvider } from "@/providers/LangProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
});

export const metadata: Metadata = {
  title: "NPMx Technologies — Innovate. Build. Scale.",
  description:
    "NPMx Technologies delivers modern web development solutions — from static websites to large-scale enterprise systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sarabun.variable}`}>
        <LangProvider>
          <TopMenu />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
