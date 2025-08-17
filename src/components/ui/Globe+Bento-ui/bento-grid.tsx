/* eslint-disable */
"use client";

import { Box, Lock, Search, Settings, Sparkles, ArrowLeft } from "lucide-react";
import { GlowingEffect } from "@/components/ui/Globe+Bento-ui/glowing-effect";
import { Badge } from "@/components/ui/Globe+Bento-ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export const Section2: React.FC = () => {
  return (
    <section className="relative min-h-screen z-10 pt-32">
      <BentoGrid />
    </section>
  );
};

export function BentoGrid() {
  const [selectedItem, setSelectedItem] = React.useState<null | {
    title: string;
    description: string;
    image?: string;
  }>(null);

  return (
    <div className="flex flex-col gap-16 items-center relative z-10">
      {/* Heading */}
      <div className="flex flex-col gap-4 items-center text-center z-20">
        <Badge className="bg-transparent border-none p-0 text-xs sm:text-sm tracking-widest uppercase text-blue-400 font-semibold font-mono">
          OWASP Workshops
        </Badge>
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase font-['Orbitron'] text-white tracking-wide">
            Explore. Hack. Secure. Learn.
          </h2>
          <p className="text-lg max-w-xl lg:max-w-2xl mx-auto text-center leading-relaxed text-white/70">
            A week full of tech, tools, and thrill — designed for hackers, builders, and dreamers.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 z-10">
        {[
          {
            title: "Web Dev Workshop",
            description: "Build solid web apps from scratch using real-world tools.",
            // image: "/images/webdev.jpg",
            icon: <Box className="h-5 w-5 text-white/80" />,
            area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
          },
          {
            title: "Web3 Workshop",
            description: "Dive into blockchain and dApps. No crypto hype, just core tech.",
            // image: "/images/web3.jpg",
            icon: <Settings className="h-5 w-5 text-white/80" />,
            area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
          },
          {
            title: "AI/ML Workshop",
            description: "Get hands-on with models and real machine learning workflows.",
            // image: "/images/ai.jpg",
            icon: <Lock className="h-5 w-5 text-white/80" />,
            area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
          },
          {
            title: "CTF Event",
            description: "Test your skills in a guided hacking challenge.",
            // image: "/images/ctf.jpg",
            icon: <Sparkles className="h-5 w-5 text-white/80" />,
            area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
          },
          {
            title: "HackOWASP 8.0",
            description: "The flagship hackathon that brings it all together.",
            // image: "/images/hackowasp.jpg",
            icon: <Search className="h-5 w-5 text-white/80" />,
            area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
          },
        ].map((item) => (
          <GridItem
            key={item.title}
            area={item.area}
            icon={item.icon}
            title={item.title}
            description={item.description}
            onRegister={() => setSelectedItem(item)}
          />
        ))}
      </ul>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Background Blur */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-lg z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            />

            {/* Bigger Card */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Image */}
              <div className="relative w-full h-80">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 left-4 flex items-center gap-1 bg-black/60 text-white px-4 py-2 rounded-full hover:bg-black/80 transition"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
              </div>

              {/* Content */}
              <div className="p-10 text-center">
                <h3 className="text-4xl font-bold text-white">{selectedItem.title}</h3>
                <p className="text-white/80 mt-4 text-lg">{selectedItem.description}</p>
                <button className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl transition">
                  Proceed to Register
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  onRegister: () => void;
}

const GridItem = ({ area, icon, title, description, onRegister }: GridItemProps) => {
  return (
    <li className={`min-h-[16rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 z-10">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="flex flex-col gap-3">
            <div className="w-fit rounded-lg border border-white/40 p-2">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="font-sans text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="font-sans text-sm text-white/80">
                {description}
              </p>
            </div>
          </div>
          <button
            onClick={onRegister}
            className="self-start mt-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition duration-200"
          >
            Register Now
          </button>
        </div>
      </div>
    </li>
  );
};
