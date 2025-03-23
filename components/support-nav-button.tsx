"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { LifeBuoy } from "lucide-react"

export function SupportNavButton() {
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Track mouse position for the gradient effect
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <Link
      href="/support"
      ref={buttonRef}
      className={`
        relative flex items-center gap-2 px-5 py-2.5 rounded-lg
        overflow-hidden transition-all duration-300 ease-out
        ${
          isHovered
            ? "text-white shadow-lg shadow-primary/30 scale-[1.03]"
            : "bg-white/90 text-gray-800 hover:bg-white border border-gray-200"
        }
        group
      `}
      style={{
        background: isHovered
          ? `radial-gradient(circle at ${position.x}px ${position.y}px, rgb(59, 130, 246) 0%, rgb(79, 70, 229) 100%)`
          : "",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Background particles */}
      {isHovered && (
        <>
          <span className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPjwvc3ZnPg==')] opacity-20" />
          <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/30 opacity-30" />
        </>
      )}

      {/* Icon with animations */}
      <span className={`relative transition-all duration-300 ${isHovered ? "rotate-12 scale-110" : ""}`}>
        <LifeBuoy className={`h-5 w-5 transition-all duration-300 ${isHovered ? "text-white" : "text-primary"}`} />
        {isHovered && <span className="absolute inset-0 animate-ping rounded-full bg-white opacity-30" />}
      </span>

      {/* Text with animations */}
      <span
        className={`
        font-medium relative transition-all duration-300
        ${isHovered ? "translate-x-0.5" : ""}
      `}
      >
        Visit Support Center
        <span
          className={`
          absolute -bottom-1 left-0 h-0.5 bg-white/70 rounded-full w-0
          transition-all duration-300 ease-out
          ${isHovered ? "w-full" : ""}
        `}
        />
      </span>

      {/* Shine effect */}
      {isHovered && (
        <span className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shine" />
      )}

      {/* Border glow effect */}
      <span
        className={`
        absolute inset-0 rounded-lg transition-all duration-500
        ${isHovered ? "ring-2 ring-white/30 ring-offset-0" : ""}
      `}
      />
    </Link>
  )
}

