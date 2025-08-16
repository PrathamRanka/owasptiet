"use client";

import Image from "next/image";
import { useTypewriter } from "react-simple-typewriter";
import { StarsBackground } from "@/components/ui/background-ui/stars-background";
import { ShootingStars } from "@/components/ui/background-ui/shooting-stars";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const { scrollYProgress } = useScroll();

  // Logo scale and y-movement based on scroll
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-black text-white overflow-hidden px-4">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Logo Section */}
      <motion.div
        style={{ scale: logoScale, y: logoY }}
        className="relative flex flex-col items-center z-10"
      >
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
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </div>
      </motion.div>

      {/* Typewriter Effect */}
      <motion.div
        className="mt-4 text-center text-lg sm:text-xl md:text-2xl font-mono text-green-400 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {text}
        <span className="animate-pulse">|</span>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex gap-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <a
  href="https://chat.whatsapp.com/HJH2s0mAlH6IdHsaZi7cWI?mode=ac_t"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-cyan-500/20 border border-cyan-400 text-cyan-300 rounded-xl hover:bg-cyan-500/30 transition"
>
  Join Us
</a>

      </motion.div>
    </div>
  );
}
