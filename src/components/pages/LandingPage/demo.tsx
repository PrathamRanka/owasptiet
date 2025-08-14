/* eslint-disable */
"use client";

import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { StarsBackground } from "@/components/ui/background-ui/stars-background";
import { ShootingStars } from "@/components/ui/background-ui/shooting-stars";

export default function LandingPage() {
  const [text] = useTypewriter({
    words: [
      "Open Worldwide Application Security Project",
      "Defending the Web, One Line at a Time",
      "Built by Hackers, Loved by Developers",
      "Security is a Feature, Not a Patch",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 25,
    delaySpeed: 1000,
  });

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-black text-white overflow-hidden px-4">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Logo Section */}
      <div className="relative flex flex-col items-center z-10">
        <Image
          src="https://res.cloudinary.com/dduzorsii/image/upload/v1755198961/logo_2_vu8zon.png"
          alt="OWASP Logo"
          width={450}
          height={450}
          priority
          className="object-contain w-[180px] sm:w-[250px] md:w-[320px] lg:w-[380px] xl:w-[420px]"
        />

        {/* Slim Gradient under the logo */}
        <div className="w-full max-w-3xl h-8 relative mt-2">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
      </div>

      {/* Typewriter Effect */}
      <div className="mt-4 text-center text-lg sm:text-xl md:text-2xl font-mono text-green-400 z-10">
        {text}
        <span className="animate-pulse">|</span>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4 z-10">
        <button className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition">
          Join Us
        </button>
        <button className="px-6 py-3 bg-transparent border border-white/40 text-white rounded-xl hover:bg-white/10 transition">
          Explore
        </button>
      </div>
    </div>
  );
}
