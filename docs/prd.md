# PRD — Mudra Gold Website

> Product Requirements Document. Source of truth for **what** we are building and **why**.
> Sources: the current site (mymudragold.in), the wireframe map (`wireframe.html`), and a business analysis of both.
> Status: v1 draft. Items marked **[CONFIRM]** must be verified with the client before launch.

> ## ⚠️ Data trust level: the current website is OUTDATED
> The owner has told us the live site (mymudragold.in) has not been kept up to date. Therefore:
> - Everything in this PRD that came from the current site (addresses, phone, hours, branches, services, plan, claims, testimonials, copy) is **LEGACY and UNVERIFIED**.
> - The **owner is the only source of truth**. Their answers (see `client-questionnaire.md`) override anything here.
> - What is still reliable from the old site: the **page structure and section layout** (via the wireframe) and the **overall business model** (cash for old gold/silver, trust-through-transparency). Treat these as a starting draft, not a spec.
> - Nothing marked legacy may go live until the owner confirms it.

---

## 1. Business Analysis

> **All facts in this section are legacy/unverified** (taken from the outdated site). Update after the owner answers `client-questionnaire.md`.

### 1.1 Who they are
- **Brand:** Mudra Gold — "A Unit of MKS Enterprises". Described on the site as a newly launched initiative.
- **Core business:** Buying customers' **old gold and silver for instant cash** (walk-in, in-store service). This is the main revenue line.
- **Secondary lines:**
  - Gold/silver **coins**, including **custom coins** (2g, 5g, 10g; engraved text/logo).
  - **Gifting articles** (wedding, corporate, birthday).
  - **Swarn Vriddhi** — a gold coin purchase plan: pay 11 instalments, get the 12th coin free.
  - Free value-add services: jewellery cleaning (ultrasonic), purity testing, transparent valuation.
- **Locations:**
  - Gorakhpur — Ground Floor, Building No. 449S, Civil Lines, in front of St Andrew's Inter College Gate, Gorakhpur, UP 273001
  - Lucknow — Near Murari Hospital, Arjunganj, Lucknow, UP 226002
  - **Coming soon:** Medical College Road, Basharatpur, Gorakhpur, UP
- **Hours:** 10 AM – 8 PM, all days.
- **Contact:** +91 96213 19818 · info@mymudragold.in · WhatsApp on the same number.
- **Socials:** Facebook (MudraGold), Instagram (official_mudra_gold), LinkedIn (mudra-gold).

### 1.2 The core insight
Selling old gold is a **high-trust, high-anxiety, local transaction**. Customers fear being cheated (rounded-down weights, hidden melting deductions, inaccurate "touchstone" valuation). Mudra Gold's whole pitch is: **"the entire process happens in front of you."**

This means:
1. **The website does not sell gold online.** It builds trust and gets the visitor to **call, WhatsApp, or walk into a branch**.
2. Trust signals (process transparency, branch addresses, real photos, testimonials) matter more than flashy visuals.
3. Most visitors will be **mobile users in Gorakhpur / Lucknow / eastern UP**, often arriving from Google search or a social/WhatsApp share.

### 1.3 Differentiators (from the existing site)
| Mudra Gold | Traditional unorganised players |
|---|---|
| Multilevel scientific testing | Touchstone approximate value |
| Free ultrasonic cleaning for accurate weight | No cleaning; melting cost deducted |
| Weighing up to 3 decimals | Rounded down to lowest number |
| Competitive, market-linked rates | Prices differ from market rate |
| High-quality crucibles, no gold loss | Low-quality crucibles, gold loss |
| Instant cash / bank transfer | Cash only, no invoice |

### 1.4 Competitive landscape (general, not researched in depth)
Local jewellers/sonars, gold-loan NBFCs that also buy gold, and national cash-for-gold chains. Mudra Gold wins locally on **transparency + proximity + speed**, not on brand scale. Local SEO is the main acquisition lever.

---

## 2. Goals & Success Metrics

**Primary goal:** Turn local searchers into branch visits and phone calls.

| Goal | Metric (track from day 1) |
|---|---|
| Generate leads | Form submissions, tel: link clicks, WhatsApp clicks |
| Drive footfall | "Get directions" / map clicks per branch |
| Build trust | Time on About/Services, testimonial views |
| Be found locally | Rankings for "sell gold Gorakhpur", "gold buyer Lucknow", etc. |

No baseline exists yet. Set targets after 30 days of data.

---

## 3. Target Users

1. **The Seller (primary)** — 30–65, owns old jewellery/coins, wants fair value and no cheating. Mobile-first, may prefer Hindi. Needs: clear process, rates assurance, address, hours, a number to call.
2. **The Gifter / Coin Buyer (secondary)** — Planning a wedding, corporate, or birthday gift. Needs: gifting categories, coin customization, enquiry path.
3. **The Plan Subscriber (secondary)** — Interested in Swarn Vriddhi monthly plan. Needs: clear plan terms and a way to enrol/enquire.
4. **The Cautious Verifier** — Checks the brand before visiting. Needs: real addresses, testimonials, social links, company identity (MKS Enterprises).

