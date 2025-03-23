"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "crystal" | "whatsapp"
  size?: "sm" | "md" | "lg"
  rightIcon?: boolean
  className?: string
  children: React.ReactNode
  href?: string
}

export function ActionButton({
  children,
  href,
  variant = "primary",
  size = "md",
  rightIcon = false,
  className,
  ...props
}: ActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const buttonClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    variant === "primary" && "bg-primary text-black hover:bg-primary/90",
    variant === "secondary" && "bg-secondary text-white hover:bg-secondary/80",
    variant === "crystal" && "relative overflow-hidden border-transparent text-white",
    size === "sm" && "px-3 py-1.5 text-sm",
    size === "md" && "px-4 py-2 text-base",
    size === "lg" && "px-6 py-3 text-lg",
    className,
  )

  const iconStyle = `h-4 w-4`

  return (
    <a
      href={href}
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
      {rightIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconStyle}
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      )}
      {variant === "crystal" && (
        <>
          <span className="absolute inset-0 overflow-hidden">
            <span
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent transform transition-transform duration-500"
              style={{ transform: isHovered ? "translateY(0)" : "translateY(100%)" }}
            />
          </span>
          <span
            className="absolute inset-0 border border-white/40 rounded-md transition-all duration-300"
            style={{ opacity: isHovered ? 1 : 0.5, transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <span
            className="absolute -inset-px rounded-md opacity-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        </>
      )}
    </a>
  )
}

