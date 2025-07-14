"use client"

import { useScroll, useTransform, motion, MotionValue } from "framer-motion"
import React, { useRef } from "react"
import { useSafeMediaQuery } from "@/hooks/useSafeMediaQuery" // 👈 update path as needed
import { StarsBackground } from "@/ui/stars-background"
import { ShootingStars } from "@/ui/shooting-stars"
import { Feature } from "@/ui/feature-section-with-bento-grid"
import { Globe } from "@/ui/globe"

interface SectionProps {
  scrollYProgress: MotionValue<number>
  isMobile: boolean
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress, isMobile }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <motion.section
      style={!isMobile ? { scale, rotate } : {}}
      className="sticky top-0 min-h-screen flex items-center justify-center bg-transparent"
    >
      <div className="relative flex flex-col md:flex-row size-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-16 lg:px-20 py-8 sm:py-12 md:py-0 gap-y-8">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col text-left z-10 max-w-xl space-y-4 sm:space-y-6">
          <span className="text-xs sm:text-sm tracking-widest uppercase text-blue-400 font-semibold font-mono">
            OWASP Global Reach
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-['Tilt_Neon'] leading-tight">
            Not Just Here.
            <br />
            We're Operating Worldwide.
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-slate-300 font-['Rubik_Burned']">
            From one secure node to another, OWASP is spinning across the globe—protecting, building, evolving.
          </p>

          <div className="pt-2 sm:pt-4">
            <button className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition font-semibold backdrop-blur">
              Explore Our Chapters →
            </button>
          </div>
        </div>

        {/* GLOBE SECTION */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md relative z-10 mt-4 md:mt-0 md:-translate-y-60">
          <Globe />
        </div>
      </div>
    </motion.section>
  )
}

const Section2: React.FC<SectionProps> = ({ scrollYProgress, isMobile }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.section
      style={!isMobile ? { scale, rotate } : {}}
      className="relative min-h-screen z-10 bg-transparent"
    >
      <article className="container mx-auto relative z-10 px-4 py-16">
        <Feature />
      </article>
    </motion.section>
  )
}

const Component: React.FC = () => {
  const isMobile = useSafeMediaQuery("(max-width: 768px)")
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-transparent">
        <StarsBackground />
        <ShootingStars />
      </div>

      <main
        ref={container}
        className="relative min-h-screen overflow-hidden bg-transparent"
      >
        <Section1 scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <Section2 scrollYProgress={scrollYProgress} isMobile={isMobile} />
      </main>
    </>
  )
}

export default Component
