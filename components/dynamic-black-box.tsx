"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export type BlackBoxEffect = "solid" | "transparent" | "mirror" | "advanced-mirror"

interface DynamicBlackBoxProps {
  className?: string
  initialEffect?: BlackBoxEffect
  width?: string | number
  height?: string | number
  children?: React.ReactNode
  onChange?: (effect: BlackBoxEffect) => void
}

export function DynamicBlackBox({
  className,
  initialEffect = "solid",
  width = "100%",
  height = "400px",
  children,
  onChange,
}: DynamicBlackBoxProps) {
  const [effect, setEffect] = useState<BlackBoxEffect>(initialEffect)
  const boxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle effect change
  const handleEffectChange = (newEffect: BlackBoxEffect) => {
    setEffect(newEffect)
    if (onChange) onChange(newEffect)
  }

  // Set up advanced mirror effect using webcam
  useEffect(() => {
    if (effect !== "advanced-mirror") return

    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    // Set up webcam stream
    const setupWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        video.srcObject = stream
        await video.play()

        // Set canvas dimensions
        const { width, height } = video.getBoundingClientRect()
        canvas.width = width
        canvas.height = height

        // Draw video to canvas with mirror effect
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const drawFrame = () => {
          if (!video || !canvas) return
          ctx.save()

          // Mirror horizontally
          ctx.translate(canvas.width, 0)
          ctx.scale(-1, 1)

          // Draw the video frame
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

          // Apply effects
          ctx.restore()

          // Apply a slight darkening filter
          ctx.fillStyle = "rgba(0, 0, 0, 0.2)"
          ctx.fillRect(0, 0, canvas.width, canvas.height)

          requestAnimationFrame(drawFrame)
        }

        drawFrame()
      } catch (error) {
        console.error("Error accessing webcam:", error)
      }
    }

    setupWebcam()

    // Clean up
    return () => {
      const stream = video.srcObject as MediaStream
      if (stream) {
        const tracks = stream.getTracks()
        tracks.forEach((track) => track.stop())
      }
    }
  }, [effect])

  // Resize observer for canvas
  useEffect(() => {
    if (!boxRef.current || !canvasRef.current) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (canvasRef.current && entry.target === boxRef.current) {
          canvasRef.current.width = entry.contentRect.width
          canvasRef.current.height = entry.contentRect.height
        }
      }
    })

    resizeObserver.observe(boxRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div className="space-y-4">
      <div
        ref={boxRef}
        className={cn(
          "relative overflow-hidden transition-all duration-500 ease-in-out",
          {
            // Solid black box (default)
            "bg-black border border-gray-800": effect === "solid",

            // Transparent effect
            "bg-black/30 backdrop-blur-sm border border-white/20 shadow-lg": effect === "transparent",

            // CSS-based mirror effect
            "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700": effect === "mirror",

            // WebGL/Canvas-based advanced mirror effect
            "bg-black border border-gray-700": effect === "advanced-mirror",
          },
          className,
        )}
        style={{ width, height }}
      >
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-center">{children}</div>

        {/* Mirror effect overlay */}
        {effect === "mirror" && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        )}

        {/* Advanced mirror effect using webcam */}
        {effect === "advanced-mirror" && (
          <>
            <video ref={videoRef} className="hidden" playsInline muted />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
          </>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => handleEffectChange("solid")}
          className={cn(
            "px-3 py-1 rounded text-sm transition-colors",
            effect === "solid" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
          )}
        >
          Solid
        </button>
        <button
          onClick={() => handleEffectChange("transparent")}
          className={cn(
            "px-3 py-1 rounded text-sm transition-colors",
            effect === "transparent" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
          )}
        >
          Transparent
        </button>
        <button
          onClick={() => handleEffectChange("mirror")}
          className={cn(
            "px-3 py-1 rounded text-sm transition-colors",
            effect === "mirror" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
          )}
        >
          Mirror
        </button>
        <button
          onClick={() => handleEffectChange("advanced-mirror")}
          className={cn(
            "px-3 py-1 rounded text-sm transition-colors",
            effect === "advanced-mirror" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
          )}
        >
          Advanced Mirror
        </button>
      </div>
    </div>
  )
}
