"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export const useGsapSmoothScroll = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let smoother: ScrollSmoother | null = null;

    const init = () => {
      smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        // Optionally specify wrapper and content if needed:
        // wrapper: "#smooth-wrapper",
        // content: "#smooth-content",
      });
    };

    // Delay to next frame
    requestAnimationFrame(() => {
      init();
    });

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);
};
