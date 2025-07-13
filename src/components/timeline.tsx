"use client";

import {
  Code,
  Shield,
  Users,
  FileText,
  Calendar,
  Clock,
  User,
} from "lucide-react";

import RadialOrbitalTimeline from "@/ui/radial-orbital-timeline";
import { StarsBackground } from "@/ui/stars-background";
import { ShootingStars } from "@/ui/shooting-stars";
import { motion } from "framer-motion";

const timelineData = [
  {
    id: 0,
    title: "Welcome to the Guild",
    date: "🧭 Orientation",
    content:
      "Joining OWASP Thapar isn’t about following — it’s about leading. We induct hackers, dreamers, and builders into a guild.",
    category: "Mission",
    icon: User,
    relatedIds: [1],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 1,
    title: "Build Together, Break Together",
    date: "🤝 Collaboration",
    content:
      "You’ll work in squads — frontend, backend, red team, AI, and beyond. Every project is a group raid on a big idea.",
    category: "Mission",
    icon: Users,
    relatedIds: [0, 2],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Secure Coding Habits",
    date: "🛡️ Security-First",
    content:
      "Write code that defends itself. From CSP headers to validation pipelines — OWASP Top 10 becomes second nature.",
    category: "Mission",
    icon: Shield,
    relatedIds: [1, 3],
    status: "pending" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Open Source Mindset",
    date: "🌐 Contribution",
    content:
      "You’ll contribute to our repos — and even upstream. GitHub becomes your playground, not just a portfolio.",
    category: "Mission",
    icon: Code,
    relatedIds: [2, 4],
    status: "pending" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "CTFs, Talks & Fire Drills",
    date: "💥 Exposure",
    content:
      "From CTFs to live demos, you’ll gain real-world confidence to speak, defend, and deploy.",
    category: "Mission",
    icon: Calendar,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 80,
  },
  {
    id: 5,
    title: "Ship, Fail, Repeat",
    date: "🚀 Grit",
    content:
      "Failure is part of the path. You’ll learn to debug deeper, fail smarter, and ship sharper.",
    category: "Mission",
    icon: Clock,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 70,
  },
  {
    id: 6,
    title: "Lead with Code & Character",
    date: "🌟 Leadership",
    content:
      "OWASP Thapar is a launchpad. You’ll lead teams, manage projects, and mentor the next wave.",
    category: "Mission",
    icon: FileText,
    relatedIds: [5],
    status: "pending" as const,
    energy: 60,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <StarsBackground />
      <ShootingStars />

      {/* Animated Entry */}
      <motion.div
        initial={{
          opacity: 0,
          clipPath: "circle(0% at 50% 50%)",
        }}
        animate={{
          opacity: 1,
          clipPath: "circle(150% at 50% 50%)",
        }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 px-4 md:px-12 py-6 flex flex-col items-center justify-center space-y-6"
      >
        <div className="w-full max-w-6xl mx-auto text-center px-6 space-y-10 mt-20">
  <h2 className="text-[clamp(2.75rem,6vw,4.5rem)] font-[Orbitron] font-extrabold uppercase leading-[1.1] tracking-tight text-white">
    Enter the Arena
  </h2>

  <p className="text-[clamp(1.25rem,2.5vw,2rem)] text-white/90 font-semibold tracking-tight">
    Learn. Break. Lead.
  </p>

  <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] text-white/60 font-normal leading-relaxed max-w-2xl mx-auto">
    OWASP Thapar isn’t a club. It’s a proving ground. Every member is a builder, a breaker, and a future leader.
  </p>
</div>


        <div className="w-full max-w-6xl mt-2">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </motion.div>
    </div>
  );
}

export default RadialOrbitalTimelineDemo;
