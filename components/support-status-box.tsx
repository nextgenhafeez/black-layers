"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Clock } from "lucide-react"

interface SupportStatusBoxProps {
  className?: string
  width?: string | number
  height?: string | number
  lineColor?: string
  glowIntensity?: number
  title?: string
  subtitle?: string
  animationDuration?: number
  icon?: React.ReactNode
}

export function SupportStatusBox({
  className,
  width = "100%",
  height = "auto",
  lineColor = "#ffffff",
  glowIntensity = 0.6,
  title = "24/7 Support",
  subtitle = "Our team is available round the clock to address your concerns and queries.",
  animationDuration = 6,
  icon = <Clock className="h-8 w-8 text-primary" />,
}: SupportStatusBoxProps) {
  const [uniqueId, setUniqueId] = useState("")

  // Generate a unique ID for the keyframes
  useEffect(() => {
    setUniqueId(`support-status-${Math.random().toString(36).substr(2, 9)}`)
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
      {/* Single style tag for all styles */}
      <style jsx>{`
        /* Animation keyframes - only included when uniqueId exists */
        ${
          uniqueId
            ? `
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
            animation: ${uniqueId}-top ${animationDuration}s linear infinite;
          }
          
          .${uniqueId}-right::before {
            content: "";
            position: absolute;
            top: -100%;
            right: 0;
            width: 2px;
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
            height: 2px;
            background: ${lineColor};
            animation: ${uniqueId}-bottom ${animationDuration}s linear infinite;
            animation-delay: ${animationDuration * 0.5}s;
          }
          
          .${uniqueId}-left::before {
            content: "";
            position: absolute;
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: ${lineColor};
            animation: ${uniqueId}-left ${animationDuration}s linear infinite;
            animation-delay: ${animationDuration * 0.75}s;
          }
        `
            : ""
        }

        /* Pulse animation - always included */
        @keyframes slow-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        .slow-pulse {
          animation: slow-pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Animated border elements */}
      {uniqueId && (
        <>
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
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">{icon}</div>

        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-center">{subtitle}</p>

        <div className="mt-4 flex items-center">
          <span className="h-2 w-2 rounded-full bg-green-400 mr-2 slow-pulse"></span>
          <span className="text-green-400 text-sm">Available now</span>
        </div>
      </div>
    </div>
  )
}

