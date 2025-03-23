"use client"

import type React from "react"

import { forwardRef, useState, type ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

// Define button variants using class-variance-authority
const buttonVariants = cva(
  // Base styles that apply to all button variants
  "inline-flex items-center justify-center gap-2 rounded-md border-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 relative overflow-hidden select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-black border-transparent hover:bg-primary/90 shadow-lg hover:shadow-primary/30",
        secondary: "bg-secondary text-white border-secondary/50 hover:bg-secondary/80",
        outline: "bg-transparent border-white text-white hover:bg-white/10",
        ghost: "border-transparent bg-transparent text-white hover:bg-white/10",
        destructive: "bg-red-600 text-white border-transparent hover:bg-red-700 shadow-lg hover:shadow-red-700/30",
        // Crystal variant with special styling
        crystal: "border-transparent text-white bg-crystal-gradient shadow-lg shadow-glow",
        // WhatsApp specific variant
        whatsapp:
          "bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white border-transparent shadow-lg shadow-[#25D366]/30",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        md: "h-10 px-4 py-2 text-sm rounded-md",
        lg: "h-12 px-6 py-3 text-base rounded-md",
        icon: "h-10 w-10 p-0 rounded-full",
      },
      glow: {
        none: "",
        sm: "shadow-glow-sm hover:shadow-glow-md",
        md: "shadow-glow-md hover:shadow-glow-lg",
        lg: "shadow-glow-lg hover:shadow-glow-xl",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      glow: "none",
      fullWidth: false,
    },
  },
)

export interface CrystalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  glowColor?: string
}

// Create the button component with a forwardRef to allow ref passing
const CrystalButton = forwardRef<HTMLButtonElement, CrystalButtonProps>(
  (
    {
      className,
      variant,
      size,
      glow,
      fullWidth,
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      glowColor,
      children,
      ...props
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <button
        className={cn(buttonVariants({ variant, size, glow, fullWidth, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon}
        {children}
        {!isLoading && rightIcon}

        {/* Crystal effects for crystal and whatsapp variants */}
        {(variant === "crystal" || variant === "whatsapp") && (
          <>
            <span className="absolute inset-0 overflow-hidden">
              <span
                className={cn(
                  "absolute top-0 left-0 w-full h-full",
                  "bg-gradient-to-br from-white/30 to-transparent",
                  "transform transition-transform duration-500",
                  isHovered ? "translate-y-0" : "translate-y-full",
                )}
              />
            </span>
            <span
              className={cn(
                "absolute inset-0 border border-white/40 rounded-md",
                "transition-all duration-300",
                isHovered ? "opacity-100 scale-105" : "opacity-50 scale-100",
              )}
            />
            <span
              className={cn(
                "absolute -inset-px rounded-md opacity-0",
                "bg-gradient-to-r from-white/20 via-white/10 to-transparent",
                "transition-opacity duration-300",
                isHovered ? "opacity-100" : "",
              )}
            />
          </>
        )}

        {/* Custom glow effect */}
        {glowColor && (
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 rounded-md -z-10"
            style={{
              boxShadow: `0 0 20px ${glowColor}`,
              opacity: isHovered ? 0.5 : 0,
            }}
          />
        )}
      </button>
    )
  },
)

CrystalButton.displayName = "CrystalButton"

export { CrystalButton, buttonVariants }

