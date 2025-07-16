/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState} from "react";
import { GooeyTextDemo } from "@/components/incoming-loader";
import { Analytics } from "@vercel/analytics/next";
import dynamic from "next/dynamic";
import { LazyWrapper } from "@/components/LazyWrapper";
const SplineSceneBasic = dynamic(() => import("@/components/demo"), { ssr: false });
const FeaturesSectionWithHoverEffectsDemo = dynamic(() => import("@/components/feature-section"), { ssr: false });
const ComponentDemo = dynamic(() => import("@/components/scroll-section"), { ssr: false });
const ScopedBodyStyle = dynamic(() => import("@/components/ScopedBodyStyle"), { ssr: false });
const ThreeDPhotoCarouselDemo = dynamic(() => import("@/components/company-carousel"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const DockDemo = dynamic(() => import("@/components/dock"), { ssr: false });

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
 



 return (
    <>
      {!loaded && <GooeyTextDemo onComplete={() => setLoaded(true)} />}
      {loaded && (
        <>
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <DockDemo />
          </div>

          <div className="relative min-h-screen w-full">
            <div id="about">
              <LazyWrapper>
                <SplineSceneBasic />
              </LazyWrapper>
            </div>

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
      <Analytics />
    </>
  );
}
