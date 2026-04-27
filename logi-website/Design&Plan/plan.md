# Logi Studios — Website Build Plan

> Hand this file to Claude Code as the master brief. Every section below is decision-ready: tech, structure, copy direction, design system, SEO, and build order.

---

## 0. Founder & contact details

These are baked into the plan — Claude Code should use them directly:

- **Founder name:** Gianluca Galli
- **WhatsApp / phone:** `+44 7578 930408` (use `447578930408` format for `wa.me/` deeplinks)
- **Public email:** `hello@logistudios.co.uk`
- **Domain:** `logistudios.co.uk`

Still to set up (Claude Code should leave these as TODO comments in the codebase):

- `[CALENDAR_LINK]` — Cal.com or Calendly link for the discovery call (create one before launch)
- `[INSTAGRAM_HANDLE]` — recommended: `@logistudios` (create + add later)

---

## 1. Positioning & one-line pitch

**Audience:** East London tradespeople first (plumbers, electricians, builders), with barbers and cafés as secondary.

**Core promise:**
> "Websites for East London tradespeople. We build it first — you only pay if it wins you jobs."

**Why this works:**
- Removes the #1 objection (risk of paying for a website that doesn't deliver).
- "Wins you jobs" speaks the customer's language. Tradespeople don't care about "conversion optimization" — they care about the phone ringing.
- Geographic specificity ("East London") beats generic "UK web design" for both trust and SEO.

**Tagline options to A/B:**
- "No phone calls? No fee."
- "Built free. Paid only when it works."
- "Your next job, found on Google."

---

## 2. Pricing structure (locked in)

| Tier | What it is | Price |
|---|---|---|
| **Build** | One-off setup, paid only on satisfaction | £400–£600 |
| **Care Plan** | Hosting, domain, SSL, unlimited small edits, monthly backups, security, GBP updates | **£49/month** (cancel anytime) |
| ~~SEO Pro~~ | Skipped for now per founder decision | — |

**Pitch on the site:** "£0 to start. £400 when you're happy. £49/month keeps it live, fast, and updating. Cancel anytime."

The "cancel anytime" line is non-negotiable — it kills the subscription objection for tradespeople who hate being locked in.

---

## 3. Tech stack

| Layer | Choice | Why |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | SSG for speed + SEO, easy Vercel deploy, server components for fast LCP |
| **Styling** | Tailwind CSS v4 | Speed of iteration, no CSS bloat |
| **Animation** | Framer Motion + GSAP (ScrollTrigger) | Tech-forward feel without going overboard |
| **3D** | React Three Fiber + Drei | One hero 3D element only — see §6 |
| **Forms** | React Hook Form + Zod | Validation, accessibility |
| **Form backend** | Resend (email) + WhatsApp deeplink | No server needed; emails to `hello@logistudios.co.uk` |
| **Booking** | Cal.com embed (free tier) | Discovery calls without back-and-forth |
| **Analytics** | Plausible or Vercel Analytics | GDPR-friendly, no cookie banner needed |
| **Hosting** | Vercel | Free tier handles this site forever |
| **CMS** | None — content as MDX in the repo | One-developer site; CMS adds complexity for no win |
| **Fonts** | `next/font` with Geist or Inter (body) + a display font (see §5) | Self-hosted, no FOUT |
| **Icons** | Lucide React | Consistent, lightweight |

**Performance budget (non-negotiable for this kind of agency site):**
- Lighthouse Performance ≥ 95 on mobile
- LCP < 2s on 4G
- CLS < 0.05
- Total page weight (hero) < 500KB excluding fonts

A web design agency with a slow website is dead on arrival. Optimize ruthlessly.

---

## 4. Sitemap

```
/                       Home
/work                   Portfolio (3–4 case studies)
/work/[slug]            Individual case study
/services               What we do (build + care plan)
/process                How the "free build" works
/about                  Founder story (build trust)
/contact                Form + WhatsApp + Cal.com embed
/sitemap.xml
/robots.txt
```

**Hidden but important:**
- `/legal/privacy`
- `/legal/terms`

That's it. No blog at launch — adds maintenance burden and isn't needed when you're not doing the SEO Pro tier yet. Add later if/when you upsell SEO Pro.

---

## 5. Design system

