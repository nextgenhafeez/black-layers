"use client"

import { useState } from "react"
import { DualToneElement } from "@/components/dual-tone-element"
import { motion } from "framer-motion"

export default function DualToneDemo() {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal")
  const [glowColor, setGlowColor] = useState("#ff0000")
  const [glowIntensity, setGlowIntensity] = useState(0.6)

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Dual-Tone Element</h1>
      <p className="text-gray-400 text-center mb-8">
        A responsive visual element with dark and light gray halves and glowing edges
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <DualToneElement
            className="mb-8"
            orientation={orientation}
            glowColor={glowColor}
            glowIntensity={glowIntensity}
            height="300px"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Dual-Tone Element</h2>
              <p className="text-gray-200 max-w-md mx-auto">
                This element features a split design with dark and light gray halves, enhanced by a glowing edge effect
                that responds to mouse movement.
              </p>
            </motion.div>
          </DualToneElement>

          <div className="grid grid-cols-2 gap-4">
            <DualToneElement orientation="horizontal" glowColor="#00aaff" height="150px">
              <h3 className="text-lg font-bold text-white">Horizontal Split</h3>
            </DualToneElement>

            <DualToneElement orientation="vertical" glowColor="#00ff7f" height="150px">
              <h3 className="text-lg font-bold text-white">Vertical Split</h3>
            </DualToneElement>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Customize</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">Orientation</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setOrientation("horizontal")}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      orientation === "horizontal"
                        ? "bg-primary text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    Horizontal
                  </button>
                  <button
                    onClick={() => setOrientation("vertical")}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      orientation === "vertical"
                        ? "bg-primary text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    Vertical
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">Glow Color</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setGlowColor("#ff0000")}
                    className="w-8 h-8 rounded-full bg-red-500 border-2 border-white/20"
                    style={{ boxShadow: glowColor === "#ff0000" ? "0 0 10px #ff0000" : "none" }}
                  />
                  <button
                    onClick={() => setGlowColor("#00aaff")}
                    className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white/20"
                    style={{ boxShadow: glowColor === "#00aaff" ? "0 0 10px #00aaff" : "none" }}
                  />
                  <button
                    onClick={() => setGlowColor("#00ff7f")}
                    className="w-8 h-8 rounded-full bg-green-500 border-2 border-white/20"
                    style={{ boxShadow: glowColor === "#00ff7f" ? "0 0 10px #00ff7f" : "none" }}
                  />
                  <button
                    onClick={() => setGlowColor("#ff00ff")}
                    className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white/20"
                    style={{ boxShadow: glowColor === "#ff00ff" ? "0 0 10px #ff00ff" : "none" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">
                  Glow Intensity: {Math.round(glowIntensity * 100)}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={glowIntensity}
                  onChange={(e) => setGlowIntensity(Number.parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Split design with dark and light gray halves</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Customizable glow effect around the edges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Interactive glow that follows mouse movement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Responsive design that adapts to different screen sizes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Configurable orientation (horizontal or vertical)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Implementation Details</h3>
        <div className="space-y-4 text-gray-300">
          <p>The Dual-Tone Element is built using modern CSS techniques:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Absolute positioning for the dark and light halves</li>
            <li>CSS box-shadow for the static glow effect around the edges</li>
            <li>Radial gradient for the dynamic glow that follows mouse movement</li>
            <li>CSS transitions for smooth animations</li>
            <li>Responsive design using relative units and media queries</li>
          </ul>
          <p>
            The component is fully customizable, allowing you to adjust the colors, glow intensity, orientation, and
            dimensions to fit your design needs.
          </p>
        </div>
      </div>
    </div>
  )
}
