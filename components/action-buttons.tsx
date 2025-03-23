"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Compass, MessageCircle, ArrowRight, Mail } from "lucide-react"

interface ActionButtonProps {
  href: string
  variant: "primary" | "secondary"
  children: React.ReactNode
  icon?: "compass" | "message" | "arrow" | "mail" | "none"
  className?: string
  onClick?: () => void
}

export function ActionButton({
  href,
  variant = "primary",
  children,
  icon = "none",
  className = "",
  onClick,
}: ActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3.5 shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] focus:ring-blue-500",
    secondary:
      "bg-white text-blue-600 border border-blue-200 px-6 py-3.5 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md focus:ring-blue-400",
  }

  const IconComponent = () => {
    switch (icon) {
      case "compass":
        return <Compass className={`h-5 w-5 transition-all duration-300 ${isHovered ? "rotate-45" : ""}`} />
      case "message":
        return <MessageCircle className={`h-5 w-5 transition-all duration-300 ${isHovered ? "scale-110" : ""}`} />
      case "arrow":
        return <ArrowRight className={`h-5 w-5 transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`} />
      case "mail":
        return <Mail className={`h-5 w-5 transition-all duration-300 ${isHovered ? "scale-110" : ""}`} />
      default:
        return null
    }
  }

  return (
    <Link href={href} onClick={onClick}>
      <motion.button
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
        {icon !== "none" && <IconComponent />}

        {variant === "primary" && (
          <span className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
        )}
      </motion.button>
    </Link>
  )
}

export function ExploreServicesButton({ className = "" }) {
  return (
    <ActionButton href="#services" variant="primary" icon="compass" className={`text-sm sm:text-base ${className}`}>
      Explore Services
    </ActionButton>
  )
}

export function ContactUsButton({ className = "" }) {
  return (
    <ActionButton href="#contact" variant="secondary" icon="message" className={`text-sm sm:text-base ${className}`}>
      Contact Us
    </ActionButton>
  )
}

