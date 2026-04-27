"use client"

/**
 * Lightweight Framer Motion wrappers used across the site.
 *
 * All animations respect `prefers-reduced-motion: reduce` via the
 * `useReducedMotion` hook — when reduced motion is on, elements simply
 * appear without transitions.
 */

import { useRef } from "react"
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion"

// ── Shared easing (expo-out from plan §5) ───────────────────────────────────
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ── FadeUp ──────────────────────────────────────────────────────────────────
// Single element: fades up when it enters the viewport. Use for standalone
// blocks (testimonial, CTA band, trust strip, etc.)
interface FadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number
  distance?: number
  duration?: number
}

export function FadeUp({
  delay = 0,
  distance = 24,
  duration = 0.6,
  children,
  ...props
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: "-80px 0px" })

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: EASE_OUT }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ── StaggerContainer + StaggerItem ──────────────────────────────────────────
// Use for card grids, step lists, etc. Container triggers on viewport entry,
// children stagger in sequence.

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
}

// No-op variants used when reduced motion is on
const reducedVariants: Variants = {
  hidden: {},
  visible: {},
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  as?: string
}

export function StaggerContainer({ children, className, ...props }: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: "-80px 0px" })

  return (
    <motion.div
      ref={ref}
      variants={reduced ? reducedVariants : containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, ...props }: HTMLMotionProps<"div">) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      variants={reduced ? reducedVariants : itemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ── HeroEntrance ─────────────────────────────────────────────────────────────
// For above-the-fold content — fires immediately on mount (no useInView).
// Accepts an `order` prop to stagger multiple sibling elements.

interface HeroEntranceProps extends HTMLMotionProps<"div"> {
  order?: number // 0-based stagger index
}

export function HeroEntrance({ order = 0, children, ...props }: HeroEntranceProps) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay: order * 0.1,
        ease: EASE_OUT,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ── DrawLine ─────────────────────────────────────────────────────────────────
// Animates a horizontal line "drawing" left-to-right on viewport entry.
// Used for the connector lines in How It Works.

interface DrawLineProps {
  className?: string
  delay?: number
}

export function DrawLine({ className, delay = 0 }: DrawLineProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: "-40px 0px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ transformOrigin: "left" }}
      initial={reduced ? false : { scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
    />
  )
}
