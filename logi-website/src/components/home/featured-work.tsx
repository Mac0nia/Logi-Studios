import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section, Container, SectionLabel, SectionHeading } from "@/components/ui/section"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

const WORK = [
  {
    slug:   "ah-electric",
    client: "AH Electric",
    trade:  "Electrician",
    area:   "Hackney",
    result: "Phone inquiries up 3× in the first 60 days.",
    accent: "#C8FF00",
  },
  {
    slug:   "decoworld",
    client: "DecoWorld",
    trade:  "Painter & Decorator",
    area:   "Shoreditch",
    result: "Fully booked 6 weeks out within a month of launch.",
    accent: "#60a5fa",
  },
  {
    slug:   "bethnal-barber",
    client: "Bethnal Barber",
    trade:  "Barber",
    area:   "Bethnal Green",
    result: "Online bookings replaced walk-ins as the main revenue source.",
    accent: "#f472b6",
  },
]

export function FeaturedWork() {
  return (
    <Section accent>
      <Container>
        <FadeUp className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <SectionLabel>Our work</SectionLabel>
            <SectionHeading>Real results for real tradespeople.</SectionHeading>
          </div>
          <Link
            href="/work"
            className={cn(buttonVariants({ variant: "outline", size: "default" }), "shrink-0")}
          >
            View all work <ArrowRight className="size-4" />
          </Link>
        </FadeUp>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-3">
          {WORK.map(({ slug, client, trade, area, result, accent }) => (
            <StaggerItem key={slug}>
              <Link href={`/work/${slug}`} className="group block focus-visible:outline-none rounded-2xl h-full">
                <Card variant="glow" className="h-full flex flex-col overflow-hidden group-focus-visible:ring-2 group-focus-visible:ring-[--ls-accent]/60 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[--ls-bg-primary]">

                  {/* Image placeholder — replaced with screenshots in Step 7 */}
                  <div
                    className="h-48 w-full shrink-0 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, var(--ls-bg-tertiary) 0%, color-mix(in srgb, ${accent} 8%, var(--ls-bg-secondary)) 100%)`,
                    }}
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 flex items-end p-4">
                      <span
                        className="font-mono text-xs uppercase tracking-widest"
                        style={{ color: accent, opacity: 0.7 }}
                      >
                        {trade} · {area}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="flex-1">
                    <p className="text-xs font-mono uppercase tracking-widest text-[--ls-text-muted] mb-1">
                      {trade} · {area}
                    </p>
                    <CardTitle className="text-base">{client}</CardTitle>
                    <CardDescription className="mt-1 text-sm">{result}</CardDescription>
                  </CardHeader>

                  <CardFooter className="pt-0">
                    <span className="flex items-center gap-1 text-xs font-medium text-[--ls-text-muted] group-hover:text-[--ls-accent] transition-colors">
                      Read case study <ArrowRight className="size-3" />
                    </span>
                  </CardFooter>

                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
