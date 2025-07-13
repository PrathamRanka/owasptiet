'use client'

import { SplineScene } from "@/ui/splite"
import Card from "@/ui/card"
import { Spotlight } from "@/ui/spotlight"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FluidBackground } from "@/backgrounds/fluids"

const phrases = [
  "Open Worldwide Application Security Project",
  "Defending the Web, One Line at a Time",
  "Built by Hackers, Loved by Developers",
  "Security is a Feature, Not a Patch",
]

export function SplineSceneBasic() {
  const [text, setText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    timeout = setTimeout(() => {
      const nextIndex = isDeleting ? charIndex - 1 : charIndex + 1
      setCharIndex(nextIndex)
      setText(currentPhrase.slice(0, nextIndex))
    }, isDeleting ? 30 : 70)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  return (
    <Card className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden flex items-center justify-center px-4">
      {/* 🧊 Lava Fluid Background */}
      <FluidBackground />

      {/* Glow effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Logo */}
      <img
        src="/owasp-logo.png"
        alt="OWASP Logo"
        className="absolute top-5 left-6 w-40 h-40 object-contain z-20"
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 h-full py-16">
        {/* Left text content */}
        <div className="flex-1 flex flex-col justify-center space-y-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >
            OWASP Society
          </motion.h1>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-neutral-400 font-mono h-6 min-h-[1.5rem]"
          >
            {text}
            <span className="animate-pulse">|</span>
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-neutral-300 max-w-xl text-sm md:text-base leading-relaxed"
          >
            Welcome to the OWASP Society, a community-driven platform for security enthusiasts. Explore our resources, connect with like-minded individuals, and contribute to the world of application security.
          </motion.p>
        </div>

        {/* Spline visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex-1 relative w-full h-[300px] md:h-[400px] lg:h-[500px] z-10"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </Card>
  )
}
