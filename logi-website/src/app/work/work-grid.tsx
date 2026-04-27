"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { CaseStudy } from "@/lib/work"
import { EASE_OUT } from "@/components/ui/motion"

const FILTERS = [
  { label: "All",          value: "all"         },
  { label: "Electricians", value: "electrician" },
  { label: "Builders",     value: "builder"     },
  { label: "Barbers",      value: "barber"      },
  { label: "Plumbers",     value: "plumber"     },
]

export function WorkGrid({ studies }: { studies: CaseStudy[] }) {
  const [active, setActive] = useState("all")

  const filtered =
    active === "all"
      ? studies
      : studies.filter((s) => s.tradeCategory === active)

  return (
    <div>
      {/* Filter chips */}
      <div role="group" aria-label="Filter by trade" className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            aria-pressed={active === value}
            className={cn(
              "px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ls-accent]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[--ls-bg-primary]",
              active === value
                ? "border-[--ls-accent] bg-[--ls-accent] text-[--ls-bg-primary]"
                : "border-[--ls-border] text-[--ls-text-secondary] hover:border-[--ls-text-muted] hover:text-[--ls-text-primary]"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((study) => (
            <motion.div
              key={study.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              <Link
                href={`/work/${study.slug}`}
                className="group block focus-visible:outline-none rounded-2xl h-full"
              >
                <Card variant="glow" className="h-full flex flex-col overflow-hidden group-focus-visible:ring-2 group-focus-visible:ring-[--ls-accent]/60 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[--ls-bg-primary]">

                  {/* Image placeholder — will be replaced with next/image in a later pass */}
                  <div
                    className="h-56 w-full shrink-0 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, var(--ls-bg-tertiary) 0%, color-mix(in srgb, ${study.accent} 10%, var(--ls-bg-secondary)) 100%)`,
                    }}
                    aria-hidden="true"
                  >
                    {/* Diagonal pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          45deg,
                          var(--ls-text-primary) 0px,
                          var(--ls-text-primary) 1px,
                          transparent 1px,
                          transparent 12px
                        )`,
                      }}
                    />
                    <div className="absolute inset-0 flex items-end p-5">
                      <span
                        className="font-mono text-xs uppercase tracking-widest font-medium"
                        style={{ color: study.accent, opacity: 0.9 }}
                      >
                        {study.trade} · {study.area}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="flex-1">
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <CardDescription className="mt-1.5 text-sm leading-relaxed">
                      {study.result}
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="pt-0">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-[--ls-text-muted] group-hover:text-[--ls-accent] transition-colors">
                      Read case study <ArrowRight className="size-3" />
                    </span>
                  </CardFooter>

                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-sm text-[--ls-text-muted] py-12 text-center">
          No projects in this category yet — more coming soon.
        </p>
      )}
    </div>
  )
}
