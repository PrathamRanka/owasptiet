"use client"

import React from "react"
import { StarsBackground } from "@/ui/stars-background"
import { ShootingStars } from "@/ui/shooting-stars"

export default function TeamPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0 z-0 bg-black">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Content (z-10) */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold">Meet the Team</h1>
        <p className="mt-4 text-lg opacity-70">All the legends behind OWASP TIET</p>
        {/* You can map team members here later */}
      </div>
    </div>
  )
}
