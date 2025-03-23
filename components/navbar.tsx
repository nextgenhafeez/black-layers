"use client"

import { useState, useEffect } from "react"
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "./mobile-nav"
import { SupportNavButton } from "./support-nav-button"

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Function to scroll to a section and set it as active
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const scrollPosition = window.scrollY + window.innerHeight / 3
      const sections = ["about", "services", "portfolio", "support", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container flex h-20 items-center justify-between py-0">
        <Link href="/" className="flex items-center group relative" onClick={scrollToTop} aria-label="Go to homepage">
          <div className="relative w-36 h-12 sm:w-44 sm:h-14 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Layer%20with%20text-wGLNRVZ85eTfnZRN0bzZuEzK1D930d.png"
              alt="Black Layers Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 144px, 176px"
              quality={95}
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {["about", "services", "portfolio"].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`text-sm font-medium transition-colors ${
                activeSection === section ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={(e) => scrollToSection(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
          <SupportNavButton />
          <Link
            href="https://www.fiverr.com/hinaqadir"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black hover:text-gray-700 transition-colors"
          >
            Pro Seller on Fiverr<span className="text-green-500">.</span>
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}

