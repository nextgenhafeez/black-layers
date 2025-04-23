"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { SupportNavButton } from "./support-nav-button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2 text-gray-700" aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={closeMenu} className="p-2 text-gray-700" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center gap-6 p-4">
            {["about", "services", "portfolio"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="text-lg font-medium text-gray-800 hover:text-blue-600"
                onClick={closeMenu}
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
              onClick={closeMenu}
            >
              Pro Seller on Fiverr<span className="text-green-500">.</span>
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
