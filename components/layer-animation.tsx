"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function LayerAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Layer properties
    const layers = Array.from({ length: 5 }, (_, i) => ({
      x: 50 + i * 10,
      y: 50 + i * 10,
      width: 300 - i * 20,
      height: 200 - i * 20,
      rotation: i * 2,
      speed: 0.2 + i * 0.05,
      amplitude: 1 + i * 0.5,
      phase: (i * Math.PI) / 4,
    }))

    // Animation
    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.01

      // Clear canvas
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      // Draw layers
      layers.forEach((layer, index) => {
        ctx.save()

        // Calculate position with subtle movement
        const x = layer.x + Math.sin(time * layer.speed + layer.phase) * layer.amplitude
        const y = layer.y + Math.cos(time * layer.speed + layer.phase) * layer.amplitude

        // Set shadow for depth
        ctx.shadowColor = "rgba(0, 0, 0, 0.1)"
        ctx.shadowBlur = 10
        ctx.shadowOffsetX = 5
        ctx.shadowOffsetY = 5

        // Translate and rotate
        ctx.translate(x + layer.width / 2, y + layer.height / 2)
        ctx.rotate(((Math.sin(time * 0.2) * 0.05 + layer.rotation * 0.05) * Math.PI) / 180)

        // Draw rectangle
        ctx.fillStyle = `rgba(0, 0, 0, ${0.8 - index * 0.15})`
        ctx.fillRect(-layer.width / 2, -layer.height / 2, layer.width, layer.height)

        ctx.restore()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <motion.canvas
        ref={canvasRef}
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  )
}

