"use client";
import "./team.css";
import { ShootingStars } from "@/components/ui/background-ui/shooting-stars";
import { StarsBackground } from "@/components/ui/background-ui/stars-background";
import AnimatedPageWrapper from "@/components/AnimatedPageWrapper";

export default function TeamLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Content with animated transitions */}
      <AnimatedPageWrapper>
        {children}
      </AnimatedPageWrapper>
    </div>
  );
}
