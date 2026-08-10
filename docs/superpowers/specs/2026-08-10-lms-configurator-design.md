# Custom LMS Configurator — Design Spec

**Date:** 2026-08-10
**Status:** Approved for planning
**Repo:** `npmx-web` (Next.js 14 App Router)

---

## 1. What this is

A "build your own LMS" page at `/build`, modelled on the Porsche car configurator but using literal drag-and-drop: the visitor drags feature modules from a shelf onto a canvas, dependent modules are pulled in automatically, and two THB totals — ค่าติดตั้ง (one-time) and ค่าบริการรายเดือน (recurring) — update live.

The product being configured is **Custom**, a white-label LMS for Thai tutoring centres (กวดวิชา) and private/international schools.

### In scope

- The feature catalogue: 11 base features + 17 optional modules + 1 paid module option, priced in THB
- A pure, React-free engine: dependency resolution, cascade removal, pricing
- The `/build` page: shelf, canvas, price rail, presets, cascade dialog, mobile tap-to-add
- Shareable build links via query string
- Quote request via the site's existing `mailto:` pattern
- Two integration fixes: a server/client split for page metadata, and repairing `TopMenu`'s broken anchors

### Explicitly out of scope — deferred to a second spec

Repositioning the marketing site around LMS: rewriting `ProductSection` around the seven categories, replacing the eight `/services/*` healthcare pages, reworking `Banner`/`AboutSection` copy.

**Why deferred:** the module catalogue below *is* the new product taxonomy. Writing the marketing copy before this catalogue is final means writing it twice. This spec adds only a nav item and one hero CTA so `/build` is reachable.

---

## 2. Market and pricing model

**Buyers:** private/international schools and tutoring centres. Both chosen because they have a single decision-maker — an owner or director who can act on a self-serve price. Universities and government schools were considered and excluded: they buy through TOR e-bidding and procurement committees, where a web configurator cannot close a deal.

**Competitive reality:** Moodle and Google Classroom are free. Custom's price is justified by what they don't offer — a private instance, white-label branding, Thai-first UI, PromptPay collection, and done-for-you setup. The configurator must sell that, not raw feature count.

### Pricing shape

Hybrid: **one-time ค่าติดตั้ง + recurring ค่าบริการรายเดือน**. Matches how Thai enterprise software is bought, keeps the headline number low enough to convert, and creates recurring revenue.

### Derivation

Module prices are anchored to the difficulty score from the source feature table, which is already a relative effort estimate:

| Rule | Value |
|---|---|
| Setup | `฿3,200 × difficulty`, rounded to the nearest ฿1,000 |
| AI premium | ×1.8–2.0 on setup — prompt engineering, evaluation, Thai-language accuracy work that difficulty alone understates |
| Monthly | 4–6% of setup, weighted up where runtime genuinely costs: sockets (chat), storage (uploads), tokens (AI) |
| Bundle discount | Tiers land 22–30% below the à la carte sum |

**Deliberate exception — the base platform.** Its eleven features sum to difficulty 55, which at ฿3,200/point would be ฿176,000. It is priced at **฿49,000**. The base is the platform itself: built once and amortised across every customer, and it has to clear a psychological entry price. ฿176,000 to start would kill the funnel; ฿49,000 gets a กวดวิชา owner through the door. Optional modules amortise less broadly, so they carry the full difficulty rate.

### Student bands

Multiply the **monthly total only**, quoted against ≤500 students as the reference:

| Students | Multiplier |
|---|---|
| ≤ 200 | ×0.75 |
| ≤ 500 | ×1.00 |
| ≤ 1,000 | ×1.30 |
| ≤ 2,000 | ×1.60 |
| ≤ 5,000 | ×2.10 |
| 5,000+ | ติดต่อเรา (no auto price) |

Deliberately gentle. Marginal cost per student is near zero, so this reflects willingness-to-pay, not cost.

---

## 3. The catalogue

### 3.1 Base platform — always on canvas, cannot be removed

**฿49,000 setup · ฿4,500/month**

| Feature | Difficulty |
|---|---|
| White-label branding (name, logo, colours) | 6 |
| Thai & English interface | 6 |
| Private instance & database | 6 |
| Owner admin + student accounts | 5 |
| Student sign-up & approval | 7 |
| Courses, levels & lessons (units) | 6 |
| Public course catalogue | 4 |
| 5 core question types (choice, checkbox, fill-blank, cloze, short answer) | 6 |
| Rich-text questions + multiple acceptable answers | 3 |
| Timer, shuffle, scheduling, passing score | 4 |
| Auto-grading + % results | 2 |

