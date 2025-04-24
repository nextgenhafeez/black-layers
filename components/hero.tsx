"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-8">
                Build Powerful iOS Apps That Elevate Your Brand
              </h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl">
                We design and develop high-performance iOS applications tailored to your business needs — from idea to
                App Store launch.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4 mt-6 sm:mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-md text-lg flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                  Get a Free iOS App Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-gray-100 px-8 py-6 rounded-md text-lg"
                >
                  See Our iOS Portfolio
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              id="hero-logo"
              className="relative h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] transition-transform duration-300 ease-out"
            >
              {/* Replace the existing image with an iOS app mockup or development image */}
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
