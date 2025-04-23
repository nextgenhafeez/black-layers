"use client"

import { useEffect, useRef } from "react"

interface HeroGeometricBackgroundProps {
  className?: string
}

export function HeroGeometricBackground({ className = "" }: HeroGeometricBackgroundProps) {
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

    // Coconut-inspired colors
    const colors = [
      "#3A2618", // Dark brown (coconut shell)
      "#8D5B4C", // Medium brown
      "#C4A484", // Light brown (coconut husk)
      "#F5F5DC", // Beige (coconut meat)
      "#355E3B", // Forest green (palm leaves)
      "#1A1A1A", // Almost black
      "#2D2D2D", // Dark gray
    ]

    // Animation variables
    let animationFrameId: number
    let time = 0

    // Draw geometric pattern
    const draw = () => {
      if (!ctx || !canvas) return

      const width = canvas.width / window.devicePixelRatio
      const height = canvas.height / window.devicePixelRatio

      // Clear canvas with a dark base
      ctx.fillStyle = "#0A0A0A"
      ctx.fillRect(0, 0, width, height)

      // Draw triangular patterns (palm frond inspired)
      const triangleSize = Math.min(width, height) / 15
      const rows = Math.ceil(height / triangleSize) + 2
      const cols = Math.ceil(width / triangleSize) + 2

      time += 0.005

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * triangleSize
          const y = row * triangleSize
          const offset = Math.sin(time + row * 0.2 + col * 0.3) * 5

          // Randomize which triangles are visible for a more dynamic effect
          const visibility = Math.sin(time * 0.5 + row + col) * 0.5 + 0.5
          if (visibility < 0.3) continue

          // Alternate triangle directions
          const isUpward = (row + col) % 2 === 0

          // Select color based on position and time
          const colorIndex = Math.floor((Math.sin(row * 0.5 + col * 0.5 + time) * 0.5 + 0.5) * colors.length)
          const color = colors[colorIndex]

          // Set opacity based on position
          const opacity = 0.1 + (Math.sin(time + row * 0.1 + col * 0.1) * 0.5 + 0.5) * 0.3

          ctx.fillStyle = `${color}${Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0")}`

          // Draw triangle
          ctx.beginPath()
          if (isUpward) {
            ctx.moveTo(x + offset, y)
            ctx.lineTo(x + triangleSize + offset, y)
            ctx.lineTo(x + triangleSize / 2 + offset, y + triangleSize)
          } else {
            ctx.moveTo(x + offset, y + triangleSize)
            ctx.lineTo(x + triangleSize + offset, y + triangleSize)
            ctx.lineTo(x + triangleSize / 2 + offset, y)
          }
          ctx.closePath()
          ctx.fill()
        }
      }

      // Draw larger geometric shapes
      const numShapes = 15
      for (let i = 0; i < numShapes; i++) {
        const size = Math.min(width, height) * (0.1 + Math.sin(time * 0.2 + i) * 0.05)
        const x = (Math.sin(time * 0.3 + i * 1.5) * 0.5 + 0.5) * width
        const y = (Math.cos(time * 0.2 + i * 1.2) * 0.5 + 0.5) * height
        const rotation = time * 0.1 + (i * Math.PI) / numShapes

        const colorIndex = i % colors.length
        const opacity = 0.05 + (Math.sin(time + i) * 0.5 + 0.5) * 0.1

        ctx.fillStyle = `${colors[colorIndex]}${Math.floor(opacity * 255)
          .toString(16)
          .padStart(2, "0")}`

        // Draw a polygon
        const sides = 3 + (i % 3) // Triangles, squares, pentagons
        ctx.beginPath()
        for (let j = 0; j < sides; j++) {
          const angle = rotation + j * ((2 * Math.PI) / sides)
          const px = x + Math.cos(angle) * size
          const py = y + Math.sin(angle) * size
          if (j === 0) {
            ctx.moveTo(px, py)
          } else {
            ctx.lineTo(px, py)
          }
        }
        ctx.closePath()
        ctx.fill()
      }

      // Add subtle noise texture
      for (let i = 0; i < 500; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const radius = Math.random() * 1
        const opacity = Math.random() * 0.05

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true" />
}