### Vibe: Tech-forward, dark, confident

Think **Linear meets Vercel meets a grime-record-label**. Premium, but East London — not Silicon Valley sterile.

### Color palette

```
--bg-primary:    #0A0A0B   (near-black, slight warmth)
--bg-secondary:  #111114   (panel/card)
--bg-tertiary:   #1A1A1F   (hover states, code blocks)
--border:        #26262C
--text-primary:  #F5F5F7
--text-secondary:#A1A1A8
--text-muted:    #6B6B73
--accent:        #C8FF00   (electric lime — the "Logi" signature)
--accent-glow:   #C8FF00 with 20% opacity for glow effects
--success:       #00D26A
```

**Why electric lime:** It's distinctive (no other London web agency uses it), reads as "live wire / electric / tradesperson tools," and pops on dark backgrounds. Use it sparingly — accent only, not floods. About 5% of pixels max.

### Typography

- **Display:** `Space Grotesk` (700, 500) — geometric, slightly quirky, tech-forward
- **Body:** `Inter` (400, 500, 600) — neutral, readable
- **Mono:** `JetBrains Mono` — for code/stats/timestamps in UI

Scale (mobile → desktop):
- Display: `clamp(2.5rem, 6vw, 5.5rem)` — hero
- H1: `clamp(2rem, 4vw, 3.5rem)`
- H2: `clamp(1.5rem, 3vw, 2.5rem)`
- Body: 16px / 1.6 line-height

### Motion principles

- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) for entrances
- **Duration:** 400–700ms for hero animations, 150–250ms for UI feedback
- **Reduced motion:** All animations respect `prefers-reduced-motion: reduce`
- **No infinite loops** except the hero 3D element — they're battery killers and distract on portfolio pages

---

## 6. Page-by-page brief

### / (Home)

**Goal:** Make a tradesperson visiting on their phone at lunchtime understand what you do, see proof, and tap a button — in under 30 seconds.

**Sections, in order:**

1. **Hero**
   - Headline: "Websites that win East London tradespeople real jobs."
   - Subhead: "We build it free. You pay £400 only when you're happy. Then £49/month keeps your phone ringing."
   - Primary CTA: `See our work →`
   - Secondary CTA: `WhatsApp +44 7578 930408`
   - **3D element (right side on desktop, behind text on mobile):** A subtle slowly-rotating wireframe of a website's wireframe-grid, made of electric-lime lines on the dark background. R3F, ~30 lines max. Pauses on `prefers-reduced-motion`. **This is the one 3D moment** — don't put 3D anywhere else on the site.

2. **Trust strip** — Logos/names of the 3–4 real clients. If logos aren't available, use plain wordmarks in `--text-secondary`. "Trusted by:" label.

3. **The pitch in 3 cards** (animated on scroll):
   - 🛠️ "Built for trades" — We know what plumbers, sparkies, and builders need. No fluff.
   - 💸 "Free until you're sold" — We build it. You see it. You pay only if it works.
   - 📈 "Found on Google" — Local SEO baked in. Your name. Your area. Your phone ringing.

4. **Featured work** — 3 case study cards, each with a thumbnail, client name, trade, and a one-line result ("Got 12 boiler jobs in month one"). Hover = subtle parallax + accent border glow.

5. **How it works** — A horizontal stepper, 4 steps:
   - 1. Free 15-min call
   - 2. We build your site (5 days)
   - 3. You review. Happy? Pay £400.
   - 4. £49/month keeps it live & updated. Cancel anytime.

6. **Testimonial** — Single big pull quote from your strongest client. Photo if possible. Trade + area underneath ("Mike, Plumber, Hackney").

7. **FAQ** — 6 questions max, accordion. See §10 for the actual questions.

8. **Final CTA band** — Full-width, electric-lime accent. "Want jobs coming in next month? Let's talk." → Cal.com embed button + WhatsApp button.

9. **Footer** — Minimal. Logo, contact, links, "© 2026 Logi Studios. East London."

---

### /work (Portfolio index)

- Grid of 3–4 case study cards, larger than on home.
- Filter chips at top: `All` / `Plumbers` / `Electricians` / `Builders` (even with only 3–4 cases, this signals you specialize and primes the visitor).
- Each card: hero image of the site (in a laptop/phone mockup frame), client name, trade, area, headline result.

