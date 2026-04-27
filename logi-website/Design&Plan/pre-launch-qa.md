# Pre-launch QA checklist
> Complete every item before going live. Items marked 🔴 are blockers — the site should not launch without them.

---

## 1. Before you test anything — set up your env vars

| Variable | Where to get it | Status |
|---|---|---|
| `RESEND_API_KEY` | resend.com → API Keys (free tier works) | ☐ |
| Verify `hello@logistudios.co.uk` as a sender in Resend | resend.com → Domains | ☐ |
| `NEXT_PUBLIC_CALENDAR_LINK` | cal.com → create a "Discovery Call" event (15 min, free) | ☐ |

After setting `.env.local`, run `npm run dev` and test everything below.

---

## 2. 🔴 Blockers — must fix before launch

### Contact form
- [ ] Fill in the form at `/contact` and submit → you receive the email at `hello@logistudios.co.uk`
- [ ] Submit with empty required fields → field-level errors appear, form does not submit
- [ ] Submit with an invalid contact field (e.g. "abc") → error message appears
- [ ] Success state shows after a real submission

### Calendar link
- [ ] "Book a free call" button on `/contact` opens your Cal.com booking page
- [ ] "Book a free call" on `/services`, `/process`, `/about`, `/work/[slug]` sidebar, and the home page CTA band — all go to your Cal.com link
- [ ] `NEXT_PUBLIC_CALENDAR_LINK` is set in Vercel environment variables (not just `.env.local`)

### WhatsApp
- [ ] Every WhatsApp button opens `wa.me/447578930408` on mobile
- [ ] The sticky FAB appears after scrolling on mobile (hidden on desktop)

### Phone number
- [ ] Tapping the phone number in the header on mobile opens the dialler with `+44 7578 930408`

---

## 3. Page-by-page check

### / Home
- [ ] Hero loads without layout shift
- [ ] 3D wireframe animates (desktop only)
- [ ] "See our work" → `/work`
- [ ] Trust strip shows 4 client names
- [ ] "How it works" pricing bar shows correct figures (£0 / £400 / £49/month / None)
- [ ] FAQ accordion opens and closes
- [ ] All 3 featured case study cards link to correct slugs

### /work
- [ ] All 3 case study cards visible under "All" filter
- [ ] Electrician filter shows AH Electric only
- [ ] Builder filter shows DecoWorld only
- [ ] Barber filter shows Bethnal Barber only
- [ ] Plumber filter shows empty state (no plumber case study yet — expected)

### /work/[slug] — check all 3
- [ ] `/work/ah-electric` loads correctly
- [ ] `/work/bethnal-barber` loads correctly
- [ ] `/work/decoworld` loads correctly
- [ ] "All work" back link works
- [ ] "Start your project" → `/contact`
- [ ] Sidebar "Book a free call" → Cal.com
- [ ] Sidebar "WhatsApp us" → WhatsApp

### /services
- [ ] "Book a free call" button → Cal.com
- [ ] "Get started" (Care Plan) → WhatsApp
- [ ] All included/excluded items render correctly

### /process
- [ ] 4 steps animate in on scroll
- [ ] "Book a free call" → Cal.com
- [ ] "WhatsApp instead" → WhatsApp

### /about
- [ ] Photo placeholder visible (replace with real photo before launch)
- [ ] "Book a free call" → Cal.com
- [ ] "WhatsApp me" → WhatsApp

### /contact
- [ ] All 3 contact option cards render (WhatsApp, Cal.com, Email)
- [ ] WhatsApp card → opens WhatsApp
- [ ] Cal.com card → opens calendar link
- [ ] Cal.com embed shows (not the placeholder) once `NEXT_PUBLIC_CALENDAR_LINK` is set
- [ ] Form submits and you receive email (see blockers section above)

### /legal/privacy + /legal/terms
- [ ] Pages load without errors
- [ ] Back/forward links between the two pages work
- [ ] ICO link (`ico.org.uk`) opens correctly
- [ ] Cal.com privacy link opens correctly

