# Project Memory — Mudra Gold Website

> Running status log of phases, completed tasks, placeholders, open items, and SEO audit findings.

---

## Current Status
- **Active Phase:** Phase 1 (Foundation) & Phase 2 (Static Pages & Sections) — **COMPLETED**
- **SEO Audit Integration:** Full review of `Mudra-Gold-SEO-Audit-Report-c74bf254.pdf` integrated.
- **Build Status:** Clean production build (`npm run build`) passing with 0 errors across 19 static & API routes.
- **Content Verification Status:** Non-strict audit passing (`npm run check:content`). 14 items tracked awaiting owner confirmation.

---

## Completed Tasks
- [x] **0.0 Scaffolding & Setup:** Next.js 15 (App Router, TypeScript strict, Tailwind CSS v4, ESLint).
- [x] **1.1 Tech Stack & Dependencies:** `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`, `clsx`, `tailwind-merge`, and `tsx`.
- [x] **1.2 Directory Structure:** `public/images/`, `src/app/`, `src/components/`, `src/content/`, `src/lib/`, `src/types/`, `scripts/`, `docs/`.
- [x] **1.3 Design Tokens & Typography:** Configured in `globals.css` with gold palette, charcoal darks, warm neutrals, and Google fonts (`Inter` + `Cinzel`).
- [x] **1.4 Content Source of Truth:** Created `site.ts` with 3 active branches (Gorakhpur Civil Lines, Lucknow Arjunganj, Gorakhpur HN Singh Chauraha), unified primary phone `+91 96213 19818`, email `info@mymudragold.in`.
- [x] **1.5 UI Primitives:** `Button`, `Container`, `Section`, `Card`, `Badge`, `Input`, `Select`, `Textarea`, `Accordion`.
- [x] **1.6 Layout Components:** `TopStrip`, `Header` (+ mobile drawer), `Footer`, `StickyActionBar` (Call, WhatsApp, Directions).
- [x] **1.7 Redirects & Config:** Added 301 redirects for legacy `.aspx` routes in `next.config.ts`, `.env.example`, `sitemap.ts`, `robots.ts`.
- [x] **2.1 - 2.5 Home Sections:** `Hero`, `SellCards` (Gold & Silver), `HowItWorks` (5 steps), `Comparison` (Mudra Gold vs Traditional), `PromoBand`, `SwarnVriddhi` (11+1 plan), `GiftingCards`, `CustomCoinForm`, `TestimonialsSection`, `BranchCards`, `FAQSection`, `LeadForm`.
- [x] **2.6 About Page:** Brand story, vision statement, core pillars, why choose us, full FAQ.
- [x] **2.7 Services Page:** 4 services (Instant Cash, Free Ultrasonic Cleaning, Scientific Purity Testing, Custom Coins & Gifting), branch cards, lead form.
- [x] **2.8 Contact Page:** Branch cards with Google Maps links, direct phone/WhatsApp details, Contact message form, valuation lead form.
- [x] **2.9 Gallery Page:** Responsive category-filtered grid (Store, Testing, Cleaning, Coins) with placeholder markers.
- [x] **2.10 Secondary & Legal Pages:** Gifting page with coin weights & custom coin form; Testimonials page with review submission; Privacy Policy; Terms & Conditions; custom 404 & error handlers.
- [x] **3.x API Route Foundations:** `/api/leads`, `/api/contact`, `/api/custom-coin`, `/api/testimonials` with honeypot spam protection and zod server validation.
- [x] **SEO Audit Rectifications:**
  - Standardized single H1 tag on home page: *"Sell Gold for Instant Cash in Gorakhpur & Lucknow"*.
  - Updated HN Singh Chauraha branch (opened 25 Aug 2026 per audit & LinkedIn announcement).
  - Adopted Section 7 ready-to-use titles and meta descriptions for all routes.
  - Implemented multi-branch `LocalBusiness` JSON-LD schema markup with opening hours, phone, address, and social profiles.
  - Provided dynamic `sitemap.xml` and `robots.txt` conforming to audit specifications.
  - Lightened bundle footprint (103 KB shared JS, down from old site's 4 MB uncompressed payload).
- [x] **Brand Assets & Logo Integration:**
  - Integrated official `Mudra_Gold-logo.png` (24K Gold Coin with Lotus blossom emblem) into `Header`, `Footer`, `Hero`, `SwarnVriddhi`, `CustomCoinForm`, and `NotFound` (404).
  - Configured favicon and apple-touch icons to use the official company logo in site metadata.
  - Set `og:image` and `LocalBusiness` schema image/logo to official high-resolution coin logo for WhatsApp and social link previews.
- [x] **Brand Color Theory Overhaul (Navy, White, and Gold):**
  - Implemented the official 60-30-10 color harmony across the entire application:
    - **60% Crisp White Canvas (`#ffffff`):** Page backgrounds, primary cards, content panels, form inputs, table rows.
    - **30% Deep Imperial Navy (`--color-navy-*`):** Header, top navigation bar, footer, structural banners, headings, numerals, and badges.
    - **10% Radiant Gold (`--color-gold-*`):** Primary action buttons, coin emblems, star ratings, borders, highlights, and status badges.
  - Replaced 100% of legacy charcoal and warm gray tokens across all `.tsx` components and CSS modules (confirmed 0 obsolete tokens remaining).
  - Verified clean production build (`npm run build`) with zero lint or type errors across all 19 prerendered static & API routes.

---

## Placeholders Outstanding (Awaiting Owner Confirmation)
1. **Government Authorization:** `govtAuthorized: false` until registration certificate details are provided.
2. **Swarn Vriddhi Terms:** Exact installment and redemption terms to be confirmed.
3. **Branch Photography:** Gallery images are marked `isPlaceholder: true` until high-res store and equipment photos arrive.
4. **Testimonials:** Currently contains draft placeholders marked `isPlaceholder: true`.
5. **Contact/Phone Confirmation:** Confirm single primary number between `9621319818` and `9554489818`.

---

## Next Steps
- Connect Supabase database tables and Resend email alerts when API keys are provided.
- Hook Google Analytics 4 tracking events (`generate_lead`, `click_call`, `click_whatsapp`, `click_directions`).
- Owner content sign-off using `client-questionnaire.md`.
