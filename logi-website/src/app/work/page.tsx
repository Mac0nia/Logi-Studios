import type { Metadata } from "next"
import { getAllCaseStudies } from "@/lib/work"
import { Container } from "@/components/ui/section"
import { FadeUp } from "@/components/ui/motion"
import { WorkGrid } from "./work-grid"

export const metadata: Metadata = {
  title: "Our Work — East London Tradesperson Websites",
  description:
    "Real websites for East London tradespeople. See how we've helped plumbers, electricians, builders, and barbers get more jobs from Google.",
  alternates: { canonical: "https://logistudios.co.uk/work" },
  openGraph: { url: "https://logistudios.co.uk/work" },
}

export default function WorkPage() {
  const studies = getAllCaseStudies()

  return (
    <main className="min-h-screen py-20">
      <Container>

        <FadeUp className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-[--ls-accent] mb-3">
            / Our work
          </p>
          <h1
            className="text-[--ls-text-primary] max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
            }}
          >
            Real results for real tradespeople.
          </h1>
          <p className="mt-4 text-base text-[--ls-text-secondary] max-w-xl leading-relaxed">
            Every project here started with a free build. The client only paid when they
            were happy. These are the results.
          </p>
        </FadeUp>

        <WorkGrid studies={studies} />

      </Container>
    </main>
  )
}
