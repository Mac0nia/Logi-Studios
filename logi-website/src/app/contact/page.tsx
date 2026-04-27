import type { Metadata } from "next"
import { MessageCircle, Mail, CalendarDays } from "lucide-react"
import { Container } from "@/components/ui/section"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { ContactForm } from "@/components/contact/contact-form"
import { CalEmbed } from "@/components/contact/cal-embed"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Contact — Get Your Free Website Build Started",
  description:
    "Get in touch with Logi Studios. WhatsApp, email, or book a free discovery call — we reply within 4 working hours. East London-based.",
  alternates: { canonical: "https://logistudios.co.uk/contact" },
  openGraph: { url: "https://logistudios.co.uk/contact" },
}

const WHATSAPP_URL = "https://wa.me/447578930408"
const CALENDAR_LINK = process.env.NEXT_PUBLIC_CALENDAR_LINK ?? "#[CALENDAR_LINK]"

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20">
      <Container>

        {/* Header */}
        <FadeUp className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[--ls-accent] mb-3">
            / Contact
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
            Let&apos;s get your phone ringing.
          </h1>
          <p className="mt-4 text-base text-[--ls-text-secondary] leading-relaxed">
            Three ways to reach us. Pick whichever suits you.
            We reply within 4 working hours. East London-based.
          </p>
        </FadeUp>

        {/* Three contact option cards */}
        <StaggerContainer className="grid gap-5 sm:grid-cols-3 mb-16">

          {/* WhatsApp */}
          <StaggerItem>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-2xl border border-[--ls-border] p-6 bg-[--ls-bg-secondary] transition-all duration-300 hover:border-[#25D366]/40 hover:shadow-[0_0_30px_rgba(37,211,102,0.1)] h-full"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(37,211,102,0.12)" }}
              >
                <MessageCircle className="size-5 text-[#25D366]" />
              </div>
              <div>
                <p
                  className="text-[--ls-text-primary] font-semibold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  WhatsApp
                </p>
                <p className="text-sm text-[--ls-text-secondary] leading-relaxed">
                  Fastest response. Message us now — we check WhatsApp all day.
                </p>
              </div>
              <p className="mt-auto text-sm font-medium text-[#25D366]">
                +44 7578 930408 →
              </p>
            </a>
          </StaggerItem>

          {/* Book a call */}
          <StaggerItem>
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-2xl border border-[--ls-border] p-6 bg-[--ls-bg-secondary] transition-all duration-300 hover:border-[--ls-accent]/40 hover:shadow-[0_0_30px_var(--ls-accent-glow)] h-full"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(200,255,0,0.1)" }}
              >
                <CalendarDays className="size-5 text-[--ls-accent]" />
              </div>
              <div>
                <p
                  className="text-[--ls-text-primary] font-semibold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Book a free call
                </p>
                <p className="text-sm text-[--ls-text-secondary] leading-relaxed">
                  15-minute discovery call. Pick a time that works for you.
                </p>
              </div>
              <p className="mt-auto text-sm font-medium text-[--ls-accent]">
                Schedule now →
              </p>
            </a>
          </StaggerItem>

          {/* Email form */}
          <StaggerItem>
            <div className="flex flex-col gap-4 rounded-2xl border border-[--ls-border] p-6 bg-[--ls-bg-secondary] h-full">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(161,161,168,0.1)" }}
              >
                <Mail className="size-5 text-[--ls-text-secondary]" />
              </div>
              <div>
                <p
                  className="text-[--ls-text-primary] font-semibold mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Email form
                </p>
                <p className="text-sm text-[--ls-text-secondary] leading-relaxed">
                  Fill in the form below — we&apos;ll come back to you within 4 hours.
                </p>
              </div>
              <p className="mt-auto text-sm text-[--ls-text-muted]">
                hello@logistudios.co.uk
              </p>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* Two-column: form + Cal.com embed */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">

          {/* Contact form */}
          <FadeUp>
            <h2
              className="text-[--ls-text-primary] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 700,
              }}
            >
              Send us a message
            </h2>
            <ContactForm />
          </FadeUp>

          {/* Cal.com embed */}
          <FadeUp delay={0.15}>
            <h2
              className="text-[--ls-text-primary] mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.25rem",
                fontWeight: 700,
              }}
            >
              Or book a call directly
            </h2>
            <CalEmbed calLink={CALENDAR_LINK} />
          </FadeUp>

        </div>

      </Container>
    </main>
  )
}
