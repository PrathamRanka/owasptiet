"use client"
import React, { useState } from "react";
import { SplineSceneBasic } from "@/components/demo";
import { GooeyTextDemo } from "@/components/incoming-loader";
import { Analytics } from "@vercel/analytics/next";
import FeaturesSectionWithHoverEffectsDemo  from "@/components/feature-section";
import ComponentDemo from "@/components/scroll-section";
import { ScopedBodyStyle } from "@/components/ScopedBodyStyle"; 

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <GooeyTextDemo onComplete={() => setLoaded(true)} />}
      {loaded && (
        <div className="relative min-h-screen w-full">
          <SplineSceneBasic />
          <ScopedBodyStyle>
            <ComponentDemo />
          </ScopedBodyStyle>
          <FeaturesSectionWithHoverEffectsDemo />
        </div>
      )}
      <Analytics />
    </>
  );
}
