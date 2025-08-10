/* eslint-disable */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Card from "@/components/ui/card";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";


export default function SplineSceneBasic() {
  const [text] = useTypewriter({
    words: [
      "Open Worldwide Application Security Project",
      "Defending the Web, One Line at a Time",
      "Built by Hackers, Loved by Developers",
      "Security is a Feature, Not a Patch",
    ],
    loop: 0, // 0 = infinite
    typeSpeed: 70,
    deleteSpeed: 25,
    delaySpeed: 1000,
  });


  return (
    <Card
      className="w-full bg-black relative overflow-hidden flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center px-4 pt-60 md:min-h-screen"
    >
      {/* ✨ Backgrounds */}
      <StarsBackground />
      <ShootingStars />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* 🪪 OWASP Logo */}
      <div className="absolute top-2 sm:top-4 w-full flex justify-center md:justify-start px-4 z-30 pointer-events-none">
        <Image
          src="/owasp-logo.png"
          alt="OWASP Logo"
          width={96}
          height={96}
          className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 object-contain w-auto"
          priority
        />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 h-full py-10 sm:py-20 z-10">
        {/* 🧠 Textual Content */}
        <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[Orbitron] font-extrabold uppercase text-white tracking-tight leading-[1.1]"
          >
            OWASP TIET
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl font-[Unbounded] h-7 sm:h-8 text-white tracking-wide"
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
            Welcome to OWASP Thapar — a guild for builders, breakers, and
            defenders of the digital realm. Explore. Learn. Lead.
          </motion.p>
        </div>

        {/* 🎥 Spline Scene */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex-1 w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div> */}
      </div>
    </Card>
  );
}
