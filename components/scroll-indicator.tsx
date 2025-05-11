"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ScrollIndicatorProps {
  className?: string
  text?: string
  onClick?: () => void
  style?: "arrow" | "mouse" | "dots"
}

export function ScrollIndicator({ className, text = "Scroll down", onClick, style = "arrow" }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true)

  // Hide the indicator after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      // Default scroll behavior - scroll down one viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      })
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer",
        className,
      )}
      onClick={handleClick}
    >
      {style === "arrow" && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">{text}</span>
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </motion.div>
      )}

      {style === "mouse" && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">{text}</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      )}

      {style === "dots" && (
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">{text}</span>
          <div className="flex flex-col gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, delay: i * 0.2 }}
                className="w-2 h-2 bg-primary rounded-full"
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