---

### /work/[slug] (Case study)

Template, repeated for each project:

1. Hero — Project name, client trade + area, the headline result ("Increased calls 3x in 60 days").
2. The brief — 2–3 sentences. What they came to you with.
3. What we built — bullet list of features (booking form, gallery, GBP integration, etc.).
4. Screenshots — 3–5 images of the live site, full-width on mobile, framed on desktop.
5. The result — concrete metric. If you don't have a metric, use a testimonial quote here.
6. Tech used — small tag list.
7. CTA — "Want results like this? Free build, no risk." → Contact.

**For your 3–4 real projects, write each case study at ~250 words.** Don't pad. Tradespeople don't read.

---

### /services

- **The Build** — what's included, the timeline (5 days), the deliverables.
- **The Care Plan** — what £49/month covers in plain English. Bullet list, no jargon. Add: "What's NOT included" section to set expectations (e.g., "New full pages = quoted separately").
- Pricing table — 2 columns, clean.
- FAQ specific to services.

---

### /process

A scroll-driven page (this is where motion shines). 4 sections, each pinned briefly with GSAP ScrollTrigger:

1. **Talk** — "15-minute call. We figure out what jobs you want more of."
2. **Build** — "5 working days. We design, write, and code your site."
3. **Review** — "You see it live. Tweaks until you're happy."
4. **Pay** — "£400 setup. £49/month. Or walk away — no charge, no hard feelings."

Each section has a numbered animated counter and a brief illustration (line-art, electric-lime, no 3D).

---

### /about

- Founder photo (real, not stock).
- Story — 3 paragraphs. Why you started Logi Studios. What's wrong with how most agencies treat trades. Why "free build" is the model.
- "Why East London" — short paragraph. Local matters; you live and work here.
- CTA at the bottom.

---

### /contact

- Headline: "Let's get your phone ringing."
- 3 ways to reach you, equal weight:
   1. WhatsApp button → opens chat with `+44 7578 930408`
   2. Email form (Name, business, trade, what they want) → Resend → `hello@logistudios.co.uk`
   3. Cal.com embed for instant booking
- Below: "We reply within 4 working hours. East London-based."

---

## 7. SEO plan

Local SEO is the whole game for this audience. Tradespeople don't browse — they Google "plumber Hackney" at 8am when their boiler dies.

### On-page

- **Title tags:** `Web Design for East London Tradespeople | Logi Studios`
- **Meta descriptions:** Hand-write each page. Include "East London" + the value prop.
- **H1 = page title**, one per page, includes "London" or borough name where natural.
- **Schema markup:** `LocalBusiness` + `ProfessionalService` JSON-LD on every page. Include `areaServed` for each East London borough (Hackney, Tower Hamlets, Newham, Waltham Forest, Redbridge).
- **Alt text** on every image — descriptive, not stuffed.
- **Sitemap.xml + robots.txt** — auto-generated by Next.js.

### Off-page (do these in week 1 after launch)

1. **Google Business Profile** — register `Logi Studios`, East London location, web design category. Verify by postcard.
2. **Citations:** List on Yell, Bark, Trustpilot, Clutch (free tier). Same NAP everywhere (Name, Address, Phone).
3. **Backlinks:** Reach out to 5 East London business directories and trade associations.

### Content for SEO (no blog yet, but bake into existing pages)

- Each case study page targets a long-tail keyword: "plumber web design Hackney", "electrician website East London", etc.
- The Home page targets the head term: "web design East London".
- /services targets "affordable web design London tradespeople".

### Page speed = SEO

Already covered in §3, but: Core Web Vitals are a confirmed ranking factor. The performance budget isn't optional.

---

## 8. Conversion mechanics

Every page should have, in this priority order:

1. **WhatsApp button** — sticky, bottom-right on mobile. This is the highest-converting CTA for tradespeople. They live in WhatsApp.
2. **Primary CTA** — varies by page (See work / Book call / Get started).
3. **Phone number** — in the header, click-to-call on mobile.

### Form fields (keep brutally short)

Contact form = 4 fields max:
- Name
- Trade (dropdown: Plumber, Electrician, Builder, Barber, Café, Other)
- Phone or email (their choice)
- "What do you need?" (textarea, optional)

