# Architecture — Mudra Gold Website

> How the app is structured. Read with `prd.md` (what) and `rules.md` (how to behave).
> Items marked **[DECISION]** are my recommendations; change them *here* before coding if you disagree.

---

## 1. Tech Stack (strict — do not substitute)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (latest stable), App Router** | SEO via server rendering, image optimisation, API routes in one repo |
| Language | **TypeScript, strict mode** | Fewer AI-generated bugs |
| Styling | **Tailwind CSS** (latest stable) | Tokens in one place, fast iteration |
| Components | Hand-built, small set; **shadcn/ui** only for Accordion, Dialog, Select if needed | Avoid heavy UI libs |
| Icons | `lucide-react` | Consistent, tree-shakeable |
| Forms | `react-hook-form` + `zod` + `@hookform/resolvers` | One schema shared client and server |
| Database | **Supabase (Postgres)** **[DECISION]** | Free tier, dashboard doubles as a v1 "admin panel" |
| File storage | Supabase Storage (coin logo uploads) | Same vendor, one less service |
| Email alerts | **Resend** **[DECISION]** | Simple API; notify team on new lead |
| Spam protection | Honeypot field + server rate limit (+ Cloudflare Turnstile if spam appears) | Cheap, no friction |
| Analytics | Google Analytics 4 (via `next/script`) | Standard for conversion events |
| Fonts | `next/font/google` | Self-hosted, no layout shift |
| Hosting | **Vercel** **[DECISION]** | Zero-config for Next.js |
| Package manager | **npm** | Don't switch to yarn/pnpm |
| Node | LTS | |
| Lint/format | ESLint (Next config) + Prettier | |

**Not used:** Redux, MUI, Bootstrap, CSS-in-JS, jQuery, Firebase, any CMS (v1), any e-commerce library.

---

## 2. App Flow

```
Visitor (mobile, mostly) ──► Google / Instagram / WhatsApp share
        │
        ▼
   Landing page (/) ───────────────────────────┐
        │                                      │
        ├─► Tap "Call" (tel:)        ──► Phone call to branch
        ├─► Tap "WhatsApp" (wa.me)   ──► WhatsApp chat
        ├─► Tap "Directions"         ──► Google Maps
        └─► Submit a form
                │
                ▼
        Client: react-hook-form + zod validation
                │
                ▼
        POST /api/leads  (or /api/custom-coin, /api/contact, /api/testimonials)
                │
                ├─ 1. Honeypot + rate-limit check
                ├─ 2. Re-validate with the SAME zod schema (server is the authority)
                ├─ 3. Insert row in Supabase
                ├─ 4. Send alert email via Resend (failure must not lose the lead)
                └─ 5. Return { ok: true } | { ok: false, error }
                │
                ▼
        Success message + GA4 event ("generate_lead")
```

**Key principle:** the form submission must never silently fail. If the database insert succeeds but the email fails, still return success and log the email error. If the database insert fails, show a friendly error with the phone number as a fallback.

---

## 3. Routes

| Route | Type | Notes |
|---|---|---|
| `/` | Static | Home |
| `/about` | Static | |
| `/services` | Static | |
| `/gallery` | Static | Images from `/public/images/gallery` for v1 |
| `/contact` | Static | Form posts to API |
| `/gifting` | Static | |
| `/testimonials` | Server-rendered | Lists approved testimonials + submit form |
| `/privacy`, `/terms` | Static | |
| `/api/leads` | POST | Get In Touch form |
| `/api/contact` | POST | Contact form |
| `/api/custom-coin` | POST (multipart) | Coin request + optional upload |
| `/api/testimonials` | POST | Saves with `approved = false` |
| `/sitemap.xml`, `/robots.txt` | Generated | via `app/sitemap.ts`, `app/robots.ts` |

**Redirects** (`next.config.ts`, permanent 301):
`/index.aspx → /` · `/about.aspx → /about` · `/services.aspx → /services` · `/Gallery.aspx → /gallery` · `/contact.aspx → /contact` · `/testimonial.aspx → /testimonials`

---

## 4. Folder & File Structure

