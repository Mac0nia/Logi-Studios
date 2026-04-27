import type { Metadata } from "next"
import { Hero }         from "@/components/home/hero"
import { TrustStrip }   from "@/components/home/trust-strip"
import { PitchCards }   from "@/components/home/pitch-cards"
import { FeaturedWork } from "@/components/home/featured-work"
import { HowItWorks }   from "@/components/home/how-it-works"
import { Testimonial }  from "@/components/home/testimonial"
import { FAQ }          from "@/components/home/faq"
import { CTABand }      from "@/components/home/cta-band"
import { webPageSchema } from "@/lib/jsonld"

export const metadata: Metadata = {
  title: "Web Design for East London Tradespeople | Logi Studios",
  description:
    "Websites that win East London tradespeople real jobs. We build it free — you only pay £400 if it wins you work. £49/month keeps it live. Hackney, Tower Hamlets, Newham.",
  alternates: {
    canonical: "https://logistudios.co.uk",
  },
  openGraph: {
    url: "https://logistudios.co.uk",
  },
}

export default function Home() {
  const schema = webPageSchema({
    url: "/",
    name: "Web Design for East London Tradespeople | Logi Studios",
    description:
      "Websites that win East London tradespeople real jobs. Free build, pay £400 only when happy.",
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <TrustStrip />
      <PitchCards />
      <FeaturedWork />
      <HowItWorks />
      <Testimonial />
      <FAQ />
      <CTABand />
    </>
  )
}
