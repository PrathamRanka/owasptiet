/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { GooeyTextDemo } from "@/components/incoming-loader";
import { Analytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";
import { LazyWrapper } from "@/components/LazyWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
const SplineSceneBasic = dynamic(() => import("@/components/demo"), { ssr: false });
const FeaturesSectionWithHoverEffectsDemo = dynamic(() => import("@/components/feature-section"), { ssr: false });
const ComponentDemo = dynamic(() => import("@/components/scroll-section"), { ssr: false });
const ScopedBodyStyle = dynamic(() => import("@/components/ScopedBodyStyle"), { ssr: false });
const ThreeDPhotoCarouselDemo = dynamic(() => import("@/components/company-carousel"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const DockDemo = dynamic(() => import("@/components/dock"), { ssr: false });

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastSeen = localStorage.getItem("gooeyLastSeen");
    const sessionSeen = sessionStorage.getItem("gooeySeenThisSession");

    // If already seen in this session → skip instantly
    if (sessionSeen) {
      setLoaded(true);
      return;
    }

    // If never seen today → show loader
    if (!lastSeen || lastSeen !== today) {
      setShowLoader(true);
    } else {
      setLoaded(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    const today = new Date().toDateString();
    localStorage.setItem("gooeyLastSeen", today); // Remember for the day
    sessionStorage.setItem("gooeySeenThisSession", "true"); // Skip on refresh
    setLoaded(true);
  };

  return (
    <>
      {showLoader && !loaded && <GooeyTextDemo onComplete={handleLoaderComplete} />}
      {loaded && (
        <>
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
            <DockDemo />
          </div>

          <div id="about">
            <LazyWrapper>
              <SplineSceneBasic />
            </LazyWrapper>

            <ScopedBodyStyle>
              <div id="worldwide-reach">
                <LazyWrapper>
                  <ComponentDemo />
                </LazyWrapper>
              </div>
            </ScopedBodyStyle>

            <div id="core-mission">
              <LazyWrapper>
                <FeaturesSectionWithHoverEffectsDemo />
              </LazyWrapper>
            </div>

            <div id="sponsors">
              <LazyWrapper>
                <ThreeDPhotoCarouselDemo />
              </LazyWrapper>
            </div>

            <div id="footer">
              <LazyWrapper>
                <Footer />
              </LazyWrapper>
            </div>
          </div>
        </>
      )}
      <SpeedInsights />
      <Analytics />
    </>
  );
}
