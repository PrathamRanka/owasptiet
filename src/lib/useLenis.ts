/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Skip Lenis on mobile

    const startLenis = () => {
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        gestureOrientation: "vertical",
        smoothWheel: true,
        lerp: 0.05,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      // Cleanup
      return () => {
        lenis.destroy();
      };
    };

    let cleanup: (() => void) | undefined;

    // Wait until idle or delay Lenis slightly
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => {
        cleanup = startLenis();
      });
    } else {
      // fallback: delay manually
      const timeout = setTimeout(() => {
        cleanup = startLenis();
      }, 800);
      return () => clearTimeout(timeout);
    }

    return () => {
      if (cleanup) cleanup();
    };
  }, []);
};
