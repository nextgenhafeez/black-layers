"use client"

import { useState } from "react"
import { HeroGeometricBackground } from "@/components/hero-geometric-background"
import { HeroGeometricSvg } from "@/components/hero-geometric-svg"

export default function BackgroundDemo() {
  const [activeTab, setActiveTab] = useState<"canvas" | "svg">("canvas")

  return (
    <div className="min-h-screen">
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Kokonut Geometric Background Demo</h1>

        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md ${activeTab === "canvas" ? "bg-primary text-white" : "bg-secondary text-gray-300"}`}
            onClick={() => setActiveTab("canvas")}
          >
            Canvas Version
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === "svg" ? "bg-primary text-white" : "bg-secondary text-gray-300"}`}
            onClick={() => setActiveTab("svg")}
          >
            SVG Version
          </button>
        </div>

        <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-gray-800">
          {activeTab === "canvas" && <HeroGeometricBackground />}

          {activeTab === "svg" && <HeroGeometricSvg />}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg max-w-xl text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="gradient-text">Kokonut</span> Geometric Background
              </h2>
              <p className="text-gray-300">
                This background features geometric patterns inspired by coconut themes, with triangular shapes
                reminiscent of palm fronds and a color palette drawn from coconut shells, husks, and palm leaves.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-card rounded-lg">
          <h2 className="text-xl font-bold mb-4">Implementation Details</h2>
          <p className="mb-4">The background is available in two versions:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <strong>Canvas Version:</strong> Uses HTML5 Canvas for dynamic rendering with better performance for
              complex animations.
            </li>
            <li>
              <strong>SVG Version:</strong> Uses SVG elements for better scaling and potentially better performance on
              some devices.
            </li>
          </ul>
          <p className="mt-4">
            Both versions feature subtle animations to create a dynamic but not distracting background that complements
            the Black Layers branding.
          </p>
        </div>
      </div>
    </div>
  )
}

