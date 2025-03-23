"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface HornsInnovationHoverProps {
  className?: string
  direction?: "down" | "right"
  text?: string
  onClick?: () => void
  size?: "sm" | "md" | "lg"
  variant?: "light" | "dark"
}

export function HornsInnovationHover({
  className,
  direction = "down",
  text = "Explore More",
  onClick,
  size = "md",
  variant = "light",
}: HornsInnovationHoverProps) {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle scroll to next section when clicked
  const handleClick = () => {
    if (onClick) {
      onClick()
      return
    }

    // Default behavior: scroll to next section
    if (containerRef.current && direction === "down") {
      const container = containerRef.current
      const nextSection = container.closest("section")?.nextElementSibling

      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Size variants
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-40 h-40",
  }

  // Color variants
  const colorClasses = {
    light: "text-white",
    dark: "text-gray-900",
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center cursor-pointer",
        sizeClasses[size],
        colorClasses[variant],
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Horn shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left horn */}
        <motion.div
          className="absolute top-1/2 left-0 w-1/3 h-1/2 origin-bottom-left"
          initial={{ rotate: 0, opacity: 0.3 }}
          animate={{
            rotate: isHovered ? -15 : 0,
            opacity: isHovered ? 0.8 : 0.3,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            viewBox="0 0 100 200"
            className="w-full h-full"
            style={{ filter: isHovered ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" : "none" }}
          >
            <path
              d="M10,200 Q0,100 40,20 Q50,0 60,20 Q90,100 90,200 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={cn(
                "transition-colors duration-300",
                isHovered ? "stroke-primary" : "stroke-current opacity-50",
              )}
            />
          </svg>
        </motion.div>

        {/* Right horn */}
        <motion.div
          className="absolute top-1/2 right-0 w-1/3 h-1/2 origin-bottom-right"
          initial={{ rotate: 0, opacity: 0.3 }}
          animate={{
            rotate: isHovered ? 15 : 0,
            opacity: isHovered ? 0.8 : 0.3,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            viewBox="0 0 100 200"
            className="w-full h-full"
            style={{ filter: isHovered ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))" : "none" }}
          >
            <path
              d="M90,200 Q100,100 60,20 Q50,0 40,20 Q10,100 10,200 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={cn(
                "transition-colors duration-300",
                isHovered ? "stroke-primary" : "stroke-current opacity-50",
              )}
            />
          </svg>
        </motion.div>
      </div>

      {/* Central content */}
      <motion.div
        className="flex flex-col items-center justify-center z-10"
        animate={{
          y: isHovered ? (direction === "down" ? 5 : 0) : 0,
          x: isHovered ? (direction === "right" ? 5 : 0) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        <span className="text-sm font-medium mb-1 opacity-80">{text}</span>

        {direction === "down" && (
          <motion.div
            animate={{
              y: isHovered ? [0, 5, 0] : 0,
            }}
            transition={{
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              duration: 1.5,
            }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        )}

        {direction === "right" && (
          <motion.div
            className="rotate-90"
            animate={{
              x: isHovered ? [0, 5, 0] : 0,
            }}
            transition={{
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              duration: 1.5,
            }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        )}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/20 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

