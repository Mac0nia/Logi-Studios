import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, MessageCircle } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getCaseStudy, getAllSlugs } from "@/lib/work"
import { Container } from "@/components/ui/section"
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { caseStudySchema } from "@/lib/jsonld"

const WHATSAPP_URL =
  "https://wa.me/447578930408?text=Hi%2C%20I%27d%20like%20to%20find%20out%20about%20getting%20a%20website%20built."
const CALENDAR_LINK = "https://cal.eu/logistudios"

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  const description = `${study.trade} in ${study.area}. ${study.result}`
  return {
    title: `${study.title} — Case Study`,
    description,
    alternates: {
      canonical: `https://logistudios.co.uk/work/${slug}`,
    },
    openGraph: {
      url: `https://logistudios.co.uk/work/${slug}`,
      type: "article",
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const schema = caseStudySchema({
    slug,
    title: `${study.title} — Case Study`,
    description: `${study.trade} in ${study.area}. ${study.result}`,
  })

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-16">
        {/* Accent glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-10"
          style={{
            background: `radial-gradient(ellipse, ${study.accent} 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />
        <Container className="relative">
          <FadeUp>
            {/* Back link */}
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm text-[--ls-text-muted] hover:text-[--ls-text-primary] transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ls-accent]/60 rounded-md px-1"
            >
              <ArrowLeft className="size-3.5" />
              All work
            </Link>

            <div className="flex flex-col gap-4 max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-widest text-[--ls-text-muted]">
                {study.trade} · {study.area}
              </p>
              <h1
                className="text-[--ls-text-primary]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.015em",
                }}
              >
                {study.title}
              </h1>
              <p
                className="text-xl font-medium"
                style={{ color: study.accent }}
              >
                {study.result}
              </p>
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ── Image placeholder ───────────────────────────────────── */}
      <div
        className="w-full h-72 sm:h-96 relative overflow-hidden border-y border-[--ls-border]"
        style={{
          background: `linear-gradient(135deg, var(--ls-bg-tertiary) 0%, color-mix(in srgb, ${study.accent} 12%, var(--ls-bg-secondary)) 100%)`,
        }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--ls-text-primary) 0px, var(--ls-text-primary) 1px, transparent 1px, transparent 12px)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[--ls-text-muted]">
            Screenshots — add before launch
          </p>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────── */}
      <Container className="py-16">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-20">

          {/* Left: content */}
          <div className="flex flex-col gap-12">

            {/* The brief */}
            <FadeUp>
              <h2
                className="text-[--ls-text-primary] mb-4"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600 }}
              >
                The brief
              </h2>
              <p className="text-[--ls-text-secondary] leading-relaxed">{study.brief}</p>
            </FadeUp>

            {/* What we built */}
            <FadeUp delay={0.05}>
              <h2
                className="text-[--ls-text-primary] mb-4"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600 }}
              >
                What we built
              </h2>
              <StaggerContainer className="flex flex-col gap-2.5">
                {study.features.map((feature) => (
                  <StaggerItem key={feature} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 size-1.5 rounded-full shrink-0"
                      style={{ background: study.accent }}
                    />
                    <span className="text-[--ls-text-secondary] text-sm leading-relaxed">
                      {feature}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeUp>

            {/* The result (MDX body) */}
            <FadeUp delay={0.1}>
              <h2
                className="text-[--ls-text-primary] mb-4"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600 }}
              >
                The result
              </h2>
              <div className="prose-custom">
                <MDXRemote source={study.content} />
              </div>
            </FadeUp>

            {/* Quote */}
            <FadeUp delay={0.12}>
              <blockquote className="border-l-2 pl-5" style={{ borderColor: study.accent }}>
                <p
                  className="text-[--ls-text-primary] italic leading-relaxed"
                  style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem" }}
                >
                  &ldquo;{study.quote}&rdquo;
                </p>
                <footer className="mt-3">
                  <cite className="not-italic text-sm font-semibold text-[--ls-text-primary]">
                    {study.quoteName}
                  </cite>
                  <span className="text-sm text-[--ls-text-muted]"> — {study.quoteRole}</span>
                </footer>
              </blockquote>
            </FadeUp>

          </div>

          {/* Right: sidebar */}
          <FadeUp delay={0.08} className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">

            {/* Tech stack */}
            <div className="rounded-xl border border-[--ls-border] bg-[--ls-bg-secondary] p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-[--ls-text-muted] mb-3">
                Tech used
              </p>
              <div className="flex flex-wrap gap-2">
                {study.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md border border-[--ls-border] text-xs font-medium text-[--ls-text-secondary] bg-[--ls-bg-tertiary]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="rounded-xl border border-[--ls-accent]/20 bg-[--ls-bg-secondary] p-5 flex flex-col gap-4">
              <p
                className="text-[--ls-text-primary] font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Want results like this?
              </p>
              <p className="text-sm text-[--ls-text-secondary] leading-relaxed">
                Free build. No risk. You only pay if it wins you work.
              </p>
              <a
                href={CALENDAR_LINK}
                className={cn(buttonVariants({ variant: "default", size: "default" }), "w-full justify-center")}
              >
                <Calendar className="size-4" />
                Book a free call
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "whatsapp", size: "default" }), "w-full justify-center")}
              >
                <MessageCircle className="size-4" />
                WhatsApp us
              </a>
            </div>

          </FadeUp>
        </div>

        {/* Next project nav */}
        <div className="mt-20 pt-10 border-t border-[--ls-border] flex justify-between items-center gap-4">
          <Link
            href="/work"
            className={cn(buttonVariants({ variant: "ghost", size: "default" }))}
          >
            <ArrowLeft className="size-4" />
            All work
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline", size: "default" }))}
          >
            Start your project <ArrowRight className="size-4" />
          </Link>
        </div>

      </Container>
    </main>
  )
}
