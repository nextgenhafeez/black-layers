"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { HeroGeometricBackground } from "./hero-geometric-background"
import { HornsInnovationHover } from "./horns-innovation-hover"

export function EnhancedHero() {
  return (
    <section className="relative overflow-hidden pt-0 pb-20 md:pt-0 md:pb-32 min-h-screen flex flex-col">
      {/* Add the geometric background */}
      <HeroGeometricBackground className="z-0 opacity-70" />

      <div className="container relative z-10 flex-1 flex flex-col">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center flex-1">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="gradient-text">Horns of Innovation</span> in IT Consultancy
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We transform your ideas into successful digital products with our full-stack development expertise and
                100% project completion guarantee.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative h-[600px] w-[600px] sm:h-[700px] sm:w-[700px] md:h-[800px] md:w-[800px] -mt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Layers-zwlSqvcF8IwASQWX5KcyR7aCRcVgYZ.png"
                alt="BL Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Horns of Innovation hover animation at the bottom */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <HornsInnovationHover text="Discover Our Expertise" direction="down" size="md" />
        </motion.div>
      </div>
    </section>
  )
}

