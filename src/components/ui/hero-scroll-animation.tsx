"use client";

import React from "react";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Globe } from "@/components/ui/globe";
import { BentoGrid } from "../bento-grid";

const Section1: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent">
      <div className="relative flex flex-col md:flex-row w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-16 lg:px-20 py-8 sm:py-12 gap-y-8">
        {/* TEXT SECTION */}
        <div className="flex flex-col text-left z-10 max-w-xl space-y-4 sm:space-y-6">
          <span className="text-xs sm:text-sm tracking-widest uppercase text-blue-400 font-semibold font-mono">
            OWASP Global Reach
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-['Tilt_Neon'] leading-tight">
            Not Just Here.
            <br />
            Operating Worldwide.
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-slate-300 font-['Rubik_Burned']">
            From one secure node to another, OWASP is spinning across the globe—protecting, building, evolving.
          </p>

          <div className="pt-2 sm:pt-4">
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition font-semibold backdrop-blur">
              Explore Our Chapters →
            </button>
          </div>
        </div>

        {/* GLOBE SECTION */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md relative z-10 mt-4 md:mt-0 pointer-events-none">
  <Globe />
</div>

      </div>
    </section>
  );
};

const Section2: React.FC = () => {
  return (
    <section className="relative min-h-screen z-10 bg-transparent">
      <article className="container mx-auto relative z-10 px-4 py-60">
        <BentoGrid />
        </article>
    </section>
  );
};

const Component: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-transparent">
        <StarsBackground />
        <ShootingStars />
      </div>

      <main className="relative min-h-screen bg-transparent">
        <Section1 />
        <Section2 />
      </main>
    </>
  );
};

export default Component;
