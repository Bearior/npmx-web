/* Custom LMS configurator — the catalogue.
   Single source of truth for features, prices, and dependency edges.
   Module names live here rather than in translations.ts because they are edited
   together with price and difficulty. UI chrome strings stay in dict. Spec §10. */

import type {
  BaseFeature,
  Category,
  Module,
  ModuleId,
  Preset,
  StudentBand,
} from "./types";

/* ── Base platform ──────────────────────────────────────────────
   Always on the canvas, cannot be removed. Priced well below its
   difficulty-derived value on purpose — see spec §2. */

export const BASE_SETUP_THB = 49_000;
export const BASE_MONTHLY_THB = 4_500;

export const BASE_FEATURES: BaseFeature[] = [
  { difficulty: 6, name: { en: "White-label branding (name, logo, colours)", th: "ปรับแบรนด์เป็นของคุณ (ชื่อ โลโก้ สี)" } },
  { difficulty: 6, name: { en: "Thai & English interface", th: "ระบบภาษาไทยและอังกฤษ" } },
  { difficulty: 6, name: { en: "Your own private instance & database", th: "เซิร์ฟเวอร์และฐานข้อมูลส่วนตัว" } },
  { difficulty: 5, name: { en: "Owner admin + student accounts", th: "บัญชีผู้ดูแลและนักเรียน" } },
  { difficulty: 7, name: { en: "Student sign-up & approval", th: "สมัครเรียนและอนุมัติ" } },
  { difficulty: 6, name: { en: "Courses, levels & lessons (units)", th: "คอร์ส ระดับชั้น และบทเรียน" } },
  { difficulty: 4, name: { en: "Public course catalogue", th: "หน้ารวมคอร์สสาธารณะ" } },
  { difficulty: 6, name: { en: "5 core question types", th: "ข้อสอบ 5 รูปแบบหลัก" } },
  { difficulty: 3, name: { en: "Rich-text questions + multiple acceptable answers", th: "ข้อสอบ Rich-text + หลายคำตอบที่ถูก" } },
  { difficulty: 4, name: { en: "Timer, shuffle, scheduling, passing score", th: "จับเวลา สลับข้อ ตั้งเวลาสอบ เกณฑ์ผ่าน" } },
  { difficulty: 2, name: { en: "Auto-grading + % results", th: "ตรวจอัตโนมัติ + ผลคะแนน %" } },
];

/* ── Categories ─────────────────────────────────────────────────
   Ids mirror the source feature table. `courses` has no optional
   modules — every course feature is in base — so the shelf renders
   only categories holding at least one available module. Spec §3.2. */

export const CATEGORIES: Category[] = [
  { id: "brand", name: { en: "Brand & platform", th: "แบรนด์และแพลตฟอร์ม" } },
  { id: "users", name: { en: "Users & roles", th: "ผู้ใช้และสิทธิ์" } },
  { id: "courses", name: { en: "Courses & lessons", th: "คอร์สและบทเรียน" } },
  { id: "exams", name: { en: "Exams & quizzes", th: "ข้อสอบ" } },
  { id: "grading-ai", name: { en: "Grading & AI", th: "ตรวจและ AI" } },
  { id: "classroom", name: { en: "Classroom & engagement", th: "ห้องเรียน" } },
  { id: "money", name: { en: "Money & growth", th: "การเงินและการเติบโต" } },
];

/* ── Modules ────────────────────────────────────────────────────
   Setup ≈ ฿3,200 × difficulty, rounded to the nearest ฿1,000.
   AI modules carry a 1.8–2.0× premium. Monthly ≈ 4–6% of setup,
   weighted up where runtime genuinely costs. Spec §2. */

