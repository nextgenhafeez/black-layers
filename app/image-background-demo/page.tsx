"use client"

import { useState } from "react"
import { ImagePixelatedBackground } from "@/components/image-pixelated-background"

export default function ImageBackgroundDemo() {
  const [pixelSize, setPixelSize] = useState(15)
  const [speed, setSpeed] = useState(0.8)
  const [enableGlitch, setEnableGlitch] = useState(true)
  const [imageSrc, setImageSrc] = useState("/shafaamry.jpg")

  return (
    <div className="min-h-screen">
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8">Image-Based Pixelated Background Demo</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Pixel Size</label>
            <input
              type="range"
              min="5"
              max="30"
              value={pixelSize}
              onChange={(e) => setPixelSize(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-gray-400 mt-1">{pixelSize}px</div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Animation Speed</label>
            <input
              type="range"
              min="0.2"
              max="2"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-xs text-gray-400 mt-1">{speed}x</div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Glitch Effect</label>
            <div className="flex items-center mt-3">
              <input
                type="checkbox"
                checked={enableGlitch}
                onChange={(e) => setEnableGlitch(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm">Enable</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Image Source</label>
            <select
              value={imageSrc}
              onChange={(e) => setImageSrc(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded p-2"
            >
              <option value="/shafaamry.jpg">Shafaamry</option>
              <option value="/placeholder.svg?height=1080&width=1920">Placeholder</option>
            </select>
          </div>
        </div>

        <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-gray-800">
          <ImagePixelatedBackground
            imageSrc={imageSrc}
            pixelSize={pixelSize}
            speed={speed}
            enableGlitch={enableGlitch}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg max-w-xl text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">
                  Image-Based
                </span>{" "}
                Pixelated Background
              </h2>
              <p className="text-gray-300">
                This animated background takes an image and transforms it into a pixelated grid with dynamic effects.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-card rounded-lg">
          <h2 className="text-xl font-bold mb-4">Implementation Details</h2>
          <p className="mb-4">This background uses the following techniques:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              <strong>Image Sampling:</strong> Samples pixels from the source image to create the pixelated effect
            </li>
            <li>
              <strong>Dynamic Animation:</strong> Animates brightness and position for a living, breathing effect
            </li>
            <li>
              <strong>Glitch Effects:</strong> Adds random glitches and scan lines for a digital aesthetic
            </li>
          </ul>
          <p className="mt-4">
            To use this background with your own image, place the image in the public folder and update the imageSrc
            prop.
          </p>
        </div>
      </div>
    </div>
  )
}
