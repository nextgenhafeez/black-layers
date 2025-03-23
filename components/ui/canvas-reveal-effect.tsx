"use client"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { DotMatrix } from "./dot-matrix"

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number
  opacities?: number[]
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
}) => {
  const [webGLSupported, setWebGLSupported] = useState(true)

  useEffect(() => {
    // Check for WebGL support
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      setWebGLSupported(!!gl)
    } catch (e) {
      console.error("WebGL not supported:", e)
      setWebGLSupported(false)
    }
  }, [])

  if (!webGLSupported) {
    return (
      <div className={cn("h-full relative bg-black w-full", containerClassName)}>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          WebGL not supported in your browser
        </div>
        {showGradient && <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />}
      </div>
    )
  }

  return (
    <div className={cn("h-full relative bg-black w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors ?? [[0, 255, 255]]}
          dotSize={dotSize ?? 3}
          opacities={opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]}
          shader={`
              float animation_speed_factor = ${animationSpeed.toFixed(1)};
              float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
              opacity *= step(intro_offset, u_time * animation_speed_factor);
              opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
            `}
          center={["x", "y"]}
        />
      </div>
      {showGradient && <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />}
    </div>
  )
}

