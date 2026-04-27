import type { Metadata } from "next"
import { Check, X } from "lucide-react"
import { Container } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services — Web Design & Care Plan",
  description:
    "Web design for East London tradespeople. £0 upfront, £400 on satisfaction, £49/month care plan. Cancel anytime. No lock-in.",
  alternates: { canonical: "https://logistudios.co.uk/services" },
  openGraph: { url: "https://logistudios.co.uk/services" },
}

const BUILD_INCLUDES = [
  "Custom-designed website (not a template)",
  "Mobile-first — built for customers on their phones",
  "Local SEO baked in from day one",
  "Click-to-call and WhatsApp contact on every page",
  "Google Business Profile set up and optimised",
  "Fast hosting on Vercel (sub-1s load times)",
  "SSL certificate included",
  "Contact form wired to your email",
  "5 working days from call to live site",
]

const CARE_INCLUDES = [
  "Hosting and domain renewal",
  "SSL certificate management",
  "Security monitoring and updates",
  "Monthly backups",
  "Unlimited small edits — text, photos, prices",
  "Google Business Profile updates",
  "Performance monitoring",
  "Priority email support",
]

const CARE_EXCLUDES = [
  "New full pages (quoted separately, usually £100–£200)",
  "Logo or branding work",
  "E-commerce or booking system integrations",
  "Paid advertising management",
]

const FAQS = [
  {
    q: "What counts as a 'small edit'?",
    a: "Changing text, swapping photos, updating prices, adding a new service to an existing page, tweaking colours. If it takes us under 30 minutes, it's included.",
  },
  {
    q: "What if I want to add a whole new page?",
    a: "We quote those separately. Most new pages are £100–£200 depending on complexity. No surprises.",
  },
  {
    q: "Can I cancel the care plan?",
    a: "Yes. One email, no notice period, no questions asked. Your site stays live until the end of the billing month.",
  },
  {
    q: "What happens to my site if I cancel?",
    a: "We hand over the full codebase. You can host it yourself or move to another provider. You own everything we built.",
  },
]

const CALENDAR_LINK = "#[CALENDAR_LINK]"
const WHATSAPP_URL = "https://wa.me/447578930408"

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-20">
      <Container>

        {/* Header */}
        <FadeUp className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[--ls-accent] mb-3">
            / Services
          </p>
          <h1
            className="text-[--ls-text-primary]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
            }}
          >
            Two things. That&apos;s it.
          </h1>
          <p className="mt-4 text-base text-[--ls-text-secondary] leading-relaxed">
            We don&apos;t do retainers, strategy decks, or monthly reports. We build
            websites and keep them running. Simple.
          </p>
        </FadeUp>

        {/* Pricing grid */}
        <StaggerContainer className="grid gap-6 lg:grid-cols-2 mb-20">

          {/* The Build */}
          <StaggerItem>
            <Card variant="feature" className="p-8 flex flex-col gap-6 h-full">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[--ls-accent] mb-2">
                  One-off
                </p>
                <h2
                  className="text-[--ls-text-primary] mb-1"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700 }}
                >
                  The Build
                </h2>
                <div className="flex items-baseline gap-2 mt-4">
                  <span
                    className="text-[--ls-text-primary]"
                    style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 700 }}
                  >
                    £0
                  </span>
                  <span className="text-[--ls-text-muted] text-sm">upfront</span>
                </div>
                <p className="text-sm text-[--ls-text-secondary] mt-1">
                  Pay <span className="text-[--ls-text-primary] font-medium">£400</span> only when you&apos;re happy.
                </p>
              </div>

              <div className="h-px bg-[--ls-border]" />

              <ul className="flex flex-col gap-3 flex-1">
                {BUILD_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[--ls-text-secondary]">
                    <Check className="size-4 shrink-0 mt-0.5 text-[--ls-accent]" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={CALENDAR_LINK}
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full justify-center mt-auto")}
              >
                Book a free call
              </a>
            </Card>
          </StaggerItem>

          {/* The Care Plan */}
          <StaggerItem>
            <Card variant="feature" className="p-8 flex flex-col gap-6 h-full relative overflow-hidden">
              {/* Popular badge */}
              <div
                className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--ls-accent)", color: "var(--ls-bg-primary)" }}
              >
                Most popular
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[--ls-accent] mb-2">
                  Monthly
                </p>
                <h2
                  className="text-[--ls-text-primary] mb-1"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700 }}
                >
                  The Care Plan
                </h2>
                <div className="flex items-baseline gap-2 mt-4">
                  <span
                    className="text-[--ls-text-primary]"
                    style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 700 }}
                  >
                    £49
                  </span>
                  <span className="text-[--ls-text-muted] text-sm">/month</span>
                </div>
                <p className="text-sm text-[--ls-text-secondary] mt-1">
                  Cancel anytime. No notice period.
                </p>
              </div>

              <div className="h-px bg-[--ls-border]" />

              <div className="flex flex-col gap-5 flex-1">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[--ls-text-muted] mb-3">
                    What&apos;s included
                  </p>
                  <ul className="flex flex-col gap-3">
                    {CARE_INCLUDES.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[--ls-text-secondary]">
                        <Check className="size-4 shrink-0 mt-0.5 text-[--ls-accent]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[--ls-text-muted] mb-3">
                    What&apos;s not included
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {CARE_EXCLUDES.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[--ls-text-muted]">
                        <X className="size-4 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "w-full justify-center mt-auto")}
              >
                Get started
              </a>
            </Card>
          </StaggerItem>

        </StaggerContainer>

        {/* FAQ */}
        <FadeUp className="max-w-2xl">
          <h2
            className="text-[--ls-text-primary] mb-8"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700 }}
          >
            Questions about what&apos;s included
          </h2>
          <div className="flex flex-col divide-y divide-[--ls-border]">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="py-5">
                <p className="text-sm font-semibold text-[--ls-text-primary] mb-2">{q}</p>
                <p className="text-sm text-[--ls-text-secondary] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </FadeUp>

      </Container>
    </main>
  )
}
