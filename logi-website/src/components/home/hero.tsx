"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { HeroEntrance } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

// Lazy-loaded — Three.js + R3F is ~200KB gzipped; don't block first paint
const Hero3D = dynamic(
  () => import("./hero-3d").then((m) => m.Hero3D),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
)

const WHATSAPP_URL = "https://wa.me/447578930408?text=Hi%2C%20I%27d%20like%20to%20find%20out%20about%20getting%20a%20website%20built."

export function Hero() {
  return (
    <section aria-label="Hero" className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">

      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--ls-text-primary) 1px, transparent 1px),
                            linear-gradient(90deg, var(--ls-text-primary) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow behind headline */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, var(--ls-accent) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* ── Left: copy (staggered entrance) ───────────────── */}
          <div className="flex flex-col gap-8">

            <HeroEntrance order={0}>
              <div className="flex items-center gap-2 w-fit">
                <span className="h-px w-6 bg-[--ls-accent]" />
                <span className="font-mono text-xs font-medium uppercase tracking-widest text-[--ls-accent]">
                  East London web agency
                </span>
              </div>
            </HeroEntrance>

            <HeroEntrance order={1}>
              <h1
                className="text-[--ls-text-primary]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Websites that win{" "}
                <span className="text-[--ls-accent]">East London</span>{" "}
                tradespeople real jobs.
              </h1>
            </HeroEntrance>

            <HeroEntrance order={2}>
              <p className="text-lg text-[--ls-text-secondary] leading-relaxed max-w-lg">
                We build it free. You pay{" "}
                <span className="text-[--ls-text-primary] font-medium">£400 </span> only when
                you&apos;re happy. Then{" "}
                <span className="text-[--ls-text-primary] font-medium">£49/month</span> keeps
                your phone ringing.
              </p>
            </HeroEntrance>

            <HeroEntrance order={3}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className={cn(buttonVariants({ variant: "default", size: "lg" }))}
                >
                  See our work <ArrowRight className="size-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }))}
                >
                  <MessageCircle className="size-4" />
                  WhatsApp us
                </a>
              </div>
            </HeroEntrance>

            <HeroEntrance order={4}>
              <p className="text-sm text-[--ls-text-muted]">
                No contract. No upfront cost.{" "}
                <span className="text-[--ls-text-secondary]">Cancel your care plan anytime.</span>
              </p>
            </HeroEntrance>

          </div>

          {/* ── Right: 3D wireframe (lazy-loaded) ─────────────── */}
          <HeroEntrance order={2} className="hidden lg:flex items-center justify-center">
            <div
              className="relative w-[440px] h-[360px]"
              aria-hidden="true"
            >
              {/* Subtle radial glow behind the wireframe */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-20"
                style={{
                  background: "radial-gradient(ellipse at 50% 50%, var(--ls-accent-glow), transparent 65%)",
                }}
              />
              <Hero3D />
            </div>
          </HeroEntrance>

        </div>
      </div>
    </section>
  )
}
