import { HoverButton } from "@/components/hover-button"

export default function HoverButtonDemo() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Hover Button Component</h1>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Button Examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Default Configuration</h3>
              <div className="flex flex-wrap gap-4">
                <HoverButton>Default Button</HoverButton>
                <HoverButton disabled>Disabled Button</HoverButton>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Default button with gray background that changes to white on hover.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Custom Colors</h3>
              <div className="flex flex-wrap gap-4">
                <HoverButton defaultBgColor="bg-blue-600" textColor="text-white">
                  Blue Button
                </HoverButton>
                <HoverButton defaultBgColor="bg-green-600" textColor="text-white">
                  Green Button
                </HoverButton>
                <HoverButton defaultBgColor="bg-purple-600" textColor="text-white">
                  Purple Button
                </HoverButton>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Buttons with custom background colors that change to white on hover.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Dark Text</h3>
              <div className="flex flex-wrap gap-4">
                <HoverButton defaultBgColor="bg-yellow-400" textColor="text-gray-900">
                  Yellow Button
                </HoverButton>
                <HoverButton defaultBgColor="bg-pink-400" textColor="text-gray-900">
                  Pink Button
                </HoverButton>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Buttons with dark text that remains visible on white hover background.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Transition Speed</h3>
              <div className="flex flex-wrap gap-4">
                <HoverButton defaultBgColor="bg-red-600" textColor="text-white" transitionSpeed="duration-150">
                  Fast Transition
                </HoverButton>
                <HoverButton defaultBgColor="bg-indigo-600" textColor="text-white" transitionSpeed="duration-700">
                  Slow Transition
                </HoverButton>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Buttons with different transition speeds.</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Custom Styling</h3>
            <div className="flex flex-wrap gap-4">
              <HoverButton
                defaultBgColor="bg-gradient-to-r from-purple-500 to-blue-500"
                hoverBgColor="bg-white"
                textColor="text-white"
                className="rounded-full px-6 py-3 font-bold shadow-lg"
              >
                Rounded Button
              </HoverButton>
              <HoverButton
                defaultBgColor="bg-transparent"
                hoverBgColor="bg-white"
                textColor="text-blue-600"
                className="border-2 border-blue-600"
              >
                Outline Button
              </HoverButton>
              <HoverButton
                defaultBgColor="bg-gray-800"
                hoverBgColor="bg-white"
                textColor="text-amber-500"
                className="uppercase tracking-wider text-sm font-bold"
              >
                Custom Text Style
              </HoverButton>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Buttons with custom styling applied through the className prop.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Usage</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md">
            <pre className="text-sm text-gray-800 dark:text-gray-300 overflow-x-auto">
              {`import { HoverButton } from "@/components/hover-button"

// Basic usage
<HoverButton>Default Button</HoverButton>

// Custom colors
<HoverButton 
  defaultBgColor="bg-blue-600" 
  textColor="text-white"
>
  Blue Button
</HoverButton>

// Custom styling
<HoverButton 
  defaultBgColor="bg-transparent" 
  hoverBgColor="bg-white"
  textColor="text-blue-600"
  className="border-2 border-blue-600"
>
  Outline Button
</HoverButton>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

