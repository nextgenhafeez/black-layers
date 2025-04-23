"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedNavbarLogoProps {
  width?: number
  height?: number
  className?: string
}

export function AnimatedNavbarLogo({ width = 1280, height = 320, className = "" }: AnimatedNavbarLogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isHovered) {
      setIsAnimating(true)
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [isHovered])

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static logo that's always visible */}
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20layers%20transparent-ImOsnmC8Waa1LutSjcB2Jco6GNSS4e.png"
        alt="Black Layers Logo"
        width={width}
        height={height}
        className="transition-opacity hover:opacity-90"
        priority
      />

      {/* Animated overlay elements */}
      {isAnimating && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-red-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0.8, 1.1, 1],
            }}
            transition={{ duration: 1.2 }}
          />

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5 }}
          >
            <div
              className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
              style={{
                transform: "skewX(-20deg) translateX(-100%)",
                animation: "shine 1.5s ease-in-out",
              }}
            />
          </motion.div>
        </div>
      )}

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: skewX(-20deg) translateX(-100%);
          }
          100% {
            transform: skewX(-20deg) translateX(200%);
          }
        }
      `}</style>
    </div>
  )
}
