"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface AdvancedHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  defaultBgColor?: string
  textColor?: string
  hoverBgColor?: string
  transitionSpeed?: string
  className?: string
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  hoverTextColor?: string
  hoverScale?: boolean
  hoverShadow?: boolean
  hoverBorderColor?: string
  defaultBorderColor?: string
}

export function AdvancedHoverButton({
  defaultBgColor = "bg-gray-800",
  textColor = "text-white",
  hoverBgColor = "bg-white",
  hoverTextColor,
  transitionSpeed = "duration-300",
  className,
  children,
  icon,
  iconPosition = "left",
  hoverScale = false,
  hoverShadow = false,
  hoverBorderColor,
  defaultBorderColor,
  ...props
}: AdvancedHoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-all flex items-center justify-center gap-2",
        isHovered ? hoverBgColor : defaultBgColor,
        isHovered && hoverTextColor ? hoverTextColor : textColor,
        transitionSpeed,
        isHovered && hoverScale ? "transform scale-105" : "",
        isHovered && hoverShadow ? "shadow-lg" : "",
        isHovered && hoverBorderColor ? hoverBorderColor : defaultBorderColor,
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex">{icon}</span>}
    </button>
  )
}
