import { Section, Container } from "@/components/ui/section"
import { FadeUp } from "@/components/ui/motion"

export function Testimonial() {
  return (
    <Section tight className="bg-[--ls-bg-secondary]">
      <Container>
        <FadeUp distance={32} duration={0.7}>
          <div className="mx-auto max-w-3xl text-center flex flex-col gap-6">

            <span
              className="text-[6rem] leading-none text-[--ls-accent] opacity-30 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote
              cite="#"
              aria-label="Testimonial from Mike O'Brien, Plumber, Hackney"
              className="text-[--ls-text-primary] -mt-10"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                fontWeight: 500,
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
              }}
            >
              I was sceptical — a free website sounded too good. But Gianluca built it, I
              saw it, I loved it. Within three weeks my phone hadn&apos;t stopped. Best £400
              I ever spent.
            </blockquote>

            <footer className="flex flex-col items-center gap-1">
              <div className="h-px w-12 bg-[--ls-accent] mb-3" />
              <cite className="not-italic text-base font-semibold text-[--ls-text-primary]">
                Mike O&apos;Brien
              </cite>
              <span className="text-sm text-[--ls-text-secondary]">Plumber · Hackney</span>
            </footer>

          </div>
        </FadeUp>
      </Container>
    </Section>
  )
}
