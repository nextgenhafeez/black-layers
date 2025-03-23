"use client"

import { useEffect, useRef } from "react"

interface BackgroundGradientProps {
  className?: string
}

export function BackgroundGradient({ className = "" }: BackgroundGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create gradient points
    const gradientPoints = [
      { x: 0, y: 0, color: "#1a1a2e" },
      { x: canvas.width, y: 0, color: "#16213e" },
      { x: 0, y: canvas.height, color: "#0f3460" },
      { x: canvas.width, y: canvas.height, color: "#1a1a2e" },
    ]

    // Animation variables
    let animationFrameId: number
    let time = 0

    // Draw gradient
    const draw = () => {
      if (!ctx || !canvas) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update gradient points
      time += 0.001
      gradientPoints.forEach((point, index) => {
        point.x += Math.sin(time + index) * 0.5
        point.y += Math.cos(time + index) * 0.5
      })

      // Create gradient
      const gradient = ctx.createLinearGradient(
        gradientPoints[0].x,
        gradientPoints[0].y,
        gradientPoints[3].x,
        gradientPoints[3].y,
      )

      gradient.addColorStop(0, gradientPoints[0].color)
      gradient.addColorStop(0.33, gradientPoints[1].color)
      gradient.addColorStop(0.66, gradientPoints[2].color)
      gradient.addColorStop(1, gradientPoints[3].color)

      // Fill canvas with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add subtle particles
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 1.5 + 0.5
        const opacity = Math.random() * 0.2

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

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`} aria-hidden="true" />
}

