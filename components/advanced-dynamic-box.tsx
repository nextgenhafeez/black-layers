"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export type AdvancedBoxEffect = "solid" | "transparent" | "mirror" | "advanced-mirror"

interface AdvancedDynamicBoxProps {
  className?: string
  initialEffect?: AdvancedBoxEffect
  width?: string | number
  height?: string | number
  children?: React.ReactNode
}

export function AdvancedDynamicBox({
  className,
  initialEffect = "solid",
  width = "100%",
  height = "400px",
  children,
}: AdvancedDynamicBoxProps) {
  const [effect, setEffect] = useState<AdvancedBoxEffect>(initialEffect)
  const [opacity, setOpacity] = useState(100)
  const [blur, setBlur] = useState(5)
  const [reflection, setReflection] = useState(50)
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)

  const boxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

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

          // Apply a slight darkening filter based on reflection value
          ctx.fillStyle = `rgba(0, 0, 0, ${(100 - reflection) / 100})`
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
  }, [effect, reflection])

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

  // Reset values when effect changes
  useEffect(() => {
    switch (effect) {
      case "solid":
        setOpacity(100)
        setBlur(0)
        setReflection(0)
        setBrightness(100)
        setContrast(100)
        break
      case "transparent":
        setOpacity(30)
        setBlur(5)
        setReflection(20)
        setBrightness(110)
        setContrast(90)
        break
      case "mirror":
        setOpacity(90)
        setBlur(0)
        setReflection(70)
        setBrightness(120)
        setContrast(110)
        break
      case "advanced-mirror":
        setOpacity(80)
        setBlur(0)
        setReflection(50)
        setBrightness(100)
        setContrast(100)
        break
    }
  }, [effect])

  return (
    <div className="space-y-4">
      <div
        ref={boxRef}
        className={cn("relative overflow-hidden transition-all duration-500 ease-in-out", className)}
        style={{
          width,
          height,
          backgroundColor: `rgba(0, 0, 0, ${opacity / 100})`,
          backdropFilter: blur > 0 ? `blur(${blur}px)` : "none",
          filter: `brightness(${brightness}%) contrast(${contrast}%)`,
          boxShadow: reflection > 0 ? `0 10px 30px -10px rgba(255, 255, 255, ${reflection / 200})` : "none",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: reflection > 50 ? "rgba(255, 255, 255, 0.2)" : "rgba(75, 75, 75, 0.5)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-center">{children}</div>

        {/* Mirror effect overlay */}
        {effect === "mirror" && (
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
            style={{ opacity: reflection / 100 }}
          />
        )}

        {/* Advanced mirror effect using webcam */}
        {effect === "advanced-mirror" && (
          <>
            <video ref={videoRef} className="hidden" playsInline muted />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"
              style={{ opacity: (100 - reflection) / 100 }}
            />
          </>
        )}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-card p-4 rounded-lg">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Effect Type</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setEffect("solid")}
              className={cn(
                "px-3 py-1 rounded text-sm transition-colors",
                effect === "solid" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
              )}
            >
              Solid
            </button>
            <button
              onClick={() => setEffect("transparent")}
              className={cn(
                "px-3 py-1 rounded text-sm transition-colors",
                effect === "transparent" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
              )}
            >
              Transparent
            </button>
            <button
              onClick={() => setEffect("mirror")}
              className={cn(
                "px-3 py-1 rounded text-sm transition-colors",
                effect === "mirror" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
              )}
            >
              Mirror
            </button>
            <button
              onClick={() => setEffect("advanced-mirror")}
              className={cn(
                "px-3 py-1 rounded text-sm transition-colors",
                effect === "advanced-mirror" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700",
              )}
            >
              Advanced Mirror
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 flex justify-between">
              <span>Opacity: {opacity}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={opacity}
              onChange={(e) => setOpacity(Number.parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 flex justify-between">
              <span>Blur: {blur}px</span>
            </label>
            <input
              type="range"
              min="0"
              max="20"
              value={blur}
              onChange={(e) => setBlur(Number.parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 flex justify-between">
              <span>Reflection: {reflection}%</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={reflection}
              onChange={(e) => setReflection(Number.parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 flex justify-between">
              <span>Brightness: {brightness}%</span>
            </label>
            <input
              type="range"
              min="50"
              max="150"
              value={brightness}
              onChange={(e) => setBrightness(Number.parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 flex justify-between">
              <span>Contrast: {contrast}%</span>
            </label>
            <input
              type="range"
              min="50"
              max="150"
              value={contrast}
              onChange={(e) => setContrast(Number.parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Current Settings</h3>
          <div className="bg-black/30 p-3 rounded text-xs font-mono text-gray-300 overflow-auto">
            <pre>
              {`{
  effect: "${effect}",
  opacity: ${opacity}%,
  blur: ${blur}px,
  reflection: ${reflection}%,
  brightness: ${brightness}%,
  contrast: ${contrast}%
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

