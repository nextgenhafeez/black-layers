"use client"

import { useState } from "react"
import { DynamicBlackBox, type BlackBoxEffect } from "@/components/dynamic-black-box"
import { motion } from "framer-motion"

export default function DynamicBoxDemo() {
  const [currentEffect, setCurrentEffect] = useState<BlackBoxEffect>("solid")

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Dynamic Black Box</h1>
      <p className="text-gray-400 text-center mb-8">Transition between solid, transparent, and mirror effects</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <DynamicBlackBox className="rounded-lg" onChange={setCurrentEffect} height="400px">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">
                {currentEffect === "solid" && "Solid Black Box"}
                {currentEffect === "transparent" && "Transparent Effect"}
                {currentEffect === "mirror" && "Mirror Effect"}
                {currentEffect === "advanced-mirror" && "Advanced Mirror"}
              </h2>
              <p className="text-gray-300 max-w-md mx-auto">
                {currentEffect === "solid" && "This is the default solid black box appearance."}
                {currentEffect === "transparent" &&
                  "The transparent effect uses backdrop-blur and opacity for a see-through appearance."}
                {currentEffect === "mirror" &&
                  "The mirror effect uses CSS gradients and reflections to create a mirror-like surface."}
                {currentEffect === "advanced-mirror" &&
                  "The advanced mirror effect uses your webcam with canvas manipulations for a realistic mirror."}
              </p>
            </motion.div>
          </DynamicBlackBox>
        </div>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">How It Works</h3>
            <div className="space-y-4 text-gray-300">
              <p>This component demonstrates different visual effects for a black box element:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Solid:</strong> Standard black box with border
                </li>
                <li>
                  <strong>Transparent:</strong> Semi-transparent with backdrop blur
                </li>
                <li>
                  <strong>Mirror:</strong> CSS-based mirror effect using gradients
                </li>
                <li>
                  <strong>Advanced Mirror:</strong> WebGL/Canvas-based mirror using webcam
                </li>
              </ul>
              <p>
                The effects use a combination of CSS properties including opacity, background-color, backdrop-filter,
                and box-shadow, as well as WebGL for the advanced mirror effect.
              </p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Current Effect: {currentEffect}</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Opacity</span>
                <span className="text-gray-400">
                  {currentEffect === "solid"
                    ? "100%"
                    : currentEffect === "transparent"
                      ? "30%"
                      : currentEffect === "mirror"
                        ? "90%"
                        : "80%"}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{
                    width:
                      currentEffect === "solid"
                        ? "100%"
                        : currentEffect === "transparent"
                          ? "30%"
                          : currentEffect === "mirror"
                            ? "90%"
                            : "80%",
                  }}
                ></div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-300">Blur Effect</span>
                <span className="text-gray-400">{currentEffect === "transparent" ? "Active" : "Inactive"}</span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-300">Reflection</span>
                <span className="text-gray-400">
                  {currentEffect === "mirror" || currentEffect === "advanced-mirror" ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Implementation Details</h3>
        <div className="space-y-4 text-gray-300">
          <p>
            The component is built using React and TypeScript, with CSS transitions for smooth state changes. The
            advanced mirror effect uses the Web API's <code>getUserMedia()</code> to access the webcam and{" "}
            <code>canvas</code> to manipulate the video stream.
          </p>
          <p>Key features:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Smooth transitions between states using CSS transitions</li>
            <li>Responsive design that adapts to container size</li>
            <li>Cross-browser compatibility with modern browsers</li>
            <li>Optional callback for effect changes</li>
            <li>Customizable dimensions and styling</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

