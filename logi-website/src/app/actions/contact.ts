"use server"

import { z } from "zod"
import { Resend } from "resend"

const schema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  trade: z.string().min(1, "Please select your trade"),
  contact: z
    .string()
    .min(1, "Phone or email is required")
    .max(200)
    .refine(
      (v) => {
        // Accept a UK/international phone number or an email address
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        const isPhone = /^[\d\s\+\-\(\)]{7,}$/.test(v)
        return isEmail || isPhone
      },
      { message: "Enter a valid phone number or email address" }
    ),
  message: z.string().max(2000).optional(),
})

export type ContactState = {
  status: "idle" | "success" | "error"
  errors?: Partial<Record<keyof z.infer<typeof schema>, string[]>>
  message?: string
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    trade: formData.get("trade"),
    contact: formData.get("contact"),
    message: formData.get("message"),
  }

  const parsed = schema.safeParse(raw)

  if (!parsed.success) {
    return {
      status: "error",
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const { name, trade, contact, message } = parsed.data

  // Send email via Resend
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey || apiKey === "re_REPLACE_WITH_YOUR_KEY") {
    // Dev mode: log instead of sending
    console.log("[Contact form] Dev mode — would send email:", { name, trade, contact, message })
    return { status: "success" }
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: "Logi Studios Contact Form <noreply@logistudios.co.uk>",
    to: "hello@logistudios.co.uk",
    replyTo: contact.includes("@") ? contact : undefined,
    subject: `New enquiry from ${name} (${trade})`,
    text: [
      `Name: ${name}`,
      `Trade: ${trade}`,
      `Contact: ${contact}`,
      `Message: ${message || "(none)"}`,
    ].join("\n\n"),
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Trade:</strong> ${trade}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, "<br>") : "(none)"}</p>
    `,
  })

  if (error) {
    console.error("[Contact form] Resend error:", error)
    return {
      status: "error",
      message: "Something went wrong. Please try WhatsApp or email us directly.",
    }
  }

  return { status: "success" }
}
