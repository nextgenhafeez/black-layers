"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, ExternalLink, MousePointerClick } from "lucide-react"
import Link from "next/link"

interface ButtonOption {
  id: string
  name: string
  description: string
  component: React.ReactNode
}

export function ButtonShowcase() {
  const [selectedOption, setSelectedOption] = useState<string>("option1")

  const buttonOptions: ButtonOption[] = [
    {
      id: "option1",
      name: "Gradient Accent",
      description:
        "Uses a vibrant gradient background that stands out against the page, with a subtle hover animation that increases scale. The arrow icon suggests forward movement.",
      component: (
        <Link href="#services">
          <motion.button
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              Explore Services
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.button>
        </Link>
      ),
    },
    {
      id: "option2",
      name: "Outlined with Fill Effect",
      description:
        "Features a clean outlined design that fills with color on hover, creating a satisfying interaction. The larger size and bold typography increase visibility.",
      component: (
        <Link href="#services">
          <button className="group relative rounded-md border-2 border-gray-900 bg-transparent px-8 py-4 font-bold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white">
            <span className="flex items-center gap-2">
              Explore Services
              <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute bottom-0 left-0 h-0 w-full bg-gray-900 transition-all duration-300 group-hover:h-full group-hover:opacity-10"></span>
          </button>
        </Link>
      ),
    },
    {
      id: "option3",
      name: "Floating Card Style",
      description:
        "Designed as a card-like element with depth and elevation. The shadow and subtle lift on hover create a tactile, 3D feel that encourages interaction.",
      component: (
        <Link href="#services">
          <motion.button
            className="rounded-xl bg-white px-8 py-4 font-medium text-gray-900 shadow-md transition-all duration-300 hover:shadow-xl"
            whileHover={{ y: -5 }}
            whileTap={{ y: 0 }}
          >
            <span className="flex items-center gap-2">
              Explore Services
              <ExternalLink className="h-5 w-5 transition-all duration-300 group-hover:rotate-45" />
            </span>
          </motion.button>
        </Link>
      ),
    },
    {
      id: "option4",
      name: "High Contrast Accent",
      description:
        "Uses a high-contrast color scheme with a bright accent color that immediately draws attention. The pulsing animation subtly guides users to click.",
      component: (
        <Link href="#services">
          <div className="relative">
            <motion.div
              className="absolute -inset-1 rounded-lg bg-blue-500 opacity-70 blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
            <button className="relative rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-blue-700">
              <span className="flex items-center gap-2">
                Explore Services
                <MousePointerClick className="h-5 w-5" />
              </span>
            </button>
          </div>
        </Link>
      ),
    },
    {
      id: "option5",
      name: "Minimalist with Border Animation",
      description:
        "Features a clean, minimalist design with an animated border that draws attention without being overwhelming. Perfect for more sophisticated interfaces.",
      component: (
        <Link href="#services">
          <button className="group relative rounded-md bg-transparent px-8 py-4 font-medium text-gray-900 transition-all duration-300">
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-gray-900 transition-all duration-300 group-hover:h-full"></span>
          </button>
        </Link>
      ),
    },
  ]

  return (
    <div className="mx-auto max-w-5xl py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">Explore Services Button Redesign Options</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Several design options for the "Explore Services" button, each optimized for different aspects of user
          engagement and visual appeal.
        </p>
      </div>

      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {buttonOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
              selectedOption === option.id ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {option.name}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-12">
          {buttonOptions.find((option) => option.id === selectedOption)?.component}
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">
            {buttonOptions.find((option) => option.id === selectedOption)?.name}
          </h3>
          <p className="text-gray-600">{buttonOptions.find((option) => option.id === selectedOption)?.description}</p>

          <div className="mt-8 rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
            <h4 className="mb-2 font-semibold">A/B Testing Recommendation</h4>
            <p>Consider testing this button design against the current version with metrics such as:</p>
            <ul className="mt-2 list-inside list-disc">
              <li>Click-through rate (CTR)</li>
              <li>Time to first click</li>
              <li>Conversion rate from button click to service inquiry</li>
              <li>Heat map analysis of user attention</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
