/* eslint-disable */
"use client";

import { motion } from "framer-motion";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Spotlight } from "@/components/ui/spotlight";
import Card from "@/components/ui/card";
import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { useEffect } from "react";

export default function HeroSection() {
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
    <Card className="w-full bg-black relative overflow-hidden px-4 h-screen flex items-center">
  {/* Background Effects */}
  <StarsBackground />
  <ShootingStars />
  <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

  <div className="relative w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 z-10">

    {/* LEFT: Text Content */}
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 sm:space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[Orbitron] font-extrabold uppercase text-white tracking-tight leading-[1.1] hover:animate-pulse"
      >
        OWASP TIET
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-base sm:text-lg md:text-xl font-[Unbounded] text-white tracking-wide min-h-[28px]"
      >
        {text}
        <span className="animate-pulse">|</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-white text-sm sm:text-base md:text-lg max-w-xl leading-relaxed tracking-wide font-light text-opacity-80"
      >
        Welcome to OWASP Thapar a guild for builders, breakers, and defenders of the digital realm. Explore. Learn. Lead.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex flex-wrap justify-center md:justify-start gap-4 mt-4"
      >
        <button className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition cursor-pointer">
          Join Us
        </button>
        <button className="px-6 py-3 bg-transparent border border-white/40 text-white rounded-xl hover:bg-white/10 transition cursor-pointer">
          Explore
        </button>
      </motion.div>
    </div>

    {/* RIGHT: Glowing Logo Animation */}
    <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
  className="flex-1 flex justify-center items-center"
>
  <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">

    {/* Soft outer glow */}
    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl"></div>

    {/* Thin gradient ring */}
    <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500">
      <div className="w-full h-full rounded-full bg-black"></div>
    </div>

    {/* Logo with subtle pulse */}
    <motion.div
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_0_60px_rgba(0,255,255,0.4)]"
    >
      <Image
        src="/owasp-logo.png"
        alt="OWASP Logo"
        fill
        className="object-contain"
      />
    </motion.div>

    {/* Optional very subtle rotating halo */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="absolute inset-0 rounded-full border border-cyan-400/20"
    />
  </div>
</motion.div>

  </div>
</Card>
  );
}
