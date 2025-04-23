"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = ref.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      const logoElement = document.getElementById("hero-logo")
      if (logoElement) {
        logoElement.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden py-12 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6 text-center">
            <div className="space-y-4 animate-slideUp">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                Transform Your <span className="block">Digital Experience</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl/relaxed mx-auto max-w-[600px]">
                We build custom white-label applications and digital solutions that drive growth and innovation for your
                business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4 mt-6 sm:mt-8">
              <a
                href="#skills-expertise"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("skills-expertise")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto min-w-[200px] text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></span>
              </a>
              <Link
                href="https://www.fiverr.com/hinaqadir"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black border border-blue-200 hover:bg-blue-50 rounded-lg px-6 py-3.5 text-sm font-medium transition-colors w-full sm:w-auto min-w-[200px] text-center shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px]"
              >
                Pro Seller on Fiverr<span className="text-green-500">.</span>
              </Link>

              {/* Updated WhatsApp button with white background and green text */}
              <a
                href="https://wa.me/15874296200"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#25D366] border border-blue-200 hover:bg-blue-50 rounded-lg px-6 py-3.5 text-sm font-medium transition-all duration-300 w-full sm:w-auto min-w-[200px] text-center shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    className="mr-1"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </span>
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              id="hero-logo"
              className="relative h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] transition-transform duration-300 ease-out"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20layer-6WkhCmEIT4RRiom25Wuaa5g2q3wykH.png"
                alt="Black Layers Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
