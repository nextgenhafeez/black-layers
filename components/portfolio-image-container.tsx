"use client"

import { useState } from "react"
import Image from "next/image"

interface PortfolioImageProps {
  src: string
  alt: string
  aspectRatio?: "landscape" | "portrait" | "square"
  priority?: boolean
}

export function PortfolioImageContainer({
  src,
  alt,
  aspectRatio = "landscape",
  priority = false,
}: PortfolioImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Define height based on aspect ratio
  const getContainerClasses = () => {
    switch (aspectRatio) {
      case "portrait":
        return "aspect-[3/4]"
      case "square":
        return "aspect-square"
      case "landscape":
      default:
        return "aspect-[16/9]"
    }
  }

  return (
    <div className={`overflow-hidden rounded-lg relative ${getContainerClasses()}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`
          object-contain
          duration-700 ease-in-out
          ${isLoading ? "scale-105 blur-sm" : "scale-100 blur-0"}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}
