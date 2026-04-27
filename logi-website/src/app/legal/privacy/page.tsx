import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Logi Studios collects, uses, and protects your personal data. GDPR-compliant.",
  alternates: { canonical: "https://logistudios.co.uk/legal/privacy" },
  robots: { index: false, follow: false },
}

const LAST_UPDATED = "27 April 2026"
const CONTACT_EMAIL = "hello@logistudios.co.uk"
const COMPANY_NAME = "Logi Studios"
const OWNER_NAME = "Gianluca Galli"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-20">
      <Container>
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-[--ls-accent] mb-3">
              / Legal
            </p>
            <h1
              className="text-[--ls-text-primary] mb-3"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
              }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm text-[--ls-text-muted]">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-10 text-[--ls-text-secondary] text-sm leading-relaxed">

            <section aria-labelledby="who-we-are">
              <h2 id="who-we-are" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                1. Who we are
              </h2>
              <p>
                {COMPANY_NAME} is a sole-trader web design business operated by {OWNER_NAME},
                based in East London, United Kingdom. We build websites for tradespeople.
              </p>
              <p className="mt-3">
                For data protection purposes, {OWNER_NAME} trading as {COMPANY_NAME} is the
                data controller. You can reach us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[--ls-accent] underline-offset-4 hover:underline">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="what-we-collect">
              <h2 id="what-we-collect" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                2. What personal data we collect and why
              </h2>

              <h3 className="text-sm font-semibold text-[--ls-text-primary] mt-5 mb-2">Contact form</h3>
              <p>
                When you fill in our contact form we collect your name, trade, phone number
                or email address, and any message you include. We use this to reply to your
                enquiry and, if you become a client, to manage our working relationship.
              </p>
              <p className="mt-2">
                <strong className="text-[--ls-text-primary]">Legal basis:</strong> Legitimate
                interest (responding to an enquiry you initiated) and, where we enter a
                contract, contractual necessity.
              </p>

              <h3 className="text-sm font-semibold text-[--ls-text-primary] mt-5 mb-2">WhatsApp and direct messages</h3>
              <p>
                If you contact us via WhatsApp or email, we process your phone number or
                email address and the content of your messages in order to communicate with you.
              </p>
              <p className="mt-2">
                <strong className="text-[--ls-text-primary]">Legal basis:</strong> Legitimate interest.
              </p>

              <h3 className="text-sm font-semibold text-[--ls-text-primary] mt-5 mb-2">Booking calls (Cal.com)</h3>
              <p>
                If you book a discovery call through our Cal.com booking page, Cal.com
                collects your name and email address to facilitate the booking. Please
                review{" "}
                <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[--ls-accent] underline-offset-4 hover:underline">
                  Cal.com&apos;s privacy policy
                </a>{" "}
                for details of how they handle your data.
              </p>

              <h3 className="text-sm font-semibold text-[--ls-text-primary] mt-5 mb-2">Website analytics</h3>
              <p>
                We may use privacy-friendly analytics (Vercel Analytics or Plausible) that
                do not use cookies, do not track you across sites, and do not collect any
                personally identifiable information. No cookie consent banner is required.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="how-we-store">
              <h2 id="how-we-store" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                3. How we store and protect your data
              </h2>
              <p>
                Contact form submissions are delivered to us by Resend, a transactional
                email service. Resend processes data in the EU/EEA. After delivery, emails
                are stored in our email account, which uses industry-standard encryption
                at rest and in transit.
              </p>
              <p className="mt-3">
                We keep your enquiry data for up to 2 years after our last contact.
                Client project data is kept for 6 years for legal and accounting purposes,
                then securely deleted.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="third-parties">
              <h2 id="third-parties" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                4. Third parties we share data with
              </h2>
              <p>We do not sell your data. We share it only as necessary to operate:</p>
              <ul className="mt-3 flex flex-col gap-2 list-disc list-inside marker:text-[--ls-accent]">
                <li><strong className="text-[--ls-text-primary]">Resend</strong> — delivers contact form emails to us.</li>
                <li><strong className="text-[--ls-text-primary]">Cal.com</strong> — handles discovery call bookings if you use that feature.</li>
                <li><strong className="text-[--ls-text-primary]">Vercel</strong> — hosts this website. May log IP addresses for security purposes.</li>
              </ul>
              <p className="mt-3">
                All processors are contractually bound to protect your data and may not use
                it for their own purposes.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="your-rights">
              <h2 id="your-rights" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                5. Your rights under UK GDPR
              </h2>
              <p>You have the right to:</p>
              <ul className="mt-3 flex flex-col gap-2 list-disc list-inside marker:text-[--ls-accent]">
                <li><strong className="text-[--ls-text-primary]">Access</strong> — request a copy of the personal data we hold about you.</li>
                <li><strong className="text-[--ls-text-primary]">Rectification</strong> — ask us to correct inaccurate data.</li>
                <li><strong className="text-[--ls-text-primary]">Erasure</strong> — ask us to delete your data (subject to legal retention obligations).</li>
                <li><strong className="text-[--ls-text-primary]">Restriction</strong> — ask us to stop processing your data in certain circumstances.</li>
                <li><strong className="text-[--ls-text-primary]">Portability</strong> — receive your data in a machine-readable format.</li>
                <li><strong className="text-[--ls-text-primary]">Object</strong> — object to processing based on legitimate interest.</li>
              </ul>
              <p className="mt-3">
                To exercise any right, email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[--ls-accent] underline-offset-4 hover:underline">
                  {CONTACT_EMAIL}
                </a>. We will respond within 30 days.
              </p>
              <p className="mt-3">
                You also have the right to lodge a complaint with the UK Information
                Commissioner&apos;s Office (ICO) at{" "}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[--ls-accent] underline-offset-4 hover:underline">
                  ico.org.uk
                </a>.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="cookies">
              <h2 id="cookies" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                6. Cookies
              </h2>
              <p>
                This website does not use advertising cookies, tracking cookies, or
                third-party analytics cookies. We do not display a cookie consent banner
                because none is required.
              </p>
              <p className="mt-3">
                If you use the Cal.com booking embed, Cal.com may set functional cookies
                necessary for the booking flow. These are covered by Cal.com&apos;s own policy.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="changes">
              <h2 id="changes" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                7. Changes to this policy
              </h2>
              <p>
                We may update this policy occasionally. The &ldquo;Last updated&rdquo; date at the top
                of this page reflects the most recent revision. Continued use of the site
                after a change constitutes acceptance of the updated policy.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            {/* Back link */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-sm text-[--ls-text-muted] hover:text-[--ls-text-primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ls-accent]/60 rounded-md px-1"
              >
                ← Back to home
              </Link>
              <Link
                href="/legal/terms"
                className="text-sm text-[--ls-accent] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ls-accent]/60 rounded-md px-1"
              >
                Terms of Service →
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </main>
  )
}