### 3.2 Optional modules

`requires` lists direct prerequisites only; the engine takes the transitive closure.

| id | Name (EN) | Name (TH) | Cat | d | Setup | Monthly | requires |
|---|---|---|---|---|---|---|---|
| `staff-roles` | Examiner & assistant staff roles | บทบาทผู้ตรวจ/ผู้ช่วย | users | 5 | ฿16,000 | ฿700 | — |
| `grading-queue` | Examiner grading queue | คิวตรวจข้อสอบ | grading-ai | 6 | ฿19,000 | ฿900 | `staff-roles` |
| `writing-speaking-exams` | Writing & speaking exams (staff-graded) | ข้อสอบเขียน/พูด | exams | 4 | ฿13,000 | ฿600 | `grading-queue` |
| `ai-essay-scoring` | AI handwriting OCR + essay scoring | AI อ่านลายมือ + ตรวจเรียงความ | grading-ai | 8 | ฿46,000 | ฿3,500 + usage | `writing-speaking-exams` |
| `classroom-stream` | Classroom stream, announcements, comments | สตรีมห้องเรียน | classroom | 7 | ฿22,000 | ฿1,200 | — |
| `people-roster` | People roster | รายชื่อผู้เรียน | classroom | 5 | ฿16,000 | ฿400 | `classroom-stream` |
| `assignments` | Assignments with turn-in + file uploads | งาน/ส่งไฟล์ | classroom | 7 | ฿22,000 | ฿1,500 | `classroom-stream`, `grading-queue` |
| `classroom-chat` | Classroom chat (teacher ↔ student) | แชทครู-นักเรียน | classroom | 8 | ฿26,000 | ฿1,400 | `classroom-stream`, `staff-roles` |
| `certificates` | Certificates of completion (PDF) | ใบประกาศนียบัตร PDF | classroom | 8 | ฿26,000 | ฿500 | — |
| `custom-domain` | Custom domain | โดเมนของคุณเอง | brand | 2 | ฿6,000 | ฿300 | — |
| `custom-design` | Custom certificate & landing-page design | ออกแบบใบประกาศ + หน้าแรก | brand | 8 | ฿26,000 | ฿0 | `certificates`, `custom-domain` |
| `parent-accounts` | Parent accounts + child progress tracking | บัญชีผู้ปกครอง | users | 5 | ฿16,000 | ฿900 | — |
| `badges` | Achievements & badges | เหรียญรางวัล | classroom | 5 | ฿16,000 | ฿500 | — |
| `payments-promptpay` | Online payments (PromptPay + auto slip check) | ชำระเงิน PromptPay | money | 7 | ฿22,000 | ฿1,200 + 1% txn | — |
| `trial-funnel` | Free-trial → paid conversion funnel | ทดลองเรียนฟรี → จ่ายเงิน | money | 8 | ฿26,000 | ฿1,400 | `payments-promptpay` |
| `ai-study-assistant` | AI study assistant (chatbot) | ผู้ช่วยติวเตอร์ AI | grading-ai | 10 | ฿64,000 | ฿4,500 + usage | — |
| `advanced-analytics` | Advanced analytics & reporting | วิเคราะห์ข้อมูลเชิงลึก | money | 9 | ฿29,000 | ฿1,800 | — |

**Categories:** `brand` (แบรนด์และแพลตฟอร์ม) · `users` (ผู้ใช้และสิทธิ์) · `courses` (คอร์สและบทเรียน) · `exams` (ข้อสอบ) · `grading-ai` (ตรวจและ AI) · `classroom` (ห้องเรียน) · `money` (การเงินและการเติบโต)

Category ids mirror the source feature table. **`courses` has no optional modules** — every course feature sits in base — so the shelf must render only categories holding at least one available module, or it will show an empty group. Six categories appear on the shelf today.

### 3.3 Module options

| Option id | On module | Name | Setup | Monthly |
|---|---|---|---|---|
| `chat-open-to-all` | `classroom-chat` | Open chat to everyone ↔ anyone (แชททุกคน) | +฿6,000 | +฿800 |