export const MODULES: Module[] = [
  /* Chain 1 — staff-roles → grading-queue → writing-speaking-exams → ai-essay-scoring */
  {
    id: "staff-roles",
    category: "users",
    difficulty: 5,
    setupTHB: 16_000,
    monthlyTHB: 700,
    requires: [],
    status: "available",
    name: { en: "Examiner & assistant staff roles", th: "บทบาทผู้ตรวจ/ผู้ช่วย" },
    desc: {
      en: "Give teachers, examiners and assistants their own accounts with scoped permissions.",
      th: "ให้ครู ผู้ตรวจ และผู้ช่วย มีบัญชีของตัวเองพร้อมกำหนดสิทธิ์การเข้าถึง",
    },
  },
  {
    id: "grading-queue",
    category: "grading-ai",
    difficulty: 6,
    setupTHB: 19_000,
    monthlyTHB: 900,
    requires: ["staff-roles"],
    status: "available",
    name: { en: "Examiner grading queue", th: "คิวตรวจข้อสอบ" },
    desc: {
      en: "A shared queue that routes ungraded work to examiners and tracks who marked what.",
      th: "คิวงานที่ส่งข้อสอบรอตรวจไปยังผู้ตรวจ พร้อมบันทึกว่าใครตรวจข้อไหน",
    },
  },
  {
    id: "writing-speaking-exams",
    category: "exams",
    difficulty: 4,
    setupTHB: 13_000,
    monthlyTHB: 600,
    requires: ["grading-queue"],
    status: "available",
    name: { en: "Writing & speaking exams", th: "ข้อสอบเขียน/พูด" },
    desc: {
      en: "Free-text and audio answer types that a human examiner grades.",
      th: "ข้อสอบแบบเขียนตอบและอัดเสียง ให้ผู้ตรวจเป็นคนให้คะแนน",
    },
  },
  {
    id: "ai-essay-scoring",
    category: "grading-ai",
    difficulty: 8,
    setupTHB: 46_000,
    monthlyTHB: 3_500,
    monthlyNote: { en: "+ AI usage", th: "+ ค่าใช้งาน AI" },
    requires: ["writing-speaking-exams"],
    status: "available",
    name: { en: "AI handwriting reading (OCR) + essay scoring", th: "AI อ่านลายมือ + ตรวจเรียงความ" },
    desc: {
      en: "Reads scanned handwritten answers and drafts a score with reasoning, for an examiner to confirm.",
      th: "อ่านคำตอบลายมือที่สแกนเข้ามา แล้วเสนอคะแนนพร้อมเหตุผล ให้ผู้ตรวจยืนยัน",
    },
  },

  /* Chain 2 — classroom-stream hub */
  {
    id: "classroom-stream",
    category: "classroom",
    difficulty: 7,
    setupTHB: 22_000,
    monthlyTHB: 1_200,
    requires: [],
    status: "available",
    name: { en: "Classroom: stream, announcements, comments", th: "สตรีมห้องเรียน ประกาศ คอมเมนต์" },
    desc: {
      en: "The classroom shell every other classroom feature lives inside.",
      th: "โครงห้องเรียนที่ฟีเจอร์ห้องเรียนอื่น ๆ ทำงานอยู่ภายใน",
    },
  },
  {
    id: "people-roster",
    category: "classroom",
    difficulty: 5,
    setupTHB: 16_000,
    monthlyTHB: 400,
    requires: ["classroom-stream"],
    status: "available",
    name: { en: "People roster", th: "รายชื่อผู้เรียน" },
    desc: {
      en: "Who is in each class, at a glance.",
      th: "ดูรายชื่อผู้เรียนในแต่ละห้องได้ทันที",
    },
  },
  {
    id: "assignments",
    category: "classroom",
    difficulty: 7,
    setupTHB: 22_000,
    monthlyTHB: 1_500,
    requires: ["classroom-stream", "grading-queue"],
    status: "available",
    name: { en: "Assignments with turn-in + file uploads", th: "งาน/ส่งไฟล์" },
    desc: {
      en: "Set work, collect submissions with attachments, send them to the grading queue.",
      th: "สั่งงาน รับไฟล์ที่ส่งเข้ามา แล้วส่งต่อเข้าคิวตรวจ",
    },
  },
  {
    id: "classroom-chat",
    category: "classroom",
    difficulty: 8,
    setupTHB: 26_000,
    monthlyTHB: 1_400,
    requires: ["classroom-stream", "staff-roles"],
    status: "available",
    name: { en: "Classroom chat", th: "แชทในห้องเรียน" },
    desc: {
      en: "Private one-to-one messaging between a teacher and a student.",
      th: "แชทส่วนตัวแบบตัวต่อตัวระหว่างครูกับนักเรียน",
    },
    options: [
      {
        id: "chat-open-to-all",
        setupTHB: 6_000,
        monthlyTHB: 800,
        name: { en: "Open chat to everyone ↔ anyone", th: "เปิดแชทให้ทุกคนคุยกันได้" },
        desc: {
          en: "Any member can message any other, with moderation tools. Replaces the teacher-only restriction.",
          th: "ทุกคนสามารถส่งข้อความหากันได้ พร้อมเครื่องมือควบคุมดูแล แทนที่แบบครู-นักเรียนเท่านั้น",
        },
      },
    ],
  },
  {
    id: "certificates",
    category: "classroom",
    difficulty: 8,
    setupTHB: 26_000,
    monthlyTHB: 500,
    requires: [],
    status: "available",
    name: { en: "Certificates of completion (PDF)", th: "ใบประกาศนียบัตร (PDF)" },
    desc: {
      en: "Auto-issued PDF certificates when a student meets the completion criteria.",
      th: "ออกใบประกาศนียบัตร PDF อัตโนมัติเมื่อผู้เรียนผ่านเกณฑ์",
    },
  },
  {
    id: "badges",
    category: "classroom",
    difficulty: 5,
    setupTHB: 16_000,
    monthlyTHB: 500,
    requires: [],
    status: "available",
    name: { en: "Achievements & badges", th: "เหรียญรางวัลและความสำเร็จ" },
    desc: {
      en: "Reward streaks, scores and milestones to keep students coming back.",
      th: "ให้รางวัลจากการเรียนต่อเนื่อง คะแนน และเป้าหมาย เพื่อดึงผู้เรียนให้กลับมา",
    },
  },

  /* Chain 3 — certificates + custom-domain → custom-design */
  {
    id: "custom-domain",
    category: "brand",
    difficulty: 2,
    setupTHB: 6_000,
    monthlyTHB: 300,
    requires: [],
    status: "available",
    name: { en: "Custom domain", th: "โดเมนของคุณเอง" },
    desc: {
      en: "Run the platform on your-school.com instead of a shared subdomain.",
      th: "ใช้งานระบบบนโดเมนของคุณเอง แทนซับโดเมนที่ใช้ร่วมกัน",
    },
  },
  {
    id: "custom-design",
    category: "brand",
    difficulty: 8,
    setupTHB: 26_000,
    monthlyTHB: 0,
    monthlyNote: { en: "one-off design work", th: "งานออกแบบครั้งเดียว" },
    requires: ["certificates", "custom-domain"],
    status: "available",
    name: { en: "Custom certificate & landing-page design", th: "ออกแบบใบประกาศ + หน้าแรก" },
    desc: {
      en: "Bespoke certificate artwork and a landing page designed around your brand.",
      th: "ออกแบบใบประกาศนียบัตรและหน้าแรกเฉพาะสำหรับแบรนด์ของคุณ",
    },
  },

  /* Chain 4 — payments-promptpay → trial-funnel */
  {
    id: "payments-promptpay",
    category: "money",
    difficulty: 7,
    setupTHB: 22_000,
    monthlyTHB: 1_200,
    monthlyNote: { en: "+ 1% per transaction", th: "+ 1% ต่อรายการ" },
    requires: [],
    status: "available",
    name: { en: "Online payments (PromptPay + auto slip check)", th: "ชำระเงินออนไลน์ (PromptPay + ตรวจสลิปอัตโนมัติ)" },
    desc: {
      en: "Take course fees by PromptPay and verify transfer slips automatically.",
      th: "รับค่าเรียนผ่าน PromptPay และตรวจสอบสลิปโอนเงินอัตโนมัติ",
    },
  },
  {
    id: "trial-funnel",
    category: "money",
    difficulty: 8,
    setupTHB: 26_000,
    monthlyTHB: 1_400,
    requires: ["payments-promptpay"],
    status: "available",
    name: { en: "Free-trial → paid conversion funnel", th: "ทดลองเรียนฟรี → จ่ายเงิน" },
    desc: {
      en: "Let students try a lesson free, then walk them to checkout with reminders.",
      th: "ให้ผู้เรียนทดลองบทเรียนฟรี แล้วพาไปสู่การชำระเงินพร้อมการแจ้งเตือน",
    },
  },
  {
    id: "advanced-analytics",
    category: "money",
    difficulty: 9,
    setupTHB: 29_000,
    monthlyTHB: 1_800,
    requires: [],
    status: "roadmap",
    name: { en: "Advanced analytics & reporting", th: "วิเคราะห์ข้อมูลเชิงลึกและรายงาน" },
    desc: {
      en: "Cohort retention, revenue trends and custom reports.",
      th: "วิเคราะห์การคงอยู่ของผู้เรียน แนวโน้มรายได้ และรายงานที่กำหนดเอง",
    },
  },

  /* Standalone */
  {
    id: "parent-accounts",
    category: "users",
    difficulty: 5,
    setupTHB: 16_000,
    monthlyTHB: 900,
    requires: [],
    status: "available",
    name: { en: "Parent accounts + child progress tracking", th: "บัญชีผู้ปกครอง + ติดตามผลบุตรหลาน" },
    desc: {
      en: "Parents get their own login to follow attendance, scores and progress.",
      th: "ผู้ปกครองมีบัญชีของตัวเองเพื่อติดตามการเข้าเรียน คะแนน และความก้าวหน้า",
    },
  },
  {
    id: "ai-study-assistant",
    category: "grading-ai",
    difficulty: 10,
    setupTHB: 64_000,
    monthlyTHB: 4_500,
    monthlyNote: { en: "+ AI usage", th: "+ ค่าใช้งาน AI" },
    requires: [],
    status: "available",
    name: { en: "AI study assistant (chatbot)", th: "ผู้ช่วยติวเตอร์ AI" },
    desc: {
      en: "A Thai-language tutor chatbot that answers from your own course material.",
      th: "แชทบอทติวเตอร์ภาษาไทยที่ตอบคำถามจากเนื้อหาคอร์สของคุณเอง",
    },
  },
];

