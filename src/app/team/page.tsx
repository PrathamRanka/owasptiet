"use client";

import React, { useState } from "react";
import { TeamCards } from "@/components/pages/TeamCards/eb-team-card";
import CoreCards from "@/components/pages/TeamCards/core-team-card";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/pages/Footer/footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress-ui/scroll-progress";

export default function TeamPage() {
  const [selected, setSelected] = useState<"executive" | "core">("executive");

  return (
    <>
      <ScrollProgress />
      <div className="relative min-h-screen w-full overflow-x-hidden text-white px-6 py-12">
        {/* Back Button */}
        <Link
          href="https://owasptiet.vercel.app"
          className="absolute top-6 left-6 z-50 hover:opacity-80 transition-opacity duration-200"
        >
          <ArrowLeft className="h-6 w-6 text-white hover:scale-110 transition-transform duration-200" />
        </Link>

        {/* Heading */}
        <h1 className="text-center text-4xl md:text-6xl font-serif font-bold tracking-widest uppercase mb-20">
          Meet the Team
        </h1>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-20">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-full px-2 py-1 flex items-center w-[360px]">
            {["executive", "core"].map((type) => {
              const isActive = selected === type;
              return (
                <button
                  key={type}
                  onClick={() => setSelected(type as "executive" | "core")}
                  className={`relative z-10 w-1/2 text-center py-3 text-md md:text-lg font-semibold transition-all duration-300 ease-in-out ${
                    isActive
                      ? "text-black scale-105"
                      : "text-white hover:opacity-80"
                  }`}
                >
                  {type === "executive" ? "Executive Board" : "Core Members"}
                </button>
              );
            })}

            {/* Animated Background */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              animate={{
                x: selected === "core" ? "100%" : "0%"
              }}
              className="absolute top-[6px] left-[6px] w-[calc(50%-12px)] h-[calc(100%-12px)] bg-white rounded-full z-0"
            />
          </div>
        </div>

        {/* Team Cards */}
        <div className="container mx-auto px-4">
          {selected === "executive" ? <TeamCards /> : <CoreCards />}
        </div>

        <div className="mt-24" />
        <Footer />
      </div>
    </>
  );
}
