"use client"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ButtonStyle = "gradient" | "outline" | "animated" | "3d" | "glow"

interface ExploreServicesButtonProps {
  className?: string
}

export function ExploreServicesButton({ className }: ExploreServicesButtonProps) {
  return (
    <Button asChild className={cn("bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl text-lg", className)}>
      <Link href="#services">
        Explore Services <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </Button>
  )
}

