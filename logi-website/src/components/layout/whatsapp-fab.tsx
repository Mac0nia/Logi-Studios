"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_URL = "https://wa.me/447578930408?text=Hi%2C%20I%27d%20like%20to%20find%20out%20about%20getting%20a%20website%20built."

export function WhatsAppFAB() {
  // Show the FAB after the user has scrolled 300px — avoids clashing with the hero CTA
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    // Check on mount too
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="whatsapp-fab"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className={cn(
            // Visible on mobile only — desktop has the header button
            "md:hidden",
            "fixed bottom-6 right-4 z-50",
            "flex items-center gap-2.5",
            "rounded-full bg-[#25D366] text-white",
            "px-5 py-3.5 shadow-[0_4px_24px_rgba(37,211,102,0.35)]",
            "font-semibold text-sm",
            "transition-shadow hover:shadow-[0_4px_32px_rgba(37,211,102,0.5)]"
          )}
        >
          <MessageCircle className="size-5" />
          <span>WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
