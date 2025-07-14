"use client"
import React, { useState } from "react";
import { SplineSceneBasic } from "@/components/demo";
import { GooeyTextDemo } from "@/components/incoming-loader";
import { Analytics } from "@vercel/analytics/next";
import { RadialOrbitalTimelineDemo } from "@/components/timeline";
import ComponentDemo from "@/components/scroll-section";
import { ScopedBodyStyle } from "@/components/ScopedBodyStyle"; // <- import the wrapper

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <GooeyTextDemo onComplete={() => setLoaded(true)} />}
      {loaded && (
        <div className="relative min-h-screen w-full">
          <SplineSceneBasic />
          <RadialOrbitalTimelineDemo />
          <ScopedBodyStyle>
            <ComponentDemo />
          </ScopedBodyStyle>
        </div>
      )}
      <Analytics />
    </>
  );
}
