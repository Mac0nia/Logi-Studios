import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab"
import { localBusinessSchema, websiteSchema } from "@/lib/jsonld"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
})

const BASE_URL = "https://logistudios.co.uk"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Web Design for East London Tradespeople | Logi Studios",
    template: "%s | Logi Studios",
  },
  description:
    "Websites for East London tradespeople. We build it free — you only pay if it wins you jobs. £0 to start. £400 when you're happy. £49/month to keep it live.",
  keywords: [
    "web design East London",
    "website for tradespeople",
    "plumber website London",
    "electrician website London",
    "builder website East London",
    "affordable web design London",
    "Hackney web design",
    "Tower Hamlets web design",
  ],
  authors: [{ name: "Gianluca Galli", url: BASE_URL }],
  creator: "Logi Studios",
  publisher: "Logi Studios",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Logi Studios",
    title: "Web Design for East London Tradespeople | Logi Studios",
    description:
      "Websites that win East London tradespeople real jobs. Build free, pay £400 only when you're happy. £49/month care plan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design for East London Tradespeople | Logi Studios",
    description:
      "Websites that win East London tradespeople real jobs. Build free, pay £400 only when you're happy.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-GB"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect for Cal.com embed (contact page) */}
        <link rel="preconnect" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://cal.com" />
        {/* LocalBusiness + ProfessionalService JSON-LD — present on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Skip-to-content — visually hidden until focused */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#C8FF00] focus:text-[#0A0A0B] focus:font-semibold focus:text-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main-content" className="flex flex-col flex-1 pt-16">{children}</div>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  )
}
