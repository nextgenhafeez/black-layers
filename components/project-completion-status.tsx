"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ProjectCompletionStatusProps {
  className?: string
  percentage?: number
  width?: string | number
  height?: string | number
  lineColor?: string
  glowIntensity?: number
  title?: string
  subtitle?: string
  animateOnLoad?: boolean
  showPercentage?: boolean
  circleSize?: number
  circleThickness?: number
}

export function ProjectCompletionStatus({
  className,
  percentage = 100,
  width = "100%",
  height = "auto",
  lineColor = "#ffffff",
  glowIntensity = 0.6,
  title = "Project Completion",
  subtitle = "We guarantee complete project delivery and successful handover to our clients.",
  showPercentage = true,
  animateOnLoad = true,
  circleSize = 120,
  circleThickness = 6,
}: ProjectCompletionStatusProps) {
  const [uniqueId, setUniqueId] = useState("")
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  // Generate a unique ID for the keyframes
  useEffect(() => {
    setUniqueId(`project-status-${Math.random().toString(36).substr(2, 9)}`)
  }, [])

  // Animate percentage on load or when percentage changes
  useEffect(() => {
    if (!animateOnLoad) {
      setAnimatedPercentage(percentage)
      return
    }

    const start = 0
    const end = percentage
    const duration = 1500
    const startTime = performance.now()

    const animateValue = (timestamp: number) => {
      const runtime = timestamp - startTime
      const progress = Math.min(runtime / duration, 1)
      const value = Math.floor(progress * (end - start) + start)

      setAnimatedPercentage(value)

      if (runtime < duration) {
        requestAnimationFrame(animateValue)
      }
    }

    requestAnimationFrame(animateValue)
  }, [percentage, animateOnLoad])

  // Calculate circle properties
  const radius = (circleSize - circleThickness) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference

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
      <div className="relative z-10 p-6 flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
        <p className="text-sm text-gray-400 mb-6">{subtitle}</p>

        {/* Circular progress indicator */}
        <div className="relative" style={{ width: circleSize, height: circleSize }}>
          {/* Background circle */}
          <svg className="w-full h-full" viewBox={`0 0 ${circleSize} ${circleSize}`}>
            <circle
              className="text-gray-700"
              strokeWidth={circleThickness}
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx={circleSize / 2}
              cy={circleSize / 2}
            />
          </svg>

          {/* Progress circle */}
          <svg
            className="absolute top-0 left-0 w-full h-full rotate-[-90deg]"
            viewBox={`0 0 ${circleSize} ${circleSize}`}
          >
            <circle
              className="text-primary transition-all duration-300 ease-in-out"
              strokeWidth={circleThickness}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx={circleSize / 2}
              cy={circleSize / 2}
            />
          </svg>

          {/* Percentage text */}
          {showPercentage && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">{animatedPercentage}%</span>
              <span className="text-xs text-gray-400">Completed</span>
            </div>
          )}
        </div>

        {/* Status text based on percentage */}
        <div className="mt-6 text-center">
          <div className="text-sm font-medium">
            {animatedPercentage < 25 && <span className="text-red-400">Just Started</span>}
            {animatedPercentage >= 25 && animatedPercentage < 50 && (
              <span className="text-orange-400">In Progress</span>
            )}
            {animatedPercentage >= 50 && animatedPercentage < 75 && (
              <span className="text-yellow-400">Well Underway</span>
            )}
            {animatedPercentage >= 75 && animatedPercentage < 100 && (
              <span className="text-green-400">Almost Complete</span>
            )}
            {animatedPercentage === 100 && <span className="text-primary">Completed</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
