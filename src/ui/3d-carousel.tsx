"use client";

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) return defaultValue;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) return getMatches(query);
    return defaultValue;
  });

  const handleChange = () => setMatches(getMatches(query));

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => matchMedia.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

const Carousel = memo(({ cards }: { cards: string[] }) => {
  const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
  const cylinderWidth = isScreenSizeSm ? 1600 : 2400;
  const faceCount = cards.length;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const rotation = useMotionValue(0);
  const transform = useTransform(rotation, (v) => `rotate3d(0, 1, 0, ${v}deg)`);
  Carousel.displayName = "Carousel";

  // ✅ Auto-rotate using requestAnimationFrame
  useAnimationFrame((t, delta) => {
    rotation.set(rotation.get() + delta * 0.01); // Smooth and framerate-independent
  });

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <motion.div
        className="relative flex h-full origin-center justify-center"
        style={{
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
      >
        {cards.map((imgUrl, i) => (
          <motion.div
            key={`logo-${i}`}
            className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${
                i * (360 / faceCount)
              }deg) translateZ(${radius}px)`,
            }}
          >
            <motion.img
              src={imgUrl}
              alt={`logo_${i}`}
              className="pointer-events-none w-full rounded-xl object-contain aspect-square"
              initial={{ filter: "blur(4px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

function ThreeDPhotoCarousel() {
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
    <motion.div layout className="relative h-[650px] w-full overflow-hidden">
      <Carousel cards={cards} />
    </motion.div>
  );
}

export { ThreeDPhotoCarousel };
