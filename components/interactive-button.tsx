"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface InteractiveButtonProps {
  href?: string
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

export function InteractiveButton({ href, onClick, className, children }: InteractiveButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const handleMouseDown = () => {
    setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  const buttonClasses = cn(
    "interactive-button px-5 py-2 rounded-md inline-flex items-center justify-center",
    isPressed ? "scale-95" : "",
    className,
  )

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsPressed(false)}
      >
        <span className="interactive-button-text">{children}</span>
      </Link>
    )
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsPressed(false)}
    >
      <span className="interactive-button-text">{children}</span>
    </button>
  )
}
