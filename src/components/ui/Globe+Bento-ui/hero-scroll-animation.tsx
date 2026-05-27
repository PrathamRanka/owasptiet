"use client";

import React from "react";
import { StarsBackground } from "@/components/ui/background-ui/stars-background";
import { ShootingStars } from "@/components/ui/background-ui/shooting-stars";
import { Globe } from "@/components/ui/Globe+Bento-ui/globe";
import { BentoGrid } from "./bento-grid";

const Section1: React.FC = () => {
  return (
    <section className="relative md:min-h-screen md:flex md:items-center md:justify-center md:pb-0">
  <div className="relative flex flex-col lg:flex-row w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-0 py-8 sm:py-12 gap-10">
    
    {/* TEXT SECTION */}
    <div className="flex flex-col text-center lg:text-left z-10 max-w-xl space-y-4 sm:space-y-6 items-center lg:items-start">
      <span className="text-xs sm:text-sm tracking-widest uppercase text-blue-400 font-semibold font-mono">
        About OWASP
      </span>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-['Tilt_Neon'] leading-tight">
        Open WorldWide Application Security Project
      </h1>

      <p className="text-sm sm:text-lg md:text-xl text-slate-300 font-['Rubik_Burned']">
        Thapar Institute of Engineering and Technology (TIET) has been a steady source of highly skilled talent to the nation as well as overseas. A pioneer in engineering education, research and innovation. The team of OWASP Student Chapter, one of the gilt-edged coding society, involves ingenious mind solvers who are eager to make the world a better place to live in with their innovative techniques and discoveries. By successfully organizing many hackathons, tech-talks, workshops and coding nights, we have always strived hard to maintain the coding culture throughout the campus.
      </p>

      <div className="pt-2 sm:pt-4">
        <a
          href="https://owasp.org/www-chapter-thapar-institute-of-engineering-and-technology/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition font-semibold backdrop-blur"
        >
          Explore Our Chapter →
        </a>
      </div>
    </div>



        {/* GLOBE SECTION */}
<div className="w-[18rem] sm:w-[20rem] md:w-[24rem] lg:w-[34rem] max-w-full mt-8 md:mt-0 relative z-10 flex-shrink-0 animate-float mx-auto lg:mx-0 self-center lg:self-start">
  <Globe />
</div>

      </div>
    </section>
  );
};

const Section2: React.FC = () => {
  return (
    <section className="relative min-h-screen z-10 bg-transparent">
      <article className="container mx-auto relative z-10 px-10 py-20 sm:py-32">
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
