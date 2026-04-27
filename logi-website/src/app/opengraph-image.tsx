import { ImageResponse } from "next/og"

export const alt = "Logi Studios — Web Design for East London Tradespeople"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    ).then((r) => r.text())

    const urlMatch = css.match(/src: url\((.+?)\) format\('(opentype|truetype|woff2)'\)/)
    if (!urlMatch) return null
    return fetch(urlMatch[1]).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function Image() {
  const fontData = await loadFont()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0B",
          padding: "60px 72px",
          fontFamily: fontData ? "Space Grotesk" : "sans-serif",
        }}
      >
        {/* Top row: wordmark + location pill */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: "-0.02em" }}>
            <span style={{ color: "#F5F5F7" }}>Logi</span>
            <span style={{ color: "#C8FF00" }}>Studios</span>
          </div>
          <div style={{ width: 1, height: 24, backgroundColor: "#26262C" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "6px 14px",
              borderRadius: 999,
              border: "1px solid #26262C",
              color: "#A1A1A8",
              fontSize: 16,
            }}
          >
            <span>East London, UK</span>
          </div>
        </div>

        {/* Centre: headline — all text wrapped in flex to satisfy Satori's multi-child rule */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: 920 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: "0 18px",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            <span style={{ color: "#F5F5F7" }}>Websites that win</span>
            <span style={{ color: "#C8FF00" }}>East London</span>
            <span style={{ color: "#F5F5F7" }}>tradespeople real jobs.</span>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#A1A1A8", letterSpacing: "-0.01em" }}>
            <span>Free build · Pay £400 only when you&apos;re happy · £49/month care plan</span>
          </div>
        </div>

        {/* Bottom row: domain + CTA pill */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: 40, height: 4, backgroundColor: "#C8FF00", borderRadius: 2 }} />
            <span style={{ color: "#6B6B73", fontSize: 18 }}>logistudios.co.uk</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 24px",
              backgroundColor: "#C8FF00",
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 700,
              color: "#0A0A0B",
              letterSpacing: "-0.01em",
            }}
          >
            <span>Free build — no risk</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? { fonts: [{ name: "Space Grotesk", data: fontData, weight: 700, style: "normal" }] }
        : {}),
    }
  )
}