export const MODULE_BY_ID: Record<string, Module> = Object.fromEntries(
  MODULES.map((m) => [m.id, m])
);

/* ── Student bands ──────────────────────────────────────────────
   Multiply the monthly total only, quoted against ≤500 as reference.
   Deliberately gentle: marginal cost per student is near zero, so this
   reflects willingness-to-pay rather than cost. Spec §2. */

export const STUDENT_BANDS: StudentBand[] = [
  { maxStudents: 200, multiplier: 0.75, label: { en: "up to 200 students", th: "ไม่เกิน 200 คน" } },
  { maxStudents: 500, multiplier: 1.0, label: { en: "up to 500 students", th: "ไม่เกิน 500 คน" } },
  { maxStudents: 1_000, multiplier: 1.3, label: { en: "up to 1,000 students", th: "ไม่เกิน 1,000 คน" } },
  { maxStudents: 2_000, multiplier: 1.6, label: { en: "up to 2,000 students", th: "ไม่เกิน 2,000 คน" } },
  { maxStudents: 5_000, multiplier: 2.1, label: { en: "up to 5,000 students", th: "ไม่เกิน 5,000 คน" } },
  { maxStudents: null, multiplier: null, label: { en: "over 5,000 — contact us", th: "มากกว่า 5,000 คน — ติดต่อเรา" } },
];

