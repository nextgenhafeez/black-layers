"use client"

import { useState } from "react"
import { HornsInnovationHover } from "@/components/horns-innovation-hover"
import { HornsInnovationCard } from "@/components/horns-innovation-card"
import { Smartphone, Code, Lightbulb } from "lucide-react"

export default function HornsInnovationDemo() {
  const [activeTab, setActiveTab] = useState<"hover" | "card">("hover")

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-2 text-center">Horns of Innovation Animations</h1>
      <p className="text-gray-400 text-center mb-12">
        Interactive elements that subtly hint at the "Horns of Innovation" concept
      </p>

      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-card p-1 rounded-lg">
          <button
            className={`px-4 py-2 rounded-md ${activeTab === "hover" ? "bg-primary text-black" : "text-white"}`}
            onClick={() => setActiveTab("hover")}
          >
            Hover Indicators
          </button>
          <button
            className={`px-4 py-2 rounded-md ${activeTab === "card" ? "bg-primary text-black" : "text-white"}`}
            onClick={() => setActiveTab("card")}
          >
            Interactive Cards
          </button>
        </div>
      </div>

      {activeTab === "hover" && (
        <div className="space-y-16">
          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Directional Indicators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-medium">Downward Direction</h3>
                <div className="bg-gray-900 p-8 rounded-lg flex justify-center">
                  <HornsInnovationHover direction="down" text="Scroll Down" />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-medium">Rightward Direction</h3>
                <div className="bg-gray-900 p-8 rounded-lg flex justify-center">
                  <HornsInnovationHover direction="right" text="View More" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Size Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-medium">Small</h3>
                <div className="bg-gray-900 p-8 rounded-lg flex justify-center">
                  <HornsInnovationHover size="sm" text="Small" />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-medium">Medium</h3>
                <div className="bg-gray-900 p-8 rounded-lg flex justify-center">
                  <HornsInnovationHover size="md" text="Medium" />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-medium">Large</h3>
                <div className="bg-gray-900 p-8 rounded-lg flex justify-center">
                  <HornsInnovationHover size="lg" text="Large" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Color Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-medium">Light Variant</h3>
                <div className="bg-gray-900 p-8 rounded-lg flex justify-center">
                  <HornsInnovationHover variant="light" text="Light Theme" />
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <h3 className="text-lg font-medium">Dark Variant</h3>
                <div className="bg-white p-8 rounded-lg flex justify-center">
                  <HornsInnovationHover variant="dark" text="Dark Theme" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "card" && (
        <div className="space-y-16">
          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Service Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <HornsInnovationCard
                title="Mobile Development"
                description="Full-stack mobile application development for iOS and Android platforms."
                icon={<Smartphone className="h-6 w-6" />}
              />

              <HornsInnovationCard
                title="Web Development"
                description="End-to-end web development services covering both frontend and backend."
                icon={<Code className="h-6 w-6" />}
              />

              <HornsInnovationCard
                title="Project Ideation"
                description="Collaborative project ideation sessions to help refine your ideas."
                icon={<Lightbulb className="h-6 w-6" />}
              />
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Implementation Guide</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                The Horns of Innovation hover animations can be implemented throughout your website to guide users and
                enhance the interactive experience:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Use the <code>HornsInnovationHover</code> component at the bottom of sections to encourage scrolling
                </li>
                <li>
                  Implement the <code>HornsInnovationCard</code> component for interactive service or feature cards
                </li>
                <li>Customize text, size, and direction based on the context</li>
                <li>For dark backgrounds, use the "light" variant; for light backgrounds, use the "dark" variant</li>
              </ul>

              <div className="bg-gray-900 p-4 rounded-md mt-4">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  {`// Basic usage
<HornsInnovationHover 
  text="Discover More" 
  direction="down"
  size="md"
/>

// Card implementation
<HornsInnovationCard
  title="Service Title"
  description="Service description text goes here."
  icon={<Icon className="h-6 w-6" />}
  onClick={() => handleClick()}
/>`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
