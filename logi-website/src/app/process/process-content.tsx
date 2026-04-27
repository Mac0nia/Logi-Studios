"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Container } from "@/components/ui/section"
import { FadeUp, StaggerContainer, StaggerItem, EASE_OUT } from "@/components/ui/motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// TODO (Step 9): Replace with real Cal.com link
const CALENDAR_LINK = "#[CALENDAR_LINK]"
const WHATSAPP_URL = "https://wa.me/447578930408"

const STEPS = [
  {
    number: "01",
    label: "Talk",
    heading: "15 minutes. That's all we need.",
    body: "Tell us what jobs you want more of — boiler installs, emergency callouts, kitchen rewires. We figure out exactly what your site needs to say and who it needs to say it to.",
    detail: "Free call · No hard sell · You can hang up anytime",
  },
  {
    number: "02",
    label: "Build",
    heading: "Your site, live in 5 working days.",
    body: "We design it, write the copy, code it, and put it on a real URL for you to review. Not a mockup — an actual live website. You see it before you pay a penny.",
    detail: "5 working days · Live URL to review · Your real phone number & address",
  },
  {
    number: "03",
    label: "Review",
    heading: "You check it. We tweak it.",
    body: "Go through the site on your phone. Ask for changes — wording, photos, the order of sections. We keep adjusting until it feels like yours. No time limit on this stage.",
    detail: "Unlimited tweaks · Mobile-first review · On your schedule",
  },
  {
    number: "04",
    label: "Pay",
    heading: "Happy? Pay £400. Not happy? Walk away.",
    body: "When you're satisfied, you pay the one-off £400 setup fee and we publish the site. After that it's £49/month — hosting, security, backups, and unlimited small edits. Cancel anytime.",
    detail: "£400 one-off · £49/month · Cancel anytime · No contract",
  },
]

function AnimatedNumber({ value, inView }: { value: string; inView: boolean }) {
  const reduced = useReducedMotion()
  return (
    <motion.span
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className="font-mono text-[--ls-accent]"
      style={{ fontSize: "clamp(3.5rem, 8vw, 5rem)", fontWeight: 700, lineHeight: 1 }}
    >
      {value}
    </motion.span>
  )
}

function ProcessStep({
  step,
  index,
}: {
  step: (typeof STEPS)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px 0px" })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={cn(
        "grid gap-10 lg:grid-cols-2 lg:gap-20 items-center",
        !isEven && "lg:[direction:rtl]"
      )}
    >
      {/* Number side */}
      <div className={cn("flex flex-col gap-2", !isEven && "lg:[direction:ltr]")}>
        <AnimatedNumber value={step.number} inView={inView} />
        <span className="font-mono text-xs uppercase tracking-widest text-[--ls-text-muted]">
          {step.label}
        </span>
        <motion.div
          className="mt-4 h-px bg-[--ls-accent]/30 max-w-[120px]"
          style={{ transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
        />
      </div>

      {/* Content side */}
      <motion.div
        className={cn("flex flex-col gap-4", !isEven && "lg:[direction:ltr]")}
        initial={{ opacity: 0, x: isEven ? 24 : -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
      >
        <h2
          className="text-[--ls-text-primary]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          {step.heading}
        </h2>
        <p className="text-base text-[--ls-text-secondary] leading-relaxed">
          {step.body}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-widest text-[--ls-text-muted]">
          {step.detail}
        </p>
      </motion.div>
    </div>
  )
}

export function ProcessContent() {
  return (
    <main className="min-h-screen">

      {/* Header */}
      <div className="py-20 border-b border-[--ls-border]">
        <Container>
          <FadeUp className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[--ls-accent] mb-3">
              / How it works
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
              Four steps. Zero risk.
            </h1>
            <p className="mt-4 text-base text-[--ls-text-secondary] leading-relaxed">
              No deposits. No contracts. No website that sits on a hard drive
              while you wait. Here&apos;s exactly what happens when you get in touch.
            </p>
          </FadeUp>
        </Container>
      </div>

      {/* Steps */}
      <Container>
        <div className="py-20 flex flex-col gap-24 lg:gap-32">
          {STEPS.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </Container>

      {/* Bottom CTA */}
      <div
        className="border-t border-[--ls-border] py-20"
        style={{ background: "var(--ls-bg-secondary)" }}
      >
        <Container>
          <StaggerContainer className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto">
            <StaggerItem>
              <p className="font-mono text-xs uppercase tracking-widest text-[--ls-accent]">
                Ready to start
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2
                className="text-[--ls-text-primary]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Step one takes 15 minutes.
              </h2>
              <p className="mt-3 text-base text-[--ls-text-secondary] leading-relaxed">
                Book a free call — no pitch, no pressure. Just a conversation
                about what jobs you want more of.
              </p>
            </StaggerItem>
            <StaggerItem className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
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
                WhatsApp instead
              </a>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </div>

    </main>
  )
}
