import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import CookieConsent from "@/components/CookieConsent";
import { LangProvider } from "@/providers/LangProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
});

export const metadata: Metadata = {
  title: "NPMx Technologies — สร้างสรรค์ พัฒนา ขยายธุรกิจ",
  description:
    "NPMx Technologies สร้างโซลูชันดิจิทัลสำหรับองค์กร ตั้งแต่เว็บไซต์ไปจนถึงระบบระดับองค์กร พร้อม AI และโซลูชันสุขภาพ",
  openGraph: {
    title: "NPMx Technologies — สร้างสรรค์ พัฒนา ขยายธุรกิจ",
    description: "ซอฟต์แวร์สั่งทำ โซลูชัน AI และระบบที่ขยายได้สำหรับธุรกิจยุคใหม่",
    url: "https://www.npmxtech.com/",
    siteName: "NPMx Technologies",
    images: [
      {
        url: "https://www.npmxtech.com/images/logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} ${sarabun.variable}`}>
        <LangProvider>
          <TopMenu />
          {children}
          <CookieConsent />
        </LangProvider>
      </body>
    </html>
  );
}
