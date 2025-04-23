"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface DualToneElementProps {
  className?: string
  width?: string | number
  height?: string | number
  darkColor?: string
  lightColor?: string
  glowColor?: string
  glowIntensity?: number
  orientation?: "horizontal" | "vertical"
  children?: React.ReactNode
  interactive?: boolean
}

export function DualToneElement({
  className,
  width = "100%",
  height = "300px",
  darkColor = "#333333",
  lightColor = "#CCCCCC",
  glowColor = "#ff0000",
  glowIntensity = 0.6,
  orientation = "horizontal",
  children,
  interactive = true,
}: DualToneElementProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Update dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      const element = document.getElementById("dual-tone-element")
      if (element) {
        setDimensions({
          width: element.offsetWidth,
          height: element.offsetHeight,
        })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle mouse movement for dynamic glow effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return

    const element = e.currentTarget
    const rect = element.getBoundingClientRect()

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Calculate dynamic glow position
  const getGlowStyle = () => {
    if (!interactive || !isHovered) return {}

    const x = (mousePosition.x / dimensions.width) * 100
    const y = (mousePosition.y / dimensions.height) * 100

    return {
      background: `radial-gradient(circle at ${x}% ${y}%, ${glowColor}00 0%, ${glowColor}${Math.floor(
        glowIntensity * 255,
      )
        .toString(16)
        .padStart(2, "0")} 50%, ${glowColor}00 100%)`,
    }
  }

  return (
    <div
      id="dual-tone-element"
      className={cn("relative overflow-hidden transition-all duration-300", className)}
      style={{
        width,
        height,
        borderRadius: "12px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dark half */}
      <div
        className="absolute transition-all duration-300"
        style={{
          background: darkColor,
          ...(orientation === "horizontal"
            ? { top: 0, left: 0, width: "50%", height: "100%" }
            : { top: 0, left: 0, width: "100%", height: "50%" }),
        }}
      />

      {/* Light half */}
      <div
        className="absolute transition-all duration-300"
        style={{
          background: lightColor,
          ...(orientation === "horizontal"
            ? { top: 0, right: 0, width: "50%", height: "100%" }
            : { bottom: 0, left: 0, width: "100%", height: "50%" }),
        }}
      />

      {/* Divider line */}
      <div
        className="absolute bg-white/30 z-10"
        style={{
          ...(orientation === "horizontal"
            ? { top: 0, left: "50%", width: "2px", height: "100%", transform: "translateX(-50%)" }
            : { top: "50%", left: 0, width: "100%", height: "2px", transform: "translateY(-50%)" }),
        }}
      />

      {/* Static glow effect */}
      <div
        className="absolute inset-0 pointer-events-none z-20 opacity-70 transition-opacity duration-300"
        style={{
          boxShadow: `0 0 20px 2px ${glowColor}${Math.floor(glowIntensity * 100)
            .toString(16)
            .padStart(2, "0")}`,
        }}
      />

      {/* Dynamic glow effect that follows mouse */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-200"
        style={{
          opacity: isHovered ? 1 : 0,
          ...getGlowStyle(),
        }}
      />

      {/* Content container */}
      <div className="absolute inset-0 z-30 p-6 flex items-center justify-center">{children}</div>
    </div>
  )
}
