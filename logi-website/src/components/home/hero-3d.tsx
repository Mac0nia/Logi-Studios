"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useReducedMotion } from "framer-motion"
import * as THREE from "three"

// ── Geometry helpers ─────────────────────────────────────────────────────────

/** Rectangle outline as 4 line segments (anti-clockwise) */
function rect(x1: number, y1: number, x2: number, y2: number, z = 0): number[] {
  return [
    x1, y1, z,  x2, y1, z,
    x2, y1, z,  x2, y2, z,
    x2, y2, z,  x1, y2, z,
    x1, y2, z,  x1, y1, z,
  ]
}

function hline(x1: number, x2: number, y: number, z = 0): number[] {
  return [x1, y, z, x2, y, z]
}

// ── Website wireframe layout ─────────────────────────────────────────────────
// A schematic website layout — this is what Logi Studios builds.
// Coordinate space: x ∈ [-1.7, 1.7], y ∈ [-1.1, 1.1]
// Two sets: primary (bright lime) + secondary (dim lime) geometry.

const W = 1.7   // half-width
const H = 1.1   // half-height
const HDR = 0.70 // header bottom Y

function buildPrimary(): Float32Array {
  return new Float32Array([
    // Page outline
    ...rect(-W, -H, W, H),

    // Header separator
    ...hline(-W, W, HDR),

    // Browser dots (top-left)
    ...rect(-W + 0.12, HDR + 0.07, -W + 0.22, H - 0.07),
    ...rect(-W + 0.28, HDR + 0.07, -W + 0.38, H - 0.07),
    ...rect(-W + 0.44, HDR + 0.07, -W + 0.54, H - 0.07),

    // Hero headline block (wide)
    ...rect(-W + 0.18, 0.36, 0.72, 0.58),

    // Hero subline (narrower)
    ...rect(-W + 0.18, 0.14, 0.46, 0.29),

    // CTA button
    ...rect(-W + 0.18, -0.04, 0.22, 0.08),

    // Section divider
    ...hline(-W, W, -0.08),

    // 3 cards (bottom section)
    ...rect(-W + 0.12, -H + 0.10, -0.50, -0.22),
    ...rect(-0.43,     -H + 0.10,  0.43, -0.22),
    ...rect( 0.50,     -H + 0.10,  W - 0.12, -0.22),
  ])
}

function buildSecondary(): Float32Array {
  return new Float32Array([
    // Nav links (header, right side)
    ...hline(0.55, 0.85, H - 0.16),
    ...hline(0.92, 1.12, H - 0.16),
    ...hline(1.18, 1.38, H - 0.16),

    // Right-side image placeholder
    ...rect(0.62, 0.02, W - 0.12, 0.62),

    // Content lines inside image placeholder (grid feel)
    ...hline(0.62, W - 0.12, 0.22),
    ...hline(0.62, W - 0.12, 0.42),

    // Card inner lines (a content stub inside each card)
    ...hline(-W + 0.22, -0.60, -H + 0.48),
    ...hline(-W + 0.22, -0.70, -H + 0.34),
    ...hline(-0.33, 0.33,      -H + 0.48),
    ...hline(-0.33, 0.23,      -H + 0.34),
    ...hline( 0.60, W - 0.22,  -H + 0.48),
    ...hline( 0.60, W - 0.32,  -H + 0.34),
  ])
}

// ── Rotating scene ────────────────────────────────────────────────────────────

function WireframeScene() {
  const groupRef = useRef<THREE.Group>(null)
  const reduced = useReducedMotion()

  const primaryGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(buildPrimary(), 3))
    return geo
  }, [])

  const secondaryGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(buildSecondary(), 3))
    return geo
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    if (reduced) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.18
    groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.06 + 0.08
  })

  return (
    <group ref={groupRef} rotation={[0.08, 0.35, 0]}>
      {/* Primary geometry — bright lime */}
      <lineSegments geometry={primaryGeo}>
        <lineBasicMaterial color="#C8FF00" transparent opacity={0.85} />
      </lineSegments>

      {/* Secondary geometry — dim lime */}
      <lineSegments geometry={secondaryGeo}>
        <lineBasicMaterial color="#C8FF00" transparent opacity={0.28} />
      </lineSegments>
    </group>
  )
}

// ── Exported canvas wrapper ───────────────────────────────────────────────────

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
      aria-hidden="true"
    >
      <WireframeScene />
    </Canvas>
  )
}
