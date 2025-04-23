"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollAnimationProps {
  threshold?: number
  triggerOnce?: boolean
}

export function useScrollAnimation({ threshold = 0.1, triggerOnce = false }: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(currentRef)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, triggerOnce])

  return { ref, isVisible }
}
