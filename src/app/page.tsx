/* eslint-disable */
"use client";

import React, { useState } from "react";
import { GooeyTextDemo } from "@/components/pages/Pre-Loader/incoming-loader";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollProgress } from "@/components/ui/ScrollProgress-ui/scroll-progress";

import SplineSceneBasic from "@/components/pages/LandingPage/demo";
import FeaturesSectionWithHoverEffectsDemo from "@/components/pages/OwaspFeatures/feature-section";
import ComponentDemo from "@/components/pages/Globe & Bento/scroll-section";
import ScopedBodyStyle from "@/components/ScopedBodyStyle";
import ThreeDPhotoCarouselDemo from "@/components/pages/Sponsors/company-carousel";
import Footer from "@/components/pages/Footer/footer";
import DockDemo from "@/components/pages/Navbar/dock";

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <GooeyTextDemo onComplete={handleLoaderComplete} />}
      {!showLoader && (
        <>
          <div className="fixed top-0 left-0 w-full z-40">
            <DockDemo />
            <ScrollProgress />
          </div>

          <div id="about">
            <SplineSceneBasic />
          </div>
          <ScopedBodyStyle>
            <div id="worldwide-reach">
              <ComponentDemo />
            </div>

            <div id="core-mission">
              <FeaturesSectionWithHoverEffectsDemo />
            </div>

            <div id="sponsors">
              <ThreeDPhotoCarouselDemo />
            </div>

            <div id="footer">
              <Footer />
            </div>
          </ScopedBodyStyle>
        </>
      )}
      <SpeedInsights />
      <Analytics />
    </>
  );
}
