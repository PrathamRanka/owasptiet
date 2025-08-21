"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_CONFIG: COBEOptions = {
  width: 1,
  height: 1,
  onRender: () => {},
  devicePixelRatio: typeof window !== "undefined" && window.innerWidth < 768 ? 1.5 : 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: typeof window !== "undefined" && window.innerWidth < 768 ? 5000 : 16000, // low-res on mobile
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
{ location: [30.34, 76.38], size: 0.06 }, { location: [28.6139, 77.209], size: 0.08 }, { location: [19.076, 72.8777], size: 0.1 }, { location: [13.0827, 80.2707], size: 0.09 }, { location: [47.6062, -122.3321], size: 0.1 }, { location: [23.8103, 90.4125], size: 0.05 }, { location: [30.0444, 31.2357], size: 0.07 }, { location: [-23.5505, -46.6333], size: 0.1 }, { location: [40.7128, -74.006], size: 0.1 }, { location: [51.5074, -0.1278], size: 0.08 }, { location: [48.8566, 2.3522], size: 0.08 }, { location: [52.52, 13.405], size: 0.08 }, { location: [35.6895, 139.6917], size: 0.08 }, { location: [1.3521, 103.8198], size: 0.08 }, { location: [43.6532, -79.3832], size: 0.08 }, { location: [-33.8688, 151.2093], size: 0.08 }, { location: [55.7558, 37.6173], size: 0.08 }, { location: [41.0082, 28.9784], size: 0.08 }, { location: [-26.2041, 28.0473], size: 0.08 },
  ],
};

export function Globe({ className, config = DEFAULT_CONFIG }: { className?: string; config?: COBEOptions }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const thetaRef = useRef(0.3);
  const velocityXRef = useRef(0);
  const velocityYRef = useRef(0);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);
  const [size, setSize] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const setCursor = (isGrabbing: boolean) => {
    if (canvasRef.current) {
      canvasRef.current.style.cursor = isGrabbing ? "grabbing" : "grab";
    }
  };

  // Enable/disable interaction on wrapper click (only on mobile)
const handleWrapperClick = () => {
  if (window.innerWidth < 768) {
    setIsActive((prev) => !prev);
  }
};

  const handlePointerDown = (x: number, y: number) => {
    if (!isActive && window.innerWidth < 768) return; // Do nothing if not active
    pointerStartX.current = x;
    pointerStartY.current = y;
    setCursor(true);
  };
  const handlePointerUp = () => {
    pointerStartX.current = null;
    pointerStartY.current = null;
    setCursor(false);
  };
  const handlePointerMove = (x: number, y: number) => {
    if (!isActive && window.innerWidth < 768) return; // Do nothing if not active
    if (pointerStartX.current !== null && pointerStartY.current !== null) {
      const sensitivity = window.innerWidth < 768 ? 100 : 200;
      const deltaX = x - pointerStartX.current;
      const deltaY = y - pointerStartY.current;
      phiRef.current += deltaX / sensitivity;
      thetaRef.current += deltaY / sensitivity;
      velocityXRef.current = deltaX / sensitivity;
      velocityYRef.current = deltaY / sensitivity;
      pointerStartX.current = x;
      pointerStartY.current = y;
    }
  };

  const updateSize = useCallback(() => {
    if (!canvasRef.current) return;
    const width = canvasRef.current.offsetWidth;
    setSize(window.innerWidth < 768 ? Math.min(width, 220) : width);
  }, []);

  const onRender = useCallback(
    (state: Record<string, number>) => {
      if (!pointerStartX.current && !pointerStartY.current) {
        phiRef.current += velocityXRef.current || 0.005;
        thetaRef.current += velocityYRef.current || 0;
        velocityXRef.current *= 0.95;
        velocityYRef.current *= 0.95;
        if (Math.abs(velocityXRef.current) < 0.0001) velocityXRef.current = 0;
        if (Math.abs(velocityYRef.current) < 0.0001) velocityYRef.current = 0;
      }
      state.phi = phiRef.current;
      state.theta = thetaRef.current;
      state.width = size * 2;
      state.height = size * 2;
    },
    [size]
  );

  useEffect(() => {
    updateSize();
    let frame: number;
    const handleResize = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateSize);
    };
    window.addEventListener("resize", handleResize);

    if (!canvasRef.current) return;

    // Initialize globe
    const globe = createGlobe(canvasRef.current, { ...config, width: size * 2, height: size * 2, onRender });
    setInitialized(true);

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.opacity = "0";
      setTimeout(() => (canvas.style.opacity = "1"), 300);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      globe.destroy();
    };
  }, [config, onRender, size, updateSize]);

  return (
    <div className="flex items-center justify-center w-full h-full" onClick={handleWrapperClick}>
      {/* Placeholder for instant paint */}
      {!initialized && <div className="w-24 h-24 rounded-full bg-gray-800 animate-pulse" />}
      <div className={cn("aspect-square w-full max-w-[600px] bg-transparent", className)}>
        <canvas
          ref={canvasRef}
          className="w-full h-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size] bg-transparent"
          onPointerDown={(e) => handlePointerDown(e.clientX, e.clientY)}
          onPointerUp={handlePointerUp}
          onPointerOut={handlePointerUp}
          onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
          onTouchStart={(e) =>
            e.touches[0] && handlePointerDown(e.touches[0].clientX, e.touches[0].clientY)
          }
          onTouchMove={(e) =>
            e.touches[0] && handlePointerMove(e.touches[0].clientX, e.touches[0].clientY)
          }
          onTouchEnd={handlePointerUp}
        />
      </div>
    </div>
  );
}
