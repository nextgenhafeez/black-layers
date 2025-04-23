"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedBorderBoxProps {
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
}

export function AnimatedBorderBox({
  className,
  width = "100%",
  height = "300px",
  lineColor = "#ffffff",
  lineWidth = 2,
  animationDuration = 4,
  children,
  glowEffect = true,
  glowColor = "#ffffff",
  glowIntensity = 0.6,
  backgroundColor = "black",
}: AnimatedBorderBoxProps) {
  const [uniqueId, setUniqueId] = useState("")

  // Generate a unique ID for the keyframes
  useEffect(() => {
    setUniqueId(`border-animation-${Math.random().toString(36).substr(2, 9)}`)
  }, [])

  return (
    <div
      className={cn("relative overflow-hidden transition-all duration-300", className)}
      style={{
        width,
        height,
        backgroundColor,
        borderRadius: "8px",
        boxShadow: glowEffect ? `0 0 15px ${Math.floor(glowIntensity * 100)}% ${glowColor}` : "none",
      }}
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
            
            .${uniqueId}-top::before {
              content: "";
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: ${lineWidth}px;
              background: ${lineColor};
              animation: ${uniqueId}-top ${animationDuration}s linear infinite;
            }
            
            .${uniqueId}-right::before {
              content: "";
              position: absolute;
              top: -100%;
              right: 0;
              width: ${lineWidth}px;
              height: 100%;
              background: ${lineColor};
              animation: ${uniqueId}-right ${animationDuration}s linear infinite;
              animation-delay: ${animationDuration * 0.25}s;
            }
            
            .${uniqueId}-bottom::before {
              content: "";
              position: absolute;
              bottom: 0;
              right: -100%;
              width: 100%;
              height: ${lineWidth}px;
              background: ${lineColor};
              animation: ${uniqueId}-bottom ${animationDuration}s linear infinite;
              animation-delay: ${animationDuration * 0.5}s;
            }
            
            .${uniqueId}-left::before {
              content: "";
              position: absolute;
              bottom: -100%;
              left: 0;
              width: ${lineWidth}px;
              height: 100%;
              background: ${lineColor};
              animation: ${uniqueId}-left ${animationDuration}s linear infinite;
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

      {/* Optional mirror effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)",
          opacity: 0.2,
        }}
      ></div>
    </div>
  )
}
