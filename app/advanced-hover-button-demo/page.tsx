import { AdvancedHoverButton } from "@/components/advanced-hover-button"

export default function AdvancedHoverButtonDemo() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Advanced Hover Button Component
        </h1>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Advanced Button Examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">With Icons</h3>
              <div className="flex flex-wrap gap-4">
                <AdvancedHoverButton
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  }
                  iconPosition="right"
                >
                  Next
                </AdvancedHoverButton>

                <AdvancedHoverButton
                  defaultBgColor="bg-blue-600"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  }
                >
                  Profile
                </AdvancedHoverButton>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Hover Text Color</h3>
              <div className="flex flex-wrap gap-4">
                <AdvancedHoverButton
                  defaultBgColor="bg-purple-600"
                  textColor="text-white"
                  hoverTextColor="text-purple-600"
                >
                  Change Text Color
                </AdvancedHoverButton>

                <AdvancedHoverButton
                  defaultBgColor="bg-amber-500"
                  textColor="text-gray-900"
                  hoverTextColor="text-amber-500"
                >
                  Amber Button
                </AdvancedHoverButton>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Hover Effects</h3>
              <div className="flex flex-wrap gap-4">
                <AdvancedHoverButton defaultBgColor="bg-green-600" textColor="text-white" hoverScale={true}>
                  Scale Effect
                </AdvancedHoverButton>

                <AdvancedHoverButton defaultBgColor="bg-indigo-600" textColor="text-white" hoverShadow={true}>
                  Shadow Effect
                </AdvancedHoverButton>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Border Effects</h3>
              <div className="flex flex-wrap gap-4">
                <AdvancedHoverButton
                  defaultBgColor="bg-transparent"
                  textColor="text-red-600"
                  hoverBgColor="bg-white"
                  defaultBorderColor="border-2 border-red-600"
                  hoverBorderColor="border-2 border-red-300"
                >
                  Border Change
                </AdvancedHoverButton>

                <AdvancedHoverButton
                  defaultBgColor="bg-transparent"
                  textColor="text-blue-600"
                  hoverBgColor="bg-white"
                  defaultBorderColor="border-2 border-dashed border-blue-600"
                  hoverBorderColor="border-2 border-solid border-blue-600"
                >
                  Border Style
                </AdvancedHoverButton>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Combined Effects</h3>
            <div className="flex flex-wrap gap-4">
              <AdvancedHoverButton
                defaultBgColor="bg-gradient-to-r from-purple-500 to-blue-500"
                hoverBgColor="bg-white"
                textColor="text-white"
                hoverTextColor="text-purple-600"
                hoverScale={true}
                hoverShadow={true}
                className="rounded-full px-6 py-3 font-bold"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                }
              >
                Sign In
              </AdvancedHoverButton>

              <AdvancedHoverButton
                defaultBgColor="bg-gray-800"
                hoverBgColor="bg-white"
                textColor="text-white"
                hoverTextColor="text-gray-800"
                hoverScale={true}
                hoverShadow={true}
                defaultBorderColor="border-2 border-transparent"
                hoverBorderColor="border-2 border-gray-800"
                className="px-6 py-3"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                }
              >
                Add Item
              </AdvancedHoverButton>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Advanced Usage</h2>
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md">
            <pre className="text-sm text-gray-800 dark:text-gray-300 overflow-x-auto">
              {`import { AdvancedHoverButton } from "@/components/advanced-hover-button"

// With icon
<AdvancedHoverButton
  icon={<svg>...</svg>}
  iconPosition="right"
>
  Next
</AdvancedHoverButton>

// With hover text color change
<AdvancedHoverButton 
  defaultBgColor="bg-purple-600" 
  textColor="text-white"
  hoverTextColor="text-purple-600"
>
  Change Text Color
</AdvancedHoverButton>

// With multiple effects
<AdvancedHoverButton 
  defaultBgColor="bg-gray-800" 
  hoverBgColor="bg-white"
  textColor="text-white"
  hoverTextColor="text-gray-800"
  hoverScale={true}
  hoverShadow={true}
  defaultBorderColor="border-2 border-transparent"
  hoverBorderColor="border-2 border-gray-800"
>
  Combined Effects
</AdvancedHoverButton>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

