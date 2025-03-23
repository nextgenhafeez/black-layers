"use client"

import { useState } from "react"
import { ProjectCompletionStatus } from "@/components/project-completion-status"

export default function ProjectStatusDemo() {
  const [percentage, setPercentage] = useState(75)
  const [lineColor, setLineColor] = useState("#ff0000")

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Project Completion Status</h1>
      <p className="text-gray-400 text-center mb-8">
        A visual component to display project completion with animated progress
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-8">
          <ProjectCompletionStatus
            percentage={percentage}
            lineColor={lineColor}
            title="Mobile App Development"
            subtitle="iOS and Android platforms"
          />

          <div className="grid grid-cols-2 gap-4">
            <ProjectCompletionStatus
              percentage={25}
              lineColor="#00aaff"
              title="Website Redesign"
              subtitle="Frontend development"
              circleSize={100}
            />

            <ProjectCompletionStatus
              percentage={100}
              lineColor="#00ff7f"
              title="API Integration"
              subtitle="Backend services"
              circleSize={100}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Customize</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-400">
                  Completion Percentage: {percentage}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={percentage}
                  onChange={(e) => setPercentage(Number.parseInt(e.target.value))}
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
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Transparent black background with blur effect</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Red glowing edges with animated border line</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Circular progress indicator with smooth animations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Dynamic status text based on completion percentage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Fully customizable colors, sizes, and content</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Implementation Details</h3>
        <div className="space-y-4 text-gray-300">
          <p>The Project Completion Status component combines several visual elements:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>A transparent black background with backdrop blur for depth</li>
            <li>Animated red glowing edges that continuously move around the box</li>
            <li>SVG-based circular progress indicator for accurate representation</li>
            <li>Smooth animations for percentage changes and border movement</li>
            <li>Responsive design that adapts to different screen sizes</li>
          </ul>
          <p>
            The component dynamically updates to reflect the current completion status, with different text indicators
            based on the percentage value. It's perfect for dashboards, project pages, or anywhere you need to display
            progress.
          </p>
        </div>
      </div>
    </div>
  )
}

