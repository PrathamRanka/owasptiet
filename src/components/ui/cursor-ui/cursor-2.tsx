"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

export const CustomCursor2 = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);

  // Random color once per page load
  const [color] = useState(() => {
    const colors = [
      "#0ea5e9",
      "#737373",
      "#14b8a6",
      "#22c55e",
      "#3b82f6",
      "#ef4444",
      "#eab308",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y]);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none !important; }`}</style>

      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none"
          style={{ top: y, left: x }}
          animate={{ scale: 1 }}
        >
          <svg
            stroke={color}
            fill={color}
            strokeWidth="1"
            viewBox="0 0 16 16"
            className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
          </svg>
        </motion.div>
      )}
    </>
  );
};
