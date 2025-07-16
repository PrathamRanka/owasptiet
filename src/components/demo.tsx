"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import Card from "@/components/ui/card";
import Image from "next/image";

const phrases = [
  "Open Worldwide Application Security Project",
  "Defending the Web, One Line at a Time",
  "Built by Hackers, Loved by Developers",
  "Security is a Feature, Not a Patch",
];

export default function SplineSceneBasic() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    timeout = setTimeout(
      () => {
        const nextIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setCharIndex(nextIndex);
        setText(currentPhrase.slice(0, nextIndex));
      },
      isDeleting ? 25 : 70
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <Card className="w-full min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4">
      {/* ✨ Backgrounds */}
      <StarsBackground />
      <ShootingStars />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      {/* 🪪 OWASP Logo */}
      <div className="absolute top-4 w-full flex justify-center md:justify-start px-4 z-30 pointer-events-none">
        <Image
          src="/owasp-logo.png"
          alt="OWASP Logo"
          width={96}
          height={96}
          className="h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 object-contain w-auto"
          priority
        />
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 h-full py-20 z-10">
        {/* 🧠 Textual Content */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[Orbitron] font-extrabold uppercase text-white tracking-tight leading-[1.1]"
          >
            OWASP Society
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl font-[Unbounded] h-8 text-white tracking-wide"
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-white text-base md:text-lg max-w-xl leading-relaxed tracking-wide font-light text-opacity-80"
          >
            Welcome to OWASP Thapar — a guild for builders, breakers, and
            defenders of the digital realm. Explore. Learn. Lead.
          </motion.p>
        </div>

        {/* 🎥 Spline Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex-1 w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </Card>
  );
}
