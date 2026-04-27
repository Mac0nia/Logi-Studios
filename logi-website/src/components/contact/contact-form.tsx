"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { CheckCircle, Loader2 } from "lucide-react"
import { submitContact, type ContactState } from "@/app/actions/contact"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TRADES = [
  "Plumber",
  "Electrician",
  "Builder",
  "Barber",
  "Café / Restaurant",
  "Other",
]

const INITIAL_STATE: ContactState = { status: "idle" }

// Separate submit button so useFormStatus works correctly
function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className={cn(
        buttonVariants({ variant: "default", size: "lg" }),
        "self-start gap-2 disabled:opacity-60"
      )}
    >
      {pending && <Loader2 className="size-4 animate-spin" />}
      {pending ? "Sending…" : "Send message"}
    </button>
  )
}

const inputBase =
  "h-11 w-full rounded-xl border bg-[--ls-bg-secondary] px-4 text-sm text-[--ls-text-primary] placeholder:text-[--ls-text-muted] outline-none transition-colors focus:ring-2"

function fieldClass(hasError: boolean) {
  return cn(
    inputBase,
    hasError
      ? "border-red-500/60 focus:border-red-500/80 focus:ring-red-500/20"
      : "border-[--ls-border] focus:border-[--ls-accent]/60 focus:ring-[--ls-accent]/20"
  )
}

export function ContactForm() {
  const [state, action] = useActionState(submitContact, INITIAL_STATE)

  if (state.status === "success") {
    return (
      <div role="status" aria-live="polite" className="flex flex-col gap-4 rounded-2xl border border-[--ls-accent]/30 bg-[--ls-bg-secondary] p-8">
        <CheckCircle className="size-8 text-[--ls-accent]" />
        <div>
          <p
            className="text-[--ls-text-primary] font-semibold mb-1"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem" }}
          >
            Message sent.
          </p>
          <p className="text-sm text-[--ls-text-secondary]">
            We&apos;ll come back to you within 4 working hours.
          </p>
        </div>
      </div>
    )
  }

  const e = state.errors ?? {}

  return (
    <form action={action} className="flex flex-col gap-5" noValidate>

      {/* Global error */}
      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-red-400 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
          {state.message}
        </p>
      )}

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-[--ls-text-primary]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Mike Smith"
          aria-describedby={e.name ? "name-error" : undefined}
          className={fieldClass(!!e.name)}
        />
        {e.name && (
          <p id="name-error" role="alert" className="text-xs text-red-400">
            {e.name[0]}
          </p>
        )}
      </div>

      {/* Trade */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="trade" className="text-sm font-medium text-[--ls-text-primary]">
          Trade
        </label>
        <select
          id="trade"
          name="trade"
          required
          defaultValue=""
          aria-describedby={e.trade ? "trade-error" : undefined}
          className={cn(
            fieldClass(!!e.trade),
            "appearance-none"
          )}
        >
          <option value="" disabled>
            Select your trade
          </option>
          {TRADES.map((t) => (
            <option key={t} value={t.toLowerCase()}>
              {t}
            </option>
          ))}
        </select>
        {e.trade && (
          <p id="trade-error" role="alert" className="text-xs text-red-400">
            {e.trade[0]}
          </p>
        )}
      </div>

      {/* Phone or email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact" className="text-sm font-medium text-[--ls-text-primary]">
          Phone or email —{" "}
          <span className="text-[--ls-text-muted] font-normal">your choice</span>
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          autoComplete="email"
          placeholder="07700 900123 or mike@example.com"
          aria-describedby={e.contact ? "contact-error" : undefined}
          className={fieldClass(!!e.contact)}
        />
        {e.contact && (
          <p id="contact-error" role="alert" className="text-xs text-red-400">
            {e.contact[0]}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-[--ls-text-primary]">
          What do you need?{" "}
          <span className="text-[--ls-text-muted] font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="I'm a plumber in Hackney looking for more boiler jobs…"
          aria-describedby={e.message ? "message-error" : undefined}
          className={cn(
            fieldClass(!!e.message),
            "h-auto resize-none py-3"
          )}
        />
        {e.message && (
          <p id="message-error" role="alert" className="text-xs text-red-400">
            {e.message[0]}
          </p>
        )}
      </div>

      <SubmitButton />

      <p className="text-xs text-[--ls-text-muted]">
        We reply within 4 working hours. East London-based.
      </p>

    </form>
  )
}
