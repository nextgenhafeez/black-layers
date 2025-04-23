"use client"

import { useEffect, useRef, useState } from "react"

interface ImagePixelatedBackgroundProps {
  className?: string
  imageSrc: string
  pixelSize?: number
  speed?: number
  enableGlitch?: boolean
}

export function ImagePixelatedBackground({
  className = "",
  imageSrc,
  pixelSize = 15,
  speed = 1,
  enableGlitch = true,
}: ImagePixelatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageData, setImageData] = useState<ImageData | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Load and process the image
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous" // Prevent CORS issues

    img.onload = () => {
      // Create a temporary canvas to extract image data
      const tempCanvas = document.createElement("canvas")
      const tempCtx = tempCanvas.getContext("2d")

      if (!tempCtx) {
        setError("Failed to create temporary canvas context")
        return
      }

      // Set canvas size to match image
      tempCanvas.width = img.width
      tempCanvas.height = img.height

      // Draw image to temporary canvas
      tempCtx.drawImage(img, 0, 0)

      // Get image data
      try {
        const data = tempCtx.getImageData(0, 0, img.width, img.height)
        setImageData(data)
        setImageLoaded(true)
      } catch (e) {
        setError(`Failed to extract image data: ${e instanceof Error ? e.message : String(e)}`)
      }
    }

    img.onerror = () => {
      setError(`Failed to load image: ${imageSrc}`)
    }

    img.src = imageSrc

    return () => {
      // Clean up
      img.onload = null
      img.onerror = null
    }
  }, [imageSrc])

  // Set up the canvas and animation
  useEffect(() => {
    if (!imageLoaded || !imageData) return

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

    // Create pixel data based on the image
    const pixels = Array(rows)
      .fill(0)
      .map((_, row) =>
        Array(cols)
          .fill(0)
          .map((_, col) => {
            // Map canvas position to image position
            const imgX = Math.floor((col / cols) * imageData.width)
            const imgY = Math.floor((row / rows) * imageData.height)

            // Get pixel color from image
            const i = (imgY * imageData.width + imgX) * 4
            const r = imageData.data[i]
            const g = imageData.data[i + 1]
            const b = imageData.data[i + 2]
            const a = imageData.data[i + 3]

            return {
              color: `rgba(${r}, ${g}, ${b}, ${a / 255})`,
              brightness: 0.8 + Math.random() * 0.4,
              phase: Math.random() * Math.PI * 2,
              speed: 0.5 + Math.random() * 1.5,
              glitching: false,
              glitchIntensity: 0,
            }
          }),
      )

    // Animation variables
    let animationFrameId: number
    let time = 0
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

          // Update brightness based on time
          let brightness = pixel.brightness * (0.8 + 0.2 * Math.sin(time * pixel.speed + pixel.phase))

          // Apply glitch effect to individual pixels
          let xOffset = 0
          const yOffset = 0

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
          const x = col * pixelSize + xOffset
          const y = row * pixelSize + yOffset

          // Apply brightness to the pixel color
          const originalColor = pixel.color
          ctx.fillStyle = adjustBrightness(originalColor, brightness)

          // Add a small gap between pixels for a more defined grid
          const gap = 1
          ctx.fillRect(x + gap / 2, y + gap / 2, pixelSize - gap, pixelSize - gap)
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
    function adjustBrightness(color: string, factor: number): string {
      // For rgba colors
      if (color.startsWith("rgba")) {
        const parts = color.match(/rgba$$(\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)$$/)
        if (!parts) return color

        const r = Math.min(255, Math.round(Number.parseInt(parts[1]) * factor))
        const g = Math.min(255, Math.round(Number.parseInt(parts[2]) * factor))
        const b = Math.min(255, Math.round(Number.parseInt(parts[3]) * factor))
        const a = Number.parseFloat(parts[4])

        return `rgba(${r}, ${g}, ${b}, ${a})`
      }

      // For hex colors (fallback)
      return color
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [imageLoaded, imageData, pixelSize, speed, enableGlitch])

  return (
    <>
      <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true" />
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-red-500">Error: {error}</div>
      )}
      {!imageLoaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">Loading image...</div>
      )}
    </>
  )
}
