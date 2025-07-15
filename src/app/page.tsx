"use client";
import React, { useState, useEffect } from "react";
import { SplineSceneBasic } from "@/components/demo";
import { GooeyTextDemo } from "@/components/incoming-loader";
import { Analytics } from "@vercel/analytics/next";
import FeaturesSectionWithHoverEffectsDemo from "@/components/feature-section";
import ComponentDemo from "@/components/scroll-section";
import { ScopedBodyStyle } from "@/components/ScopedBodyStyle";
import { ThreeDPhotoCarouselDemo } from "@/components/company-carousel";
import { Footer } from "@/components/footer";
import { DockDemo } from "@/components/dock";
import { useLenis } from "@/lib/useLenis";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  useLenis();



  return (
    <>
      {!loaded && <GooeyTextDemo onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          {/* Dock fixed at the bottom center */}
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <DockDemo />
          </div>

          <div className="relative min-h-screen w-full">
            <div id="about">
              <SplineSceneBasic />
            </div>

            {/* Don't add id to ScopedBodyStyle wrapper */}
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
      <Analytics />
    </>
  );
}
