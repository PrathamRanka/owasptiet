"use client"
import React from "react";
import { Spotlight } from "@/ui/spotlight";
import { StarsBackground } from "@/ui/stars-background";
// This is the main page for the Team section
export default function TeamPage() {
  return (
    <>
      <div className="inset-0 relative z-10 flex items-center justify-center">
        <Spotlight />
        <StarsBackground />
      </div>
    </>
  )
}
