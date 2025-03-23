"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ExperienceBoxProps {
  className?: string
  width?: string | number
  height?: string | number
  lineColor?: string
  glowIntensity?: number
  title?: string
  subtitle?: string
  description?: string
  years?: number
}

export function ExperienceBox({
  className,
  width = "100%",
  height = "auto",
  lineColor = "#ffffff",
  glowIntensity = 0.6,
  title = "Years Experience",
  subtitle = "With over a decade of experience",
  description = "We bring expertise and innovation to every project.",
  years = 10,
}: ExperienceBoxProps) {
  const [uniqueId, setUniqueId] = useState("")

  // Generate a unique ID for the keyframes
  useEffect(() => {
    setUniqueId(`experience-box-${Math.random().toString(36).substr(2, 9)}`)
  }, [])

  return (
    <div
      className={cn("relative overflow-hidden transition-all duration-300", className)}
      style={{
        width,
        height,
        borderRadius: "12px",
      }}
    >
      {/* Animated border */}
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
              height: 2px;
              background: ${lineColor};
              animation: ${uniqueId}-top 2s linear infinite;
            }
            
            .${uniqueId}-right::before {
              content: "";
              position: absolute;
              top: -100%;
              right: 0;
              width: 2px;
              height: 100%;
              background: ${lineColor};
              animation: ${uniqueId}-right 2s linear infinite;
              animation-delay: 0.5s;
            }
            
            .${uniqueId}-bottom::before {
              content: "";
              position: absolute;
              bottom: 0;
              right: -100%;
              width: 100%;
              height: 2px;
              background: ${lineColor};
              animation: ${uniqueId}-bottom 2s linear infinite;
              animation-delay: 1s;
            }
            
            .${uniqueId}-left::before {
              content: "";
              position: absolute;
              bottom: -100%;
              left: 0;
              width: 2px;
              height: 100%;
              background: ${lineColor};
              animation: ${uniqueId}-left 2s linear infinite;
              animation-delay: 1.5s;
            }
          `}</style>

          <div className={`absolute inset-0 pointer-events-none ${uniqueId}-top`}></div>
          <div className={`absolute inset-0 pointer-events-none ${uniqueId}-right`}></div>
          <div className={`absolute inset-0 pointer-events-none ${uniqueId}-bottom`}></div>
          <div className={`absolute inset-0 pointer-events-none ${uniqueId}-left`}></div>
        </>
      )}

      {/* Background with transparency */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(5px)",
          boxShadow: `0 0 15px ${Math.floor(glowIntensity * 100)}% ${lineColor}`,
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 p-6">
        <div className="text-primary text-4xl font-bold mb-2">{years}+</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">
          {subtitle} {description}
        </p>
      </div>
    </div>
  )
}

