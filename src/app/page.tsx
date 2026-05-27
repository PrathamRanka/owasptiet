import React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollProgress } from "@/components/ui/ScrollProgress-ui/scroll-progress";
import SplineSceneBasic from "@/components/pages/LandingPage/demo";
import FeaturesSectionWithHoverEffectsDemo from "@/components/pages/OwaspFeatures/feature-section";
import ComponentDemo from "@/components/pages/Globe & Bento/scroll-section";
import ThreeDPhotoCarouselDemo from "@/components/pages/Sponsors/company-carousel";
import { Footer } from "@/components/pages/Footer/footer";
import DockDemo from "@/components/pages/Navbar/dock";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "OWASP TIET",
            url: "https://owasptiet.com",
            sameAs: [
              "https://twitter.com/owasptiet",
              "https://www.linkedin.com/company/owasptiet/",
            ],
            logo: "https://owasptiet.com/favicon.ico",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "OWASP TIET",
            url: "https://owasptiet.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://owasptiet.com/?q={search_term_string}",
              },
              queryInput: "required name=search_term_string",
            },
          }),
        }}
      />

      <div className="fixed top-2 left-0 w-full z-40">
        <DockDemo />
        <ScrollProgress />
      </div>

      <div id="home">
        <SplineSceneBasic />
      </div>

      <div id="about">
        <ComponentDemo />
      </div>

      <div id="missions">
        <FeaturesSectionWithHoverEffectsDemo />
      </div>

      <div id="sponsors">
        <ThreeDPhotoCarouselDemo />
      </div>

      <div id="form">
        <Footer />
      </div>

      <SpeedInsights />
      <Analytics />
    </>
  );
}
