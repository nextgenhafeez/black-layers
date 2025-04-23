import { BlackBoxShowcase } from "@/components/black-box-showcase"

export default function BlackBoxPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-2 text-center">Dynamic Black Box Technology</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore our innovative black box technology that allows for seamless transitions between solid, transparent,
          and mirror-like states.
        </p>
      </div>

      <BlackBoxShowcase />

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Technical Implementation</h2>
            <p className="text-gray-400 mb-4">
              Our dynamic black box is implemented using a combination of modern web technologies:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>CSS properties like opacity and background-color for transparency</li>
              <li>CSS backdrop-filter for blur effects</li>
              <li>CSS gradients and reflections for mirror-like surfaces</li>
              <li>WebGL and Canvas API for advanced mirror effects</li>
              <li>Smooth transitions using CSS transitions</li>
            </ul>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
            <p className="text-gray-400 mb-4">The dynamic black box can be used in various scenarios:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Interactive UI elements that respond to user actions</li>
              <li>Decorative backgrounds that adapt to different themes</li>
              <li>Modal overlays with varying levels of transparency</li>
              <li>Virtual mirrors for product visualization</li>
              <li>Creative design elements for modern web applications</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/dynamic-box-demo"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
          >
            View Interactive Demo
          </a>
        </div>
      </div>
    </div>
  )
}
