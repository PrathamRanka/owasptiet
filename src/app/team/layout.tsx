"use client";

import { useLenis } from "@/lib/useLenis";
import { ShootingStars } from "@/ui/shooting-stars";
import { StarsBackground } from "@/ui/stars-background";

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  useLenis();

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
