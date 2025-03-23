"use client"

import { AdvancedDynamicBox } from "@/components/advanced-dynamic-box"
import { motion } from "framer-motion"

export default function AdvancedBoxDemo() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Advanced Dynamic Black Box</h1>
      <p className="text-gray-400 text-center mb-8">Fine-tune transparency, reflection, and mirror effects</p>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <AdvancedDynamicBox className="rounded-lg" height="400px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Customizable Black Box</h2>
            <p className="text-gray-300 max-w-md mx-auto">
              Adjust the controls below to fine-tune the appearance of this box. Try different effect presets or create
              your own custom look.
            </p>
          </motion.div>
        </AdvancedDynamicBox>
      </div>

      <div className="bg-card p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Implementation Details</h3>
        <div className="space-y-4 text-gray-300">
          <p>This advanced version provides fine-grained control over the visual properties:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Opacity:</strong> Controls the transparency of the box
            </li>
            <li>
              <strong>Blur:</strong> Applies a backdrop blur effect for see-through elements
            </li>
            <li>
              <strong>Reflection:</strong> Adjusts the intensity of the mirror-like reflection
            </li>
            <li>
              <strong>Brightness & Contrast:</strong> Fine-tune the overall appearance
            </li>
          </ul>
          <p>
            The component uses CSS custom properties and filters to achieve these effects, with smooth transitions
            between states. The advanced mirror effect uses the device's camera with canvas manipulations for a
            realistic mirror effect.
          </p>
          <p className="text-yellow-500">
            Note: The advanced mirror effect requires camera permissions and works best on devices with a front-facing
            camera.
          </p>
        </div>
      </div>
    </div>
  )
}

