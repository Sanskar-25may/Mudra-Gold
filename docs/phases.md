# Phases — Mudra Gold Website

> Build order. Work **one phase at a time**, top to bottom. Tick boxes as you go.
> Each phase ends with a **Done when** check. Don't move on until it passes.
> Prompt format: *"Phase 2, task 3 from `@phases.md`. Use `@design.md` and `@rules.md`."*

---

## Phase 0 — Prerequisites (no code)
The old site is outdated, so **start by sending the owner `client-questionnaire.md`**. Collect these first so you never build on guesses.

- [ ] Send `client-questionnaire.md` to the owner; get answers (a WhatsApp voice note or call is fine — you fill the form)
- [ ] Update `prd.md` §1, §4 and §6 with the owner's answers; remove the "legacy" markers as each item is confirmed

- [ ] Logo in SVG/PNG (original, not the Imgur copy)
- [ ] Real photos: Gorakhpur store, Lucknow store, process (cleaning/weighing/testing), team, gifting items, coin samples
- [ ] Answers to open questions in `prd.md` §7 (esp. #1 govt claim, #2 plan terms, #3 payment wording, #4 KYC, #5 correct phone/email/LinkedIn)
- [ ] Final WhatsApp number and branch hours
- [ ] Google Analytics ID, Supabase project, Resend account, domain access
- [ ] Privacy policy / terms text approved by client

**Done when:** the owner has answered at least the *Must-answer* section of the questionnaire (contact, branches, hours, services, claims) and you have assets for Home + Contact. Anything still unanswered becomes a visible placeholder (`isPlaceholder: true`, `verified: false`), logged in `memory.md`.

---

## Phase 1 — Project Foundation
- [ ] 1.1 Scaffold Next.js (App Router, TypeScript strict, Tailwind, ESLint, `src/` dir) and install only the packages in `architecture.md`
- [ ] 1.2 Create the folder structure from `architecture.md` §4 (empty files are fine)
- [ ] 1.3 Add design tokens to `globals.css` and Tailwind config from `design.md`; load fonts with `next/font`
- [ ] 1.4 Create `src/content/site.ts` with all business facts from the **owner's answers** (phone, WhatsApp, email, hours, socials, branches, `verifiedClaims`). Where an answer is missing, use the legacy value with `verified: false` and add it to `needsConfirmation`
- [ ] 1.5 Build UI primitives: `Button`, `Container`, `Section`, `Card`, `Badge`, `Input`, `Select`, `Textarea`, `Accordion`
- [ ] 1.6 Build layout: `TopStrip`, `Header` (+ mobile menu), `Footer`, `StickyActionBar` (Call · WhatsApp · Directions, mobile only)
- [ ] 1.7 Create `.env.example`; set up redirects for legacy `.aspx` URLs in `next.config.ts`

**Done when:** an empty page renders with the correct header, footer, fonts, colours, and sticky mobile bar; `npm run build` passes.

---

## Phase 2 — Static Pages & Sections
Build with content from `src/content/*.ts`. Forms are visual only for now (no submission).

- [ ] 2.1 Home: Hero + Sell Gold card + Sell Silver card
- [ ] 2.2 Home: How It Works (5 steps) + Promo band
- [ ] 2.3 Home: Comparison ("Mudra Gold vs Traditional Players") — must be clean and readable on mobile
- [ ] 2.4 Home: Swarn Vriddhi plan + Gifting cards + Custom coin form (UI only)
- [ ] 2.5 Home: Testimonials section (static data) + Get In Touch form (UI only)
- [ ] 2.6 About page (intro, why choose us, vision, closing statement, FAQ accordion)
- [ ] 2.7 Services page (4 service cards, branch cards, coming-soon branch)
- [ ] 2.8 Contact page (message form UI, both branches, phone, email, map link/embed)
- [ ] 2.9 Gallery page (responsive image grid + lightbox/dialog)
- [ ] 2.10 Gifting page, Privacy, Terms, custom 404

**Done when:** every route in `prd.md` §4.1 renders correctly at 360px, 768px, and 1280px widths, with no horizontal scroll and no hard-coded business facts in components.

---

## Phase 3 — Forms & Backend
- [ ] 3.1 Create Supabase tables, RLS, and storage bucket per `architecture.md` §5
- [ ] 3.2 `lib/validators.ts` — zod schemas: lead, contact, custom coin, testimonial (Indian phone rule: `^(\+91)?[6-9]\d{9}$`)
- [ ] 3.3 `lib/supabase.ts`, `lib/email.ts`, `lib/rate-limit.ts`
- [ ] 3.4 `/api/leads` + wire `LeadForm` (Home and Services): validation, honeypot, rate limit, DB insert, email alert, success/error UI
- [ ] 3.5 `/api/contact` + `ContactForm`
- [ ] 3.6 `/api/custom-coin` + `CustomCoinForm` with upload (type/size checks)
- [ ] 3.7 `/api/testimonials` + `TestimonialForm`; testimonials page and Home section read approved rows only
- [ ] 3.8 "Join Now" (Swarn Vriddhi) opens the lead form with monthly scheme pre-checked
- [ ] 3.9 Test failure paths: bad phone, empty required fields, rate limit, DB down, email down

**Done when:** a test submission from each form lands in Supabase, triggers an email, shows success; invalid input is rejected on both client and server; no secrets in the client bundle.

---

## Phase 4 — SEO, Analytics, Performance, Accessibility
- [ ] 4.1 Metadata + OpenGraph for every page via `lib/seo.ts`
- [ ] 4.2 JSON-LD `JewelryStore`/`LocalBusiness` with both branches (Home, Contact)
- [ ] 4.3 `sitemap.ts`, `robots.ts`, canonical URLs
- [ ] 4.4 GA4 + events: `generate_lead` (each form), `click_call`, `click_whatsapp`, `click_directions`
- [ ] 4.5 Image audit: `next/image`, sizes, alt text, compressed originals
- [ ] 4.6 Accessibility pass: headings, focus states, labels, contrast, keyboard use of nav/accordion/forms
- [ ] 4.7 Security headers in `next.config.ts`
- [ ] 4.8 Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95

**Done when:** Lighthouse targets met on Home, Services, Contact; analytics events fire in GA4 DebugView.

---

## Phase 5 — QA & Launch
- [ ] 5.0 **Launch gate:** `needsConfirmation` is empty — no `verified: false` fact or `isPlaceholder` item remains
- [ ] 5.1 Content review with client: every claim in `prd.md` §6 and §7 resolved; "Govt Authorized" badge decision recorded
- [ ] 5.2 Replace/remove every `isPlaceholder` item
- [ ] 5.3 Test on real devices: Android Chrome (low-end if possible), iPhone Safari, desktop Chrome/Edge
- [ ] 5.4 Verify every `tel:`, WhatsApp, map, email and social link goes to the correct destination
- [ ] 5.5 Verify all legacy `.aspx` URLs 301 to new routes
- [ ] 5.6 Deploy to Vercel; set env vars; connect domain; HTTPS check
- [ ] 5.7 Submit sitemap in Google Search Console; confirm Google Business Profile listings link to the new site
- [ ] 5.8 Write `README.md` and `deployment.md`

**Done when:** site is live on `mymudragold.in`, a real test lead reaches the team's inbox, and the client signs off.

---

## Phase 6 — Post-launch (v1.1+). Do not start before launch.
- [ ] Hindi language toggle (`next-intl`; Noto Sans Devanagari)
- [ ] Live gold & silver rate widget (needs a trusted data source and client approval)
- [ ] Admin dashboard (view leads, approve testimonials, manage gallery)
- [ ] Dedicated branch pages (SEO): `/gorakhpur`, `/lucknow`; add Basharatpur when it opens
- [ ] WhatsApp notification to staff for new leads
- [ ] Blog / gold-care and selling guides
- [ ] Swarn Vriddhi enrolment tracking (only after plan terms are finalised)

---

## Progress Log
Keep a running summary in `memory.md` (create it when Phase 1 starts): what's done, which file is in progress, placeholders outstanding, known issues.
