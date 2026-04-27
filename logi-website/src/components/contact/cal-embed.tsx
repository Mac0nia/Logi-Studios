"use client"

/**
 * Cal.com inline embed.
 *
 * When NEXT_PUBLIC_CALENDAR_LINK is set to a real Cal.com URL this renders
 * an <iframe> embed of the booking page. While the link is still a placeholder
 * it shows a friendly CTA card instead.
 *
 * Cal.com provides a JS-based embed (cal.com/embed) but a plain <iframe>
 * works without loading their SDK and keeps our bundle clean.
 */

const IS_PLACEHOLDER = (link: string) =>
  !link || link.includes("[CALENDAR_LINK]") || link === "#[CALENDAR_LINK]"

export function CalEmbed({ calLink }: { calLink: string }) {
  if (IS_PLACEHOLDER(calLink)) {
    return (
      <div className="rounded-2xl border border-dashed border-[--ls-border] bg-[--ls-bg-secondary] p-8 flex flex-col gap-3 items-center justify-center text-center min-h-[320px]">
        <p className="font-mono text-xs uppercase tracking-widest text-[--ls-text-muted]">
          Cal.com embed
        </p>
        <p className="text-sm text-[--ls-text-secondary] max-w-xs">
          Set <code className="text-[--ls-accent] text-xs">NEXT_PUBLIC_CALENDAR_LINK</code> in{" "}
          <code className="text-[--ls-accent] text-xs">.env.local</code> to show the live booking calendar here.
        </p>
        <p className="text-xs text-[--ls-text-muted]">
          Create a free event at{" "}
          <span className="text-[--ls-accent]">cal.com</span>, then add the link.
        </p>
      </div>
    )
  }

  // Cal.com inline embed URL — append ?embed=true for a clean iframe view
  const embedUrl = calLink.includes("?")
    ? `${calLink}&embed=true`
    : `${calLink}?embed=true`

  return (
    <div className="rounded-2xl border border-[--ls-border] overflow-hidden bg-[--ls-bg-secondary]">
      <iframe
        src={embedUrl}
        title="Book a free discovery call"
        loading="lazy"
        className="w-full min-h-[600px] border-0"
        allow="camera; microphone"
      />
    </div>
  )
}
