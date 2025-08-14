"use client";

import Image from "next/image";
import { useMemo, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps extends ComponentPropsWithoutRef<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  duration?: number;
  gap?: string;
}

export function ThreeDPhotoCarousel({
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  duration = 40,
  gap = "1rem",
  className,
  ...props
}: CarouselProps) {
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

  const style = {
    ["--duration" as string]: `${duration}s`,
    ["--gap" as string]: gap,
  } as React.CSSProperties;

  return (
    <div
      {...props}
      style={style}
      className={cn(
        "group flex overflow-hidden p-2 [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around [gap:var(--gap)]",
            vertical ? "flex-col animate-marquee-vertical" : "flex-row animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {cards.map((src, idx) => (
            <div
              key={`${i}-${idx}`}
              className="flex items-center justify-center px-6"
            >
              <Image
                src={src}
                alt={`logo_${idx}`}
                width={120}
                height={120}
                unoptimized // optional for static local PNGs
                className="object-contain h-20 w-auto sm:h-24 md:h-28"
                draggable={false}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ThreeDPhotoCarousel;
