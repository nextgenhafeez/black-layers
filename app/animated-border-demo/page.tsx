"use client"

import { useState } from "react"
import { AnimatedBorderBox } from "@/components/animated-border-box"
import { motion } from "framer-motion"

export default function AnimatedBorderDemo() {
  const [lineColor, setLineColor] = useState("#ff0000")
  const [lineWidth, setLineWidth] = useState(2)
  const [animationDuration, setAnimationDuration] = useState(2)
  const [glowIntensity, setGlowIntensity] = useState(0.6)

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Animated Border Box</h1>
      <p className="text-gray-400 text-center mb-8">A box with an animated red line that moves around its edges</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <AnimatedBorderBox
            className="mb-8"
            lineColor={lineColor}
            lineWidth={lineWidth}
            animationDuration={animationDuration}
            glowColor={lineColor}
            glowIntensity={glowIntensity}
            height="300px"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">Animated Border Effect</h2>
              <p className="text-gray-300 max-w-md mx-auto">
                This box features an animated line that continuously moves around its edges, creating a dynamic
                loading-like effect.
              </p>
            </motion.div>
          </AnimatedBorderBox>

          <div className="grid grid-cols-2 gap-4">
            <AnimatedBorderBox lineColor="#00aaff" animationDuration={1.5} height="150px" glowColor="#00aaff">
              <h3 className="text-lg font-bold text-white">Fast Blue</h3>
            </AnimatedBorderBox>

            <AnimatedBorderBox lineColor="#00ff7f" animationDuration={3} height="150px" glowColor="#00ff7f">
              <h3 className="text-lg font-bold text-white">Slow Green</h3>
            </AnimatedBorderBox>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Customize</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">Line Color</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setLineColor("#ff0000")}
                    className="w-8 h-8 rounded-full bg-red-500 border-2 border-white/20"
                    style={{ boxShadow: lineColor === "#ff0000" ? "0 0 10px #ff0000" : "none" }}
                  />
                  <button
                    onClick={() => setLineColor("#00aaff")}
                    className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white/20"
                    style={{ boxShadow: lineColor === "#00aaff" ? "0 0 10px #00aaff" : "none" }}
                  />
                  <button
                    onClick={() => setLineColor("#00ff7f")}
                    className="w-8 h-8 rounded-full bg-green-500 border-2 border-white/20"
                    style={{ boxShadow: lineColor === "#00ff7f" ? "0 0 10px #00ff7f" : "none" }}
                  />
                  <button
                    onClick={() => setLineColor("#ff00ff")}
                    className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white/20"
                    style={{ boxShadow: lineColor === "#ff00ff" ? "0 0 10px #ff00ff" : "none" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">Line Width: {lineWidth}px</label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={lineWidth}
                  onChange={(e) => setLineWidth(Number.parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">
                  Animation Speed: {animationDuration}s
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.5"
                  value={animationDuration}
                  onChange={(e) => setAnimationDuration(Number.parseFloat(e.target.value))}
                  className="w-full"
                />
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
                <span>Animated line that moves around the box edges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Customizable line color, width, and animation speed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Optional glow effect that matches the line color</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Responsive design that adapts to different screen sizes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Subtle mirror effect for enhanced visual appeal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Implementation Details</h3>
        <div className="space-y-4 text-gray-300">
          <p>The Animated Border Box is built using CSS animations:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Four separate animations for each edge of the box</li>
            <li>CSS keyframes for smooth, performant animations</li>
            <li>Staggered animation delays to create a continuous flow effect</li>
            <li>Dynamic generation of unique animation names to prevent conflicts</li>
            <li>Optional glow effect using box-shadow</li>
          </ul>
          <p>
            The component is fully customizable, allowing you to adjust the line color, width, animation speed, and glow
            intensity to fit your design needs.
          </p>
        </div>
      </div>
    </div>
  )
}