---

## 4. Navigation & layout

- [ ] Header logo → `/`
- [ ] All 5 nav links (Work, Services, Process, About, Contact) navigate correctly
- [ ] Active nav link is highlighted on each page
- [ ] Mobile hamburger menu opens and closes
- [ ] Mobile menu closes when tapping a nav link
- [ ] Footer nav links all work
- [ ] Footer privacy/terms links work
- [ ] Footer WhatsApp, phone, email links all work

---

## 5. Mobile testing (real device — not just browser resize)

Test on at least one iOS and one Android device:

- [ ] Hero text is readable without horizontal scroll
- [ ] 3D wireframe is hidden on mobile (expected)
- [ ] WhatsApp FAB appears after scrolling
- [ ] Tapping the FAB opens WhatsApp
- [ ] Contact form fields are easy to tap and fill
- [ ] Keyboard does not obscure the submit button
- [ ] All page headings fit within the viewport
- [ ] No content bleeds outside the screen edge

---

## 6. SEO & meta

- [ ] Share the home page URL in iMessage / WhatsApp — OG preview image appears
- [ ] Share `/work/ah-electric` — OG preview shows (uses default root image)
- [ ] Visit `logistudios.co.uk/sitemap.xml` — all 10+ URLs listed
- [ ] Visit `logistudios.co.uk/robots.txt` — `Allow: /` and sitemap URL visible
- [ ] Submit sitemap to Google Search Console after launch

---

## 7. Things to add before or shortly after launch

### 🔴 Must-haves
- [ ] **Founder photo** — add a real photo to `/about`. Replace the placeholder div with `<Image>`.
- [ ] **Cal.com link** — set `NEXT_PUBLIC_CALENDAR_LINK` everywhere (env var handles all pages except `about`, `services`, `process`, `work/[slug]` which use the hardcoded `#[CALENDAR_LINK]` constant — update those files too once you have the link).
- [ ] **Case study screenshots** — add real screenshots to replace placeholder gradient divs in each case study and on the work grid cards.

### Nice-to-haves (post-launch)
- [ ] **Instagram** — create `@logistudios`, add URL to `jsonld.ts` `sameAs` array and footer
- [ ] **Google Business Profile** — register Logi Studios, East London. Verify by postcard.
- [ ] **Vercel Analytics** — add `@vercel/analytics` package and `<Analytics />` to layout
- [ ] **Submit to Yell, Bark, Trustpilot, Clutch** — citation building (plan §7)

---

## 8. Vercel deployment checklist

- [ ] Push `main` branch to GitHub
- [ ] Connect repo to Vercel (or `vercel --prod` from CLI)
- [ ] Add env vars in Vercel dashboard: `RESEND_API_KEY`, `NEXT_PUBLIC_CALENDAR_LINK`
- [ ] Set custom domain `logistudios.co.uk` in Vercel → Domains
- [ ] Verify HTTPS is active (Vercel handles this automatically)
- [ ] Set up SPF, DKIM, DMARC on `logistudios.co.uk` DNS for Resend email deliverability
- [ ] Run Lighthouse on the live URL (target: Performance ≥ 95 mobile)
- [ ] Submit `logistudios.co.uk/sitemap.xml` to Google Search Console

---

## 9. Cal.com link fix — 5-minute task

Once you have your Cal.com link, do a search-and-replace across the codebase:

```bash
# Find the 5 files with hardcoded #[CALENDAR_LINK]
grep -rn 'https://cal.eu/logistudios' src/
```

Replace each `"#[CALENDAR_LINK]"` with `process.env.NEXT_PUBLIC_CALENDAR_LINK ?? "#[CALENDAR_LINK]"`,
or simply hardcode your Cal.com URL directly — it won't change.

---

*Build: Next.js 16.2.4 · 17 routes · 0 TypeScript errors · 0 build warnings*
