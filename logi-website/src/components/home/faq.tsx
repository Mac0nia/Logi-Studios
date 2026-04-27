"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section, Container, SectionLabel, SectionHeading } from "@/components/ui/section"

const FAQS = [
  {
    q: "Is the build really free?",
    a: "Yes. We build the whole site — design, copy, code. You only pay the £400 if you're happy with it and want to publish it.",
  },
  {
    q: "What if I'm not happy?",
    a: "Walk away. No charge. We keep the design, you keep your time. No awkward conversations, no invoices.",
  },
  {
    q: "What does the £49/month cover?",
    a: "Hosting, domain, SSL certificate, security monitoring, monthly backups, and unlimited small edits — text changes, new photos, updated prices. Cancel anytime with one email.",
  },
  {
    q: "How long does it take?",
    a: "5 working days from our first call to you reviewing the live site. Most clients go live within a week of that review.",
  },
  {
    q: "Do you do logos or branding?",
    a: "No. We do websites only — that's how we stay fast and affordable. If you need a logo first, we can point you to someone good.",
  },
  {
    q: "What if I already have a website?",
    a: "We'll rebuild it free. You only pay if the new one is better. If it isn't, you've lost nothing.",
  },
]

export function FAQ() {
  return (
    <Section accent>
      <Container>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

          {/* Left: heading */}
          <div className="lg:sticky lg:top-24">
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeading>Got questions?</SectionHeading>
            <p className="mt-4 text-sm text-[--ls-text-secondary] leading-relaxed">
              The most common things people ask before they decide.
              Still unsure?{" "}
              <a
                href="https://wa.me/447578930408"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--ls-accent] underline-offset-4 hover:underline"
              >
                Just message us.
              </a>
            </p>
          </div>

          {/* Right: accordion */}
          <Accordion className="w-full">
            {FAQS.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-[--ls-border]"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-[--ls-text-primary] hover:text-[--ls-accent] hover:no-underline transition-colors py-5">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[--ls-text-secondary] leading-relaxed pb-5">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </Container>
    </Section>
  )
}
