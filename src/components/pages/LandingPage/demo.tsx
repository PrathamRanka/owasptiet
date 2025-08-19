"use client";

import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";
// import { StarsBackground } from "@/components/ui/background-ui/stars-background";
// import { ShootingStars } from "@/components/ui/background-ui/shooting-stars";

export default function LandingPage() {
  const [text] = useTypewriter({
    words: [
      "Open Worldwide Application Security Project",
      "Hack • Learn • Secure • Repeat",
      "From writing code to leading teams, we’ve got it all.",
      "HackOWASP and CTF are the crown jewels of our event lineup...",
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
      {/* <div className="absolute inset-0 z-0 opacity-40"> */}
        {/* <StarsBackground />
        <ShootingStars /> */}
      {/* </div> */}

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
      </motion.div>

      {/* Enhanced Gradient Lines */}
      <div className="w-full max-w-6xl h-16 relative mt-6">
        {/* Soft Glow Line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[8px] 
               bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"
        />

        {/* Sharp Core Line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[3px] 
               bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
        />
      </div>

      {/* Typewriter Text */}
      <motion.div
        className="mt-8 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold 
                   text-[#e5e5e5] tracking-wide z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {text}
        <span className="text-purple-400 animate-pulse">|</span>
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
                     hover:border-purple-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]
                     hover:text-white
                     active:scale-95
                     transition-all duration-300 ease-in-out"
        >
          Join Us
        </a>
      </motion.div>

      {/* Scroll Indicator SVG */}
      <motion.div
        className="absolute bottom-16 sm:bottom-10 md:bottom-12 z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-6 h-10 sm:w-8 sm:h-14 md:w-6 md:h-6 fill-[#e5e5e5] opacity-80"
        >
          <path d="M192 0C86 0 0 86 0 192v128c0 106 86 192 192 192s192-86 192-192V192C384 86 298 0 192 0zm0 480c-88.2 0-160-71.8-160-160V192c0-88.2 71.8-160 160-160s160 71.8 160 160v128c0 88.2-71.8 160-160 160z" />
          <motion.circle
            cx="192"
            cy="128"
            r="16"
            fill="#e5e5e5"
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
        <span className="text-xs mt-2 text-gray-300">Scroll</span>
      </motion.div>
    </div>
  );
}
