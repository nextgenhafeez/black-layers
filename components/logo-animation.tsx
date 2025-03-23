"use client"

import { useState } from "react"
import { AnimatedLogo } from "./animated-logo"
import { motion } from "framer-motion"

interface LogoAnimationProps {
  width?: number
  height?: number
  autoPlay?: boolean
  loop?: boolean
  className?: string
}

export function LogoAnimation({
  width = 300,
  height = 300,
  autoPlay = true,
  loop = true,
  className = "",
}: LogoAnimationProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const handleClick = () => {
    if (!isPlaying) {
      setIsPlaying(true)
    }
  }

  const handleAnimationComplete = () => {
    if (!loop) {
      setIsPlaying(false)
    }
  }

  return (
    <div className={`relative cursor-pointer ${className}`} onClick={handleClick}>
      {isPlaying ? (
        <AnimatedLogo width={width} height={height} loop={loop} onAnimationComplete={handleAnimationComplete} />
      ) : (
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <svg width={width} height={height} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="70" width="200" height="160" rx="10" fill="#000000" />
              <rect x="70" y="90" width="160" height="120" rx="8" fill="#1a1a1a" />
              <rect x="90" y="110" width="120" height="80" rx="6" fill="#333333" />
              <rect x="100" y="120" width="100" height="60" rx="4" fill="#ff0000" />
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
            </svg>
            <p className="mt-2 text-sm text-gray-400">Click to play animation</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

