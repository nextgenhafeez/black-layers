"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  defaultBgColor?: string
  textColor?: string
  hoverBgColor?: string
  transitionSpeed?: string
  className?: string
  children: React.ReactNode
}

export function HoverButton({
  defaultBgColor = "bg-gray-800",
  textColor = "text-white",
  hoverBgColor = "bg-white",
  transitionSpeed = "duration-300",
  className,
  children,
  ...props
}: HoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors",
        textColor,
        isHovered ? hoverBgColor : defaultBgColor,
        transitionSpeed,
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  )
}

