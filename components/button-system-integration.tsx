"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { CrystalButton } from "@/components/ui/crystal-button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowRight, Download, ExternalLink, MessageCircle, Phone } from "lucide-react"

/**
 * ContactButton - A component that displays contact buttons
 * Used in the contact section, footer, and floating support button
 */
export function ContactButton({
  type = "whatsapp",
  size = "md",
  variant = "crystal",
  className,
  ...props
}: {
  type: "whatsapp" | "phone" | "email" | "live-chat"
  size?: "sm" | "md" | "lg" | "icon"
  variant?: "primary" | "secondary" | "crystal" | "whatsapp"
  className?: string
  [key: string]: any
}) {
  // WhatsApp button
  if (type === "whatsapp") {
    return (
      <WhatsAppButton
        phoneNumber="+15874296200"
        message="Hello! I need assistance with Black Layers services."
        size={size}
        variant={variant === "whatsapp" ? "whatsapp" : variant}
        className={className}
        {...props}
      />
    )
  }

  // Phone button
  if (type === "phone") {
    return (
      <CrystalButton
        as="a"
        href="tel:+15874296200"
        variant={variant}
        size={size}
        className={className}
        leftIcon={<Phone className="h-4 w-4" />}
        {...props}
      >
        {size !== "icon" ? "+1 (587) 429-6200" : ""}
      </CrystalButton>
    )
  }

  // Email button
  if (type === "email") {
    return (
      <CrystalButton
        as="a"
        href="mailto:info@blacklayers.com"
        variant={variant}
        size={size}
        className={className}
        leftIcon={<ExternalLink className="h-4 w-4" />}
        {...props}
      >
        {size !== "icon" ? "Email Us" : ""}
      </CrystalButton>
    )
  }

  // Live chat button
  if (type === "live-chat") {
    return (
      <CrystalButton
        variant={variant}
        size={size}
        className={className}
        leftIcon={<MessageCircle className="h-4 w-4" />}
        {...props}
      >
        {size !== "icon" ? "Live Chat" : ""}
      </CrystalButton>
    )
  }

  return null
}

/**
 * ActionButton - A component for main CTA buttons across the site
 * Used for main page actions like "Get Started", "Learn More"
 */
export function ActionButton({
  children,
  href,
  variant = "primary",
  size = "md",
  rightIcon = false,
  className,
  ...props
}: {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "secondary" | "crystal" | "whatsapp"
  size?: "sm" | "md" | "lg"
  rightIcon?: boolean
  className?: string
  [key: string]: any
}) {
  const pathname = usePathname()

  // Internal link
  if (href && (href.startsWith("/") || href.startsWith("#"))) {
    return (
      <Link href={href} passHref legacyBehavior>
        <CrystalButton
          as="a"
          variant={variant}
          size={size}
          className={cn("btn-hover-float", className)}
          rightIcon={rightIcon ? <ArrowRight className="h-4 w-4" /> : undefined}
          {...props}
        >
          {children}
        </CrystalButton>
      </Link>
    )
  }

  // External link
  if (href) {
    return (
      <CrystalButton
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variant={variant}
        size={size}
        className={cn("btn-hover-float", className)}
        rightIcon={<ExternalLink className="h-4 w-4" />}
        {...props}
      >
        {children}
      </CrystalButton>
    )
  }

  // Button without link
  return (
    <CrystalButton
      variant={variant}
      size={size}
      className={cn("btn-hover-float", className)}
      rightIcon={rightIcon ? <ArrowRight className="h-4 w-4" /> : undefined}
      {...props}
    >
      {children}
    </CrystalButton>
  )
}

/**
 * DownloadButton - Specialized button for downloads
 */
export function DownloadButton({
  children = "Download",
  href,
  fileName,
  variant = "crystal",
  size = "md",
  className,
  ...props
}: {
  children?: React.ReactNode
  href: string
  fileName?: string
  variant?: "primary" | "secondary" | "crystal"
  size?: "sm" | "md" | "lg"
  className?: string
  [key: string]: any
}) {
  return (
    <CrystalButton
      as="a"
      href={href}
      download={fileName}
      variant={variant}
      size={size}
      className={className}
      leftIcon={<Download className="h-4 w-4" />}
      {...props}
    >
      {children}
    </CrystalButton>
  )
}