Everyone-to-anyone chat is a *superset* of teacher–student chat, not an addition. Modelling it as a paid option rather than a separate module keeps the total honest at ฿32,000 (instead of double-charging ฿58,000) **and removes the need for conflict/upgrade edges in the graph entirely — `requires` is the only edge type.**

### 3.4 Roadmap

`advanced-analytics` has `status: 'roadmap'`. It renders on the shelf as a dashed, undraggable card labelled **เร็ว ๆ นี้**, is excluded from all pricing, and cannot enter a build. Attempts to drag it are logged as a demand signal. Its price is recorded above for future use only.

---

## 4. Dependency graph

Four chains. This is what "make features come together" means in practice.

```
Chain 1 — Grading & AI (strict linear order)
  staff-roles → grading-queue → writing-speaking-exams → ai-essay-scoring
  Dragging ai-essay-scoring pulls all four: ฿94,000 setup · ฿5,700/mo

Chain 2 — Classroom (hub + spokes)
  classroom-stream ─┬→ people-roster
                    ├→ assignments      (also requires grading-queue → staff-roles)
                    └→ classroom-chat   (also requires staff-roles)
                          └ option: chat-open-to-all

Chain 3 — Certificates & identity (two parents, one child)
  certificates  ─┐
                 ├→ custom-design
  custom-domain ─┘

Chain 4 — Money
  payments-promptpay → trial-funnel

Standalone (base only): parent-accounts, badges, ai-study-assistant
```

**Rationale for each edge:** nobody grades without a staff account; there is no queue without graders; there is nothing to OCR unless free-text answers exist; roster/assignments/chat are tabs inside the classroom shell; turned-in work needs a grader; you cannot design a certificate that does not exist, and a custom landing page needs a domain to live on; a free-trial funnel needs a "paid" to convert into.

**Validation:** this graph is fully consistent with the source Bronze/Silver/Gold table — every module's prerequisites appear in the same tier or an earlier one, with no contradictions.

---

## 5. Tier presets

Buttons that populate the canvas in one click. They solve the blank-canvas problem *within* the drag-and-drop model rather than replacing it.

| Tier | Modules | Bundle setup | Bundle monthly | À la carte | Discount |
|---|---|---|---|---|---|
| 🥉 Bronze | base only | **฿49,000** | **฿4,500** | — | — |
| 🥈 Silver | base + `parent-accounts`, `staff-roles`, `grading-queue`, `writing-speaking-exams`, `certificates`, `classroom-stream`, `classroom-chat`, `assignments`, `people-roster`, `badges` | **฿169,000** | **฿9,900** | ฿241,000 / ฿13,100 | 30% / 24% |
| 🥇 Gold | Silver + `custom-domain`, `custom-design`, `ai-essay-scoring`, `ai-study-assistant`, `payments-promptpay`, `trial-funnel`, option `chat-open-to-all` | **฿339,000** | **฿21,900** | ฿437,000 / ฿24,800 | 22% / 12% |

Monthly figures are at the ≤500-student band. AI usage is billed separately on both tiers that include it.

**Sanity check:** a 500-student tutoring centre turning over ฿4–9M/year pays ฿119k/year for Silver — 1.5–3% of revenue for its core operating system, and less than one admin salary. That is the comparison Thai school owners actually make. Gold targets multi-branch chains, not single centres.

---

## 6. The engine

Pure TypeScript, no React imports. This is deliberate: the same engine must serve the desktop canvas, the mobile tap-to-add path, and any later surface (stepped flow, PDF quote) without change.

```
src/lib/configurator/
  types.ts       Module, ModuleOption, CategoryId, ModuleId, StudentBand, Build
  catalog.ts     BASE_FEATURES, MODULES, OPTIONS, CATEGORIES, PRESETS
  resolve.ts     resolve, remove, dependents
  price.ts       price, bandFor
  share.ts       encodeBuild, decodeBuild
```

### Types

```ts
type Module = {
  id: ModuleId
  category: CategoryId
  name: { en: string; th: string }
  desc: { en: string; th: string }
  difficulty: number              // kept for traceability back to the source table
  setupTHB: number
  monthlyTHB: number
  monthlyNote?: { en: string; th: string }   // "+ AI usage", "+ 1% per transaction"
  requires: ModuleId[]
  options?: ModuleOption[]
  status: 'available' | 'roadmap'
}

type Build = {
  selected: ModuleId[]     // what the user explicitly chose
  options: OptionId[]
  students: number
}
```

