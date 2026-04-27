import { MessageCircle, Calendar } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { FadeUp } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

const WHATSAPP_URL = "https://wa.me/447578930408?text=Hi%2C%20I%27d%20like%20to%20find%20out%20about%20getting%20a%20website%20built."
// TODO: replace with your Cal.com/Calendly booking link before launch
const CALENDAR_LINK = "https://cal.eu/logistudios"

export function CTABand() {
  return (
    <section aria-label="Call to action" className="relative overflow-hidden py-20 sm:py-28">

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,255,0,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--ls-accent]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[--ls-accent]/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp distance={32} duration={0.65} className="text-center flex flex-col items-center gap-8">

          <span className="font-mono text-xs uppercase tracking-widest text-[--ls-accent]">
            Zero risk. Real results.
          </span>

          <h2
            className="text-[--ls-text-primary] max-w-2xl"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Want jobs coming in next month?
            <br />
            <span className="text-[--ls-accent]">Let&apos;s talk.</span>
          </h2>

          <p className="text-base text-[--ls-text-secondary] max-w-md">
            Free 15-min call. No pitch, no pressure. We figure out what your site
            needs to say — and whether we&apos;re a good fit.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={CALENDAR_LINK}
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              <Calendar className="size-4" />
              Book a free call
            </a>
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

          <p className="text-xs text-[--ls-text-muted]">
            We reply within 4 working hours. East London-based.
          </p>

        </FadeUp>
      </div>
    </section>
  )
}
