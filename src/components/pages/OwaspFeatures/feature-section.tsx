import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/features-owasp-ui/function-section-with-hover-effect";

export default function FeaturesSectionWithHoverEffectsDemo() {
  return (
    <div className="w-full relative">
      {/* Use min-h-auto for desktop, fixed height for mobile/tablet */}
      <div className="min-h-[auto] md:min-h-[auto] sm:min-h-[70vh]">
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>
  );
}
