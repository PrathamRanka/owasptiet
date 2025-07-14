"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
    width: 1, // temporary, will be overridden
  height: 1, // temporary, will be overridden
  onRender: () => {}, // temporary, will be replaced by actual render callback

  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
   { location: [30.3400, 76.3800], size: 0.06 }, // Patiala, Punjab
    { location: [28.6139, 77.2090], size: 0.08 }, // New Delhi / Noida
    { location: [19.0760, 72.8777], size: 0.10 }, // Mumbai
    { location: [13.0827, 80.2707], size: 0.09 }, // Chennai

    // 🌎 Global Chapters (existing)
    { location: [47.6062, -122.3321], size: 0.10 }, // Seattle
    { location: [23.8103, 90.4125], size: 0.05 },  // Dhaka
    { location: [30.0444, 31.2357], size: 0.07 },  // Cairo
    { location: [-23.5505, -46.6333], size: 0.10 }, // São Paulo
    { location: [40.7128, -74.0060], size: 0.10 },  // New York

    // 🌍 +10 additional global OWASP chapters
    { location: [51.5074, -0.1278], size: 0.08 },   // London
    { location: [48.8566, 2.3522], size: 0.08 },    // Paris
    { location: [52.5200, 13.4050], size: 0.08 },   // Berlin
    { location: [35.6895, 139.6917], size: 0.08 },  // Tokyo
    { location: [1.3521, 103.8198], size: 0.08 },   // Singapore
    { location: [43.6532, -79.3832], size: 0.08 },  // Toronto
    { location: [-33.8688, 151.2093], size: 0.08 }, // Sydney
    { location: [55.7558, 37.6173], size: 0.08 },   // Moscow
    { location: [41.0082, 28.9784], size: 0.08 },   // Istanbul
    { location: [-26.2041, 28.0473], size: 0.08 },  // Johannesburg
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)
  const [width, setWidth] = useState(0)
  let phi = 0

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onResize = () => {
    if (canvasRef.current) {
      setWidth(canvasRef.current.offsetWidth)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r, width]
  )

  useEffect(() => {
    onResize()
    window.addEventListener("resize", onResize)

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    }, 300)

    return () => {
      window.removeEventListener("resize", onResize)
      globe.destroy()
    }
  }, [config, onRender, width])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-[600px]",
        "bg-transparent", // make sure this is transparent
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "size-full opacity-0 transition-opacity duration-500",
          "[contain:layout_paint_size]",
          "bg-transparent" // ensures canvas has no fill
        )}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
