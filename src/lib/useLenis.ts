"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth < 768;

    // Skip Lenis on mobile for better performance
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.5, // ⬅️ Slower duration for buttery smoothness
      easing: (t: number) =>
        1 - Math.pow(1 - t, 3), // ⬅️ EaseOutCubic: smoother deceleration
      gestureOrientation: "vertical",
      smoothWheel: true, // ⬅️ Enables smooth mouse wheels
      lerp: 0.05, // ⬅️ Lower = smoother interpolation (between 0 and 1)
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
