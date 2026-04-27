import { cn } from "@/lib/utils"

// ── Section ──────────────────────────────────────────────────────────────────
// Page section wrapper. Handles vertical rhythm and max-width container.
//
// Props:
//   accent   — renders a 1px electric-lime top border (use on alternating sections)
//   tight    — reduces vertical padding (e.g. for trust strips, thin bands)
//   id       — for in-page anchor links
//
// Usage:
//   <Section accent id="how-it-works">
//     <SectionLabel>How it works</SectionLabel>
//     <SectionHeading>Four steps. Zero risk.</SectionHeading>
//     …content…
//   </Section>

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  accent?: boolean
  tight?: boolean
}

function Section({
  className,
  accent = false,
  tight = false,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(
        "relative w-full",
        tight ? "py-10 sm:py-14" : "py-16 sm:py-24",
        accent && "border-t border-[--ls-accent]/20",
        className
      )}
      {...props}
    />
  )
}

// Inner container — max-width + horizontal padding
function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="container"
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
}

// Small all-caps label above a section heading (e.g. "/ Our services")
function SectionLabel({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="section-label"
      className={cn(
        "mb-3 font-mono text-xs font-medium uppercase tracking-widest text-[--ls-accent]",
        className
      )}
      {...props}
    />
  )
}

// Main section heading
function SectionHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="section-heading"
      className={cn("text-h2 font-display text-[--ls-text-primary]", className)}
      {...props}
    />
  )
}

// Optional sub-copy beneath a heading
function SectionSubtext({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="section-subtext"
      className={cn("mt-4 max-w-2xl text-base text-[--ls-text-secondary] leading-relaxed", className)}
      {...props}
    />
  )
}

export { Section, Container, SectionLabel, SectionHeading, SectionSubtext }
