"use client"

import { useState } from "react"
import { SendMessageButton, type SendButtonStyle } from "./send-message-button"

export function SendButtonShowcase() {
  const [activeButton, setActiveButton] = useState<SendButtonStyle | null>(null)

  const handleButtonClick = (style: SendButtonStyle) => {
    setActiveButton(style)

    // Reset after 3 seconds
    setTimeout(() => {
      setActiveButton(null)
    }, 3000)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Button Design
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Send Message Button Styles</h2>
          <p className="text-gray-600">
            Explore different button designs that enhance user interaction and visual appeal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Modern Style */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Modern Style</h3>
              <p className="text-gray-600 text-sm mb-4">
                A gradient background with subtle shadow and animated icon for a contemporary look.
              </p>
              <div className="flex justify-center mt-6">
                <SendMessageButton
                  style="modern"
                  onClick={() => handleButtonClick("modern")}
                  isSubmitting={activeButton === "modern"}
                />
              </div>
            </div>

            {/* Minimalist Style */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Minimalist Style</h3>
              <p className="text-gray-600 text-sm mb-4">
                Clean, simple design with subtle hover effects for a refined user experience.
              </p>
              <div className="flex justify-center mt-6">
                <SendMessageButton
                  style="minimalist"
                  onClick={() => handleButtonClick("minimalist")}
                  isSubmitting={activeButton === "minimalist"}
                />
              </div>
            </div>

            {/* Material Style */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Material Style</h3>
              <p className="text-gray-600 text-sm mb-4">
                Follows Material Design principles with elevation and tactile feedback.
              </p>
              <div className="flex justify-center mt-6">
                <SendMessageButton
                  style="material"
                  onClick={() => handleButtonClick("material")}
                  isSubmitting={activeButton === "material"}
                />
              </div>
            </div>

            {/* Gradient Style */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Gradient Style</h3>
              <p className="text-gray-600 text-sm mb-4">
                Vibrant gradient with animated icon movement for an eye-catching effect.
              </p>
              <div className="flex justify-center mt-6">
                <SendMessageButton
                  style="gradient"
                  onClick={() => handleButtonClick("gradient")}
                  isSubmitting={activeButton === "gradient"}
                />
              </div>
            </div>

            {/* Outlined Style */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Outlined Style</h3>
              <p className="text-gray-600 text-sm mb-4">
                Transparent background with colored border for a lightweight, elegant appearance.
              </p>
              <div className="flex justify-center mt-6">
                <SendMessageButton
                  style="outlined"
                  onClick={() => handleButtonClick("outlined")}
                  isSubmitting={activeButton === "outlined"}
                />
              </div>
            </div>

            {/* States Showcase */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Button States</h3>
              <p className="text-gray-600 text-sm mb-4">
                Different states provide visual feedback during user interaction.
              </p>
              <div className="space-y-4">
                <SendMessageButton style="modern" />
                <SendMessageButton style="modern" isSubmitting={true} />
                <SendMessageButton style="modern" isSuccess={true} />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Each button style is designed to provide clear visual feedback and enhance user engagement.
              <br />
              Click any button to see its loading state in action.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

