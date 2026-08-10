import type { Metadata } from "next";
import BuildClient from "./BuildClient";

/* Server component purely so this route can own its metadata — every other page
   in the site is "use client" and therefore inherits the root title. Spec §10. */

export const metadata: Metadata = {
  title: "สร้างระบบ LMS ของคุณเอง | Custom by NPMx Technologies",
  description:
    "เลือกฟีเจอร์ที่ต้องการแล้วดูราคาทันที — ระบบ LMS สำหรับโรงเรียนกวดวิชาและโรงเรียนเอกชน พร้อมแบรนด์ของคุณเอง ค่าติดตั้งและค่าบริการรายเดือนคำนวณให้ทันที",
  alternates: { canonical: "https://www.npmxtech.com/build" },
  openGraph: {
    title: "สร้างระบบ LMS ของคุณเอง | Custom by NPMx Technologies",
    description:
      "ลากโมดูลที่ต้องการมาประกอบเป็นระบบของคุณ แล้วดูราคาค่าติดตั้งและค่าบริการรายเดือนทันที",
    url: "https://www.npmxtech.com/build",
    siteName: "NPMx Technologies",
    images: [{ url: "https://www.npmxtech.com/images/logo.jpg", width: 1200, height: 630 }],
    locale: "th_TH",
    type: "website",
  },
};

export default function BuildPage() {
  return <BuildClient />;
}
