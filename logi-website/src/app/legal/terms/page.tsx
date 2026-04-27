import type { Metadata } from "next"
import Link from "next/link"
import { Container } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for Logi Studios web design services.",
  alternates: { canonical: "https://logistudios.co.uk/legal/terms" },
  robots: { index: false, follow: false },
}

const LAST_UPDATED = "27 April 2026"
const CONTACT_EMAIL = "hello@logistudios.co.uk"
const COMPANY_NAME = "Logi Studios"
const OWNER_NAME = "Gianluca Galli"

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-sm text-[--ls-text-muted]">
              Last updated: {LAST_UPDATED}
            </p>
          </div>

          {/* Intro */}
          <div className="flex flex-col gap-10 text-[--ls-text-secondary] text-sm leading-relaxed">

            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the {COMPANY_NAME}
              website at logistudios.co.uk and any services we provide to you. By using
              this site or engaging our services you agree to these Terms. If you do not
              agree, please do not use the site or engage our services.
            </p>
            <p className="-mt-6">
              {COMPANY_NAME} is operated by {OWNER_NAME}, a sole trader based in East London,
              United Kingdom. Contact:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[--ls-accent] underline-offset-4 hover:underline">
                {CONTACT_EMAIL}
              </a>.
            </p>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="services">
              <h2 id="services" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                1. Our services
              </h2>
              <p>
                {COMPANY_NAME} provides website design and development services, and an
                optional ongoing care plan (hosting, maintenance, and small edits).
              </p>
              <p className="mt-3">
                The specific scope of work for each project is agreed during our discovery
                call and confirmed before work begins. Nothing on this website constitutes
                a binding offer — a contract only exists once we have confirmed the project
                in writing (email is sufficient).
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="payment">
              <h2 id="payment" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                2. Payment terms
              </h2>

              <h3 className="text-sm font-semibold text-[--ls-text-primary] mt-4 mb-2">The Build fee</h3>
              <p>
                The one-off Build fee (typically £400–£600) is payable only when you are
                satisfied with the completed website and wish to publish it. No payment is
                required at the start of the project or during the build.
              </p>
              <p className="mt-3">
                If you choose not to proceed after reviewing the completed site, no fee is
                charged. {COMPANY_NAME} retains ownership of all design and code in that
                case (see Section 5).
              </p>
              <p className="mt-3">
                Once you confirm you are happy and wish to publish, the Build fee becomes
                due immediately. We will issue an invoice payable within 7 days.
              </p>

              <h3 className="text-sm font-semibold text-[--ls-text-primary] mt-5 mb-2">The Care Plan</h3>
              <p>
                The Care Plan is an optional monthly subscription (£49/month) covering
                hosting, domain renewal, SSL, security updates, backups, and unlimited
                small edits (as defined in Section 3).
              </p>
              <p className="mt-3">
                The Care Plan is billed monthly in advance. You may cancel at any time
                by emailing {" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-[--ls-accent] underline-offset-4 hover:underline">
                  {CONTACT_EMAIL}
                </a>. Cancellation takes effect at the end of the current billing period.
                No refunds are given for partial months.
              </p>
              <p className="mt-3">
                If the Care Plan is cancelled or lapses, {COMPANY_NAME} will provide a
                copy of the codebase within 14 days so you can arrange alternative hosting.
                The site will be taken offline once the final billing period ends.
              </p>

              <h3 className="text-sm font-semibold text-[--ls-text-primary] mt-5 mb-2">Late payment</h3>
              <p>
                Invoices not paid within 14 days may incur statutory interest at 8% above
                the Bank of England base rate, as permitted by the Late Payment of
                Commercial Debts (Interest) Act 1998.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="scope">
              <h2 id="scope" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                3. Scope of work and small edits
              </h2>
              <p>
                &ldquo;Small edits&rdquo; under the Care Plan means changes that take {COMPANY_NAME}
                under 30 minutes to complete, including: updating text content, swapping
                photos, changing prices, adding a service to an existing page, or minor
                style tweaks.
              </p>
              <p className="mt-3">
                The following are not included in the Care Plan and will be quoted
                separately: new full pages, new features or integrations, e-commerce
                functionality, logo or branding work, and paid advertising setup.
              </p>
              <p className="mt-3">
                Additional work is quoted on a fixed-price basis before work begins. You
                are under no obligation to proceed with a quoted addition.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="client-obligations">
              <h2 id="client-obligations" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                4. Your responsibilities
              </h2>
              <p>To allow us to deliver the service, you agree to:</p>
              <ul className="mt-3 flex flex-col gap-2 list-disc list-inside marker:text-[--ls-accent]">
                <li>Provide accurate information about your business during onboarding.</li>
                <li>Supply any content, photos, or branding materials you want used on the site in a timely manner.</li>
                <li>Ensure all content and materials you provide do not infringe any third-party intellectual property rights.</li>
                <li>Review the completed site and provide feedback or approval within 14 days of us sending the review link.</li>
              </ul>
              <p className="mt-3">
                If we do not hear from you within 14 days of sending the review link, we
                will assume you have abandoned the project. No fee will be charged, and
                the work will be treated as if you had declined.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="ip">
              <h2 id="ip" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                5. Intellectual property
              </h2>
              <p>
                Until the Build fee is paid in full, all design, code, and content created
                by {COMPANY_NAME} remains our intellectual property.
              </p>
              <p className="mt-3">
                Once the Build fee is paid in full, you receive a perpetual, royalty-free
                licence to use, modify, and host the website. {COMPANY_NAME} retains the
                right to display the work in our portfolio and case studies.
              </p>
              <p className="mt-3">
                You retain full ownership of all content, photos, and materials you supply
                to us. You grant us a licence to use these materials solely for the purpose
                of building your website.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="liability">
              <h2 id="liability" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                6. Liability
              </h2>
              <p>
                {COMPANY_NAME} will perform services with reasonable skill and care.
                However, we do not guarantee any specific business outcomes such as
                increased revenue, search engine rankings, or number of enquiries — these
                depend on factors outside our control.
              </p>
              <p className="mt-3">
                To the fullest extent permitted by UK law, our total liability to you for
                any claim arising from these Terms or our services is limited to the total
                fees you have paid to us in the 12 months preceding the claim.
              </p>
              <p className="mt-3">
                Nothing in these Terms excludes or limits liability for death or personal
                injury caused by negligence, fraud, or any other liability that cannot be
                excluded by law.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="governing-law">
              <h2 id="governing-law" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                7. Governing law
              </h2>
              <p>
                These Terms are governed by the law of England and Wales. Any disputes
                will be subject to the exclusive jurisdiction of the courts of England
                and Wales.
              </p>
            </section>

            <div className="h-px bg-[--ls-border]" />

            <section aria-labelledby="changes">
              <h2 id="changes" className="text-base font-semibold text-[--ls-text-primary] mb-3" style={{ fontFamily: "var(--font-display)" }}>
                8. Changes to these Terms
              </h2>
              <p>
                We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date
                reflects the most recent revision. Continued use of our services after
                a change constitutes acceptance of the updated Terms. For ongoing clients,
                material changes will be communicated by email with 30 days&apos; notice.
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
                href="/legal/privacy"
                className="text-sm text-[--ls-accent] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ls-accent]/60 rounded-md px-1"
              >
                ← Privacy Policy
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </main>
  )
}