---

## 4. Scope

### 4.1 Pages (v1)
| Route | Purpose | Source |
|---|---|---|
| `/` | Conversion-focused landing page | Wireframe: Home |
| `/about` | Brand story, trust points, vision, FAQ | Wireframe: About |
| `/services` | 4 service cards, branches, lead form, "coming soon" branch | Wireframe: Services |
| `/gallery` | Image grid (store, process, events) | Wireframe: Gallery |
| `/contact` | Message form, both branches, phone, email, map | Wireframe: Contact |
| `/gifting` | Gifting categories (target of "View All Gifting Products") | Linked from Home; **page not in wireframe** |
| `/testimonials` | Submit a testimonial (target of "+ Add Testimonial") | Existing `testimonial.aspx` |
| `/privacy`, `/terms` | Legal basics (needed because we collect personal data) | New |

Old URLs (`/index.aspx`, `/about.aspx`, `/services.aspx`, `/Gallery.aspx`, `/contact.aspx`, `/testimonial.aspx`) must **301-redirect** to the new routes.

### 4.2 Home page sections (in order)
1. Top strip: "A Unit of MKS Enterprises" + phone + Enquire Now
2. Hero: "Welcome to Mudra Gold" + 3 bullets + CTAs (Contact Us, Sell Gold for Cash)
3. Sell Gold card + Sell Silver card (call CTAs, hours)
4. Customize Your Gold Coin form + Gifting Articles cards
5. Promo band: "Bring Your Old Gold, Leave with Cash!"
6. How It Works (5 steps)
7. Mudra Gold vs Traditional Players comparison
8. Swarn Vriddhi plan
9. Testimonials
10. Get In Touch lead form
11. Footer

### 4.3 Features — v1 (must have)
- Responsive, mobile-first layout
- Sticky mobile action bar: **Call · WhatsApp · Directions**
- Lead form (Get In Touch) with validation, saved to database, email alert to the team
- Contact form (message)
- Custom coin request form (with optional logo upload)
- Testimonial submission with **admin approval** before display
- Both branch addresses with map links; "New branch coming soon" announcement
- FAQ accordion
- Local-business SEO: metadata, JSON-LD, sitemap, robots
- Analytics + conversion event tracking
- Social links, WhatsApp click-to-chat

### 4.4 Explicitly NOT in v1
- Online payments, cart, or e-commerce
- Online gold-selling or "sell from home"
- Gold price calculators that promise a payout
- User accounts / login
- Admin dashboard (manage data in the database console for v1)
- Blog

### 4.5 Later (see `phases.md`, Phase 6)
Hindi language toggle, live gold/silver rate widget, admin dashboard, branch pages for SEO, blog, plan enrolment tracking.

---

## 5. Form Specifications

### 5.1 Get In Touch (lead form)
| Field | Required | Notes |
|---|---|---|
| Name | Yes | 2–80 chars |
| Email | No | Valid email if present |
| Phone | Yes | Indian mobile, 10 digits starting 6–9; accept optional +91 |
| State | Yes | Default **Uttar Pradesh** |
| City | Yes | Text input with suggestions (Gorakhpur, Lucknow, …) |
| Inquiry type | Yes | Sell your Old Gold & Silver · Gold Coin · Silver Coin · For Customize Gift · Other |
| Monthly scheme interest | No | Checkbox: "I'm interested in the Swarn Vriddhi plan" |
| Consent | Yes | Checkbox to be contacted by phone/WhatsApp |

### 5.2 Contact form
Name (req), Email (opt), Phone (req), Message (req).

### 5.3 Custom coin request
Coin weight (2g / 5g / 10g, req), Text to engrave (opt), Logo/image upload (opt; JPG/PNG/WebP/PDF, max 5 MB), Occasion (opt), **Name (req) and Phone (req)** — see open question 7.

### 5.4 Testimonial submission
Name (req), City (req), Rating 1–5 (req), Comment (req, max 400 chars), Photo (opt). Saved as **unapproved**; only approved entries appear publicly.

---

## 6. Content Source of Truth (verbatim from the current site)

**LEGACY copy from the outdated site. Use only as a draft/placeholder until the owner approves or replaces it.** Do **not** invent claims, numbers, or guarantees. When the owner supplies new copy, it replaces this and gets recorded in `src/content/*.ts` with `verified: true`.

- **Hero:** "Mudra Gold is your trusted destination for buying & selling gold, silver, and gifting Articles with complete transparency, best rates, and instant cash assurance."
  - 100% Genuine Gold & Silver
  - Instant Cash for Your Articles
  - Pioneer in Eastern UP for cash against old Gold
