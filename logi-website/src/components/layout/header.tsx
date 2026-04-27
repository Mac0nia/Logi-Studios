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
          scrolled || menuOpen
            ? "border-b border-[--ls-border] bg-[--ls-bg-primary]/95 backdrop-blur-md"
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

      {/* Mobile floating dock menu */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMenuOpen(false)}>
            {/* Floating dock */}
            <motion.div
              key="mobile-menu"
              initial={{ y: -12, scale: 0.97 }}
              animate={{ y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 25 } }}
              exit={{ y: -6, scale: 0.98, transition: { type: "spring", stiffness: 260, damping: 25 } }}
              className="absolute top-20 left-4 right-4 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto max-w-sm bg-[--ls-bg-secondary]/95 backdrop-blur-xl border border-[--ls-border] rounded-3xl shadow-2xl shadow-black/50 overflow-hidden">
                <nav
                  className="flex flex-col p-2"
                  aria-label="Mobile navigation"
                >
                  {NAV_LINKS.map(({ href, label }, index) => (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={href}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all duration-200",
                          pathname === href || pathname.startsWith(href + "/")
                            ? "bg-[--ls-accent]/15 text-[--ls-accent]"
                            : "text-[--ls-text-secondary] hover:bg-[--ls-bg-tertiary] hover:text-[--ls-text-primary]"
                        )}
                      >
                        {label}
                        {pathname === href || pathname.startsWith(href + "/") ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[--ls-accent]" />
                        ) : null}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact actions */}
                <div className="p-3 pt-0">
                  <div className="flex gap-2">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "whatsapp", size: "sm" }),
                        "flex-1 justify-center"
                      )}
                    >
                      <MessageCircle className="size-4" />
                      WhatsApp
                    </a>
                    <a
                      href={PHONE_TEL}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[--ls-bg-tertiary] text-[--ls-text-secondary] hover:text-[--ls-text-primary] transition-colors text-sm font-medium"
                    >
                      <Phone className="size-4" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
