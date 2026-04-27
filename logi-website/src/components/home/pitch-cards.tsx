import { Section, Container, SectionLabel, SectionHeading } from "@/components/ui/section"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const CARDS = [
  {
    icon: "🛠️",
    title: "Built for trades",
    body: "We know what plumbers, sparkies, and builders need. A site that loads fast, shows up on Google, and makes it dead easy to call you. No fluff.",
  },
  {
    icon: "💸",
    title: "Free until you're sold",
    body: "We build the whole site. You see it live. You only pay the £400 if you love it and want to launch. Walk away any time — no charge, no hard feelings.",
  },
  {
    icon: "📈",
    title: "Found on Google",
    body: "Local SEO baked in from day one. Your name. Your borough. Your trade. So when someone in Hackney searches \u201cplumber near me\u201d \u2014 you come up.",
  },
]

export function PitchCards() {
  return (
    <Section>
      <Container>
        <FadeUp>
          <SectionLabel>Why Logi Studios</SectionLabel>
          <SectionHeading className="max-w-xl">
            We build websites that get your phone ringing.
          </SectionHeading>
        </FadeUp>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-3">
          {CARDS.map(({ icon, title, body }) => (
            <StaggerItem key={title}>
              <Card variant="feature" className="p-7 flex flex-col gap-5 h-full">
                <span className="text-3xl" role="img" aria-label={title}>{icon}</span>
                <div className="flex flex-col gap-2">
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{body}</CardDescription>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
