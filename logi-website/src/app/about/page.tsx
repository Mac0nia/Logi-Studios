import type { Metadata } from "next"
import Image from "next/image"
import { Container } from "@/components/ui/section"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "About — Gianluca & Lorenzo, East London Web Designers",
  description:
    "Gianluca Galli and Lorenzo — East London web designers behind Logi Studios. Why we build sites free for tradespeople and only charge when you're happy.",
  alternates: { canonical: "https://logistudios.co.uk/about" },
  openGraph: { url: "https://logistudios.co.uk/about" },
}

const CALENDAR_LINK = "https://cal.eu/logistudios"
const WHATSAPP_URL = "https://wa.me/447578930408"

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20">
      <Container>

        {/* Header */}
        <FadeUp className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[--ls-accent] mb-3">
            / About
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
            We're Gianluca & Lorenzo. We build websites for East London tradespeople.
          </h1>
        </FadeUp>

        {/* Two-column layout: story + photo placeholder */}
        <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:gap-20 mb-20">

          {/* Story */}
          <StaggerContainer className="flex flex-col gap-8">

            <StaggerItem>
              <h2
                className="text-[--ls-text-primary] mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                }}
              >
                Why we started Logi Studios
              </h2>
              <div className="flex flex-col gap-4 text-base text-[--ls-text-secondary] leading-relaxed">
                <p>
                  We got fed up watching good tradespeople lose jobs to
                  competitors with worse work but shinier websites. A plumber
                  who&apos;s been in Hackney for twenty years, doing honest work —
                  he shouldn&apos;t be losing boiler installs to someone who spent
                  £3k on a glossy agency site. That&apos;s just wrong.
                </p>
                <p>
                  The problem isn&apos;t that tradespeople don&apos;t value websites.
                  It&apos;s that they&apos;ve been burned. They&apos;ve paid upfront, waited
                  six weeks, got something generic, and watched it deliver
                  nothing. So they stopped trusting the whole thing.
                </p>
                <p>
                  The &quot;free build&quot; model is our answer to that. You see the
                  finished site before any money changes hands. If it doesn&apos;t
                  feel right, you walk away. No invoice, no hard feelings. That&apos;s
                  the only way to do this fairly.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-px bg-[--ls-border]" />
            </StaggerItem>

            <StaggerItem>
              <h2
                className="text-[--ls-text-primary] mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                }}
              >
                What&apos;s wrong with most web agencies
              </h2>
              <div className="flex flex-col gap-4 text-base text-[--ls-text-secondary] leading-relaxed">
                <p>
                  Most agencies pitch to businesses like yours with slide decks,
                  discovery workshops, and three-month timelines. That&apos;s fine
                  if you&apos;re a company with a marketing budget. It&apos;s useless
                  if you&apos;re a plumber who needs the phone to ring next week.
                </p>
                <p>
                  They also build generic sites — the same template with your
                  logo swapped in. Your site ends up looking like every other
                  trades website in London, which means it does nothing to make
                  you stand out in Google when someone in Newham searches
                  &quot;emergency plumber.&quot;
                </p>
                <p>
                  Logi Studios does one thing: websites that get tradespeople
                  more calls. Not brand awareness. Not impressions. Calls.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="h-px bg-[--ls-border]" />
            </StaggerItem>

            <StaggerItem>
              <h2
                className="text-[--ls-text-primary] mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                }}
              >
                Why East London
              </h2>
              <div className="flex flex-col gap-4 text-base text-[--ls-text-secondary] leading-relaxed">
                <p>
                  Because we live here. Hackney, Tower Hamlets, Newham,
                  Waltham Forest — we know these boroughs. We know the trade
                  networks, the local directories, the search terms people
                  actually type at 7am when a pipe&apos;s burst.
                </p>
                <p>
                  Local knowledge isn&apos;t a marketing line. It&apos;s the difference
                  between a site that ranks for &quot;plumber London&quot; (impossible)
                  and one that ranks for &quot;boiler repair Hackney&quot; (very possible,
                  very valuable).
                </p>
              </div>
            </StaggerItem>

          </StaggerContainer>

          {/* Founder photos */}
          <FadeUp delay={0.2} className="flex flex-col gap-5 lg:self-start">

            {/* Gianluca */}
            <div className="rounded-2xl border border-[--ls-border] overflow-hidden aspect-[3/4] relative flex items-end p-6">
              <Image
                src="/gianluca.jpg"
                alt="Gianluca Galli — co-founder of Logi Studios, East London"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 360px"
                priority
              />
              <div
                className="relative z-10 w-full rounded-xl p-4"
              >
                <p
                  className="text-[--ls-text-primary] font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Gianluca Galli
                </p>
                <p className="text-sm text-[--ls-text-muted]">
                  Co-founder · East London
                </p>
              </div>
            </div>

            {/* Lorenzo */}
            <div className="rounded-2xl border border-[--ls-border] overflow-hidden aspect-[3/4] relative flex items-end p-6">
              <Image
                src="/lorenzo.jpg"
                alt="Lorenzo — co-founder of Logi Studios, East London"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
              <div
                className="relative z-10 w-full rounded-xl p-4"
              >
                <p
                  className="text-[--ls-text-primary] font-semibold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lorenzo
                </p>
                <p className="text-sm text-[--ls-text-muted]">
                  Co-founder · East London
                </p>
              </div>
            </div>

          </FadeUp>

        </div>

        {/* CTA */}
        <FadeUp>
          <div
            className="rounded-2xl border border-[--ls-accent]/20 p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
            style={{ background: "var(--ls-bg-secondary)" }}
          >
            <div>
              <h2
                className="text-[--ls-text-primary] mb-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                }}
              >
                Want to work together?
              </h2>
              <p className="text-sm text-[--ls-text-secondary]">
                Free 15-minute call. No commitment. Just a chat about your business. Both of us available.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={CALENDAR_LINK}
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "justify-center")}
              >
                Book a free call
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "justify-center")}
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </FadeUp>

      </Container>
    </main>
  )
}
