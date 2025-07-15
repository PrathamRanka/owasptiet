"use client"
import React from "react";
import { ShootingStars } from "@/ui/shooting-stars";
import { StarsBackground } from "@/ui/stars-background";
export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 bg-black">
      <ShootingStars />
      <StarsBackground />
      {children}
    </div>
  )
}
