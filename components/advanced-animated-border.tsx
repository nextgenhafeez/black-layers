"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AdvancedAnimatedBorderProps {
  className?: string
  width?: string | number
  height?: string | number
  lineColor?: string
  lineWidth?: number
  animationDuration?: number
  children?: React.ReactNode
  glowEffect?: boolean
  glowColor?: string
  glowIntensity?: number
  backgroundColor?: string
  borderRadius?: number
  pulseEffect?: boolean
  gradientLine?: boolean
  reverseDirection?: boolean
  pauseOnHover?: boolean
}

export function AdvancedAnimatedBorder({
  className,
  width = "100%",
  height = "300px",
  lineColor = "#ff0000",
  lineWidth = 2,
  animationDuration = 2,
  children,
  glowEffect = true,
  glowColor = "#ff0000",
  glowIntensity = 0.6,
  backgroundColor = "black",
  borderRadius = 8,
  pulseEffect = false,
  gradientLine = false,
  reverseDirection = false,
  pauseOnHover = false,
}: AdvancedAnimatedBorderProps) {
  const [uniqueId, setUniqueId] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  // Generate a unique ID for the keyframes
  useEffect(() => {
    setUniqueId(`adv-border-${Math.random().toString(36).substr(2, 9)}`)
  }, [])

  // Determine the gradient colors for the line
  const gradientColors = gradientLine ? `linear-gradient(90deg, ${lineColor}, ${glowColor}, ${lineColor})` : lineColor

  // Determine animation direction
  const direction = reverseDirection ? "reverse" : "normal"

  // Determine animation play state
  const playState = pauseOnHover && isHovered ? "paused" : "running"

  return (
    <div
      className={cn("relative overflow-hidden transition-all duration-300", className)}
      style={{
        width,
        height,
        backgroundColor,
        borderRadius: `${borderRadius}px`,
        boxShadow: glowEffect ? `0 0 15px ${Math.floor(glowIntensity * 100)}% ${glowColor}` : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border line */}
      {uniqueId && (
        <>
          <style jsx>{`
            @keyframes ${uniqueId}-top {
              0% { left: -100%; }
              25%, 100% { left: 100%; }
            }
            @keyframes ${uniqueId}-right {
              0%, 25% { top: -100%; }
              50%, 100% { top: 100%; }
            }
            @keyframes ${uniqueId}-bottom {
              0%, 50% { right: -100%; }
              75%, 100% { right: 100%; }
            }
            @keyframes ${uniqueId}-left {
              0%, 75% { bottom: -100%; }
              100% { bottom: 100%; }
            }
            
            @keyframes ${uniqueId}-pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
            
            .${uniqueId}-top::before {
              content: "";
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: ${lineWidth}px;
              background: ${gradientColors};
              animation: ${uniqueId}-top ${animationDuration}s linear infinite ${direction};
              animation-play-state: ${playState};
              ${pulseEffect ? `animation: ${uniqueId}-top ${animationDuration}s linear infinite ${direction}, ${uniqueId}-pulse 1.5s ease-in-out infinite;` : ""}
            }
            
            .${uniqueId}-right::before {
              content: "";
              position: absolute;
              top: -100%;
              right: 0;
              width: ${lineWidth}px;
              height: 100%;
              background: ${gradientColors};
              animation: ${uniqueId}-right ${animationDuration}s linear infinite ${direction};
              animation-delay: ${animationDuration * 0.25}s;
              animation-play-state: ${playState};
              ${pulseEffect ? `animation: ${uniqueId}-right ${animationDuration}s linear infinite ${direction}, ${uniqueId}-pulse 1.5s ease-in-out infinite;` : ""}
              animation-delay: ${animationDuration * 0.25}s;
            }
            
            .${uniqueId}-bottom::before {
              content: "";
              position: absolute;
              bottom: 0;
              right: -100%;
              width: 100%;
              height: ${lineWidth}px;
              background: ${gradientColors};
              animation: ${uniqueId}-bottom ${animationDuration}s linear infinite ${direction};
              animation-delay: ${animationDuration * 0.5}s;
              animation-play-state: ${playState};
              ${pulseEffect ? `animation: ${uniqueId}-bottom ${animationDuration}s linear infinite ${direction}, ${uniqueId}-pulse 1.5s ease-in-out infinite;` : ""}
              animation-delay: ${animationDuration * 0.5}s;
            }
            
            .${uniqueId}-left::before {
              content: "";
              position: absolute;
              bottom: -100%;
              left: 0;
              width: ${lineWidth}px;
              height: 100%;
              background: ${gradientColors};
              animation: ${uniqueId}-left ${animationDuration}s linear infinite ${direction};
              animation-delay: ${animationDuration * 0.75}s;
              animation-play-state: ${playState};
              ${pulseEffect ? `animation: ${uniqueId}-left ${animationDuration}s linear infinite ${direction}, ${uniqueId}-pulse 1.5s ease-in-out infinite;` : ""}
              animation-delay: ${animationDuration * 0.75}s;
            }
          `}</style>

          <div className={`absolute inset-0 pointer-events-none ${uniqueId}-top`}></div>
          <div className={`absolute inset-0 pointer-events-none ${uniqueId}-right`}></div>
          <div className={`absolute inset-0 pointer-events-none ${uniqueId}-bottom`}></div>
          <div className={`absolute inset-0 pointer-events-none ${uniqueId}-left`}></div>
        </>
      )}

      {/* Content container */}
      <div className="relative z-10 h-full p-6 flex items-center justify-center">{children}</div>

      {/* Mirror effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)",
          opacity: isHovered ? 0.3 : 0.2,
        }}
      ></div>

      {/* Hover glow effect */}
      {glowEffect && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            boxShadow: `inset 0 0 20px ${glowColor}`,
            opacity: isHovered ? 0.3 : 0,
            borderRadius: `${borderRadius}px`,
          }}
        ></div>
      )}
    </div>
  )
}

