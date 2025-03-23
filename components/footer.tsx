"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Layer%20with%20text-wGLNRVZ85eTfnZRN0bzZuEzK1D930d.png"
                  alt="Black Layers Logo"
                  width={192}
                  height={192}
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-gray-600 text-sm">
                Professional digital product studio specializing in custom applications, deployment services, and
                collaborative project ideation.
              </p>
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Deployment Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Project Ideation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:info@blacklayers.ca"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  info@blacklayers.ca
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <a href="tel:+15874296200" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  +1 (587) 429-6200
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">33 Carringham Gate NW, Calgary, AB, T3P 2H6</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-qadir-b72984128/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/AbdulQadir0731"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; 2025 Black Layers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

