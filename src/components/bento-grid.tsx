/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const Section2: React.FC = () => {
  return (
    <section className="relative min-h-screen z-10 pt-32">
      <BentoGrid />
    </section>
  );
};

export function BentoGrid() {
  return (
    <div className="flex flex-col gap-16 items-center relative z-10">
      {/* Heading */}
      <div className="flex flex-col gap-4 items-center text-center z-20">
        <Badge className="bg-transparent border-none p-0 text-xs sm:text-sm tracking-widest uppercase text-blue-400 font-semibold font-mono">
          OWASP Workshops
        </Badge>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase font-['Orbitron'] text-white tracking-wide">
            Explore. Hack. Secure. Learn.
          </h2>
          <p className="text-lg max-w-xl lg:max-w-2xl mx-auto text-center leading-relaxed text-white/70">
            A week full of tech, tools, and thrill — designed for hackers, builders, and dreamers.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 z-10">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-5 w-5 text-white/80" />}
          title="Web Dev Workshop"
          description="Build solid web apps from scratch using real-world tools."
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-5 w-5 text-white/80" />}
          title="Web3 Workshop"
          description="Dive into blockchain and dApps. No crypto hype, just core tech."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-5 w-5 text-white/80" />}
          title="AI/ML Workshop"
          description="Get hands-on with models and real machine learning workflows."
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-5 w-5 text-white/80" />}
          title="CTF Event"
          description="Test your skills in a guided hacking challenge. "
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-5 w-5 text-white/80" />}
          title="HackOWASP 8.0"
          description="The flagship hackathon that brings it all together."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[16rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 z-10">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="flex flex-col gap-3">
            <div className="w-fit rounded-lg border border-white/40 p-2">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="font-sans text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="font-sans text-sm text-white/80">
                {description}
              </p>
            </div>
          </div>
          <Link
            href="/"
            className="self-start mt-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition duration-200"
          >
            Register Now
          </Link>
        </div>
      </div>
    </li>
  );
};
