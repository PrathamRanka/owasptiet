"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export const useLenis = () => {
  useEffect(() => {
    // Check if window is available (for SSR safety)
    if (typeof window === "undefined") return

    // Detect mobile screen
    const isMobile = window.innerWidth < 768

    // Optional: skip Lenis entirely on mobile if needed
    // if (isMobile) return

    const lenis = new Lenis({
      duration: isMobile ? 0.7 : 1.2,          // Faster scroll on mobile
                   // Ensures better mobile behavior
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Snappy easing
    })

    // Scroll animation frame loop
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
}
