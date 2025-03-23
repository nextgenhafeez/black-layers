import { CrystalButton } from "@/components/ui/crystal-button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ActionButton, ContactButton } from "@/components/button-system-integration"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function ButtonDesignSystemPage() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Button Design System</h1>
        <p className="text-gray-400 text-lg mb-8">
          A comprehensive guide to implementing the Black Layers button design system
        </p>

        <ActionButton href="/button-system-demo" size="lg" rightIcon>
          View Interactive Demo
        </ActionButton>
      </div>

      <div className="space-y-16">
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-gray-300 text-lg">
            The Black Layers button design system provides a consistent, accessible, and visually appealing set of
            interactive elements across the website. Inspired by our WhatsApp integration buttons, this system extends
            the crystal-like aesthetic to all interactive elements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Consistent Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  All buttons follow the same design principles, creating a cohesive user experience throughout the
                  website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Flexible System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Multiple variants, sizes, and states allow for adaptation to different contexts while maintaining
                  visual consistency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Crystal Aesthetic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Distinctive glass-like appearance with subtle animations and glow effects that reinforce the Black
                  Layers brand.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Core Components</h2>
          <p className="text-gray-300">The button system is built on these foundational components:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>CrystalButton</CardTitle>
                <CardDescription>The base component for all buttons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">
                  A flexible button component that supports all variants, sizes, states, and customizations.
                </p>
                <CrystalButton variant="crystal">Crystal Button</CrystalButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>WhatsAppButton</CardTitle>
                <CardDescription>Specialized button for WhatsApp integration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">
                  A pre-configured button for WhatsApp communication, building on the CrystalButton base.
                </p>
                <WhatsAppButton phoneNumber="+15874296200">WhatsApp Button</WhatsAppButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ActionButton</CardTitle>
                <CardDescription>High-level component for main actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">
                  Used for primary calls-to-action, with built-in support for internal/external links.
                </p>
                <ActionButton rightIcon>Get Started</ActionButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ContactButton</CardTitle>
                <CardDescription>Specialized contact action buttons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">
                  Pre-configured buttons for different contact channels (WhatsApp, phone, email, chat).
                </p>
                <div className="flex flex-wrap gap-2">
                  <ContactButton type="whatsapp" size="sm">
                    Chat
                  </ContactButton>
                  <ContactButton type="phone" size="sm" variant="outline" />
                  <ContactButton type="email" size="sm" variant="secondary" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Implementation Guide</h2>

          <div className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle>Base CrystalButton Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">Import and use the CrystalButton component for general button needs:</p>
                <pre className="bg-black/50 p-4 rounded-md overflow-x-auto text-sm">
                  {`import { CrystalButton } from "@/components/ui/crystal-button";

// Basic usage
<CrystalButton>Click Me</CrystalButton>

// With variants and size
<CrystalButton 
  variant="crystal"
  size="lg"
  glow="md"
>
  Large Crystal Button
</CrystalButton>

// With icons
<CrystalButton 
  variant="primary"
  leftIcon={<Download className="h-4 w-4" />}
>
  Download
</CrystalButton>

// Loading state
<CrystalButton isLoading>Processing</CrystalButton>

// As link
<CrystalButton 
  as="a" 
  href="/destination" 
  target="_blank"
>
  External Link
</CrystalButton>`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Higher-Level Component Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">For common use cases, use the specialized components:</p>
                <pre className="bg-black/50 p-4 rounded-md overflow-x-auto text-sm">
                  {`import { ActionButton, ContactButton, DownloadButton } from "@/components/button-system-integration";

// Main call-to-action (automatically handles routing)
<ActionButton href="/services" rightIcon>
  View Services
</ActionButton>

// External link
<ActionButton href="https://example.com">
  Visit Website
</ActionButton>

// Contact options
<ContactButton type="whatsapp" size="lg" />
<ContactButton type="phone" variant="outline" />
<ContactButton type="email" />
<ContactButton type="live-chat" />

// Download button
<DownloadButton 
  href="/files/brochure.pdf" 
  fileName="black-layers-brochure.pdf"
>
  Download Brochure
</DownloadButton>`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Button Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Hero Section CTAs</h3>
                  <div className="bg-black/30 p-6 rounded-lg">
                    <div className="flex flex-wrap gap-4">
                      <ActionButton size="lg">Get Started</ActionButton>
                      <ActionButton size="lg" variant="outline">
                        Learn More
                      </ActionButton>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Form Actions</h3>
                  <div className="bg-black/30 p-6 rounded-lg">
                    <div className="flex flex-wrap gap-4">
                      <CrystalButton variant="primary">Save Changes</CrystalButton>
                      <CrystalButton variant="outline">Cancel</CrystalButton>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Contact Section</h3>
                  <div className="bg-black/30 p-6 rounded-lg">
                    <div className="flex flex-wrap gap-4">
                      <ContactButton type="whatsapp" />
                      <ContactButton type="phone" variant="secondary" />
                      <ContactButton type="email" variant="outline" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Card Actions</h3>
                  <div className="bg-black/30 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>Basic Plan</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400 mb-4">Perfect for small businesses</p>
                          <ActionButton fullWidth variant="crystal">
                            Choose Plan
                          </ActionButton>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Pro Plan</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400 mb-4">Advanced features for growth</p>
                          <ActionButton fullWidth>Choose Plan</ActionButton>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Enterprise</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400 mb-4">Custom solutions for large teams</p>
                          <ActionButton fullWidth variant="secondary">
                            Contact Sales
                          </ActionButton>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Accessibility Guidelines</h2>
          <p className="text-gray-300">
            The button system is designed with accessibility in mind. Follow these guidelines to ensure all users can
            interact with your buttons:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Text & Contrast</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Use clear, descriptive text for button labels</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Maintain sufficient contrast between text and background</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Use appropriate font size (minimum 14px) for readability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive States</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Ensure focus states are clearly visible</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Use disabled states appropriately and visibly</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Provide loading states for asynchronous actions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Icons & Visual Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Always pair icons with text (or use aria-label)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Avoid relying solely on color to convey meaning</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Ensure animations don't interfere with readability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Keyboard & Screen Readers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>All buttons must be keyboard accessible</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Use proper ARIA roles and labels when needed</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Ensure logical tab order in complex layouts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

