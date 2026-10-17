# Rules — Mudra Gold Website

> Global rules for the AI assistant. These apply to **every** prompt in this project.
> If a rule here conflicts with a casual request in chat, **ask before breaking it**.

---

## 1. How to Work (AI boundaries)

1. **Read first.** Before coding, read the docs relevant to the task: `prd.md`, `architecture.md`, `design.md`, `phases.md`, and `memory.md` (once it exists).
2. **Stay in the current phase.** Only build what the active phase in `phases.md` asks for. Do not start later phases or "helpfully" add extra features.
3. **Stay in scope of the task.** Touch only the files needed. If you must edit a file outside the stated scope, say so and ask first.
4. **Ask when unsure.** If a business fact, copy, or requirement is missing, ask. Do not guess.
5. **No new dependencies without asking.** Name the package, why it's needed, and the alternative. Use only the stack in `architecture.md`.
6. **No refactors nobody asked for.** If something looks wrong, mention it at the end; don't rewrite it.
7. **Small, complete changes.** Deliver working code, not stubs. No `TODO`, `FIXME`, "implement later", or placeholder functions.
8. **After each task:** list the files you created/changed, and give me one line to paste into `memory.md`.
9. **Never delete or overwrite** `.env*`, `docs/*`, or `src/content/*` wholesale. Edit surgically.

---

## 2. Business & Content Rules (most important for this project)

This is a **gold-buying business where trust is the product**. Wrong claims are a legal and reputational risk.

0. **The old website is NOT a source of truth.** The owner says it is outdated. Any fact that originated there (see `prd.md`) is **legacy/unverified**. Never present a legacy fact as confirmed, and never "fix" content by re-reading the old site. Only the owner's answers count.
1. **Single source of truth for facts.** Phone, WhatsApp, email, addresses, hours, social links, and branch list live **only** in `src/content/site.ts`. Components import from there. Never hard-code or retype them.
1a. **Verification flags.** Every business fact and copy block in `src/content/*.ts` carries `verified: boolean`. Legacy values are `verified: false`. Maintain a `needsConfirmation` list in `site.ts` of every unverified item. The build must show it (e.g. `npm run check:content`) so nothing unverified ships by accident. Flip to `true` only when the owner has confirmed.
2. **Copy comes from `src/content/*.ts` (owner-approved), with `prd.md` §6 as legacy draft only** or from `src/content/*.ts`. Do not invent claims, statistics, awards, years in business, customer counts, or guarantees.
3. **Never state a gold/silver price, rate, or payout amount** anywhere on the site. No "₹X per gram", no calculators implying what a customer will receive. (A live-rate widget is a Phase 6 item and needs a verified data source.)
4. **"Govt Authorized Gold Buyer"** may only be displayed if `site.ts → verifiedClaims.govtAuthorized` is `true`. Default it to `false` until the client confirms.
5. **Swarn Vriddhi plan:** do not invent instalment amounts, durations, interest, returns, or terms. Show only the approved wording from `prd.md`. The "Join Now" button opens the lead form with "monthly scheme" pre-selected; it does not take payments.
6. **No fake testimonials, reviews, ratings, logos, or photos.** Placeholder content must be visibly marked in code (`isPlaceholder: true`) and listed in `memory.md`.
7. **Do not show the third branch (Basharatpur) as open.** It is "Coming Soon" until the client says otherwise.
8. **Tone:** respectful, plain, reassuring. Not salesy, no exclamation-mark spam, no urgency tricks ("Only today!").
9. **Legal minimum age is 21** for selling gold (per the FAQ); keep that wording consistent.

---

## 3. Code Rules

### Always
- TypeScript **strict**; no `any` (use `unknown` + narrowing); no `@ts-ignore` without a comment explaining why.
- Functional components; named exports for components, default exports only for Next.js pages/layouts.
- Server Components by default. Add `"use client"` only for interactivity (forms, accordion, mobile menu).
- Tailwind utility classes only, using **design tokens** from `design.md`. No inline styles, no new CSS files, no hard-coded hex colours in components.
- Use `next/image` for images and `next/link` for internal links.
- Use `tel:` and `https://wa.me/` links built from `site.ts`.
- Validate **every** form with the shared zod schema in `lib/validators.ts` on both client and server.
- Keep components under ~150 lines; split if larger.
- Semantic HTML (`header`, `main`, `section`, `nav`, `footer`, one `h1` per page, logical heading order).

### Never
- Never use `localStorage`/`sessionStorage` for anything important.
- Never import `lib/supabase.ts` or `lib/email.ts` in a client component.
- Never expose `SUPABASE_SERVICE_ROLE_KEY` or `RESEND_API_KEY` to the client.
- Never commit `.env.local`. Keep `.env.example` updated.
- Never use `dangerouslySetInnerHTML` with user input.
- Never leave `console.log` in committed code (use `console.error` only inside catch blocks on the server).
- Never use `<img>` directly, `<a>` for internal navigation, or `<form>` without server-side validation behind it.
- Never add Bootstrap, MUI, Redux, jQuery, or CSS-in-JS.

---

## 4. Error Handling Rules

- **API routes** always return JSON in this shape:
  `{ ok: true, data?: ... }` or `{ ok: false, error: "human-readable message", fieldErrors?: {...} }`
  with correct HTTP status (400 validation, 429 rate limit, 500 server).
- Wrap every API handler in `try/catch`. Log the real error server-side; return a safe message to the client.
- **Never lose a lead.** DB insert is the source of truth. If email sending fails, log it and still return `ok: true`.
- **Forms** must show: loading state (button disabled + spinner), inline field errors, a success state, and a generic error state that includes the branch phone number as a fallback.
- Add `error.tsx` and `not-found.tsx` with friendly messages and a call/WhatsApp link.
- Image upload: enforce type (JPG/PNG/WebP/PDF) and max 5 MB on **both** client and server.

---

## 5. Performance, Accessibility & SEO Rules

- All images: `alt` text describing the image; decorative images get `alt=""`. Set `sizes` and use `priority` only on the hero image.
- Colour pairings must follow the contrast table in `design.md`. Never put gold-400/500 text on white at body size.
- Every interactive element is keyboard reachable with a visible focus state; touch targets ≥ 44×44 px.
- Respect `prefers-reduced-motion`.
- Every page exports `metadata` (title ≤ 60 chars, description ≤ 155 chars).
- Do not block the main thread with large libraries; no animation libraries in v1 (CSS only).

---

## 6. Git & Workflow Rules

- One feature per commit. Message format: `feat: …`, `fix: …`, `chore: …`, `docs: …`.
- Run `npm run lint` and `npm run build` before declaring a phase done. Fix errors; don't suppress them.
- Update `memory.md` at the end of every working session.

---

## 7. Prompt Habits (for me, the human)

- Tag only the docs the task needs, e.g. `@design.md @phases.md`.
- Start prompts with: "Phase X, task Y from `@phases.md`."
- When the AI proposes something outside these rules, reply: "Check `@rules.md`."