export const STUDENT_STEPS = [100, 200, 300, 500, 750, 1_000, 1_500, 2_000, 3_000, 5_000, 8_000];
export const DEFAULT_STUDENTS = 500;

/* ── Tier presets ───────────────────────────────────────────────
   Bundle prices sit 22–30% below the à la carte sum. Spec §5. */

const SILVER_MODULES: ModuleId[] = [
  "parent-accounts",
  "staff-roles",
  "grading-queue",
  "writing-speaking-exams",
  "certificates",
  "classroom-stream",
  "classroom-chat",
  "assignments",
  "people-roster",
  "badges",
];

export const PRESETS: Preset[] = [
  {
    id: "bronze",
    emoji: "🥉",
    name: { en: "Bronze", th: "Bronze" },
    modules: [],
    options: [],
    setupTHB: 49_000,
    monthlyTHB: 4_500,
  },
  {
    id: "silver",
    emoji: "🥈",
    name: { en: "Silver", th: "Silver" },
    modules: SILVER_MODULES,
    options: [],
    setupTHB: 169_000,
    monthlyTHB: 9_900,
  },
  {
    id: "gold",
    emoji: "🥇",
    name: { en: "Gold", th: "Gold" },
    modules: [
      ...SILVER_MODULES,
      "custom-domain",
      "custom-design",
      "ai-essay-scoring",
      "ai-study-assistant",
      "payments-promptpay",
      "trial-funnel",
    ],
    options: ["chat-open-to-all"],
    setupTHB: 339_000,
    monthlyTHB: 21_900,
  },
];

export const PRESET_BY_ID: Record<string, Preset> = Object.fromEntries(
  PRESETS.map((p) => [p.id, p])
);

export const QUOTE_EMAIL = "npmxtech@gmail.com";
