import Link from "next/link"
import { Mail, MessageCircle, Phone } from "lucide-react"

const NAV_LINKS = [
  { href: "/work",     label: "Work"     },
  { href: "/services", label: "Services" },
  { href: "/process",  label: "Process"  },
  { href: "/about",    label: "About"    },
  { href: "/contact",  label: "Contact"  },
]

const LEGAL_LINKS = [
  { href: "/legal/privacy", label: "Privacy"      },
  { href: "/legal/terms",   label: "Terms"        },
]

const WHATSAPP_URL  = "https://wa.me/447578930408"
const PHONE_DISPLAY = "+44 7578 930408"
const PHONE_TEL     = "tel:+447578930408"
const EMAIL         = "hello@logistudios.co.uk"

export function Footer() {
  return (
    <footer className="border-t border-[--ls-border] bg-[--ls-bg-secondary]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Main footer row */}
        <div className="py-12 grid grid-cols-1 gap-10 sm:grid-cols-3">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" aria-label="Logi Studios — home" className="w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ls-accent]/60 rounded-md">
              <span
                className="text-[--ls-text-primary] text-xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Logi<span className="text-[--ls-accent]">Studios</span>
              </span>
            </Link>
            <p className="text-sm text-[--ls-text-secondary] leading-relaxed max-w-[220px]">
              Websites for East London tradespeople. Built free. Paid only when it works.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="mb-4 text-xs font-mono uppercase tracking-widest text-[--ls-text-muted]">
              Pages
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[--ls-text-secondary] hover:text-[--ls-text-primary] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="mb-4 text-xs font-mono uppercase tracking-widest text-[--ls-text-muted]">
              Get in touch
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[--ls-text-secondary] hover:text-[--ls-accent] transition-colors"
                >
                  <MessageCircle className="size-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-2 text-sm text-[--ls-text-secondary] hover:text-[--ls-text-primary] transition-colors"
                >
                  <Phone className="size-4 shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-sm text-[--ls-text-secondary] hover:text-[--ls-text-primary] transition-colors"
                >
                  <Mail className="size-4 shrink-0" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[--ls-border] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[--ls-text-muted]">
            © 2026 Logi Studios. East London.
          </p>
          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-[--ls-text-muted] hover:text-[--ls-text-secondary] transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
