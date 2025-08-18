"use client";

import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
import { StarsBackground } from "@/components/ui/background-ui/stars-background";
import { ShootingStars } from "@/components/ui/background-ui/shooting-stars";

export default function LandingPage() {
  const [text] = useTypewriter({
    words: [
      "Open Worldwide Application Security Project",
      "Hack • Learn • Secure • Repeat",
      "Driven by Students, Trusted by Developers",
      "Building Safer Web, One Project at a Time",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 25,
    delaySpeed: 2500,
  });

  const { scrollYProgress } = useScroll();
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen text-[#e5e5e5] overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Logo */}
      <motion.div
        style={{ scale: logoScale, y: logoY }}
        className="relative flex flex-col items-center z-10 mt-16"
      >
        <Image
          src="https://res.cloudinary.com/dduzorsii/image/upload/v1755198961/logo_2_vu8zon.png"
          alt="OWASP Logo"
          width={500}
          height={500}
          priority
          className="object-contain w-[220px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px] 
                     hover:scale-105 transition-transform duration-500 ease-in-out"
        />

        {/* Original Gradient Lines */}
        <div className="w-full max-w-6xl h-16 relative mt-6">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[6px] 
                       bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] 
                       bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </div>
      </motion.div>

      {/* Typewriter Text */}
      <motion.div
        className="mt-8 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold 
                   text-[#e5e5e5] tracking-wide z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {text}
        <span className="text-sky-400 animate-pulse">|</span>
      </motion.div>

      {/* Join Us Button */}
      <motion.div
        className="mt-16 flex gap-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <a
          href="https://chat.whatsapp.com/HJH2s0mAlH6IdHsaZi7cWI?mode=ac_t"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-10 py-4 text-lg font-semibold rounded-xl 
                     bg-transparent border border-gray-400/30 text-[#e5e5e5]
                     backdrop-blur-md
                     hover:border-sky-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]
                     hover:text-white
                     active:scale-95
                     transition-all duration-300 ease-in-out"
        >
          Join Us
        </a>
      </motion.div>
    </div>
  );
}
