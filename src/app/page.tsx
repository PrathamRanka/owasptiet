"use client";

import React, { useState } from "react";
import { useLenis } from "@/lib/useLenis";
import { SplineSceneBasic } from "@/components/demo";
import { GooeyTextDemo } from "@/components/incoming-loader";
import { Analytics } from "@vercel/analytics/next";
import {RadialOrbitalTimelineDemo} from "@/components/timeline";

export default function HomePage() { 
  // useLenis();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <GooeyTextDemo onComplete={() => setLoaded(true)} />}
      {loaded && (
        <div className="relative min-h-screen w-full">
          <SplineSceneBasic />
          <RadialOrbitalTimelineDemo />
        </div>
      )}
      <Analytics />
    </>
  );
}
