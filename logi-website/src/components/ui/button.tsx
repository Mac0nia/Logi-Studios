import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base — shared across all variants
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all duration-200 outline-none select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-[--ls-accent]/60 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Electric lime CTA — main hero / section CTAs
        default:
          "bg-[--ls-accent] text-[--ls-bg-primary] hover:bg-[--ls-accent]/90 font-semibold shadow-[0_0_20px_var(--ls-accent-glow)]",
        // Outlined — secondary CTAs, sits next to default
        outline:
          "border-[--ls-border] bg-transparent text-[--ls-text-primary] hover:bg-[--ls-bg-tertiary] hover:border-[--ls-text-muted]",
        // Ghost — nav items, inline actions
        ghost:
          "bg-transparent text-[--ls-text-secondary] hover:bg-[--ls-bg-tertiary] hover:text-[--ls-text-primary]",
        // WhatsApp — used throughout as the high-conversion mobile CTA
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe5d] font-semibold shadow-[0_0_20px_rgba(37,211,102,0.2)]",
        // Destructive
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",
        // Link
        link: "text-[--ls-accent] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        // lg — hero CTAs
        lg: "h-12 px-7 text-base gap-2.5",
        // default — section CTAs
        default: "h-10 px-5 text-sm",
        // sm — utility buttons, tags
        sm: "h-8 px-3.5 text-xs rounded-md",
        // icon
        icon: "size-10",
        "icon-sm": "size-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
