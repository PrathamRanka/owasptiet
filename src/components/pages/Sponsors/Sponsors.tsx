"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Sponsors-ui/InfiniteCarousel";

export function Sponsors() {
  const cards = useMemo(
    () => [
      "/jawed-habib.png",
      "/gfg-03.png",
      "/paytm.png",
      "/bonn.png",
      "/devfolio.png",
      "/codechef.png",
      "/redbull.png",
      "/jio.png",
      "/time.png",
    ],
    []
  );

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      {/* First Row */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {cards.map((imgUrl, i) => (
          <motion.img
            key={`logo-${i}`}
            src={imgUrl}
            alt={`logo_${i}`}
            className="h-16 w-28 sm:h-20 sm:w-36 md:h-24 md:w-44 lg:h-28 lg:w-52 xl:h-32 xl:w-56 object-contain mx-4 sm:mx-5 md:mx-6"
            initial={{ filter: "blur(4px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </Marquee>

      {/* Second Row (reverse direction) */}
      <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
        {cards.map((imgUrl, i) => (
          <motion.img
            key={`logo-reverse-${i}`}
            src={imgUrl}
            alt={`logo_reverse_${i}`}
            className="h-16 w-28 sm:h-20 sm:w-36 md:h-24 md:w-44 lg:h-28 lg:w-52 xl:h-32 xl:w-56 object-contain mx-4 sm:mx-5 md:mx-6"
            initial={{ filter: "blur(4px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </Marquee>
    </div>
  );
}
