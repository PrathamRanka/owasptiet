
import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/features-owasp-ui/function-section-with-hover-effect";

export default function FeaturesSectionWithHoverEffectsDemo() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute top-0 left-0 w-full">
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>
  );
}
