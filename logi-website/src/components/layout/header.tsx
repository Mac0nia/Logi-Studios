"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, MessageCircle, Phone, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/work",     label: "Work"     },
  { href: "/services", label: "Services" },
  { href: "/process",  label: "Process"  },
  { href: "/about",    label: "About"    },
  { href: "/contact",  label: "Contact"  },
]

const PHONE_DISPLAY = "+44 7578 930408"
const PHONE_TEL     = "tel:+447578930408"
const WHATSAPP_URL  = "https://wa.me/447578930408"

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Scroll-based header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[--ls-border] bg-[--ls-bg-primary]/90 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ls-accent]/60 rounded-md"
          >
            <span
              className="text-[--ls-text-primary] text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Logi
              <span className="text-[--ls-accent]">Studios</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150",
                  pathname === href || pathname.startsWith(href + "/")
                    ? "text-[--ls-text-primary]"
                    : "text-[--ls-text-secondary] hover:text-[--ls-text-primary] hover:bg-[--ls-bg-tertiary]"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-1.5 text-sm text-[--ls-text-secondary] hover:text-[--ls-text-primary] transition-colors"
              aria-label="Call us"
            >
              <Phone className="size-3.5" />
              <span className="font-mono text-xs tracking-wide">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={cn(buttonVariants({ variant: "whatsapp", size: "default" }))}
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center size-10 rounded-md text-[--ls-text-secondary] hover:text-[--ls-text-primary] hover:bg-[--ls-bg-tertiary] transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-16 z-40 bg-[--ls-bg-primary] flex flex-col md:hidden"
          >
            <nav
              className="flex flex-col gap-1 p-4"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-4 py-3.5 rounded-xl text-base font-medium transition-colors",
                    pathname === href || pathname.startsWith(href + "/")
                      ? "bg-[--ls-bg-tertiary] text-[--ls-text-primary]"
                      : "text-[--ls-text-secondary] hover:bg-[--ls-bg-tertiary] hover:text-[--ls-text-primary]"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile contact actions */}
            <div className="mt-auto p-6 border-t border-[--ls-border] flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "w-full justify-center")}
              >
                <MessageCircle className="size-4" />
                WhatsApp us now
              </a>
              <a
                href={PHONE_TEL}
                className="flex items-center justify-center gap-2 text-sm text-[--ls-text-secondary] hover:text-[--ls-text-primary] transition-colors py-2"
              >
                <Phone className="size-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
