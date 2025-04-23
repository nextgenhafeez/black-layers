"use client"

import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface BlackWhatsAppButtonProps {
  phoneNumber: string
  className?: string
}

export function BlackWhatsAppButton({ phoneNumber, className }: BlackWhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md bg-black border-2 border-gray-800 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-white/30 shadow-lg",
        className,
      )}
    >
      <MessageCircle className="h-5 w-5 text-[#25D366]" />
      <span className="text-[#25D366]">WhatsApp</span>
    </a>
  )
}
