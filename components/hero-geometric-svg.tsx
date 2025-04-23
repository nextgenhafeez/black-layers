"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface HeroGeometricSvgProps {
  className?: string
}

export function HeroGeometricSvg({ className = "" }: HeroGeometricSvgProps) {
  const [shapes, setShapes] = useState<React.ReactNode[]>([])

  useEffect(() => {
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

    const generateShapes = () => {
      const newShapes = []

      // Generate triangles
      for (let i = 0; i < 50; i++) {
        const size = 50 + Math.random() * 100
        const x = Math.random() * 100
        const y = Math.random() * 100
        const color = colors[Math.floor(Math.random() * colors.length)]
        const opacity = 0.05 + Math.random() * 0.15

        // Create triangle points
        const x1 = x
        const y1 = y
        const x2 = x + size * 0.866 // cos(60°) * size
        const y2 = y
        const x3 = x + size * 0.433 // cos(60°) * size / 2
        const y3 = y + size * 0.75 // sin(60°) * size

        newShapes.push(
          <polygon
            key={`triangle-${i}`}
            points={`${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%`}
            fill={color}
            opacity={opacity}
            style={{
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />,
        )
      }

      // Generate polygons
      for (let i = 0; i < 30; i++) {
        const sides = 3 + Math.floor(Math.random() * 3) // 3 to 5 sides
        const size = 30 + Math.random() * 70
        const centerX = Math.random() * 100
        const centerY = Math.random() * 100
        const color = colors[Math.floor(Math.random() * colors.length)]
        const opacity = 0.05 + Math.random() * 0.1
        const rotation = Math.random() * 360

        // Create polygon points
        let points = ""
        for (let j = 0; j < sides; j++) {
          const angle = (((j * 360) / sides + rotation) * Math.PI) / 180
          const x = centerX + size * Math.cos(angle) * 0.5
          const y = centerY + size * Math.sin(angle) * 0.5
          points += `${x}% ${y}%, `
        }

        newShapes.push(
          <polygon
            key={`polygon-${i}`}
            points={points.slice(0, -2)} // Remove trailing comma and space
            fill={color}
            opacity={opacity}
            style={{
              animation: `float ${8 + Math.random() * 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />,
        )
      }

      setShapes(newShapes)
    }

    generateShapes()

    // Regenerate shapes on window resize
    const handleResize = () => {
      generateShapes()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <rect width="100%" height="100%" fill="#0A0A0A" />
        {shapes}
      </svg>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(5px) translateX(-5px);
          }
          75% {
            transform: translateY(10px) translateX(10px);
          }
        }
      `}</style>
    </div>
  )
}
