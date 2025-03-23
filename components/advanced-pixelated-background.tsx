"use client"

import { useEffect, useRef } from "react"

interface AdvancedPixelatedBackgroundProps {
  className?: string
  pixelSize?: number
  speed?: number
  colorPalette?: string[]
  enableGlitch?: boolean
  enableWave?: boolean
}

export function AdvancedPixelatedBackground({
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
  enableGlitch = true,
  enableWave = true,
}: AdvancedPixelatedBackgroundProps) {
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
            size: pixelSize * (0.8 + Math.random() * 0.4), // Vary pixel size slightly
            glitching: false,
            glitchIntensity: 0,
          })),
      )

    // Animation variables
    let animationFrameId: number
    let time = 0
    let glitchTime = 0
    let isGlitching = false
    let glitchDuration = 0
    let glitchIntensity = 0

    // Draw pixelated pattern
    const draw = () => {
      if (!ctx || !canvas) return

      // Clear canvas with a dark base
      ctx.fillStyle = "#030303"
      ctx.fillRect(0, 0, width, height)

      time += 0.01 * speed

      // Handle global glitch effect
      if (enableGlitch) {
        glitchTime += 0.01

        // Randomly trigger glitch effect
        if (!isGlitching && Math.random() < 0.002) {
          isGlitching = true
          glitchDuration = 0.2 + Math.random() * 0.8 // 0.2 to 1 second
          glitchIntensity = 0.3 + Math.random() * 0.7 // 0.3 to 1 intensity
        }

        // Update glitch state
        if (isGlitching) {
          glitchDuration -= 0.01
          if (glitchDuration <= 0) {
            isGlitching = false
          }
        }
      }

      // Draw pixels
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const pixel = pixels[row][col]

          // Calculate wave effect
          let waveOffset = 0
          if (enableWave) {
            waveOffset = Math.sin(time * 0.5 + row * 0.1) * pixelSize * 0.3
          }

          // Update brightness based on time
          let brightness = pixel.brightness * (0.7 + 0.3 * Math.sin(time * pixel.speed + pixel.phase))

          // Apply glitch effect to individual pixels
          let xOffset = 0
          const yOffset = 0
          const pixelSize = pixel.size

          if (enableGlitch) {
            // Global glitch effect
            if (isGlitching && Math.random() < glitchIntensity * 0.3) {
              brightness *= 0.5 + Math.random() * 1.5
              xOffset = (Math.random() - 0.5) * pixelSize * glitchIntensity * 2
            }

            // Individual pixel glitching
            if (pixel.glitching) {
              pixel.glitchIntensity -= 0.05
              if (pixel.glitchIntensity <= 0) {
                pixel.glitching = false
                pixel.glitchIntensity = 0
              } else {
                brightness *= 1 + pixel.glitchIntensity
                xOffset += (Math.random() - 0.5) * pixelSize * pixel.glitchIntensity
              }
            } else if (Math.random() < 0.0002) {
              pixel.glitching = true
              pixel.glitchIntensity = 0.5 + Math.random() * 0.5
            }
          }

          // Calculate pixel position with offsets
          const x = col * pixelSize + xOffset + waveOffset
          const y = row * pixelSize + yOffset

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

      // Draw horizontal glitch lines
      if (enableGlitch && isGlitching) {
        const numGlitchLines = Math.floor(glitchIntensity * 5)
        for (let i = 0; i < numGlitchLines; i++) {
          const y = Math.floor(Math.random() * height)
          const lineHeight = Math.floor(Math.random() * 5) + 1
          const offset = (Math.random() - 0.5) * 20 * glitchIntensity

          ctx.fillStyle = `rgba(255, 51, 51, ${0.1 + Math.random() * 0.3})`
          ctx.fillRect(0, y, width, lineHeight)

          // Draw offset duplicate for glitch effect
          ctx.fillStyle = `rgba(51, 255, 255, ${0.05 + Math.random() * 0.1})`
          ctx.fillRect(offset, y, width, lineHeight)
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
  }, [pixelSize, speed, colorPalette, enableGlitch, enableWave])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true" />
}

