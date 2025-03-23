"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FiverrButtonProps {
  className?: string
}

export function FiverrButton({ className }: FiverrButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn("bg-white text-black border-2 border-gray-200 px-8 py-6 rounded-xl text-lg", className)}
    >
      <Link href="https://fiverr.com/blacklayers">
        Pro Seller on Fiverr
        <span className="text-primary">.</span>
      </Link>
    </Button>
  )
}

