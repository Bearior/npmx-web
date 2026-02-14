"use client";

import { createContext, useContext, useState, ReactNode } from "react";

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

/* ──────────────────────────────────────────────
   All translations live here
   ────────────────────────────────────────────── */
const dict: Record<string, Record<Lang, string>> = {
  // ── Navbar ──
  "nav.home": { en: "Home", th: "หน้าแรก" },
  "nav.about": { en: "About", th: "เกี่ยวกับเรา" },
  "nav.services": { en: "Services", th: "บริการ" },
  "nav.team": { en: "Team", th: "ทีมงาน" },
  "nav.contact": { en: "Contact", th: "ติดต่อเรา" },
  "nav.getInTouch": { en: "Get in Touch", th: "ติดต่อเรา" },

  // ── Hero / Banner ──
  "hero.tag": { en: "NPMx Technologies", th: "NPMx Technologies" },
  "hero.h1.1": { en: "Innovate. Build. Scale.", th: "คิดใหม่. สร้างจริง. ขยายได้." },
  "hero.h1.2": { en: "Modern Web Solutions.", th: "โซลูชันเว็บสมัยใหม่." },
  "hero.h1.3": { en: "Your Vision, Our Code.", th: "วิสัยทัศน์คุณ, โค้ดเรา." },
  "hero.sub": {
    en: "We craft high-performance websites and web applications — from sleek landing pages to large-scale enterprise systems — helping businesses thrive in the digital era.",
    th: "เราสร้างเว็บไซต์และเว็บแอปพลิเคชันประสิทธิภาพสูง ตั้งแต่แลนดิ้งเพจสวยงาม ไปจนถึงระบบองค์กรขนาดใหญ่ ช่วยให้ธุรกิจเติบโตในยุคดิจิทัล",
  },
  "hero.cta1": { en: "Explore Services", th: "ดูบริการของเรา" },
  "hero.cta2": { en: "Learn More", th: "เรียนรู้เพิ่มเติม" },

  // ── About ──
  "about.chip": { en: "About Us", th: "เกี่ยวกับเรา" },
  "about.title1": { en: "Building the Future of", th: "สร้างอนาคตของ" },
  "about.titleAccent": { en: "Technology", th: "เทคโนโลยี" },
  "about.p1": {
    en: "NPMx Technologies is a passionate tech team specializing in web development solutions. From simple frontend pages to complex full-service systems, we deliver modern, reliable, and scalable digital products tailored to your business needs.",
    th: "NPMx Technologies คือทีมเทคโนโลยีที่เชี่ยวชาญด้านการพัฒนาเว็บ ตั้งแต่หน้าเว็บ Frontend ธรรมดา ไปจนถึงระบบ Full-service ที่ซับซ้อน เรามอบผลิตภัณฑ์ดิจิทัลที่ทันสมัย เชื่อถือได้ และขยายได้ ตรงตามความต้องการธุรกิจของคุณ",
  },
  "about.p2": {
    en: "Our mission: empower businesses with technology that scales. We combine deep technical expertise with a passion for innovation to solve complex challenges and unlock new opportunities.",
    th: "พันธกิจของเรา: เสริมพลังธุรกิจด้วยเทคโนโลยีที่ขยายได้ เรารวมความเชี่ยวชาญทางเทคนิคเข้ากับความหลงไหลในนวัตกรรม เพื่อแก้ปัญหาที่ซับซ้อนและเปิดโอกาสใหม่ๆ",
  },
  "about.stat1": { en: "Projects Delivered", th: "โปรเจกต์สำเร็จ" },
  "about.stat2": { en: "Team Members", th: "สมาชิกในทีม" },
  "about.stat3": { en: "Happy Clients", th: "ลูกค้าที่พึงพอใจ" },
  "about.stat4": { en: "Years Experience", th: "ปีประสบการณ์" },

  // ── Services / Products ──
  "services.chip": { en: "Our Services", th: "บริการของเรา" },
  "services.title1": { en: "Solutions That", th: "โซลูชันที่" },
  "services.titleAccent": { en: "Deliver", th: "ตอบโจทย์" },
  "services.sub": {
    en: "From lightweight landing pages to enterprise-grade platforms — we build the right solution for your business.",
    th: "จากแลนดิ้งเพจเรียบง่ายไปจนถึงแพลตฟอร์มระดับองค์กร เราสร้างโซลูชันที่เหมาะกับธุรกิจของคุณ",
  },

  // Product 1 - Static
  "product.1.title": { en: "Static Webpage", th: "เว็บไซต์สแตติก" },
  "product.1.subtitle": { en: "Frontend-Only", th: "เฉพาะ Frontend" },
  "product.1.desc": {
    en: "Beautiful, fast, and SEO-friendly websites perfect for clinics, restaurants, landing pages, and company profiles. Low maintenance with blazing-fast performance.",
    th: "เว็บไซต์สวยงาม รวดเร็ว และเป็นมิตรกับ SEO เหมาะสำหรับคลินิก ร้านอาหาร แลนดิ้งเพจ และโปรไฟล์บริษัท บำรุงรักษาน้อย ประสิทธิภาพสูง",
  },
  "product.1.tag1": { en: "Fast", th: "เร็ว" },
  "product.1.tag2": { en: "SEO", th: "SEO" },
  "product.1.tag3": { en: "Low Cost", th: "ราคาถูก" },
  "product.1.usecase": {
    en: "Clinics · Restaurants · Landing Pages · Company Profiles",
    th: "คลินิก · ร้านอาหาร · แลนดิ้งเพจ · โปรไฟล์บริษัท",
  },

  // Product 2 - Small-Medium
  "product.2.title": { en: "Service Web App", th: "เว็บแอปบริการ" },
  "product.2.subtitle": { en: "Small–Medium Scale", th: "ขนาดเล็ก–กลาง" },
  "product.2.desc": {
    en: "Reliable web applications for CRM, POS, booking systems, and dashboards. Built for fast development, moderate scaling, and easy long-term maintenance.",
    th: "เว็บแอปพลิเคชันที่เชื่อถือได้สำหรับ CRM, POS, ระบบจอง และแดชบอร์ด พัฒนาเร็ว ขยายได้ และบำรุงรักษาง่ายในระยะยาว",
  },
  "product.2.tag1": { en: "CRM", th: "CRM" },
  "product.2.tag2": { en: "POS", th: "POS" },
  "product.2.tag3": { en: "Dashboard", th: "แดชบอร์ด" },
  "product.2.usecase": {
    en: "CRM · POS · Booking Systems · Internal Dashboards",
    th: "CRM · POS · ระบบจอง · แดชบอร์ดภายใน",
  },

  // Product 3 - Large
  "product.3.title": { en: "Full Service Web App", th: "เว็บแอป Full Service" },
  "product.3.subtitle": { en: "Large-Scale Enterprise", th: "ระดับองค์กรขนาดใหญ่" },
  "product.3.desc": {
    en: "Enterprise-grade web applications for multi-branch hotels, full ordering systems, and ERP-like platforms. Built for scalability, reliability, and long-term maintainability.",
    th: "เว็บแอประดับองค์กรสำหรับโรงแรมหลายสาขา ระบบสั่งอาหารครบวงจร และแพลตฟอร์มแบบ ERP สร้างมาเพื่อความสามารถในการปรับขนาด ความเชื่อถือได้ และการบำรุงรักษาระยะยาว",
  },
  "product.3.tag1": { en: "Enterprise", th: "องค์กร" },
  "product.3.tag2": { en: "Scalable", th: "ขยายได้" },
  "product.3.tag3": { en: "Multi-branch", th: "หลายสาขา" },
  "product.3.usecase": {
    en: "Hotels · Restaurant Chains · ERP Systems · Full Ordering",
    th: "โรงแรม · เชนร้านอาหาร · ระบบ ERP · ระบบสั่งอาหาร",
  },

  "product.learnMore": { en: "Learn More", th: "เรียนรู้เพิ่มเติม" },

  // ── Team ──
  "team.chip": { en: "Our Team", th: "ทีมงานของเรา" },
  "team.title1": { en: "Meet the", th: "พบกับ" },
  "team.titleAccent": { en: "Leaders", th: "ผู้นำ" },
  "team.sub": {
    en: "A passionate team of engineers, designers, and strategists building the next wave of tech.",
    th: "ทีมวิศวกร นักออกแบบ และนักกลยุทธ์ที่มุ่งมั่นสร้างคลื่นลูกใหม่ของเทคโนโลยี",
  },

  // ── Contact ──
  "contact.chip": { en: "Contact Us", th: "ติดต่อเรา" },
  "contact.title1": { en: "Let's", th: "มา" },
  "contact.titleAccent": { en: "Connect", th: "เชื่อมต่อกัน" },
  "contact.sub": {
    en: "Have a project in mind? We'd love to hear from you.",
    th: "มีโปรเจกต์ในใจ? เรายินดีรับฟัง",
  },
  "contact.getInTouch": { en: "Get in Touch", th: "ติดต่อเรา" },
  "contact.email": { en: "Email", th: "อีเมล" },
  "contact.phone": { en: "Phone", th: "โทรศัพท์" },
  "contact.office": { en: "Office", th: "สำนักงาน" },
  "contact.formTitle": { en: "Send us a Message", th: "ส่งข้อความถึงเรา" },
  "contact.firstName": { en: "First Name", th: "ชื่อ" },
  "contact.lastName": { en: "Last Name", th: "นามสกุล" },
  "contact.emailField": { en: "Email", th: "อีเมล" },
  "contact.subject": { en: "Subject", th: "หัวข้อ" },
  "contact.message": { en: "Message", th: "ข้อความ" },
  "contact.send": { en: "Send Message", th: "ส่งข้อความ" },
  "contact.map": { en: "📍 Interactive map placeholder", th: "📍 แผนที่แบบอินเตอร์แอคทีฟ" },

  // ── Footer ──
  "footer.tagline": {
    en: "Building the future of technology, one product at a time.",
    th: "สร้างอนาคตของเทคโนโลยี ทีละผลิตภัณฑ์",
  },
  "footer.services": { en: "Services", th: "บริการ" },
  "footer.company": { en: "Company", th: "บริษัท" },
  "footer.legal": { en: "Legal", th: "กฎหมาย" },
  "footer.copyright": {
    en: `© ${new Date().getFullYear()} NPMx Technologies. All rights reserved.`,
    th: `© ${new Date().getFullYear()} NPMx Technologies. สงวนลิขสิทธิ์ทุกประการ`,
  },
  "footer.builtWith": {
    en: "Designed & built with Next.js, Tailwind CSS & Material UI",
    th: "ออกแบบและพัฒนาด้วย Next.js, Tailwind CSS & Material UI",
  },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "th" : "en"));

  const t = (key: string): string => {
    return dict[key]?.[lang] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