### API

```ts
resolve(selected: ModuleId[]): { effective: ModuleId[]; autoAdded: ModuleId[] }
// Transitive closure over `requires`. autoAdded = effective minus selected.
// Roadmap modules are filtered out. Unknown ids are dropped silently.

dependents(id: ModuleId, effective: ModuleId[]): ModuleId[]
// Reverse edges — everything in the current build that would break without `id`.
// Powers the cascade dialog.

remove(selected: ModuleId[], id: ModuleId): { next: ModuleId[]; alsoRemoved: ModuleId[] }
// alsoRemoved is the transitive dependent set. Never leaves an invalid build.

price(effective: ModuleId[], options: OptionId[], students: number):
  { setupTHB: number; monthlyTHB: number; band: StudentBand; matchedPreset?: TierId }
// Base always included. Student band multiplies monthly only, rounded to nearest ฿100.
// matchedPreset is set when the effective set exactly equals a tier, so the UI can
// show the bundle price instead of the à la carte sum.
```

**Bundle matching:** when `effective` exactly equals a preset's module set, `price` returns the bundle price. Any deviation returns the à la carte sum. The UI surfaces the gap ("เพิ่มอีก 2 โมดูลเพื่อรับราคาแพ็กเกจ Silver — ประหยัด ฿72,000"), which turns the discount into an upsell.

### Verification

No test framework, by decision. The engine stays pure and React-free specifically so `vitest` can be added later without refactoring. Cases to verify by hand before launch:

1. `resolve(['ai-essay-scoring'])` → 4 modules, ฿94,000 / ฿5,700
2. `resolve(['assignments'])` → `classroom-stream`, `grading-queue`, `staff-roles` + itself
3. `remove(silverSet, 'classroom-stream')` → also removes roster, assignments, chat
4. `price(goldSet, ['chat-open-to-all'], 500)` → ฿339,000 / ฿21,900 via preset match
5. Student band boundaries at exactly 200, 500, 1000, 2000, 5000
6. `decodeBuild(encodeBuild(b))` round-trips for every preset

---

## 7. Canvas UX

### Layout

Three columns: **shelf** (left, grouped by category — see §3.2, six groups today) · **canvas** (centre) · **price rail** (right, sticky).

### Behaviour

- **Never empty.** The canvas renders the locked base block from first paint. No blank slate.
- **Drop anywhere, auto-file.** Dropped modules animate into their category group. No x/y coordinates — the canvas always reads as a coherent system spec and looks identical on a shared link.
- **Dependencies nest visibly.** Auto-pulled modules render *inside* the module that pulled them, tagged **รวมอัตโนมัติ**, so the rule is shown rather than hidden.
- **Drop zone previews the pull** before release: "จะดึง คิวตรวจ มาด้วยโดยอัตโนมัติ". No surprise price jumps.
- **Used modules grey out** on the shelf instead of disappearing.
- **Cascade dialog on removal** names every module going with it and the exact ฿ drop, with one-step undo restoring all of them.
- **Presets** (Bronze / Silver / Gold / เริ่มใหม่) in the top bar populate the canvas.
- **Price rail** shows both totals, the student slider with its band multiplier, module counts, `ขอใบเสนอราคา`, and `คัดลอกลิงก์แบบร่าง`.

### Input handling

**Pointer events, not the HTML5 drag-and-drop API.** HTML5 DnD does not fire on touch at all and cannot be styled mid-drag, which would mean writing the mobile path twice. Pointer events give one code path and a drag ghost under our control.

### Mobile

Below `md`, the shelf becomes a bottom sheet and dragging is replaced by tap-to-add. Same engine, same cascade dialog, same pricing — only the input method changes.

### Motion

Reuse the existing site idiom: the `IntersectionObserver` + `visible` scroll-reveal pattern found in the twelve existing components, plus Tailwind's configured `fade-in` / `slide-up` animations. Respect `prefers-reduced-motion`.

---

## 8. Share links

Readable query string on `/build`:

```
/build?m=grading-queue,classroom-stream,assignments&o=chat-open-to-all&s=1000
```

- `m` — **explicitly selected** module ids, comma-separated
- `o` — chosen option ids
- `s` — student count

