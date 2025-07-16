"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 1,
  height: 1,
  onRender: () => {}, // will be replaced dynamically

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
    { location: [30.34, 76.38], size: 0.06 },
    { location: [28.6139, 77.2090], size: 0.08 },
    { location: [19.0760, 72.8777], size: 0.10 },
    { location: [13.0827, 80.2707], size: 0.09 },
    { location: [47.6062, -122.3321], size: 0.10 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [-23.5505, -46.6333], size: 0.10 },
    { location: [40.7128, -74.0060], size: 0.10 },
    { location: [51.5074, -0.1278], size: 0.08 },
    { location: [48.8566, 2.3522], size: 0.08 },
    { location: [52.52, 13.4050], size: 0.08 },
    { location: [35.6895, 139.6917], size: 0.08 },
    { location: [1.3521, 103.8198], size: 0.08 },
    { location: [43.6532, -79.3832], size: 0.08 },
    { location: [-33.8688, 151.2093], size: 0.08 },
    { location: [55.7558, 37.6173], size: 0.08 },
    { location: [41.0082, 28.9784], size: 0.08 },
    { location: [-26.2041, 28.0473], size: 0.08 },
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
  const phiRef = useRef(0)
  const pointerStart = useRef<number | null>(null)
  const pointerDelta = useRef(0)

  const [rotationOffset, setRotationOffset] = useState(0)
  const [size, setSize] = useState(0)

  const updatePointerStart = (value: number | null) => {
    pointerStart.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const handlePointerMove = (clientX: number) => {
    if (pointerStart.current !== null) {
      const delta = clientX - pointerStart.current
      pointerDelta.current = delta
      setRotationOffset(delta / 200)
    }
  }

  const onResize = () => {
    if (canvasRef.current) {
      setSize(canvasRef.current.offsetWidth)
    }
  }

  const onRender = useCallback(
    (state: Record<string, number>) => {
      if (pointerStart.current === null) {
        phiRef.current += 0.005
      }
      state.phi = phiRef.current + rotationOffset
      state.width = size * 2
      state.height = size * 2
    },
    [rotationOffset, size]
  )

  useEffect(() => {
    onResize()
    window.addEventListener("resize", onResize)

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: size * 2,
      height: size * 2,
      onRender,
    })

    const canvas = canvasRef.current
    if (canvas) {
      canvas.style.opacity = "0"
      setTimeout(() => (canvas.style.opacity = "1"), 300)
    }

    return () => {
      window.removeEventListener("resize", onResize)
      globe.destroy()
    }
  }, [config, onRender, size])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-[600px]",
        "bg-transparent",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "size-full opacity-0 transition-opacity duration-500",
          "[contain:layout_paint_size]",
          "bg-transparent"
        )}
        onPointerDown={(e) =>
          updatePointerStart(e.clientX - pointerDelta.current)
        }
        onPointerUp={() => updatePointerStart(null)}
        onPointerOut={() => updatePointerStart(null)}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && handlePointerMove(e.touches[0].clientX)
        }
      />
    </div>
  )
}
