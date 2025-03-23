"use client"

import { useEffect, useRef } from "react"

interface PixelatedBackgroundProps {
  className?: string
  pixelSize?: number
  speed?: number
  colorPalette?: string[]
}

export function PixelatedBackground({
  className = "",
  pixelSize = 20,
  speed = 1,
  colorPalette = [
    "#1a1a1a", // Dark gray
    "#2a2a2a", // Medium gray
    "#333333", // Light gray
    "#0f0f0f", // Almost black
    "#3a3a3a", // Lighter gray
    "#ff3333", // Red accent (matching the site's primary color)
    "#cc0000", // Darker red
  ],
}: PixelatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create pixel grid
    const width = canvas.width / window.devicePixelRatio
    const height = canvas.height / window.devicePixelRatio

    const cols = Math.ceil(width / pixelSize)
    const rows = Math.ceil(height / pixelSize)

    // Create pixel data
    const pixels = Array(rows)
      .fill(0)
      .map(() =>
        Array(cols)
          .fill(0)
          .map(() => ({
            color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
            brightness: 0.5 + Math.random() * 0.5,
            phase: Math.random() * Math.PI * 2,
            speed: 0.5 + Math.random() * 1.5,
          })),
      )

    // Animation variables
    let animationFrameId: number
    let time = 0

    // Draw pixelated pattern
    const draw = () => {
      if (!ctx || !canvas) return

      // Clear canvas with a dark base
      ctx.fillStyle = "#030303"
      ctx.fillRect(0, 0, width, height)

      time += 0.01 * speed

      // Draw pixels
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const pixel = pixels[row][col]

          // Update brightness based on time
          const brightness = pixel.brightness * (0.7 + 0.3 * Math.sin(time * pixel.speed + pixel.phase))

          // Calculate pixel position
          const x = col * pixelSize
          const y = row * pixelSize

          // Draw pixel with varying brightness
          const color = pixel.color
          ctx.fillStyle = adjustBrightness(color, brightness)

          // Add a small gap between pixels for a more defined grid
          const gap = 1
          ctx.fillRect(x + gap / 2, y + gap / 2, pixelSize - gap, pixelSize - gap)

          // Occasionally draw a highlight pixel
          if (Math.random() < 0.0005) {
            pixels[row][col].brightness = 1.5 // Temporarily boost brightness
          } else if (pixel.brightness > 1) {
            // Gradually return to normal brightness
            pixels[row][col].brightness *= 0.95
          }
        }
      }

      // Draw occasional "glitch" effects
      if (Math.random() < 0.05) {
        const glitchRow = Math.floor(Math.random() * rows)
        const glitchLength = Math.floor(Math.random() * cols * 0.3) + 5
        const glitchStart = Math.floor(Math.random() * (cols - glitchLength))

        for (let i = 0; i < glitchLength; i++) {
          const col = glitchStart + i
          if (col < cols) {
            pixels[glitchRow][col].brightness = 1.2
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    // Helper function to adjust color brightness
    function adjustBrightness(hex: string, factor: number): string {
      // Convert hex to RGB
      let r = Number.parseInt(hex.substring(1, 3), 16)
      let g = Number.parseInt(hex.substring(3, 5), 16)
      let b = Number.parseInt(hex.substring(5, 7), 16)

      // Adjust brightness
      r = Math.min(255, Math.round(r * factor))
      g = Math.min(255, Math.round(g * factor))
      b = Math.min(255, Math.round(b * factor))

      // Convert back to hex
      return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [pixelSize, speed, colorPalette])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true" />
}