```
mudra-gold/
├─ docs/                          # prd.md, architecture.md, rules.md, phases.md, design.md, memory.md
├─ public/
│  ├─ images/
│  │  ├─ brand/                   # logo.svg, logo.png, favicon, og-image
│  │  ├─ hero/
│  │  ├─ steps/                   # how-it-works step images
│  │  ├─ services/
│  │  ├─ gifting/
│  │  └─ gallery/
│  └─ fonts/                      # only if not using next/font
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx               # root: fonts, metadata, header, footer, sticky bar, GA
│  │  ├─ page.tsx                 # Home
│  │  ├─ about/page.tsx
│  │  ├─ services/page.tsx
│  │  ├─ gallery/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ gifting/page.tsx
│  │  ├─ testimonials/page.tsx
│  │  ├─ privacy/page.tsx
│  │  ├─ terms/page.tsx
│  │  ├─ not-found.tsx
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  ├─ globals.css              # Tailwind + design tokens (CSS variables)
│  │  └─ api/
│  │     ├─ leads/route.ts
│  │     ├─ contact/route.ts
│  │     ├─ custom-coin/route.ts
│  │     └─ testimonials/route.ts
│  ├─ components/
│  │  ├─ ui/                      # Button, Card, Input, Select, Accordion, Badge, Section, Container
│  │  ├─ layout/                  # Header, TopStrip, Footer, MobileNav, StickyActionBar
│  │  ├─ sections/                # Hero, SellGoldCard, SellSilverCard, HowItWorks, Comparison,
│  │  │                           # SwarnVriddhi, Testimonials, FAQ, BranchCards, ComingSoonBranch, PromoBand
│  │  └─ forms/                   # LeadForm, ContactForm, CustomCoinForm, TestimonialForm
│  ├─ content/                    # ALL copy and business facts live here
│  │  ├─ site.ts                  # name, phone, whatsapp, email, hours, socials, branches, needsConfirmation[]
│  │  ├─ home.ts
│  │  ├─ about.ts
│  │  ├─ services.ts
│  │  ├─ faqs.ts
│  │  ├─ gifting.ts
│  │  └─ gallery.ts
│  ├─ lib/
│  │  ├─ validators.ts            # zod schemas (shared client + server)
│  │  ├─ supabase.ts              # server-only client (service role)
│  │  ├─ email.ts                 # Resend wrapper
│  │  ├─ rate-limit.ts
│  │  ├─ analytics.ts             # trackEvent helper
│  │  ├─ seo.ts                   # metadata + JSON-LD builders
│  │  └─ utils.ts                 # cn(), formatPhone(), etc.
│  └─ types/index.ts
├─ .env.local                     # never committed
├─ .env.example                   # committed, no real values
├─ next.config.ts
├─ tailwind config / globals.css
├─ tsconfig.json
└─ package.json
```

**Content verification:** every fact in `src/content/*.ts` has `verified: boolean`. Add a script `npm run check:content` (in `scripts/check-content.ts`) that lists all `verified: false` items and **fails** when run with `--strict`. Phase 5 uses `--strict` as the launch gate.

**Conventions**
- Files: `kebab-case.tsx` for routes, `PascalCase.tsx` for components.
- One component per file. Sections compose UI primitives.
- Pages stay thin: they import content from `src/content/` and sections from `components/sections/`.
- Server-only code (`supabase.ts`, `email.ts`) must never be imported into a client component.

---

## 5. Data Model (Supabase / Postgres)

```sql
-- leads: Get In Touch + Contact + Plan interest
create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text,
  phone text not null,
  state text,
  city text,
  inquiry_type text,            -- 'sell_gold_silver' | 'gold_coin' | 'silver_coin' | 'custom_gift' | 'other' | 'contact_message'
  monthly_scheme boolean default false,
  message text,
  source_page text,             -- e.g. '/', '/services', '/contact'
  status text default 'new',    -- 'new' | 'contacted' | 'closed'
  created_at timestamptz default now()
);

-- custom_coin_requests
create table custom_coin_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  weight_grams int not null check (weight_grams in (2,5,10)),
  engrave_text text,
  logo_url text,
  occasion text,
  status text default 'new',
  created_at timestamptz default now()
);

-- testimonials: public reads only approved rows
create table testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  city text not null,
  rating int not null check (rating between 1 and 5),
  comment text not null,
  photo_url text,
  approved boolean default false,
  created_at timestamptz default now()
);
```

- **Row Level Security ON** for all tables. No public inserts or reads directly from the browser; all writes go through our API routes using the service-role key (server only). Public reads of testimonials happen server-side with `approved = true`.
- Storage bucket `coin-uploads`: private; store the path, generate signed URLs for staff.

---

## 6. Environment Variables (`.env.example`)

```
NEXT_PUBLIC_SITE_URL=https://www.mymudragold.in
NEXT_PUBLIC_GA_ID=
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=        # server only
RESEND_API_KEY=                   # server only
LEAD_NOTIFY_EMAIL=                # who receives alerts
LEAD_FROM_EMAIL=
```

Only variables prefixed `NEXT_PUBLIC_` may reach the browser.

---

## 7. SEO & Local Search Architecture

- Per-page `metadata` (title, description, OpenGraph) built via `lib/seo.ts`.
- **JSON-LD** `JewelryStore` / `LocalBusiness` on Home and Contact, with **both branches** as separate entries (address, phone, hours 10:00–20:00 daily, social `sameAs`). Add the third branch only after it opens.
- Target phrases (use naturally in headings/copy): *sell gold Gorakhpur*, *cash for old gold Lucknow*, *gold purity test Gorakhpur*, *gold coin Gorakhpur*, *customised gold coin*.
- `sitemap.ts` and `robots.ts`; canonical URLs; 301s from legacy `.aspx` URLs.
- Off-site (not code, but tell the client): claim and complete the **Google Business Profile** for each branch.

---

## 8. Performance, Accessibility, Security Targets

- Lighthouse mobile: **Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95**.
- All images via `next/image` with explicit width/height and meaningful `alt`.
- WCAG AA colour contrast (see `design.md` for the approved pairings).
- Keyboard-navigable nav, accordion, and forms; visible focus rings.
- Security: zod validation on server, rate limiting, honeypot, file-type/size checks on uploads, no secrets in client bundle, security headers in `next.config.ts`.
- Privacy: collect only what the forms need; show consent checkbox; link to `/privacy`.
