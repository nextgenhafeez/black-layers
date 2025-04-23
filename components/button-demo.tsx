import { ExploreServicesButton, ContactUsButton, ActionButton } from "./action-buttons"

export function ButtonDemo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Button Design System</h2>

          <div className="grid gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Primary Action Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <ExploreServicesButton />
                <ActionButton href="#" variant="primary" icon="arrow">
                  Discover More
                </ActionButton>
                <ActionButton href="#" variant="primary" icon="none">
                  Get Started
                </ActionButton>
              </div>
              <div className="mt-8 text-gray-600">
                <p>
                  Primary buttons use a vibrant blue-to-indigo gradient that creates visual interest and draws
                  attention. The subtle hover animation with elevation effect provides clear feedback to users.
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Bold, high-contrast design for primary actions</li>
                  <li>Gradient background with subtle shadow for depth</li>
                  <li>Interactive hover and focus states</li>
                  <li>Contextual icons that animate on interaction</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Secondary Action Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <ContactUsButton />
                <ActionButton href="#" variant="secondary" icon="mail">
                  Subscribe
                </ActionButton>
                <ActionButton href="#" variant="secondary" icon="none">
                  Learn More
                </ActionButton>
              </div>
              <div className="mt-8 text-gray-600">
                <p>
                  Secondary buttons use a clean, minimal design that complements the primary buttons without competing
                  for attention. The subtle border and hover effect create a cohesive design language.
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Clean, outlined design for secondary actions</li>
                  <li>Subtle background change on hover</li>
                  <li>Maintains visual hierarchy with primary buttons</li>
                  <li>Contextual icons that enhance meaning</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Responsive Behavior</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Desktop View</h4>
                  <div className="flex gap-4">
                    <ExploreServicesButton />
                    <ContactUsButton />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Mobile View (Stacked)</h4>
                  <div className="flex flex-col gap-4 max-w-[280px]">
                    <ExploreServicesButton />
                    <ContactUsButton />
                  </div>
                </div>
              </div>
              <div className="mt-8 text-gray-600">
                <p>
                  The buttons are fully responsive and adapt to different screen sizes. On smaller screens, they stack
                  vertically to maintain touch target size and readability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
