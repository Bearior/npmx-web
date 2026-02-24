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
  openGraph: {
    title: "NPMx Technologies — Innovate. Build. Scale.",
    description: "Custom software, AI solutions, and scalable systems for modern businesses.",
    url: "https://www.npmxtech.com/",
    siteName: "NPMx Technologies",
    images: [
      {
        url: "https://www.npmxtech.com/images/og-logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
