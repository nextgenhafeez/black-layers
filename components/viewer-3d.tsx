"use client"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage, Box } from "@react-three/drei"
import { Suspense } from "react"

interface Viewer3DProps {
  modelUrl: string
  modelFormat: string
}

export function Viewer3D({ modelUrl, modelFormat }: Viewer3DProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: "linear-gradient(to bottom, #1a1a2e, #16213e)" }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <Stage environment="city" intensity={0.5} contactShadow shadows>
          {/* For the demo, we'll show a placeholder box instead of loading a real model */}
          <DemoModel />
        </Stage>
        <OrbitControls
          makeDefault
          autoRotate={false}
          enablePan={true}
          enableZoom={true}
          minDistance={1}
          maxDistance={100}
          target={[0, 0, 0]}
        />
      </Suspense>
    </Canvas>
  )
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" wireframe />
    </mesh>
  )
}

function DemoModel() {
  // This is a placeholder model for demonstration
  return (
    <group>
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="blue" />
      </Box>
      <Box args={[0.5, 0.5, 0.5]} position={[0, 1, 0]}>
        <meshStandardMaterial color="red" />
      </Box>
      <Box args={[0.3, 0.3, 1.5]} position={[0, -1, 0]} rotation={[0, 0, Math.PI / 4]}>
        <meshStandardMaterial color="green" />
      </Box>
    </group>
  )
}

