/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { GooeyTextDemo } from "@/components/pages/Pre-Loader/incoming-loader";
import { Analytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollProgress } from "@/components/ui/ScrollProgress-ui/scroll-progress";

const SplineSceneBasic = dynamic(() => import("@/components/pages/LandingPage/demo"), { ssr: false });
const FeaturesSectionWithHoverEffectsDemo = dynamic(() => import("@/components/pages/OwaspFeatures/feature-section"), { ssr: false });
const ComponentDemo = dynamic(() => import("@/components/pages/Globe & Bento/scroll-section"), { ssr: false });
const ScopedBodyStyle = dynamic(() => import("@/components/ScopedBodyStyle"), { ssr: false });
const ThreeDPhotoCarouselDemo = dynamic(() => import("@/components/pages/Sponsors/company-carousel"), { ssr: false });
const Footer = dynamic(() => import("@/components/pages/Footer/footer"), { ssr: false });
const DockDemo = dynamic(() => import("@/components/pages/Navbar/dock"), { ssr: false });

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastSeen = localStorage.getItem("gooeyLastSeen");
    const sessionSeen = sessionStorage.getItem("gooeySeenThisSession");

    if (sessionSeen) {
      setLoaded(true);
      return;
    }

    if (!lastSeen || lastSeen !== today) {
      setShowLoader(true);
    } else {
      setLoaded(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    const today = new Date().toDateString();
    localStorage.setItem("gooeyLastSeen", today);
    sessionStorage.setItem("gooeySeenThisSession", "true");
    setLoaded(true);
  };

  return (
    <>
      {showLoader && !loaded && <GooeyTextDemo onComplete={handleLoaderComplete} />}
      {loaded && (
        <>
          <div className="fixed top-0 left-0 w-full z-40">
            <DockDemo />
            <ScrollProgress />
          </div>

          <div id="about">
            <SplineSceneBasic />

            <ScopedBodyStyle>
              <div id="worldwide-reach">
                <ComponentDemo />
              </div>
            </ScopedBodyStyle>

            <div id="core-mission">
              <FeaturesSectionWithHoverEffectsDemo />
            </div>

            <div id="sponsors">
              <ThreeDPhotoCarouselDemo />
            </div>

            <div id="footer">
              <Footer />
            </div>
          </div>
        </>
      )}
      <SpeedInsights />
      <Analytics />
    </>
  );
}
