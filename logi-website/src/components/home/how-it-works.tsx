import { Section, Container, SectionLabel, SectionHeading, SectionSubtext } from "@/components/ui/section"
import { FadeUp, StaggerContainer, StaggerItem, DrawLine } from "@/components/ui/motion"

const STEPS = [
  {
    number: "01",
    title:  "Free 15-min call",
    body:   "Tell us what jobs you want more of. We figure out what your site needs to say and who it needs to reach.",
  },
  {
    number: "02",
    title:  "We build your site",
    body:   "5 working days. We design, write, and code everything. You don't touch a thing.",
  },
  {
    number: "03",
    title:  "You review it live",
    body:   "We send you the link. You click around. We tweak until you're happy. No limits.",
  },
  {
    number: "04",
    title:  "Pay only if you love it",
    body:   "£400 to own it. £49/month keeps it live, fast, and updated. Cancel anytime — no lock-in.",
  },
]

export function HowItWorks() {
  return (
    <Section>
      <Container>
        <FadeUp>
          <SectionLabel>How it works</SectionLabel>
          <SectionHeading>Four steps. Zero risk.</SectionHeading>
          <SectionSubtext>
            From first call to live site in 5 working days. You only pay when you&apos;re happy.
          </SectionSubtext>
        </FadeUp>

        <StaggerContainer className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ number, title, body }, i) => (
            <StaggerItem key={number}>
              <div className="relative flex flex-col gap-4 p-6 lg:p-8">

                {/* Connector line between steps (desktop) — draws left-to-right */}
                {i < STEPS.length - 1 && (
                  <DrawLine
                    delay={i * 0.12 + 0.3}
                    className="hidden lg:block absolute top-[2.6rem] left-[calc(100%-1rem)] w-8 h-px bg-[--ls-border]"
                    aria-hidden="true"
                  />
                )}

                {/* Step number */}
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[--ls-accent]/30 bg-[--ls-accent]/10 font-mono text-sm font-bold text-[--ls-accent]">
                    {number}
                  </span>
                  {/* Mobile connector */}
                  {i < STEPS.length - 1 && (
                    <div className="sm:hidden h-px flex-1 bg-[--ls-border]" aria-hidden="true" />
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3
                    className="text-base font-semibold text-[--ls-text-primary]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-[--ls-text-secondary] leading-relaxed">{body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pricing recap bar */}
        <FadeUp delay={0.2}>
          <div className="mt-6 mx-6 lg:mx-8 rounded-xl border border-[--ls-border] bg-[--ls-bg-secondary] px-6 py-4 flex flex-wrap gap-6 items-center justify-between">
            <p className="text-sm text-[--ls-text-secondary]">The full picture, in plain English:</p>
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Build",    value: "£0 upfront" },
                { label: "If happy", value: "£400"       },
                { label: "Monthly",  value: "£49/month"  },
                { label: "Lock-in",  value: "None"       },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[--ls-text-muted]">
                    {label}
                  </span>
                  <span className="text-sm font-semibold text-[--ls-text-primary]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}
