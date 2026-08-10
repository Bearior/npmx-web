# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build; postbuild runs next-sitemap
npm start        # serve the production build
npm run lint     # next lint (eslint-config-next: core-web-vitals + typescript)
```

There is no test framework, no CI config, and no git remote configured. Type errors surface only via `npm run build` (or the editor) — `tsc` is `noEmit` with `strict: true`.

`npm run build` regenerates `public/robots.txt`, `public/sitemap.xml`, and `public/sitemap-0.xml` via `next-sitemap`. These generated files **are committed**, so after adding or removing a route, run a build and commit the regenerated sitemap.

## Architecture

Marketing/company site for NPMx Technologies (`https://www.npmxtech.com`). Next.js 14 App Router, TypeScript, path alias `@/*` → `./src/*`.

**Everything below `src/` is a client component.** Every `page.tsx` and every component starts with `"use client"`; the only server file is `src/app/layout.tsx`. There are no API routes, no server actions, and no data fetching — all content is hardcoded in the source.

### Page composition

- `src/app/page.tsx` is the single-page home: `Banner → AboutSection → ProductSection → TeamSection → ContactSection → Footer`. Nav is anchor-based (`#hero`, `#about`, `#products`, `#team`, `#contact`); `globals.css` sets `scroll-margin-top: 70px` on `section[id]` to clear the fixed navbar.
- `src/app/services/<slug>/page.tsx` — eight service detail pages, each an independent copy of the same layout (dark gradient hero + blur orbs → features grid → benefits → "perfect for" → CTA → `<Footer />`). They are near-duplicates; a change to the shared shape must be applied to all eight by hand.
- `src/app/cv/peerapat/page.tsx` — client-side redirect to an external Google Drive link.

`TopMenu` and `CookieConsent` live in the root layout, so they render on every route.

### Products ↔ service pages

`src/components/ProductSection.tsx` holds two hardcoded arrays, `PRODUCTS` (health tech, products 1–4) and `BUSINESS_PRODUCTS` (business, products 5–8). Each entry carries `titleKey`/`descKey`/`tagKeys` (translation keys), an MUI icon element, a `color` hex, and `href` pointing at its `/services/<slug>` page. Adding a service means: new array entry + new page directory + new `serviceN.*` translation keys + rebuild for the sitemap.

The numbering is the linkage: product **N** in those arrays corresponds to translation keys `product.N.*` and `serviceN.*`, *not* to the URL slug. E.g. `/services/dashboard-visualization` is product 8 and reads `service8.*`. Detail pages also reuse `product.N.*` keys for their chips/tags, and a few reuse `service1.perfectFor*` verbatim.

### i18n

Hand-rolled, no i18n library and no locale routing — one URL serves both languages.

- `src/providers/LangProvider.tsx` — context holding `lang` (`"en" | "th"`), `toggleLang()`, and `t(key)`. Default is `"th"`. State is **in-memory only**: it is not persisted and resets on reload or route change. It syncs `document.documentElement.lang` in an effect (the static `<html lang="th">` in the layout is the initial value).
- `src/providers/translations.ts` — the entire `dict`, shaped `Record<key, Record<Lang, string>>`. Namespaces: `nav`, `hero`, `about`, `services`, `productSection`, `product.N`, `service` (shared, e.g. `service.backToServices`), `service1`–`service8`, `team`, `contact`, `footer`, `cookie`.
- `t()` falls back to returning the key string itself when a key is missing — missing translations render as `product.9.title` on the page rather than failing the build. Verify new keys exist in both `en` and `th`.

### Styling

Tailwind and MUI are used together on the same elements: Tailwind utilities for layout/spacing/gradients on plain DOM nodes, MUI `sx` for the internals of `Button`, `Card`, `Chip`, `TextField`, `Drawer`, `Avatar`. Follow the surrounding file rather than converting one to the other.

`tailwind.config.ts` defines `primary`/`accent`/`surface` plus `fade-in`/`slide-up`/`float` animations, but most of the palette is hardcoded hex — in `sx` props, in arbitrary classes like `bg-[#0f172a]`, and in the per-product `color` fields. Reuse the neighbouring literals for visual consistency.

Fonts: `Inter` (latin) and `Sarabun` (latin + thai) via `next/font/google`, exposed as `--font-inter` / `--font-sarabun` and applied in `globals.css`.

### Scroll-reveal idiom

Twelve files repeat the same pattern: a `useRef` on the section, `useState(false)` for `visible`, and a `useEffect` `IntersectionObserver` (threshold `0.1`) that flips `visible` on first intersect; child elements then key their opacity/translate classes and `transitionDelay` off it. Copy this idiom when adding a section — there is no shared hook.

### SEO

Only `src/app/layout.tsx` exports `metadata` (Thai-language title/description + OpenGraph). Because every route file is `"use client"`, **no page can export its own `metadata` or `generateMetadata`** — all routes currently share the root metadata. Giving a route real per-page metadata requires splitting it into a server `page.tsx` that exports `metadata` and renders a client child.

`next-sitemap.config.js` holds `siteUrl` and `generateRobotsTxt: true`; update it if the domain changes.

## Notable behaviour

- **Contact form is `mailto:` only.** `ContactSection` builds a `mailto:npmxtech@gmail.com` URL and assigns `window.location.href`. No backend, no validation beyond the browser's.
- **Cookie consent is UI-only.** `CookieConsent` writes `"true"`/`"false"` to `localStorage` under `npmx-cookie-consent` and hides the banner; nothing is gated on the choice yet (see commit `53975a4`).
- Service detail pages navigate back with a plain `href="/#products"` on an MUI `Button` (full page load, not `next/link`).
- `doc/structure14-2-26.txt` is a stale snapshot (six products, no `src/providers/`, no service routes) — trust the source tree over it.
- `README.md` is unmodified `create-next-app` boilerplate.
