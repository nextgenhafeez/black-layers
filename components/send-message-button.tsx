"use client"

import { useState } from "react"
import { Send, CheckCircle, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

export type SendButtonStyle = "modern" | "minimalist" | "material" | "gradient" | "outlined"

interface SendMessageButtonProps {
  onClick?: () => void
  isSubmitting?: boolean
  isSuccess?: boolean
  style?: SendButtonStyle
  text?: string
  className?: string
}

export function SendMessageButton({
  onClick,
  isSubmitting = false,
  isSuccess = false,
  style = "modern",
  text = "Send Message",
  className = "",
}: SendMessageButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Base styles for all buttons
  const baseStyles =
    "relative font-medium rounded-md flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"

  // Style-specific classes
  const styleClasses = {
    modern: `px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md hover:shadow-lg focus:ring-blue-500 ${
      isHovered ? "shadow-lg" : "shadow-md"
    }`,
    minimalist: "px-5 py-2.5 bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:ring-gray-400",
    material: "px-6 py-3 bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:ring-blue-500",
    gradient:
      "px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg focus:ring-purple-500",
    outlined: "px-5 py-2.5 bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  }

  // Disabled styles
  const disabledStyles = "opacity-70 cursor-not-allowed"

  // Success styles
  const successStyles = {
    modern: "bg-gradient-to-r from-green-500 to-emerald-600 shadow-md",
    minimalist: "bg-white text-green-600 border border-green-500",
    material: "bg-green-600",
    gradient: "bg-gradient-to-r from-green-500 to-teal-500",
    outlined: "bg-transparent text-green-600 border-2 border-green-600",
  }

  // Combine classes based on state
  const buttonClasses = `${baseStyles} ${styleClasses[style]} ${
    isSubmitting || isSuccess ? disabledStyles : ""
  } ${isSuccess ? successStyles[style] : ""} ${className}`

  // Icon animations
  const iconAnimations = {
    modern: {
      initial: { x: 0 },
      hover: { x: 5 },
    },
    minimalist: {
      initial: { scale: 1 },
      hover: { scale: 1.1 },
    },
    material: {
      initial: { rotate: 0 },
      hover: { rotate: 15 },
    },
    gradient: {
      initial: { y: 0 },
      hover: { y: -2 },
    },
    outlined: {
      initial: { opacity: 0.8 },
      hover: { opacity: 1, scale: 1.1 },
    },
  }

  return (
    <motion.button
      type="submit"
      className={buttonClasses}
      onClick={onClick}
      disabled={isSubmitting || isSuccess}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0.95 }}
      animate={{ opacity: 1 }}
      aria-label={text}
    >
      {isSubmitting ? (
        <span className="flex items-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          <span>Sending...</span>
        </span>
      ) : isSuccess ? (
        <span className="flex items-center">
          <CheckCircle className="mr-2 h-4 w-4" />
          <span>Sent!</span>
        </span>
      ) : (
        <span className="flex items-center">
          <span className="mr-2">{text}</span>
          <motion.span initial="initial" animate={isHovered ? "hover" : "initial"} variants={iconAnimations[style]}>
            <Send className="h-4 w-4" />
          </motion.span>
        </span>
      )}
    </motion.button>
  )
}
