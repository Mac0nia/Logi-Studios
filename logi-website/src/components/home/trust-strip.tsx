import { FadeUp } from "@/components/ui/motion"

const CLIENTS = [
  { name: "AH Electric",    detail: "Hackney"       },
  { name: "DecoWorld",      detail: "Shoreditch"    },
  { name: "Bethnal Barber", detail: "Bethnal Green" },
  { name: "Swift Plumbing", detail: "Stratford"     },
]

export function TrustStrip() {
  return (
    <div role="region" aria-label="Trusted by" className="border-y border-[--ls-border] bg-[--ls-bg-secondary]/60 py-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-wrap items-center gap-x-8 gap-y-3">

          <span className="font-mono text-xs uppercase tracking-widest text-[--ls-text-muted] shrink-0">
            Trusted by:
          </span>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {CLIENTS.map(({ name, detail }) => (
              <div key={name} className="flex items-baseline gap-1.5">
                <span className="text-sm font-semibold text-[--ls-text-secondary]">{name}</span>
                <span className="text-xs text-[--ls-text-muted]">{detail}</span>
              </div>
            ))}
          </div>

        </FadeUp>
      </div>
    </div>
  )
}
