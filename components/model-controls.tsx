"use client"

import { useState } from "react"
import { RotateCcw, ZoomIn, Move, Maximize2 } from "lucide-react"

export function ModelControls() {
  const [activeControl, setActiveControl] = useState<string | null>(null)

  // These controls would typically interact with the 3D viewer
  // For now, they're just visual indicators

  const handleControlClick = (control: string) => {
    setActiveControl(control === activeControl ? null : control)
  }

  return (
    <div className="controls-overlay">
      <button
        className={`control-button ${activeControl === "rotate" ? "active" : ""}`}
        onClick={() => handleControlClick("rotate")}
        title="Rotate Model"
      >
        <RotateCcw size={18} />
      </button>

      <button
        className={`control-button ${activeControl === "pan" ? "active" : ""}`}
        onClick={() => handleControlClick("pan")}
        title="Pan Camera"
      >
        <Move size={18} />
      </button>

      <button
        className={`control-button ${activeControl === "zoom" ? "active" : ""}`}
        onClick={() => handleControlClick("zoom")}
        title="Zoom Camera"
      >
        <ZoomIn size={18} />
      </button>

      <button
        className="control-button"
        onClick={() => {
          // Reset camera position
          setActiveControl(null)
        }}
        title="Reset View"
      >
        <Maximize2 size={18} />
      </button>
    </div>
  )
}
