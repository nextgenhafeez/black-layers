"use client"

import { useState, useEffect } from "react"
import { AnimatedLogo } from "./animated-logo"
import { motion } from "framer-motion"

interface LoadingScreenProps {
  minDisplayTime?: number
  onLoadingComplete?: () => void
}

export function LoadingScreen({ minDisplayTime = 3000, onLoadingComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      if (onLoadingComplete) {
        onLoadingComplete()
      }
    }, minDisplayTime)

    return () => clearTimeout(timer)
  }, [minDisplayTime, onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
    >
      <div className="text-center">
        <AnimatedLogo width={300} height={300} />
        <motion.div
          className="mt-4 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: "0ms" }}></div>
            <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: "300ms" }}></div>
            <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: "600ms" }}></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
