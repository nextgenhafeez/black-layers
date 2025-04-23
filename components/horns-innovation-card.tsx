"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HornsInnovationCardProps {
  className?: string
  title: string
  description: string
  icon?: React.ReactNode
  onClick?: () => void
  href?: string
}

export function HornsInnovationCard({ className, title, description, icon, onClick, href }: HornsInnovationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (href) {
      window.location.href = href
    }
  }

  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-lg bg-card p-6 cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Horn-shaped decorative elements */}
      <div
        className="absolute -top-10 -left-10 w-20 h-20 opacity-0 transition-opacity duration-300"
        style={{ opacity: isHovered ? 0.2 : 0 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M100,100 Q80,50 90,10 Q70,0 50,10 Q60,50 0,100 Z" fill="white" />
        </svg>
      </div>

      <div
        className="absolute -bottom-10 -right-10 w-20 h-20 opacity-0 transition-opacity duration-300"
        style={{ opacity: isHovered ? 0.2 : 0 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,0 Q20,50 10,90 Q30,100 50,90 Q40,50 100,0 Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white mb-6">
            {icon}
          </div>
        )}

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>

        {/* Animated underline */}
        <motion.div
          className="h-0.5 bg-primary mt-4"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}
