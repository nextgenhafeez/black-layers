"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface AnimatedLogoProps {
  width?: number
  height?: number
  onAnimationComplete?: () => void
  loop?: boolean
  className?: string
}

export function AnimatedLogo({
  width = 300,
  height = 300,
  onAnimationComplete,
  loop = true,
  className = "",
}: AnimatedLogoProps) {
  const [animationState, setAnimationState] = useState(0)
  const animationRef = useRef<NodeJS.Timeout | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  // Reset animation for looping
  useEffect(() => {
    if (animationState === 5 && loop) {
      const timeout = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => {
          setAnimationState(0)
          setIsVisible(true)
        }, 500)
      }, 2000)

      return () => clearTimeout(timeout)
    }

    if (animationState === 5 && onAnimationComplete) {
      onAnimationComplete()
    }
  }, [animationState, loop, onAnimationComplete])

  // Progress animation through states
  useEffect(() => {
    if (animationState < 5) {
      animationRef.current = setTimeout(() => {
        setAnimationState((prev) => prev + 1)
      }, 600)
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [animationState])

  // SVG layer variants for animation
  const layerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Text variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
          {/* Base Layer */}
          <motion.rect
            x="50"
            y="70"
            width="200"
            height="160"
            rx="10"
            fill="#000000"
            variants={layerVariants}
            initial="hidden"
            animate={animationState >= 1 ? "visible" : "hidden"}
          />

          {/* Middle Layer */}
          <motion.rect
            x="70"
            y="90"
            width="160"
            height="120"
            rx="8"
            fill="#1a1a1a"
            variants={layerVariants}
            initial="hidden"
            animate={animationState >= 2 ? "visible" : "hidden"}
          />

          {/* Top Layer */}
          <motion.rect
            x="90"
            y="110"
            width="120"
            height="80"
            rx="6"
            fill="#333333"
            variants={layerVariants}
            initial="hidden"
            animate={animationState >= 3 ? "visible" : "hidden"}
          />

          {/* Red Accent */}
          <motion.rect
            x="100"
            y="120"
            width="100"
            height="60"
            rx="4"
            fill="#ff0000"
            variants={layerVariants}
            initial="hidden"
            animate={animationState >= 4 ? "visible" : "hidden"}
          />

          {/* Text */}
          <motion.g variants={textVariants} initial="hidden" animate={animationState >= 5 ? "visible" : "hidden"}>
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
