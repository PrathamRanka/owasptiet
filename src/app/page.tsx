/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState} from "react";
import { GooeyTextDemo } from "@/components/incoming-loader";
import { Analytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";
import { useLenis } from "@/lib/useLenis";
const SplineSceneBasic = dynamic(() => import("@/components/demo"), { ssr: false });
const FeaturesSectionWithHoverEffectsDemo = dynamic(() => import("@/components/feature-section"), { ssr: false });
const ComponentDemo = dynamic(() => import("@/components/scroll-section"), { ssr: false });
const ScopedBodyStyle = dynamic(() => import("@/components/ScopedBodyStyle"), { ssr: false });
const ThreeDPhotoCarouselDemo = dynamic(() => import("@/components/company-carousel"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const DockDemo = dynamic(() => import("@/components/dock"), { ssr: false });

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