That's it. Every extra field = ~10% drop in completion.

---

## 9. Copy voice

- **Short sentences.** Tradespeople read on phones, fast.
- **Concrete over clever.** "12 jobs in a month" beats "increased lead velocity."
- **No agency jargon.** Ban list: "synergy," "elevate," "bespoke," "solutions," "leverage," "ecosystem."
- **Second person.** Talk to "you," not "our clients."
- **One idea per sentence.**

**Example — bad (typical agency site):**
> "We craft bespoke digital experiences that elevate your brand and drive measurable engagement across all touchpoints."

**Example — good (Logi Studios voice):**
> "We build websites that get plumbers more calls. That's it."

---

## 10. FAQ content (use these exact questions)

1. **Is the build really free?** Yes. We build the whole site. You only pay the £400 if you're happy and want to publish it.
2. **What if I'm not happy?** Walk away. No charge. We keep the design, you keep your time.
3. **What does the £49/month cover?** Hosting, domain, security, backups, SSL, and unlimited small edits (text, photos, prices). Cancel anytime.
4. **How long does it take?** 5 working days from our first call to you reviewing the live site.
5. **Do you do logos / branding?** No. We do websites only — that's how we stay fast and cheap.
6. **What if I already have a website?** We'll rebuild it free. You only pay if the new one's better.

---

## 11. Build order for Claude Code

Do it in this exact order. Each step ships something working before moving on.

1. **Setup** — Next.js 15 + Tailwind v4 + TypeScript + Geist/Space Grotesk fonts. Vercel deploy from day one.
2. **Design tokens** — Implement the color/type/spacing system in `globals.css` as CSS variables. Build a `<Button>`, `<Card>`, `<Section>` primitive.
3. **Layout shell** — Header (logo + nav + WhatsApp button), Footer, sticky mobile WhatsApp FAB.
4. **Home page** — Static content first, no animations. Get the structure right.
5. **Animations on home** — Framer Motion entrances on scroll. GSAP for the "How it works" stepper if needed.
6. **3D hero element** — R3F wireframe. Last, because it's the most likely thing to bloat the bundle. Lazy-load it.
7. **Portfolio index + case study template** — One template, MDX-driven.
8. **Services, Process, About, Contact** pages.
9. **Forms** — Resend integration, Cal.com embed, WhatsApp deeplinks.
10. **SEO** — Metadata, JSON-LD schema, sitemap, robots, OG images.
11. **Performance pass** — Image optimization (`next/image` everywhere), font subsetting, bundle analysis. Hit the Lighthouse targets.
12. **Accessibility pass** — Keyboard nav, focus states, `prefers-reduced-motion`, alt text, ARIA labels on icon buttons.
13. **Legal pages** — Privacy + Terms (use a generator like Termly to start).
14. **Pre-launch QA** — Test every form, every link, every CTA on real iPhone + Android.

---

## 12. What NOT to build (resist scope creep)

- ❌ Blog (until SEO Pro launches)
- ❌ Client login / dashboard
- ❌ Pricing calculator
- ❌ Live chat widget (the WhatsApp button does the same job, cheaper)
- ❌ Newsletter signup (you have nothing to send yet)
- ❌ Multi-language (English only confirmed)
- ❌ Animated cursor / custom cursor (signals "agency from 2021")
- ❌ Lottie animations on every section (one 3D hero is enough motion)

---

## 13. Success metrics for the site itself

Track these monthly:

- **Lighthouse Performance** ≥ 95 mobile (non-negotiable)
- **Discovery call bookings via Cal.com** — target 5/month by month 3
- **WhatsApp clicks** — track via UTM
- **Organic traffic from "X London" queries** — track in Search Console
- **Conversion rate** (visitor → contact form / booking / WhatsApp click) — target 3%+

---

## Appendix: Domain & email setup

- Domain: `logistudios.co.uk` ✓
- Recommended email: `hello@logistudios.co.uk` (Google Workspace, £5.20/month)
- Set up SPF, DKIM, DMARC on day one — your transactional emails (form submissions) need to land, not spam.

---

**End of plan.** Hand this whole document to Claude Code as the project brief, then iterate page by page. Don't let it build everything in one shot — review each page before moving on.
