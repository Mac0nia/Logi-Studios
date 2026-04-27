import { cn } from "@/lib/utils"

// ── Card ────────────────────────────────────────────────────────────────────
// Base dark card used throughout the site.
//
// Variants:
//   default  — flat dark panel with a subtle border
//   glow     — on hover, accent border + lime drop-shadow
//   feature  — slightly elevated, used for the "3 pitch cards" on home
//
// Usage:
//   <Card variant="glow" className="p-6">…</Card>
//   <CardHeader> / <CardBody> / <CardFooter> for internal layout

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glow" | "feature"
}

function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        // Base
        "rounded-2xl border bg-card text-card-foreground transition-all duration-300",
        // Variants
        variant === "default" && "border-[--ls-border]",
        variant === "glow" && [
          "border-[--ls-border]",
          "hover:border-[--ls-accent]/40",
          "hover:shadow-[0_0_30px_var(--ls-accent-glow)]",
        ],
        variant === "feature" && [
          "border-[--ls-border]",
          "bg-[--ls-bg-secondary]",
          "hover:border-[--ls-accent]/30",
          "hover:bg-[--ls-bg-tertiary]",
          "hover:shadow-[0_4px_32px_var(--ls-accent-glow)]",
        ],
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "font-display text-[--ls-text-primary] text-lg font-semibold leading-snug tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-[--ls-text-secondary] leading-relaxed", className)}
      {...props}
    />
  )
}

function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-body"
      className={cn("px-6 pb-0", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-3 p-6 pt-4", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter }
