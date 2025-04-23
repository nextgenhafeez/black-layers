"use client"

import { useEffect, useRef } from "react"

interface ShafaamryPixelatedBackgroundProps {
  className?: string
  pixelSize?: number
  speed?: number
  opacity?: number
}

export function ShafaamryPixelatedBackground({
  className = "",
  pixelSize = 15,
  speed = 0.8,
  opacity = 0.7,
}: ShafaamryPixelatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const imageLoadedRef = useRef(false)

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

    // Load the shafaamry image
    if (!imageRef.current) {
      imageRef.current = new Image()
      imageRef.current.crossOrigin = "anonymous"
      imageRef.current.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shafaamry-background.jpg"
      imageRef.current.onload = () => {
        imageLoadedRef.current = true
      }
    }

    // Animation variables
    let animationFrameId: number
    let time = 0

    // Draw pixelated pattern
    const draw = () => {
      if (!ctx || !canvas) return

      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Clear canvas with a dark base
      ctx.fillStyle = "#030303"
      ctx.fillRect(0, 0, width, height)

      time += 0.01 * speed

      // Only proceed if image is loaded
      if (imageLoadedRef.current && imageRef.current) {
        const img = imageRef.current

        // Calculate dimensions to cover the canvas while maintaining aspect ratio
        const imgAspect = img.width / img.height
        const canvasAspect = width / height

        let drawWidth,
          drawHeight,
          offsetX = 0,
          offsetY = 0

        if (canvasAspect > imgAspect) {
          drawWidth = width
          drawHeight = width / imgAspect
          offsetY = (height - drawHeight) / 2
        } else {
          drawHeight = height
          drawWidth = height * imgAspect
          offsetX = (width - drawWidth) / 2
        }

        // Draw pixelated version of the image
        const cols = Math.ceil(width / pixelSize)
        const rows = Math.ceil(height / pixelSize)

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const x = col * pixelSize
            const y = row * pixelSize

            // Calculate source coordinates from the image
            const sourceX = Math.floor(((x - offsetX) / drawWidth) * img.width)
            const sourceY = Math.floor(((y - offsetY) / drawHeight) * img.height)

            // Only draw pixels that are within the image bounds
            if (sourceX >= 0 && sourceX < img.width && sourceY >= 0 && sourceY < img.height) {
              // Sample a pixel from the image
              ctx.drawImage(img, sourceX, sourceY, 1, 1, x, y, pixelSize, pixelSize)

              // Apply animation effects
              const waveOffset = Math.sin(time + row * 0.1 + col * 0.1) * pixelSize * 0.2
              const glitchEffect = Math.random() < 0.01 ? Math.random() * pixelSize * 0.5 : 0

              // Draw the pixel with effects
              ctx.globalAlpha = opacity * (0.7 + Math.sin(time + row * 0.05 + col * 0.05) * 0.3)
              ctx.drawImage(img, sourceX, sourceY, 1, 1, x + waveOffset + glitchEffect, y, pixelSize - 1, pixelSize - 1)
              ctx.globalAlpha = 1.0
            }
          }
        }

        // Add occasional glitch effects
        if (Math.random() < 0.05) {
          const glitchRow = Math.floor(Math.random() * rows)
          const glitchLength = Math.floor(Math.random() * cols * 0.3) + 5
          const glitchStart = Math.floor(Math.random() * (cols - glitchLength))

          ctx.globalAlpha = 0.8
          for (let i = 0; i < glitchLength; i++) {
            const x = (glitchStart + i) * pixelSize
            const y = glitchRow * pixelSize
            ctx.fillStyle = `rgba(255, 0, 0, ${Math.random() * 0.2})`
            ctx.fillRect(x, y, pixelSize, pixelSize)
          }
          ctx.globalAlpha = 1.0
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [pixelSize, speed, opacity])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true" />
}
