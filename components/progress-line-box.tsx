"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ProgressLineBoxProps {
  className?: string
  title?: string
  description?: string
  width?: string | number
  height?: string | number
  lineColor?: string
  lineHeight?: number
  duration?: number
  autoPlay?: boolean
  repeat?: boolean
  delay?: number
  backgroundColor?: string
}

export function ProgressLineBox({
  className,
  title = "10+ Years Experience",
  description = "With over a decade of experience, we bring expertise and innovation to every project.",
  width = "100%",
  height = "auto",
  lineColor = "#ff0000",
  lineHeight = 3,
  duration = 3,
  autoPlay = true,
  repeat = true,
  delay = 0.5,
  backgroundColor = "rgba(0, 0, 0, 0.7)",
}: ProgressLineBoxProps) {
  const [uniqueId, setUniqueId] = useState("")
  const [isLoading, setIsLoading] = useState(autoPlay)

  // Generate a unique ID for the keyframes
  useEffect(() => {
    setUniqueId(`progress-line-${Math.random().toString(36).substr(2, 9)}`)
  }, [])

  // Handle auto-repeat
  useEffect(() => {
    if (!repeat || !autoPlay) return

    const timer = setInterval(
      () => {
        setIsLoading(false)
        setTimeout(() => setIsLoading(true), 100)
      },
      (duration + delay) * 1000,
    )

    return () => clearInterval(timer)
  }, [repeat, autoPlay, duration, delay])

  return (
    <div
      className={cn("relative overflow-hidden transition-all duration-300 rounded-lg", className)}
      style={{
        width,
        height,
        backgroundColor,
        backdropFilter: "blur(5px)",
      }}
    >
      {/* Progress line */}
      {uniqueId && isLoading && (
        <>
          <style jsx>{`
            @keyframes ${uniqueId}-progress {
              0% { width: 0; }
              100% { width: 100%; }
            }
            
            .${uniqueId}-progress-line {
              position: absolute;
              top: 0;
              left: 0;
              height: ${lineHeight}px;
              background: ${lineColor};
              width: 0;
              animation: ${uniqueId}-progress ${duration}s ease-in-out forwards;
              box-shadow: 0 0 8px 0 ${lineColor};
            }
          `}</style>

          <div className={`${uniqueId}-progress-line`}></div>
        </>
      )}

      {/* Content container */}
      <div className="relative z-10 p-6">
        <div className="text-primary text-4xl font-bold mb-2">{title}</div>
        <p className="text-gray-300">{description}</p>
      </div>

      {/* Subtle glow effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          boxShadow: `inset 0 ${lineHeight}px 10px -5px ${lineColor}`,
        }}
      ></div>
    </div>
  )
}
