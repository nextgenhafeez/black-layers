"use client"

import { useState } from "react"
import { DynamicBlackBox, type BlackBoxEffect } from "@/components/dynamic-black-box"
import { motion } from "framer-motion"

export function BlackBoxShowcase() {
  const [effect, setEffect] = useState<BlackBoxEffect>("solid")

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Dynamic Black Box Technology</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our innovative black box technology allows for seamless transitions between different visual states,
            creating engaging and interactive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <DynamicBlackBox
              className="rounded-lg shadow-xl"
              initialEffect={effect}
              onChange={setEffect}
              height="400px"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-2xl font-bold mb-4 text-white">
                  {effect === "solid" && "Solid Black Box"}
                  {effect === "transparent" && "Transparent Effect"}
                  {effect === "mirror" && "Mirror Effect"}
                  {effect === "advanced-mirror" && "Advanced Mirror"}
                </h2>
                <p className="text-gray-300 max-w-md mx-auto">
                  Click the buttons below to see the different effects in action. Our technology allows for seamless
                  transitions between states.
                </p>
              </motion.div>
            </DynamicBlackBox>

            <div className="flex flex-wrap gap-2 justify-center mt-6">
              <button
                onClick={() => setEffect("solid")}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  effect === "solid" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Solid
              </button>
              <button
                onClick={() => setEffect("transparent")}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  effect === "transparent" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Transparent
              </button>
              <button
                onClick={() => setEffect("mirror")}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  effect === "mirror" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Mirror
              </button>
              <button
                onClick={() => setEffect("advanced-mirror")}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  effect === "advanced-mirror" ? "bg-primary text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                Advanced Mirror
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Smooth Transitions</h4>
                    <p className="text-sm text-gray-400">Seamless state changes with CSS transitions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Responsive Design</h4>
                    <p className="text-sm text-gray-400">Adapts to any container size</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Effects</h4>
                    <p className="text-sm text-gray-400">From simple transparency to realistic mirror effects</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Current Effect: {effect}</h3>
              <p className="text-gray-400 mb-4">
                {effect === "solid" && "The solid effect provides a classic black box appearance with defined borders."}
                {effect === "transparent" &&
                  "The transparent effect creates a see-through appearance with backdrop blur."}
                {effect === "mirror" && "The mirror effect simulates a reflective surface using CSS gradients."}
                {effect === "advanced-mirror" && "The advanced mirror effect uses camera input for a realistic mirror."}
              </p>
              <div className="text-sm text-gray-500 bg-black/20 p-3 rounded">
                Try clicking the different effect buttons to see the transitions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

