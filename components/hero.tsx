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
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-md text-lg">
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
