"use client"

import type React from "react"

import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md border-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 relative overflow-hidden select-none",
  {
    variants: {
      variant: {
        primary: "bg-primary text-black border-transparent hover:bg-primary/90 shadow-lg hover:shadow-primary/30",
        secondary: "bg-secondary text-white border-secondary/50 hover:bg-secondary/80",
        outline: "bg-transparent border-white text-white hover:bg-white/10",
        ghost: "border-transparent bg-transparent text-white hover:bg-white/10",
        destructive: "bg-red-600 text-white border-transparent hover:bg-red-700 shadow-lg hover:shadow-red-700/30",
        whatsapp:
          "bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white border-transparent shadow-lg shadow-[#25D366]/30",
        crystal: "border-transparent text-white bg-crystal-gradient shadow-lg shadow-glow",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        md: "h-10 px-4 py-2 text-sm rounded-md",
        lg: "h-12 px-6 py-3 text-base rounded-md",
        icon: "h-10 w-10 p-0 rounded-full",
      },
    },
    defaultVariants: {
      variant: "whatsapp",
      size: "md",
    },
  },
)

export interface WhatsAppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  phoneNumber: string
  message?: string
}

const WhatsAppButton = forwardRef<HTMLButtonElement, WhatsAppButtonProps>(
  ({ className, variant, size, phoneNumber, message = "", children, ...props }, ref) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    )
  },
)

WhatsAppButton.displayName = "WhatsAppButton"

export { WhatsAppButton }