**Store `selected`, not `effective`.** If a dependency edge changes later, old links re-resolve correctly instead of encoding a stale expansion. Unknown ids are dropped with a non-blocking notice so an evolving catalogue never produces a broken page. Absent or malformed params fall back to base-only.

Human-readable is deliberate: when a customer emails the link, the build is legible from the URL alone.

---

## 9. Quote delivery

Extends the existing `ContactSection` `mailto:` pattern — no backend, no new dependency.

**Constraint discovered during design:** URL-encoded Thai costs ~9 characters per glyph (`ค` → `%E0%B8%84`). A Gold build's Thai module list would push the mailto body past 2,000 characters, where browsers and mail clients truncate silently.

**Therefore the mailto body carries English module ids, both totals, the student count, and the share URL** — compact, complete, and the URL reconstructs the exact build when opened. Recipient `npmxtech@gmail.com`, matching the existing form.

---

## 10. Site integration

### Route and metadata

```
src/app/build/page.tsx         server component — exports metadata (Thai title, description, OG)
src/app/build/BuildClient.tsx  "use client" — the canvas
```

This is the repo's first server/client split. Currently every route file is `"use client"`, so no page can export `metadata` and all eight service pages plus the home page share the root title. `/build` is the page that will be marketed, so it needs its own — and this establishes the pattern the repositioning spec will apply to the service pages.

`next-sitemap` picks `/build` up automatically on the next `npm run build`; the regenerated `public/sitemap-0.xml` must be committed.

### Bug fix — broken nav on all service pages

`TopMenu.NAV_KEYS` uses bare anchors (`#hero`, `#about`, `#products`, `#team`). Rendered through `next/link` (desktop) and `component="a"` (mobile drawer), these resolve relative to the current route — so on all eight `/services/*` pages the nav goes nowhere.

Fix: change to `/#hero`, `/#about`, `/#products`, `/#team`. Both render sites read the same array, so it is a single edit. In scope because `/build` adds another non-home route where the nav must work.

### Reachability

Add `nav.build` → `/build` to `NAV_KEYS`, and point the `Banner` primary CTA (`hero.cta1`) at `/build`. Nothing further — broader promotion belongs to the repositioning spec.

### Conventions to follow

- Tailwind for layout, MUI `sx` for component internals — the existing hybrid, per file
- UI chrome strings go in `dict` (`translations.ts`) under a new `build.*` namespace, with both `en` and `th`
- **Module names and descriptions live in `catalog.ts`** as `{ en, th }` pairs, co-located with price, difficulty and dependencies — the fields edited together. `translations.ts` is already 487 lines; adding ~115 module keys would push it past 900 and split every module edit across two files. Accepted cost: two translation lookup paths, `t()` for chrome and `m.name[lang]` for catalogue data.

---

## 11. Risks and open questions

| Risk | Mitigation |
|---|---|
| **Prices are reasoned, not validated.** Derived from difficulty scores and Thai market rates, but no real quote has been tested against a customer. | Test with three real prospects before launch. All prices live in one file, so revision is cheap. |
| **No automated tests.** A dependency or pricing regression will reach customers as a wrong quote. | Engine kept pure so vitest can be added later. Six manual checks listed in §6. |
| **AI usage is uncapped pass-through.** `ai-essay-scoring` and `ai-study-assistant` bill token spend on top of monthly, with no ceiling defined. | Needs a usage cap or included-quota policy before those modules are sold. Open. |
| **`advanced-analytics` has no delivery date.** Shown as roadmap. | Not priceable or selectable; drag attempts logged as demand signal. |
| **Drag-and-drop was chosen over a stepped flow** despite blank-canvas and touch risks. | Mitigated by the pre-seeded base block, tier presets, drop-zone previews, and a separate tap-to-add mobile path. |
| **Base price is 72% below its difficulty-derived value**, unlike every other module. | Deliberate and documented in §2. Revisit if à la carte builds start outselling tiers. |

---

## 12. Build order

1. `types.ts` + `catalog.ts` — all 28 features, prices, edges
2. `resolve.ts` + `price.ts` + `share.ts` — verify the six cases in §6
3. `/build` route with the server/client split
4. Shelf → canvas → price rail, desktop pointer-event dragging
5. Cascade dialog, undo, presets
6. Mobile bottom sheet + tap-to-add
7. Share link encode/decode, quote mailto
8. `TopMenu` anchor fix + nav item + hero CTA
9. `npm run build`, commit regenerated sitemap
