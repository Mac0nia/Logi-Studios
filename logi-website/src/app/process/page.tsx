import type { Metadata } from "next"
import { ProcessContent } from "./process-content"

export const metadata: Metadata = {
  title: "How It Works — Free Build, Pay Only When Happy",
  description:
    "Four steps, zero risk. Free website build for East London tradespeople — pay £400 only when you're happy. Here's exactly how it works.",
  alternates: { canonical: "https://logistudios.co.uk/process" },
  openGraph: { url: "https://logistudios.co.uk/process" },
}

export default function ProcessPage() {
  return <ProcessContent />
}
