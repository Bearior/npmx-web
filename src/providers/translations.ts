import type { Lang } from "./LangProvider";

/* ──────────────────────────────────────────────
   All translations live here
   ────────────────────────────────────────────── */
export const dict: Record<string, Record<Lang, string>> = {
    // Product Section Dividers (for SEO) pass
    "productSection.healthTechDivider": {
      en: "Healthcare Solutions",
      th: "นวัตกรรมเพื่อการดูแลสุขภาพ"
    },
    "productSection.enterpriseDivider": {
      en: "Enterprise Solutions",
      th: "นวัตกรรมเพื่อองค์กร"
    },
  // ── Navbar ── pass
  "nav.home": { en: "Home", th: "หน้าแรก" },
  "nav.about": { en: "About", th: "เกี่ยวกับเรา" },
  "nav.services": { en: "Services", th: "บริการ" },
  "nav.team": { en: "Team", th: "ทีมงาน" },
  "nav.contact": { en: "Contact", th: "ติดต่อเรา" },
  "nav.getInTouch": { en: "Get in Touch", th: "ติดต่อเรา" },

  // ── Hero / Banner ── pass
  "hero.tag": { en: "NPMx Technologies", th: "NPMx Technologies" },
  "hero.h1.1": { en: "Longevity Powered by Technology.", th: "นวัตกรรมเพื่อชีวิตที่ยืนยาว" },
  "hero.h1.2": { en: "Enterprise Solutions. Digital Future.", th: "ยกระดับองค์กร สู่อนาคตแห่งโลกดิจิทัล" },
  "hero.h1.3": { en: "Extend Healthspan. Empower Care.", th: "ต่อยอดสุขภาพที่ยั่งยืน เสริมประสิทธิภาพการฟื้นฟูและการรักษา" },
  "hero.sub": {
    en: "We build digital infrastructure and on-demand solutions for enterprises—empowering organizations in health tech, medical, and beyond. From intelligent platforms to enterprise systems, we help you grow and innovate in the digital era.",
    th: "เราสร้างโครงสร้างพื้นฐานดิจิทัลและโซลูชันสำหรับองค์กรตามความต้องการ เสริมพลังธุรกิจในด้านเฮลท์เทค การแพทย์ และอื่น ๆ ตั้งแต่แพลตฟอร์มอัจฉริยะไปจนถึงระบบระดับองค์กร เพื่อการเติบโตและนวัตกรรมในยุคดิจิทัล",
  },
  "hero.cta1": { en: "Explore Services", th: "ดูบริการของเรา" },
  "hero.cta2": { en: "Learn More", th: "เรียนรู้เพิ่มเติม" },

  // ── About ── pass
  "about.chip": { en: "About Us", th: "เกี่ยวกับเรา" },
  "about.title1": { en: "Building the Future of", th: "สร้างสรรค์อนาคตแห่ง" },
  "about.titleAccent": { en: "Enterprise Solutions", th: "โนวัตกรรมเพื่อองค์กร" },
  "about.titleHealthTech": { en: "Health Tech", th: "เฮลท์เทค" },
  "about.p1": {
    en: "NPMx Solution is a technology company building digital infrastructure for enterprises on demand. Our solutions span health tech, medical, business, and more—empowering organizations with secure, innovative, and scalable systems.",
    th: "NPMx Solution คือบริษัทเทคโนโลยีที่สร้างโครงสร้างพื้นฐานดิจิทัลสำหรับองค์กรตามความต้องการ โซลูชันของเราครอบคลุมทั้ง health tech การแพทย์ ธุรกิจ และอื่น ๆ — เสริมพลังองค์กรด้วยระบบที่ปลอดภัย นวัตกรรม และขยายได้",
  },
  "about.p2": {
    en: "Our vision: to be the leading provider of on-demand digital infrastructure for enterprises, enabling innovation across industries. We deliver solutions for health tech, medical, and beyond—empowering organizations to thrive in a digital world.",
    th: "วิสัยทัศน์ของเรา: เป็นผู้นำด้านโครงสร้างพื้นฐานดิจิทัลสำหรับองค์กรตามความต้องการ ขับเคลื่อนนวัตกรรมในทุกอุตสาหกรรม เราส่งมอบโซลูชันสำหรับ health tech การแพทย์ และอื่น ๆ — เสริมพลังองค์กรให้เติบโตในโลกดิจิทัล",
  },
  "about.stat1": { en: "Projects Delivered", th: "โปรเจกต์ที่เคยพัฒนา" },
  "about.stat2": { en: "Team Members", th: "สมาชิกในทีม" },
  "about.stat3": { en: "Happy Clients", th: "ลูกค้าที่พึงพอใจ" },
  "about.stat4": { en: "Years Experience", th: "ปีประสบการณ์" },

  // ── Services / Products ── pass
  "services.chip": { en: "What We Build", th: "สิ่งที่เราสร้าง" },
  "services.title1": { en: "Enterprise Solutions That", th: "โซลูชันองค์กรที่" },
  "services.titleAccent": { en: "Transform Business", th: "เปลี่ยนแปลงธุรกิจ" },
  "services.sub": {
    en: "From enterprise infrastructure to healthcare systems, we build digital solutions that empower organizations to grow and innovate.",
    th: "จากโครงสร้างพื้นฐานองค์กรไปจนถึงระบบสุขภาพ เราสร้างโซลูชันดิจิทัลที่เสริมพลังองค์กรให้เติบโตและสร้างนวัตกรรม",
  },

  // Product 1 - Clinic Website pass
  "product.1.title": { en: "Clinic & Wellness Website", th: "เว็บไซต์คลินิกและเวลเนส" },
  "product.1.subtitle": { en: "Professional Presence", th: "ภาพลักษณ์มืออาชีพ" },
  "product.1.desc": {
    en: "Beautiful, fast, and SEO-optimized websites for clinics, wellness centers, and longevity practices. Build trust with patients through a modern digital presence.",
    th: "เว็บไซต์สวยงาม รวดเร็ว และเป็นมิตรกับ SEO สำหรับคลินิก ศูนย์สุขภสพ สร้างความไว้วางใจกับผู้ป่วยผ่านภาพลักษณ์ดิจิทัลที่ทันสมัย",
  },
  "product.1.tag1": { en: "Fast", th: "เร็ว" },
  "product.1.tag2": { en: "SEO", th: "SEO" },
  "product.1.tag3": { en: "Trustworthy", th: "น่าเชื่อถือ" },
  "product.1.usecase": {
    en: "Clinics · Wellness Centers · Longevity Practices · Medical Spas",
    th: "คลินิก · ศูนย์เวลเนส · สถานปฏิบัติการอายุรกรรม · เมดิคัลสปา",
  },

  // Product 2 - Patient Platform pass
  "product.2.title": { en: "Patient Management Platform", th: "แพลตฟอร์มจัดการผู้ป่วย" },
  "product.2.subtitle": { en: "Smart Healthcare", th: "ระบบปฏิบัติการสุขภาพอัจฉริยะ" },
  "product.2.desc": {
    en: "Intelligent platforms for appointment booking, patient records, health tracking, and clinical dashboards. Designed for modern healthcare workflows.",
    th: "แพลตฟอร์มอัจฉริยะสำหรับการจองนัดหมาย บันทึกผู้ป่วย การติดตามสุขภาพ และแดชบอร์ดทางคลินิก ออกแบบมาเพื่อกระบวนการทำงานด้านสุขภาพสมัยใหม่",
  },
  "product.2.tag1": { en: "EMR", th: "EMR" },
  "product.2.tag2": { en: "Booking", th: "จองนัด" },
  "product.2.tag3": { en: "Analytics", th: "วิเคราะห์" },
  "product.2.usecase": {
    en: "EMR Systems · Appointment Booking · Health Tracking · Clinical Dashboards",
    th: "ระบบ EMR · จองนัดหมาย · ติดตามสุขภาพ · แดชบอร์ดทางคลินิก",
  },

  // Product 3 - Enterprise Hospital pass
  "product.3.title": { en: "Enterprise Medical System", th: "ระบบการแพทย์ระดับองค์กร" },
  "product.3.subtitle": { en: "Hospital Infrastructure", th: "โครงสร้างพื้นฐานระดับโรงพยาบาล" },
  "product.3.desc": {
    en: "Enterprise-grade systems for hospitals, multi-location clinics, and healthcare networks. HIS integration, advanced analytics, and precision medicine workflows.",
    th: "ระบบระดับองค์กรสำหรับโรงพยาบาล คลินิกหลายสาขา และเครือข่ายสุขภาพ เชื่อมต่อ HIS วิเคราะห์ขั้นสูง และกระบวนการแพทย์แม่นยำ",
  },
  "product.3.tag1": { en: "HIS", th: "HIS" },
  "product.3.tag2": { en: "Scalable", th: "ขยายได้" },
  "product.3.tag3": { en: "Multi-site", th: "หลายสาขา" },
  "product.3.usecase": {
    en: "Hospitals · Clinic Networks · Healthcare Groups · Precision Medicine",
    th: "โรงพยาบาล · เครือข่ายคลินิก · กลุ่มสุขภาพ · การแพทย์แม่นยำ",
  },

  // Product 4 - AI for Precision Medicine pass
  "product.4.title": { en: "AI for Precision Medicine", th: "AI สำหรับการแพทย์" },
  "product.4.subtitle": { en: "Intelligent Health Insights", th: "ข้อมูลเชิงลึกด้านสุขภาพอัจฉริยะ" },
  "product.4.desc": {
    en: "AI-powered solutions for diagnostics, predictive health analytics, personalized treatment recommendations, and longevity biomarker analysis. Harness machine learning to extend healthspan.",
    th: "โซลูชันขับเคลื่อนด้วย AI สำหรับการวินิจฉัย การวิเคราะห์สุขภาพเชิงคาดการณ์ คำแนะนำการรักษาเฉพาะบุคคล และการวิเคราะห์ไบโอมาร์กเกอร์อายุยืน ใช้ประโยชน์จาก Machine Learning เพื่อขยายอายุขัยที่แข็งแรง",
  },
  "product.4.tag1": { en: "AI/ML", th: "AI/ML" },
  "product.4.tag2": { en: "Predictive", th: "เชิงคาดการณ์" },
  "product.4.tag3": { en: "Personalized", th: "เฉพาะบุคคล" },
  "product.4.usecase": {
    en: "Diagnostics · Biomarker Analysis · Treatment Planning · Longevity Insights",
    th: "การวินิจฉัย · วิเคราะห์ไบโอมาร์กเกอร์ · วางแผนการรักษา · ข้อมูลเชิงลึกอายุยืน",
  },

  // Product 5 - Enterprise Business Management pass
  "product.5.title": { en: "Enterprise Business Management", th: "ระบบจัดการธุรกิจองค์กร" },
  "product.5.subtitle": { en: "All in one Package", th: "แพ็คเกจครบวงจร" },
  "product.5.desc": {
    en: "Comprehensive business management solutions for enterprises and organizations. Financial tracking, staff management, inventory control, and operational analytics to scale your business.",
    th: "โซลูชันการจัดการธุรกิจครบวงจรสำหรับองค์กร การติดตามการเงิน การจัดการพนักงาน การควบคุมสินค้าคงคลัง และการวิเคราะห์การดำเนินงานเพื่อขยายธุรกิจของคุณ",
  },
  "product.5.tag1": { en: "Finance", th: "การเงิน" },
  "product.5.tag2": { en: "Operations", th: "ปฏิบัติการ" },
  "product.5.tag3": { en: "Growth", th: "เติบโต" },
  "product.5.usecase": {
    en: "Enterprise Operations · Revenue Management · Staff Scheduling · Business Analytics",
    th: "การดำเนินงานองค์กร · การจัดการรายได้ · ตารางพนักงาน · การวิเคราะห์ธุรกิจ",
  },

  // Product 6 - AI Client Prediction pass
  "product.6.title": { en: "AI Client Prediction", th: "AI ทำนายลูกค้า" },
  "product.6.subtitle": { en: "Smart Business Insights", th: "ข้อมูลเชิงลึกธุรกิจอัจฉริยะ" },
  "product.6.desc": {
    en: "AI-powered client prediction and retention analytics. Forecast customer behavior, identify at-risk clients, optimize marketing campaigns, and maximize lifetime value.",
    th: "การวิเคราะห์การทำนายและรักษาลูกค้าด้วย AI คาดการณ์พฤติกรรมลูกค้า ระบุลูกค้าที่มีความเสี่ยง ปรับแต่งแคมเปญการตลาด และเพิ่มมูลค่าตลอดชีพ",
  },
  "product.6.tag1": { en: "AI", th: "AI" },
  "product.6.tag2": { en: "Retention", th: "รักษาลูกค้า" },
  "product.6.tag3": { en: "Marketing", th: "การตลาด" },
  "product.6.usecase": {
    en: "Client Retention · Behavior Prediction · Churn Analysis · Campaign Optimization",
    th: "รักษาลูกค้า · ทำนายพฤติกรรม · วิเคราะห์การหลุด · ปรับแต่งแคมเปญ",
  },

  // Product 7 - Financial Tracking Platform pass
  "product.7.title": { en: "Financial Tracking Platform", th: "แพลตฟอร์มติดตามการเงิน" },
  "product.7.subtitle": { en: "Revenue Intelligence", th: "ระบบอัจฉริยะด้านรายได้" },
  "product.7.desc": {
    en: "Complete financial management for enterprises. Real-time revenue tracking, expense management, profitability analysis, and automated financial reporting.",
    th: "การจัดการการเงินครบวงจรสำหรับองค์กร ติดตามรายได้แบบเรียลไทม์ จัดการค่าใช้จ่าย วิเคราะห์กำไร และรายงานการเงินอัตโนมัติ",
  },
  "product.7.tag1": { en: "Revenue", th: "รายได้" },
  "product.7.tag2": { en: "Expenses", th: "ค่าใช้จ่าย" },
  "product.7.tag3": { en: "Reports", th: "รายงาน" },
  "product.7.usecase": {
    en: "Revenue Tracking · Expense Management · Profit Analysis · Financial Reports",
    th: "ติดตามรายได้ · จัดการค่าใช้จ่าย · วิเคราะห์กำไร · รายงานการเงิน",
  },

  // Product 8 - Dashboard Visualization pass
  "product.8.title": { en: "Dashboard & Visualization", th: "แดชบอร์ดและการแสดงผล" },
  "product.8.subtitle": { en: "Data-Driven Decisions", th: "ตัดสินใจด้วยข้อมูล" },
  "product.8.desc": {
    en: "Beautiful, real-time dashboards that transform your business data into actionable insights. KPI monitoring, trend analysis, and customizable reports for smarter decisions.",
    th: "แดชบอร์ดสวยงามแบบเรียลไทม์ที่เปลี่ยนข้อมูลธุรกิจเป็นข้อมูลเชิงลึกที่นำไปใช้ได้ ติดตาม KPI วิเคราะห์แนวโน้ม และรายงานที่ปรับแต่งได้เพื่อการตัดสินใจที่ชาญฉลาด",
  },
  "product.8.tag1": { en: "KPIs", th: "KPIs" },
  "product.8.tag2": { en: "Real-time", th: "เรียลไทม์" },
  "product.8.tag3": { en: "Charts", th: "กราฟ" },
  "product.8.usecase": {
    en: "KPI Dashboards · Trend Analysis · Custom Reports · Performance Monitoring",
    th: "แดชบอร์ด KPI · วิเคราะห์แนวโน้ม · รายงานกำหนดเอง · ติดตามประสิทธิภาพ",
  },

  "product.learnMore": { en: "Learn More", th: "เรียนรู้เพิ่มเติม" },
  "product.viewDemo": { en: "Demo", th: "ดูตัวอย่าง" },

  // ── Service Pages Common ── pass
  "service.backToServices": { en: "Back to Services", th: "บริการ" },
  "service.getStarted": { en: "Get Started", th: "เริ่มต้นใช้งาน" },
  "service.contactUs": { en: "Contact Us", th: "ติดต่อเรา" },
  "service.perfectFor": { en: "Perfect For", th: "เหมาะสำหรับ" },
  "service.builtFor": { en: "Built For", th: "สร้างมาเพื่อ" },
  "service.idealFor": { en: "Ideal For", th: "เหมาะสำหรับ" },

  // ── Service Page 1: Clinic Website ──. pass
  "service1.heroTitle": { en: "Clinic & Wellness Website", th: "เว็บไซต์คลินิกและเวลเนส" },
  "service1.heroDesc": { 
    en: "Beautiful, fast, and SEO-optimized websites for clinics, wellness centers, and longevity practices. Build trust with patients through a modern digital presence.",
    th: "เว็บไซต์สวยงาม รวดเร็ว และปรับแต่ง SEO สำหรับคลินิก ศูนย์เวลเนส และสถานปฏิบัติด้านอายุยืน สร้างความไว้วางใจกับผู้ป่วยผ่านการนำเสนอดิจิทัลที่ทันสมัย"
  },
  "service1.sectionTitle": { en: "Why Choose Our Clinic Websites?", th: "ทำไมต้องเลือกเว็บไซต์คลินิกของเรา?" },
  "service1.sectionDesc": { 
    en: "We build websites specifically designed for healthcare providers, understanding the unique needs of clinics and wellness centers.",
    th: "เราสร้างเว็บไซต์ที่ออกแบบมาเฉพาะสำหรับผู้ให้บริการด้านสุขภาพ เข้าใจความต้องการเฉพาะของคลินิกและศูนย์เวลเนส"
  },
  "service1.feature1.title": { en: "Lightning Fast", th: "รวดเร็วดุจสายฟ้า" },
  "service1.feature1.desc": { en: "Optimized for speed with modern frameworks ensuring your patients get instant access to information.", th: "ปรับแต่งเพื่อความเร็วด้วยเฟรมเวิร์กทันสมัย รับประกันว่าผู้ป่วยของคุณเข้าถึงข้อมูลได้ทันที" },
  "service1.feature2.title": { en: "SEO Optimized", th: "ปรับแต่ง SEO" },
  "service1.feature2.desc": { en: "Rank higher on Google and attract more patients with built-in SEO best practices.", th: "ติดอันดับสูงขึ้นใน Google และดึงดูดผู้ป่วยมากขึ้นด้วยแนวปฏิบัติ SEO ที่ดีที่สุด" },
  "service1.feature3.title": { en: "Fully Responsive", th: "รองรับทุกอุปกรณ์" },
  "service1.feature3.desc": { en: "Perfect experience on any device — desktop, tablet, or mobile.", th: "ประสบการณ์ที่สมบูรณ์แบบบนทุกอุปกรณ์ — เดสก์ท็อป แท็บเล็ต หรือมือถือ" },
  "service1.feature4.title": { en: "Easy to Maintain", th: "ดูแลรักษาง่าย" },
  "service1.feature4.desc": { en: "Simple content management so your team can update information without technical expertise.", th: "ระบบจัดการเนื้อหาที่ง่าย ทีมงานของคุณสามารถอัปเดตข้อมูลได้โดยไม่ต้องมีความเชี่ยวชาญทางเทคนิค" },
  "service1.benefitsTitle": { en: "Everything Your Clinic Needs Online", th: "ทุกสิ่งที่คลินิกของคุณต้องการออนไลน์" },
  "service1.benefit1": { en: "Professional online presence that builds patient trust", th: "การนำเสนอออนไลน์ระดับมืออาชีพที่สร้างความไว้วางใจกับผู้ป่วย" },
  "service1.benefit2": { en: "Showcase services, doctors, and facilities", th: "แสดงบริการ แพทย์ และสิ่งอำนวยความสะดวก" },
  "service1.benefit3": { en: "Online appointment request forms", th: "แบบฟอร์มขอนัดหมายออนไลน์" },
  "service1.benefit4": { en: "Integration with maps and directions", th: "เชื่อมต่อกับแผนที่และเส้นทาง" },
  "service1.benefit5": { en: "Multi-language support for diverse patients", th: "รองรับหลายภาษาสำหรับผู้ป่วยที่หลากหลาย" },
  "service1.benefit6": { en: "HIPAA-conscious design practices", th: "การออกแบบที่คำนึงถึง HIPAA" },
  "service1.ctaTitle": { en: "Ready to Elevate Your Clinic's Online Presence?", th: "พร้อมยกระดับการนำเสนอออนไลน์ของคลินิกคุณหรือยัง?" },
  "service1.ctaDesc": { en: "Let's create a website that attracts patients and builds trust.", th: "มาสร้างเว็บไซต์ที่ดึงดูดผู้ป่วยและสร้างความไว้วางใจกัน" },
  "service1.perfectFor1": { en: "Clinics", th: "คลินิก" },
  "service1.perfectFor2": { en: "Wellness Centers", th: "ศูนย์เวลเนส" },
  "service1.perfectFor3": { en: "Longevity Practices", th: "สถานปฏิบัติด้านอายุยืน" },
  "service1.perfectFor4": { en: "Medical Spas", th: "เมดิคัลสปา" },
  "service1.perfectFor5": { en: "Dental Offices", th: "คลินิกทันตกรรม" },
  "service1.perfectFor6": { en: "Specialty Practices", th: "คลินิกเฉพาะทาง" },

  // ── Service Page 2: Patient Platform ── pass
  "service2.heroTitle": { en: "Patient Management Platform", th: "แพลตฟอร์มจัดการผู้ป่วย" },
  "service2.heroDesc": { 
    en: "Intelligent platforms for appointment booking, patient records, health tracking, and clinical dashboards. Designed for modern healthcare workflows.",
    th: "แพลตฟอร์มอัจฉริยะสำหรับการจองนัดหมาย บันทึกผู้ป่วย ติดตามสุขภาพ และแดชบอร์ดทางคลินิก ออกแบบมาสำหรับเวิร์กโฟลว์ด้านสุขภาพสมัยใหม่"
  },
  "service2.sectionTitle": { en: "Streamline Your Healthcare Operations", th: "ปรับปรุงการดำเนินงานด้านสุขภาพของคุณ" },
  "service2.sectionDesc": { 
    en: "Our patient management platforms are built to handle the complexity of modern healthcare while remaining intuitive for your staff.",
    th: "แพลตฟอร์มจัดการผู้ป่วยของเราสร้างมาเพื่อจัดการความซับซ้อนของการดูแลสุขภาพสมัยใหม่ในขณะที่ยังคงใช้งานง่ายสำหรับพนักงานของคุณ"
  },
  "service2.feature1.title": { en: "Smart Scheduling", th: "การนัดหมายอัจฉริยะ" },
  "service2.feature1.desc": { en: "Automated appointment booking with reminders, reducing no-shows and improving patient flow.", th: "การจองนัดหมายอัตโนมัติพร้อมการแจ้งเตือน ลดการไม่มาตามนัดและปรับปรุงการไหลของผู้ป่วย" },
  "service2.feature2.title": { en: "Patient Records", th: "บันทึกผู้ป่วย" },
  "service2.feature2.desc": { en: "Secure electronic medical records with easy access for authorized healthcare providers.", th: "บันทึกทางการแพทย์อิเล็กทรอนิกส์ที่ปลอดภัยพร้อมการเข้าถึงง่ายสำหรับผู้ให้บริการด้านสุขภาพที่ได้รับอนุญาต" },
  "service2.feature3.title": { en: "Health Tracking", th: "ติดตามสุขภาพ" },
  "service2.feature3.desc": { en: "Monitor patient vitals, lab results, and health metrics over time with visual dashboards.", th: "ติดตามสัญญาณชีพ ผลแล็บ และตัวชี้วัดสุขภาพของผู้ป่วยในช่วงเวลาด้วยแดชบอร์ดภาพ" },
  "service2.feature4.title": { en: "Clinical Analytics", th: "การวิเคราะห์ทางคลินิก" },
  "service2.feature4.desc": { en: "Data-driven insights to optimize operations and improve patient outcomes.", th: "ข้อมูลเชิงลึกที่ขับเคลื่อนด้วยข้อมูลเพื่อปรับปรุงการดำเนินงานและผลลัพธ์ของผู้ป่วย" },
  "service2.capabilitiesTitle": { en: "Complete Healthcare Management", th: "การจัดการด้านสุขภาพครบวงจร" },
  "service2.ctaTitle": { en: "Ready to Transform Your Practice?", th: "พร้อมเปลี่ยนแปลงการปฏิบัติงานของคุณหรือยัง?" },
  "service2.ctaDesc": { en: "Let's build a platform that streamlines your operations and improves patient care.", th: "มาสร้างแพลตฟอร์มที่ปรับปรุงการดำเนินงานและการดูแลผู้ป่วยของคุณ" },

  // ── Service Page 3: Enterprise Medical ──
  "service3.heroTitle": { en: "Enterprise Medical System", th: "ระบบการแพทย์ระดับองค์กร" },
  "service3.heroDesc": { 
    en: "Enterprise-grade systems for hospitals, multi-location clinics, and healthcare networks. HIS integration, advanced analytics, and precision medicine workflows.",
    th: "ระบบระดับองค์กรสำหรับโรงพยาบาล คลินิกหลายสาขา และเครือข่ายสุขภาพ การเชื่อมต่อ HIS การวิเคราะห์ขั้นสูง และเวิร์กโฟลว์การแพทย์แม่นยำ"
  },
  "service3.sectionTitle": { en: "Built for Healthcare at Scale", th: "สร้างมาเพื่อการดูแลสุขภาพขนาดใหญ่" },
  "service3.sectionDesc": { 
    en: "Our enterprise solutions are designed to handle the complexity of large healthcare organizations while maintaining reliability and performance.",
    th: "โซลูชันระดับองค์กรของเราออกแบบมาเพื่อจัดการความซับซ้อนขององค์กรด้านสุขภาพขนาดใหญ่พร้อมรักษาความน่าเชื่อถือและประสิทธิภาพ"
  },
  "service3.feature1.title": { en: "HIS Integration", th: "การเชื่อมต่อ HIS" },
  "service3.feature1.desc": { en: "Seamless integration with existing Hospital Information Systems and third-party medical software.", th: "การเชื่อมต่ออย่างราบรื่นกับระบบสารสนเทศโรงพยาบาลที่มีอยู่และซอฟต์แวร์ทางการแพทย์ของบุคคลที่สาม" },
  "service3.feature2.title": { en: "Enterprise Security", th: "ความปลอดภัยระดับองค์กร" },
  "service3.feature2.desc": { en: "Bank-level security with encryption, audit trails, and compliance with healthcare regulations.", th: "ความปลอดภัยระดับธนาคารพร้อมการเข้ารหัส บันทึกการตรวจสอบ และการปฏิบัติตามกฎระเบียบด้านสุขภาพ" },
  "service3.feature3.title": { en: "Cloud Infrastructure", th: "โครงสร้างพื้นฐานคลาวด์" },
  "service3.feature3.desc": { en: "Scalable cloud architecture that grows with your organization, with 99.99% uptime guarantee.", th: "สถาปัตยกรรมคลาวด์ที่ขยายได้เติบโตไปพร้อมกับองค์กรของคุณ พร้อมการรับประกันเวลาทำงาน 99.99%" },
  "service3.feature4.title": { en: "Multi-site Management", th: "การจัดการหลายสาขา" },
  "service3.feature4.desc": { en: "Centralized control across multiple locations with role-based access and unified reporting.", th: "การควบคุมแบบรวมศูนย์ข้ามหลายสถานที่พร้อมการเข้าถึงตามบทบาทและการรายงานแบบรวม" },
  "service3.capabilitiesTitle": { en: "Comprehensive Healthcare Infrastructure", th: "โครงสร้างพื้นฐานด้านสุขภาพครบวงจร" },
  "service3.ctaTitle": { en: "Ready to Scale Your Healthcare Operations?", th: "พร้อมขยายการดำเนินงานด้านสุขภาพของคุณหรือยัง?" },
  "service3.ctaDesc": { en: "Let's discuss how we can build enterprise-grade infrastructure for your organization.", th: "มาพูดคุยกันว่าเราจะสร้างโครงสร้างพื้นฐานระดับองค์กรสำหรับองค์กรของคุณได้อย่างไร" },

  // ── Service Page 4: AI Precision Medicine ──
  "service4.heroTitle": { en: "AI for Precision Medicine", th: "AI สำหรับการแพทย์แม่นยำ" },
  "service4.heroDesc": { 
    en: "AI-powered solutions for diagnostics, predictive health analytics, personalized treatment recommendations, and longevity biomarker analysis. Harness machine learning to extend healthspan.",
    th: "โซลูชันขับเคลื่อนด้วย AI สำหรับการวินิจฉัย การวิเคราะห์สุขภาพเชิงคาดการณ์ คำแนะนำการรักษาเฉพาะบุคคล และการวิเคราะห์ไบโอมาร์กเกอร์อายุยืน ใช้ประโยชน์จาก Machine Learning เพื่อขยายอายุขัยที่แข็งแรง"
  },
  "service4.sectionTitle": { en: "The Future of Healthcare is AI-Powered", th: "อนาคตของการดูแลสุขภาพขับเคลื่อนด้วย AI" },
  "service4.sectionDesc": { 
    en: "Leverage cutting-edge artificial intelligence to unlock insights that extend healthspan and optimize patient outcomes.",
    th: "ใช้ประโยชน์จากปัญญาประดิษฐ์ล้ำสมัยเพื่อปลดล็อกข้อมูลเชิงลึกที่ขยายอายุขัยที่แข็งแรงและปรับปรุงผลลัพธ์ของผู้ป่วย"
  },
  "service4.feature1.title": { en: "Biomarker Analysis", th: "การวิเคราะห์ไบโอมาร์กเกอร์" },
  "service4.feature1.desc": { en: "AI-driven analysis of longevity biomarkers to track biological age and health optimization opportunities.", th: "การวิเคราะห์ไบโอมาร์กเกอร์อายุยืนด้วย AI เพื่อติดตามอายุทางชีวภาพและโอกาสในการปรับปรุงสุขภาพ" },
  "service4.feature2.title": { en: "Predictive Analytics", th: "การวิเคราะห์เชิงคาดการณ์" },
  "service4.feature2.desc": { en: "Machine learning models that predict health risks and recommend preventive interventions.", th: "โมเดล Machine Learning ที่คาดการณ์ความเสี่ยงด้านสุขภาพและแนะนำการแทรกแซงเชิงป้องกัน" },
  "service4.feature3.title": { en: "Personalized Treatment", th: "การรักษาเฉพาะบุคคล" },
  "service4.feature3.desc": { en: "AI-powered treatment recommendations tailored to individual patient profiles and health goals.", th: "คำแนะนำการรักษาด้วย AI ที่ปรับให้เหมาะกับโปรไฟล์ผู้ป่วยแต่ละรายและเป้าหมายสุขภาพ" },
  "service4.feature4.title": { en: "Longevity Insights", th: "ข้อมูลเชิงลึกด้านอายุยืน" },
  "service4.feature4.desc": { en: "Comprehensive dashboards tracking healthspan metrics and longevity optimization progress.", th: "แดชบอร์ดครบวงจรติดตามตัวชี้วัดอายุขัยที่แข็งแรงและความก้าวหน้าในการปรับปรุงอายุยืน" },
  "service4.ctaTitle": { en: "Ready to Harness AI for Better Health Outcomes?", th: "พร้อมใช้ AI เพื่อผลลัพธ์สุขภาพที่ดีขึ้นหรือยัง?" },
  "service4.ctaDesc": { en: "Let's explore how AI can transform your practice and extend patient healthspan.", th: "มาสำรวจว่า AI จะเปลี่ยนแปลงการปฏิบัติงานและขยายอายุขัยที่แข็งแรงของผู้ป่วยได้อย่างไร" },

  // ── Service Page 5: Healthcare Business ──
  "service5.heroTitle": { en: "Enterprise Business Management", th: "ระบบจัดการธุรกิจองค์กร" },
  "service5.heroDesc": { 
    en: "Comprehensive business management solutions for enterprises and organizations. Financial tracking, staff management, inventory control, and operational analytics to scale your business.",
    th: "โซลูชันการจัดการธุรกิจครบวงจรสำหรับองค์กร การติดตามการเงิน การจัดการพนักงาน การควบคุมสินค้าคงคลัง และการวิเคราะห์การดำเนินงานเพื่อขยายธุรกิจของคุณ"
  },
  "service5.sectionTitle": { en: "Run Your Organization Like a Pro", th: "บริหารองค์กรอย่างมืออาชีพ" },
  "service5.sectionDesc": { 
    en: "Our business management platform handles the operational complexity so you can focus on core business and enterprise growth.",
    th: "แพลตฟอร์มจัดการธุรกิจของเราจัดการความซับซ้อนในการดำเนินงานเพื่อให้คุณมุ่งเน้นธุรกิจหลักและการเติบโตขององค์กร"
  },
  "service5.feature1.title": { en: "Financial Management", th: "การจัดการการเงิน" },
  "service5.feature1.desc": { en: "Complete revenue tracking, billing automation, cost management, and financial reporting for your organization.", th: "การติดตามรายได้ครบวงจร การออกบิลอัตโนมัติ การจัดการต้นทุน และการรายงานการเงินสำหรับองค์กรของคุณ" },
  "service5.feature2.title": { en: "Staff Management", th: "การจัดการพนักงาน" },
  "service5.feature2.desc": { en: "Employee scheduling, payroll integration, performance tracking, and team communication tools.", th: "การจัดตารางพนักงาน การเชื่อมต่อเงินเดือน การติดตามประสิทธิภาพ และเครื่องมือสื่อสารในทีม" },
  "service5.feature3.title": { en: "Inventory Control", th: "การควบคุมสินค้าคงคลัง" },
  "service5.feature3.desc": { en: "Supplies tracking, automated reordering, vendor management, and cost optimization.", th: "การติดตามสินค้าคงคลัง การสั่งซื้อใหม่อัตโนมัติ การจัดการผู้ขาย และการปรับปรุงต้นทุน" },
  "service5.feature4.title": { en: "Business Analytics", th: "การวิเคราะห์ธุรกิจ" },
  "service5.feature4.desc": { en: "Real-time dashboards, KPI tracking, revenue forecasting, and operational insights to drive growth.", th: "แดชบอร์ดเรียลไทม์ การติดตาม KPI การพยากรณ์รายได้ และข้อมูลเชิงลึกด้านการดำเนินงานเพื่อขับเคลื่อนการเติบโต" },
  "service5.ctaTitle": { en: "Ready to Streamline Your Enterprise Operations?", th: "พร้อมปรับปรุงการดำเนินงานขององค์กรหรือยัง?" },
  "service5.ctaDesc": { en: "Let's build a business management system that helps your organization thrive.", th: "มาสร้างระบบจัดการธุรกิจที่ช่วยให้องค์กรของคุณเติบโต" },
  "service5.perfectFor1": { en: "Enterprises", th: "องค์กร" },
  "service5.perfectFor2": { en: "Growing Businesses", th: "ธุรกิจที่กำลังเติบโต" },
  "service5.perfectFor3": { en: "Multi-site Organizations", th: "องค์กรหลายสาขา" },
  "service5.perfectFor4": { en: "Startups & SMEs", th: "สตาร์ทอัพและ SMEs" },

  // ── Service Page 6: AI Client Prediction ──
  "service6.heroTitle": { en: "AI Client Prediction", th: "AI ทำนายลูกค้า" },
  "service6.heroDesc": { 
    en: "AI-powered client prediction and retention analytics. Forecast customer behavior, identify at-risk clients, optimize marketing campaigns, and maximize lifetime value.",
    th: "การวิเคราะห์การทำนายและรักษาลูกค้าด้วย AI คาดการณ์พฤติกรรมลูกค้า ระบุลูกค้าที่มีความเสี่ยง ปรับแต่งแคมเปญการตลาด และเพิ่มมูลค่าตลอดชีพ"
  },
  "service6.sectionTitle": { en: "Predict, Retain, Grow", th: "ทำนาย รักษา เติบโต" },
  "service6.sectionDesc": { 
    en: "Use AI to understand your clients better and take proactive actions that drive retention and revenue.",
    th: "ใช้ AI เพื่อเข้าใจลูกค้าของคุณดีขึ้นและดำเนินการเชิงรุกที่ขับเคลื่อนการรักษาลูกค้าและรายได้"
  },
  "service6.feature1.title": { en: "Visit Prediction", th: "การทำนายการนัดพบ" },
  "service6.feature1.desc": { en: "AI models predict when clients are likely to engage next, enabling proactive outreach.", th: "โมเดล AI ทำนายว่าลูกค้ามีแนวโน้มจะกลับมาเมื่อใด ช่วยให้สามารถติดต่อเชิงรุกได้" },
  "service6.feature2.title": { en: "Churn Analysis", th: "การวิเคราะห์การสูญเสียลูกค้า" },
  "service6.feature2.desc": { en: "Identify at-risk clients before they leave and take action with automated retention campaigns.", th: "ระบุลูกค้าที่มีความเสี่ยงก่อนที่จะจากไปและดำเนินการด้วยแคมเปญรักษาลูกค้าอัตโนมัติ" },
  "service6.feature3.title": { en: "Campaign Optimization", th: "การปรับแต่งแคมเปญ" },
  "service6.feature3.desc": { en: "AI-powered marketing recommendations to reach the right clients at the right time.", th: "คำแนะนำการตลาดด้วย AI เพื่อเข้าถึงลูกค้าที่เหมาะสมในเวลาที่เหมาะสม" },
  "service6.feature4.title": { en: "Lifetime Value", th: "มูลค่าตลอดชีพ" },
  "service6.feature4.desc": { en: "Calculate and maximize client lifetime value with personalized engagement strategies.", th: "คำนวณและเพิ่มมูลค่าตลอดชีพของลูกค้าด้วยกลยุทธ์การมีส่วนร่วมเฉพาะบุคคล" },
  "service6.ctaTitle": { en: "Ready to Predict and Retain More Clients?", th: "พร้อมทำนายและรักษาลูกค้ามากขึ้นหรือยัง?" },
  "service6.ctaDesc": { en: "Let AI help you understand your clients and grow your business.", th: "ให้ AI ช่วยคุณเข้าใจลูกค้าและขยายธุรกิจของคุณ" },
  "service6.perfectFor1": { en: "Sales Teams", th: "ทีมขาย" },
  "service6.perfectFor2": { en: "Marketing Teams", th: "ทีมการตลาด" },
  "service6.perfectFor3": { en: "Business Development", th: "พัฒนาธุรกิจ" },
  "service6.perfectFor4": { en: "Enterprise CRM", th: "CRM องค์กร" },

  // ── Service Page 7: Financial Tracking ──
  "service7.heroTitle": { en: "Financial Tracking Platform", th: "แพลตฟอร์มติดตามการเงิน" },
  "service7.heroDesc": { 
    en: "Complete financial management for enterprises. Real-time revenue tracking, expense management, profitability analysis, and automated financial reporting.",
    th: "การจัดการการเงินครบวงจรสำหรับองค์กร ติดตามรายได้แบบเรียลไทม์ จัดการค่าใช้จ่าย วิเคราะห์กำไร และรายงานการเงินอัตโนมัติ"
  },
  "service7.sectionTitle": { en: "Complete Financial Visibility", th: "มองเห็นการเงินครบถ้วน" },
  "service7.sectionDesc": { 
    en: "Know exactly where your money is coming from and going to, with real-time insights that drive better decisions.",
    th: "รู้แน่ชัดว่าเงินของคุณมาจากไหนและไปที่ไหน ด้วยข้อมูลเชิงลึกแบบเรียลไทม์ที่ขับเคลื่อนการตัดสินใจที่ดีขึ้น"
  },
  "service7.feature1.title": { en: "Revenue Tracking", th: "การติดตามรายได้" },
  "service7.feature1.desc": { en: "Real-time visibility into all revenue streams with automated categorization and reconciliation.", th: "มองเห็นรายได้ทุกช่องทางแบบเรียลไทม์พร้อมการจัดหมวดหมู่และการกระทบยอดอัตโนมัติ" },
  "service7.feature2.title": { en: "Expense Management", th: "การจัดการค่าใช้จ่าย" },
  "service7.feature2.desc": { en: "Track and categorize expenses, manage vendors, and identify cost-saving opportunities.", th: "ติดตามและจัดหมวดหมู่ค่าใช้จ่าย จัดการผู้ขาย และระบุโอกาสในการประหยัดต้นทุน" },
  "service7.feature3.title": { en: "Profit Analysis", th: "การวิเคราะห์กำไร" },
  "service7.feature3.desc": { en: "Understand profitability by service, provider, and location with detailed margin analysis.", th: "เข้าใจความสามารถในการทำกำไรตามบริการ ผู้ให้บริการ และสถานที่ด้วยการวิเคราะห์มาร์จินโดยละเอียด" },
  "service7.feature4.title": { en: "Financial Reports", th: "รายงานการเงิน" },
  "service7.feature4.desc": { en: "Automated financial statements, tax-ready reports, and customizable financial dashboards.", th: "งบการเงินอัตโนมัติ รายงานพร้อมภาษี และแดชบอร์ดการเงินที่ปรับแต่งได้" },
  "service7.ctaTitle": { en: "Ready to Take Control of Your Finances?", th: "พร้อมควบคุมการเงินของคุณหรือยัง?" },
  "service7.ctaDesc": { en: "Get complete visibility into your organization's financial health.", th: "มองเห็นสุขภาพการเงินขององค์กรคุณอย่างครบถ้วน" },
  "service7.perfectFor1": { en: "CFOs & Finance Teams", th: "CFO และทีมการเงิน" },
  "service7.perfectFor2": { en: "Enterprise Accounting", th: "บัญชีองค์กร" },
  "service7.perfectFor3": { en: "Growing Businesses", th: "ธุรกิจที่กำลังเติบโต" },
  "service7.perfectFor4": { en: "Multi-site Organizations", th: "องค์กรหลายสาขา" },

  // ── Service Page 8: Dashboard Visualization ──
  "service8.heroTitle": { en: "Dashboard & Visualization", th: "แดชบอร์ดและการแสดงผล" },
  "service8.heroDesc": { 
    en: "Beautiful, real-time dashboards that transform your business data into actionable insights. KPI monitoring, trend analysis, and customizable reports for smarter decisions.",
    th: "แดชบอร์ดสวยงามแบบเรียลไทม์ที่เปลี่ยนข้อมูลธุรกิจเป็นข้อมูลเชิงลึกที่นำไปใช้ได้ ติดตาม KPI วิเคราะห์แนวโน้ม และรายงานที่ปรับแต่งได้เพื่อการตัดสินใจที่ชาญฉลาด"
  },
  "service8.sectionTitle": { en: "See Your Data Come to Life", th: "ดูข้อมูลของคุณมีชีวิต" },
  "service8.sectionDesc": { 
    en: "Transform raw data into visual insights that help you make better decisions faster.",
    th: "เปลี่ยนข้อมูลดิบให้เป็นข้อมูลเชิงลึกภาพที่ช่วยให้คุณตัดสินใจได้ดีขึ้นและเร็วขึ้น"
  },
  "service8.feature1.title": { en: "KPI Monitoring", th: "การติดตาม KPI" },
  "service8.feature1.desc": { en: "Track your most important metrics in real-time with alerts when KPIs deviate from targets.", th: "ติดตามตัวชี้วัดที่สำคัญที่สุดของคุณแบบเรียลไทม์พร้อมการแจ้งเตือนเมื่อ KPI เบี่ยงเบนจากเป้าหมาย" },
  "service8.feature2.title": { en: "Trend Analysis", th: "การวิเคราะห์แนวโน้ม" },
  "service8.feature2.desc": { en: "Visualize trends over time to identify patterns, seasonality, and growth opportunities.", th: "แสดงภาพแนวโน้มในช่วงเวลาเพื่อระบุรูปแบบ ฤดูกาล และโอกาสในการเติบโต" },
  "service8.feature3.title": { en: "Visual Analytics", th: "การวิเคราะห์ภาพ" },
  "service8.feature3.desc": { en: "Beautiful charts, graphs, and visualizations that make complex data easy to understand.", th: "กราฟ แผนภูมิ และการแสดงผลที่สวยงามที่ทำให้ข้อมูลซับซ้อนเข้าใจง่าย" },
  "service8.feature4.title": { en: "Custom Reports", th: "รายงานกำหนดเอง" },
  "service8.feature4.desc": { en: "Build your own dashboards and reports with drag-and-drop simplicity.", th: "สร้างแดชบอร์ดและรายงานของคุณเองด้วยการลากและวางที่ง่ายดาย" },
  "service8.tag1": { en: "KPIs", th: "KPI" },
  "service8.tag2": { en: "Real-time", th: "เรียลไทม์" },
  "service8.tag3": { en: "Charts", th: "กราฟ" },
  "service8.heroTag": { en: "Data-Driven Decisions", th: "การตัดสินใจจากข้อมูล" },
  "service8.dashboardChip": { en: "Dashboard Types", th: "ประเภทแดชบอร์ด" },
  "service8.dashboardTitle": { en: "Dashboards for Every Need", th: "แดชบอร์ดสำหรับทุกความต้องการ" },
  "service8.dashboard1.title": { en: "Executive Overview", th: "ภาพรวมสำหรับผู้บริหาร" },
  "service8.dashboard1.desc": { en: "High-level metrics for leadership: revenue, business volume, growth rates, and key performance indicators.", th: "ตัวชี้วัดระดับสูงสำหรับผู้นำ: รายได้ ปริมาณธุรกิจ อัตราการเติบโต และตัวชี้วัดประสิทธิภาพหลัก" },
  "service8.dashboard2.title": { en: "Operations Dashboard", th: "แดชบอร์ดการดำเนินงาน" },
  "service8.dashboard2.desc": { en: "Daily operations tracking: tasks, workflows, staff utilization, and resource allocation.", th: "การติดตามการดำเนินงานประจำวัน: งาน เวิร์กโฟลว์ การใช้ประโยชน์พนักงาน และการจัดสรรทรัพยากร" },
  "service8.dashboard3.title": { en: "Financial Dashboard", th: "แดชบอร์ดการเงิน" },
  "service8.dashboard3.desc": { en: "Financial performance: revenue by service, expense tracking, profitability, and cash flow.", th: "ประสิทธิภาพทางการเงิน: รายได้ตามบริการ การติดตามค่าใช้จ่าย ความสามารถในการทำกำไร และกระแสเงินสด" },
  "service8.dashboard4.title": { en: "Client Analytics", th: "การวิเคราะห์ลูกค้า" },
  "service8.dashboard4.desc": { en: "Client insights: demographics, engagement patterns, satisfaction scores, and retention metrics.", th: "ข้อมูลเชิงลึกลูกค้า: ข้อมูลประชากร รูปแบบการมีส่วนร่วม คะแนนความพึงพอใจ และตัวชี้วัดการรักษาลูกค้า" },
  "service8.capabilitiesChip": { en: "Platform Features", th: "คุณสมบัติแพลตฟอร์ม" },
  "service8.capabilitiesTitle": { en: "Powerful Visualization Tools", th: "เครื่องมือแสดงผลที่ทรงพลัง" },
  "service8.cap1": { en: "Real-time KPI dashboards", th: "แดชบอร์ด KPI แบบเรียลไทม์" },
  "service8.cap2": { en: "Customizable visualizations", th: "การแสดงผลที่ปรับแต่งได้" },
  "service8.cap3": { en: "Trend & pattern analysis", th: "การวิเคราะห์แนวโน้มและรูปแบบ" },
  "service8.cap4": { en: "Comparative reporting", th: "รายงานเปรียบเทียบ" },
  "service8.cap5": { en: "Drill-down analytics", th: "การวิเคราะห์เจาะลึก" },
  "service8.cap6": { en: "Automated report scheduling", th: "การกำหนดตารางรายงานอัตโนมัติ" },
  "service8.cap7": { en: "Export to PDF/Excel", th: "ส่งออกเป็น PDF/Excel" },
  "service8.cap8": { en: "Role-based access", th: "การเข้าถึงตามบทบาท" },
  "service8.cap9": { en: "Mobile-friendly dashboards", th: "แดชบอร์ดที่รองรับมือถือ" },
  "service8.cap10": { en: "Data integration APIs", th: "API เชื่อมต่อข้อมูล" },
  "service8.idealFor": { en: "Ideal For", th: "เหมาะสำหรับ" },
  "service8.ideal1": { en: "Enterprise Managers", th: "ผู้จัดการองค์กร" },
  "service8.ideal2": { en: "Business Owners", th: "เจ้าของธุรกิจ" },
  "service8.ideal3": { en: "C-Level Executives", th: "ผู้บริหารระดับสูง" },
  "service8.ideal4": { en: "Operations Teams", th: "ทีมดำเนินงาน" },
  "service8.ideal5": { en: "Financial Analysts", th: "นักวิเคราะห์การเงิน" },
  "service8.ideal6": { en: "Multi-site Networks", th: "เครือข่ายหลายสาขา" },
  "service8.ctaTitle": { en: "Ready to Visualize Your Success?", th: "พร้อมแสดงภาพความสำเร็จของคุณหรือยัง?" },
  "service8.ctaDesc": { en: "Let's build dashboards that give you the insights you need.", th: "มาสร้างแดชบอร์ดที่ให้ข้อมูลเชิงลึกที่คุณต้องการ" },

  // ── Team ──
  "team.chip": { en: "Our Team", th: "ทีมงานของเรา" },
  "team.title1": { en: "Meet the", th: "พบกับ" },
  "team.titleAccent": { en: "Team", th: "ทีมงาน" },
  "team.sub": {
    en: "Computer Engineering students at Chulalongkorn University and International Science and Engineering Fair (ISEF) USA finalists in health tech innovation, with 6+ years of experience in health tech and medical innovation.",
    th: "นิสิตวิศวกรรมคอมพิวเตอร์จากจุฬาลงกรณ์มหาวิทยาลัย และผู้เข้ารอบสุดท้ายของการแข่งขัน International Science and Engineering Fair (ISEF) ประเทศสหรัฐอเมริกา ด้านนวัตกรรมเทคโนโลยีสุขภาพ พร้อมประสบการณ์กว่า 6 ปีในด้านเทคโนโลยีสุขภาพและนวัตกรรมทางการแพทย์",
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
  "contact.followLinkedIn": { en: "Follow us on LinkedIn", th: "ติดตามเราบน LinkedIn" },

  // ── Footer ──
  "footer.tagline": {
    en: "Building the future of longevity.",
    th: "สร้างอนาคตของความยืนยาว",
  },
  "footer.services": { en: "Healthcare", th: "บริการสุขภาพ" },
  "footer.business": { en: "Enterprise", th: "องค์กร" },
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

  // ── Cookie Consent ──
  "cookie.title": { en: "We use cookies", th: "เราใช้คุกกี้" },
  "cookie.description": {
    en: "We use cookies to improve your browsing experience, analyze site traffic, and personalize content. By clicking \"Accept\", you consent to our use of cookies.",
    th: "เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การท่องเว็บ วิเคราะห์การเข้าชมเว็บไซต์ และปรับแต่งเนื้อหา การคลิก \"ยอมรับ\" แสดงว่าคุณยินยอมให้เราใช้คุกกี้",
  },
  "cookie.accept": { en: "Accept", th: "ยอมรับ" },
  "cookie.decline": { en: "Decline", th: "ปฏิเสธ" },
};
