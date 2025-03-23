"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface AdvancedLogoAnimationProps {
  width?: number
  height?: number
  onAnimationComplete?: () => void
  loop?: boolean
  className?: string
}

export function AdvancedLogoAnimation({
  width = 300,
  height = 300,
  onAnimationComplete,
  loop = true,
  className = "",
}: AdvancedLogoAnimationProps) {
  const [animationState, setAnimationState] = useState(0)
  const animationRef = useRef<NodeJS.Timeout | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  // Reset animation for looping
  useEffect(() => {
    if (animationState === 6 && loop) {
      const timeout = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => {
          setAnimationState(0)
          setIsVisible(true)
        }, 500)
      }, 2000)

      return () => clearTimeout(timeout)
    }

    if (animationState === 6 && onAnimationComplete) {
      onAnimationComplete()
    }
  }, [animationState, loop, onAnimationComplete])

  // Progress animation through states
  useEffect(() => {
    if (animationState < 6) {
      animationRef.current = setTimeout(() => {
        setAnimationState((prev) => prev + 1)
      }, 500)
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [animationState])

  // SVG path variants for animation
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 0.8,
          delay: i * 0.2,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.3,
          delay: i * 0.2,
        },
      },
    }),
  }

  // Fill variants
  const fillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3 + i * 0.2,
        ease: "easeOut",
      },
    }),
  }

  // Text variants
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 2.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex items-center justify-center"
      >
        <svg width={width} height={height} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background fills */}
          <motion.rect
            x="50"
            y="70"
            width="200"
            height="160"
            rx="10"
            fill="#000000"
            variants={fillVariants}
            custom={0}
            initial="hidden"
            animate={animationState >= 1 ? "visible" : "hidden"}
          />

          <motion.rect
            x="70"
            y="90"
            width="160"
            height="120"
            rx="8"
            fill="#1a1a1a"
            variants={fillVariants}
            custom={1}
            initial="hidden"
            animate={animationState >= 2 ? "visible" : "hidden"}
          />

          <motion.rect
            x="90"
            y="110"
            width="120"
            height="80"
            rx="6"
            fill="#333333"
            variants={fillVariants}
            custom={2}
            initial="hidden"
            animate={animationState >= 3 ? "visible" : "hidden"}
          />

          <motion.rect
            x="100"
            y="120"
            width="100"
            height="60"
            rx="4"
            fill="#ff0000"
            variants={fillVariants}
            custom={3}
            initial="hidden"
            animate={animationState >= 4 ? "visible" : "hidden"}
          />

          {/* Outlines */}
          <motion.rect
            x="50"
            y="70"
            width="200"
            height="160"
            rx="10"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            variants={pathVariants}
            custom={0}
            initial="hidden"
            animate={animationState >= 1 ? "visible" : "hidden"}
          />

          <motion.rect
            x="70"
            y="90"
            width="160"
            height="120"
            rx="8"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            variants={pathVariants}
            custom={1}
            initial="hidden"
            animate={animationState >= 2 ? "visible" : "hidden"}
          />

          <motion.rect
            x="90"
            y="110"
            width="120"
            height="80"
            rx="6"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            variants={pathVariants}
            custom={2}
            initial="hidden"
            animate={animationState >= 3 ? "visible" : "hidden"}
          />

          <motion.rect
            x="100"
            y="120"
            width="100"
            height="60"
            rx="4"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
            variants={pathVariants}
            custom={3}
            initial="hidden"
            animate={animationState >= 4 ? "visible" : "hidden"}
          />

          {/* Logo Shine Effect */}
          <motion.path
            d="M100,120 L200,120 L200,180 L100,180 Z"
            stroke="#ffffff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="5,10"
            variants={pathVariants}
            custom={4}
            initial="hidden"
            animate={animationState >= 5 ? "visible" : "hidden"}
            style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))" }}
          />

          {/* Text */}
          <motion.g variants={textVariants} initial="hidden" animate={animationState >= 6 ? "visible" : "hidden"}>
            <text
              x="150"
              y="210"
              fontFamily="Arial, sans-serif"
              fontSize="24"
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
            >
              BLACK LAYERS
            </text>
          </motion.g>
        </svg>
      </motion.div>
    </div>
  )
}

