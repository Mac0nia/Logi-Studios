// JSON-LD schema helpers
// Usage: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

const BASE_URL = "https://logistudios.co.uk"

/** LocalBusiness + ProfessionalService — injected on every page via root layout */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${BASE_URL}/#business`,
    name: "Logi Studios",
    description:
      "Web design for East London tradespeople. We build it free — you only pay if it wins you jobs.",
    url: BASE_URL,
    telephone: "+447578930408",
    email: "hello@logistudios.co.uk",
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: [
      { "@type": "City", name: "Hackney" },
      { "@type": "City", name: "Tower Hamlets" },
      { "@type": "City", name: "Newham" },
      { "@type": "City", name: "Waltham Forest" },
      { "@type": "City", name: "Redbridge" },
      { "@type": "City", name: "Stratford" },
      { "@type": "City", name: "Bethnal Green" },
      { "@type": "City", name: "Shoreditch" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "East London",
      addressRegion: "London",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.536,
      longitude: -0.042,
    },
    sameAs: [
      // TODO: add Instagram once handle is created — @logistudios
    ],
    founder: {
      "@type": "Person",
      name: "Gianluca Galli",
    },
    knowsAbout: [
      "Web Design",
      "Local SEO",
      "Website Development",
      "Tradesperson Marketing",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web design services for tradespeople",
      itemListElement: [
        {
          "@type": "Offer",
          name: "The Build",
          description:
            "Custom website built free — pay £400 only when you're happy.",
          price: "400",
          priceCurrency: "GBP",
        },
        {
          "@type": "Offer",
          name: "The Care Plan",
          description:
            "Hosting, SSL, backups, security, unlimited small edits. Cancel anytime.",
          price: "49",
          priceCurrency: "GBP",
          eligibleDuration: {
            "@type": "QuantitativeValue",
            value: 1,
            unitCode: "MON",
          },
        },
      ],
    },
  }
}

/** WebSite schema with sitelinks search box potential */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Logi Studios",
    description: "Web design for East London tradespeople",
    publisher: { "@id": `${BASE_URL}/#business` },
  }
}

/** WebPage schema — use on each page */
export function webPageSchema({
  url,
  name,
  description,
}: {
  url: string
  name: string
  description: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}${url}#webpage`,
    url: `${BASE_URL}${url}`,
    name,
    description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#business` },
  }
}

/** Article/CaseStudy schema for /work/[slug] pages */
export function caseStudySchema({
  slug,
  title,
  description,
}: {
  slug: string
  title: string
  description: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}/work/${slug}#article`,
    headline: title,
    description,
    url: `${BASE_URL}/work/${slug}`,
    author: { "@id": `${BASE_URL}/#business` },
    publisher: { "@id": `${BASE_URL}/#business` },
    isPartOf: { "@id": `${BASE_URL}/#website` },
  }
}
