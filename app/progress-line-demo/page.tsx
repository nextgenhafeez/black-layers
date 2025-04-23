"use client"

import { useState } from "react"
import { ProgressLineBox } from "@/components/progress-line-box"

export default function ProgressLineDemo() {
  const [duration, setDuration] = useState(3)
  const [lineColor, setLineColor] = useState("#ff0000")
  const [lineHeight, setLineHeight] = useState(3)
  const [isPlaying, setIsPlaying] = useState(true)

  const restartAnimation = () => {
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(true), 100)
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Progress Line Animation</h1>
      <p className="text-gray-400 text-center mb-8">A visual loading effect with a dynamic progress line</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <ProgressLineBox
            title="10+ Years Experience"
            description="With over a decade of experience, we bring expertise and innovation to every project."
            duration={duration}
            lineColor={lineColor}
            lineHeight={lineHeight}
            autoPlay={isPlaying}
            repeat={false}
            className="mb-8"
          />

          <div className="grid grid-cols-2 gap-4">
            <ProgressLineBox
              title="50+ Projects"
              description="Successfully delivered over fifty projects across various industries."
              lineColor="#00aaff"
              duration={2}
            />

            <ProgressLineBox
              title="100% Satisfaction"
              description="Our clients consistently rate our services with top satisfaction scores."
              lineColor="#00ff7f"
              duration={4}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Customize</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">Animation Duration: {duration}s</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={duration}
                  onChange={(e) => setDuration(Number.parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">Line Height: {lineHeight}px</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(Number.parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

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

              <button
                onClick={restartAnimation}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Restart Animation
              </button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Smooth progress line animation from left to right</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Customizable line color, height, and animation duration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Subtle glow effect that enhances visual appeal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Clear background with readable text throughout animation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Optional auto-repeat functionality</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Implementation Details</h3>
        <div className="space-y-4 text-gray-300">
          <p>The Progress Line Box is built using CSS animations:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>CSS keyframes animation for smooth progress line movement</li>
            <li>Dynamic generation of unique animation IDs to prevent conflicts</li>
            <li>Semi-transparent background with backdrop blur for depth</li>
            <li>Subtle shadow effects to enhance the visual hierarchy</li>
            <li>Responsive design that adapts to different screen sizes</li>
          </ul>
          <p>
            The component is fully customizable, allowing you to adjust the line color, height, animation duration, and
            content to fit your design needs.
          </p>
        </div>
      </div>
    </div>
  )
}