- **Sell Gold:** 100% Transparent Gold Evaluation · Instant Cash / UPI / Bank Transfer · Free Purity Test – No Charges · Govt Authorized Gold Buyer **[CONFIRM]** · "Available 10 AM – 8 PM All Days"
- **Sell Silver:** Instant Cash for Silver Jewellery & Articles · No Melting or Testing Charges · Live Silver Rate Based Valuation · "Fast, Secure & Transparent Process"
- **Promo band:** "Bring Your Old Gold, Leave with Cash!" — Get Instant Cash for Your Gold – 100% Trusted & Transparent Process · Complimentary Gold Purity Check · Fully Transparent Evaluation Process · Free Ultrasonic Cleaning for Your Jewelry
- **How It Works:**
  1. Discover Mudra Gold Today — Bring your gold to Mudra Gold and discover its true value!
  2. Free Jewellery Cleaning — We clean your gold with high-tech machines—right in front of you.
  3. Transparent Gold Valuation — Know your gold's true worth—analyzed with precision tools while you watch.
  4. Current Gold Rate — We check your gold's value using today's market price.
  5. Easy Payment — Cash for smaller amounts—bank transfer for bigger ones. It's fast, safe, and easy!
- **Swarn Vriddhi:** "Gold Coin Purchase Plan – Pay 11 installments and get the 12th free." Secure & transparent gold savings · Flexible installment options · Receive 12th coin free after 11 installments
- **About:** "Pioneer in Eastern UP for cash against old Gold" · "Gold For Cash – Where Purity Meets Trust" · Vision: "To become India's most trusted destination for gold exchange — offering a seamless, respectful, and valuable experience to every customer."
- **FAQ:**
  - Is there any age boundary to sell your gold? → Yes, minimum 21 years.
  - How long does it take to get payment? → Instant — in cash or directly to your bank account.
- **Services page:** Free Jewellery Cleaning Services · Purity Testing Service · Transparent Value Process · Customize Gifting Option
- **Footer blurb:** "Mudra Gold, a newly launched initiative by MKS Enterprises, offers a trusted and professional service for converting gold into cash, ensuring secure and transparent transactions for every client."
- **Coming soon:** "New Branch — Coming Soon · Medical College Road, Basharatpur, Gorakhpur, U.P. · Instant Cash Against Gold — Coming Soon!"

Keep all of this in `src/content/*.ts` (see `architecture.md`), never hard-coded in components.

---

## 7. Open Questions & Issues Found on the Current Site

These came out of the analysis of the old site. Since the site is outdated, some may already be resolved on the owner's side. `client-questionnaire.md` is how we close them. Resolve all before launch.

1. **"Govt Authorized Gold Buyer" [CONFIRM].** A legal/trust claim. Get the actual registration/licence details from the client. Show this badge only if verified.
2. **Swarn Vriddhi plan terms [CONFIRM].** No terms are shown (instalment amount, duration, what "12th free" means, refund/exit rules). Collecting recurring instalments from customers may be subject to rules on deposit/savings schemes. Client should confirm compliance and supply terms; the site shouldn't imply terms that don't exist. (Not legal advice.)
3. **Payment wording.** The current site says "Instant cash / bank transfer for > Rs 10,000" in one place and "Cash for smaller amounts—bank transfer for bigger ones" in another. Confirm the exact policy and use one consistent sentence.
4. **KYC / ID requirements.** The site doesn't say what to bring (ID proof, etc.). Ask the client; this is a top customer question and a good FAQ entry.
5. **Mismatched contact data on the live site.**
   - Footer phone link dials `9554489818`, but the visible number is `9621319818`.
   - `info@mymudragold.in` links to `mymudragold@gmail.com`.
   - Two different LinkedIn URLs are used.
   - The logo links to an unrelated external domain.
   Confirm the single correct value for each and put it in `site.ts`.
6. **Testimonials.** One of the two current testimonials is from "Torrent Infotech" — the site's developer. Replace with genuine customer reviews. Need real photos or no photo.
7. **Custom coin form has no name/phone** on the live site, so the team can't follow up. New version adds both.
8. **State list** on the live form includes only 28 states and omits Delhi and other UTs. New version should include all states/UTs, defaulted to Uttar Pradesh.
9. **Gallery.** Live heading is "Be First Who Read News" with placeholder captions ("Duty"). Need real photos: stores, process, team, events. Clarify whether it's a photo gallery or a news feed.
10. **Assets.** Logo is hosted on Imgur; images use `.png.png` names. Request original logo (SVG/PNG), real store/process photos, and gifting product photos.
11. **Rates.** The site says "live silver rate based valuation" and "current gold rate" but shows no rate. Decide whether to display a rate widget (Phase 6) or not.
12. **Branch hours** — same at both branches? **[CONFIRM]**
13. **WhatsApp** number — same as the call number? **[CONFIRM]**
14. **Privacy policy** — client needs to approve text, since we store customer phone numbers.

---

## 8. Assumptions
- The owner's current information replaces the old site's. Until it arrives, old-site facts are used only as clearly flagged placeholders.
- Services, branches, hours, plan and pricing model may have changed since the old site was written. We do not assume otherwise.
- Mobile traffic will dominate; design and test mobile first.
- English copy for v1; Hindi added in Phase 6 (build content so this is easy).
- A single developer ("you") is vibe-coding with an AI assistant; docs are kept lean.
- Client will provide real photos and final copy; placeholders are acceptable until then but must be clearly marked.
