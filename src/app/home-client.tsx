"use client";

import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollProgress } from "@/components/ui/ScrollProgress-ui/scroll-progress";
import { Footer } from "@/components/pages/Footer/footer";
import DockDemo from "@/components/pages/Navbar/dock";

const SplineSceneBasic = dynamic(() => import("@/components/pages/LandingPage/demo"), {
  ssr: false,
  loading: () => <SectionFallback label="Loading hero experience" />,
});

const ComponentDemo = dynamic(() => import("@/components/pages/Globe & Bento/scroll-section"), {
  ssr: false,
  loading: () => <SectionFallback label="Loading about section" />,
});

const FeaturesSectionWithHoverEffectsDemo = dynamic(
  () => import("@/components/pages/OwaspFeatures/feature-section"),
  {
    ssr: false,
    loading: () => <SectionFallback label="Loading mission cards" />,
  }
);

const ThreeDPhotoCarouselDemo = dynamic(
  () => import("@/components/pages/Sponsors/company-carousel"),
  {
    ssr: false,
    loading: () => <SectionFallback label="Loading sponsor carousel" />,
  }
);

function SectionFallback({ label }: { label: string }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 text-center text-sm tracking-[0.24em] uppercase text-white/60">
      {label}
    </div>
  );
}

export default function HomePageClient() {
  return (
    <>
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