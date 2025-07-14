"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import { StarsBackground } from "@/ui/stars-background";
import { ShootingStars } from "@/ui/shooting-stars";
import { Feature } from "@/ui/feature-section-with-bento-grid";

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 h-screen flex items-center justify-center bg-transparent"
    >
      <h1 className="2xl:text-7xl text-5xl px-6 text-center tracking-tight leading-[120%] font-semibold text-white rounded-xl py-4 z-10">
        A Hero Section Animation <br /> Scroll Please 👇
      </h1>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative min-h-screen z-10 bg-transparent"
    >
      <article className="container mx-auto relative z-10 px-4 py-16">
        <FeatureDemo />
      </article>
    </motion.section>
  );
};

function FeatureDemo() {
  return (
    <div className="w-full">
      <Feature />
    </div>
  );
}

const Component: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 -z-20 bg-black">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Main Scrollable Content */}
      <main
        ref={container}
        className="relative min-h-screen overflow-hidden bg-transparent"
      >
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
};

export default Component;
