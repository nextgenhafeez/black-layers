"use client"

import { useState } from "react"
import { CrystalButton } from "@/components/ui/crystal-button"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Download, Copy, Share, Trash, MessageCircle, Bell, Settings, ArrowRight } from "lucide-react"

export default function ButtonSystemDemo() {
  const [activeSize, setActiveSize] = useState<"sm" | "md" | "lg">("md")
  const [activeGlow, setActiveGlow] = useState<"none" | "sm" | "md" | "lg">("none")

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-2 text-center">Button Design System</h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        A comprehensive button system providing consistent interactive elements across the website, based on the
        WhatsApp button aesthetic.
      </p>

      <Tabs defaultValue="variants" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="variants">Button Variants</TabsTrigger>
          <TabsTrigger value="sizes">Sizes & Width</TabsTrigger>
          <TabsTrigger value="states">States & Icons</TabsTrigger>
          <TabsTrigger value="custom">Custom Effects</TabsTrigger>
        </TabsList>

        <TabsContent value="variants" className="space-y-12">
          <Card>
            <CardHeader>
              <CardTitle>Primary Variants</CardTitle>
              <CardDescription>The core button styles that serve different purposes in the interface</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <CrystalButton variant="primary">Primary Button</CrystalButton>
              <CrystalButton variant="secondary">Secondary Button</CrystalButton>
              <CrystalButton variant="outline">Outline Button</CrystalButton>
              <CrystalButton variant="ghost">Ghost Button</CrystalButton>
              <CrystalButton variant="destructive">Destructive Button</CrystalButton>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Crystal Variants</CardTitle>
              <CardDescription>Specialized button variants with crystal-like effects</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <CrystalButton variant="crystal">Crystal Button</CrystalButton>
              <WhatsAppButton phoneNumber="+15874296200">WhatsApp Button</WhatsAppButton>
              <CrystalButton variant="crystal" glow="md">
                Crystal with Glow
              </CrystalButton>
              <WhatsAppButton phoneNumber="+15874296200" variant="primary">
                WhatsApp Primary
              </WhatsAppButton>
              <WhatsAppButton phoneNumber="+15874296200" variant="crystal">
                WhatsApp Crystal
              </WhatsAppButton>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Examples</CardTitle>
              <CardDescription>Common use cases for different button variants</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Call-to-Action Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <CrystalButton variant="primary" size="lg">
                    Get Started
                  </CrystalButton>
                  <CrystalButton variant="crystal" glow="md" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Learn More
                  </CrystalButton>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Form Actions</h3>
                <div className="flex flex-wrap gap-4">
                  <CrystalButton variant="primary">Save Changes</CrystalButton>
                  <CrystalButton variant="outline">Cancel</CrystalButton>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Destructive Actions</h3>
                <div className="flex flex-wrap gap-4">
                  <CrystalButton variant="destructive" leftIcon={<Trash className="h-4 w-4" />}>
                    Delete Account
                  </CrystalButton>
                  <CrystalButton variant="outline">Cancel</CrystalButton>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Options</h3>
                <div className="flex flex-wrap gap-4">
                  <WhatsAppButton phoneNumber="+15874296200" message="Hello, I need help with...">
                    Chat Support
                  </WhatsAppButton>
                  <CrystalButton variant="secondary" leftIcon={<MessageCircle className="h-4 w-4" />}>
                    Live Chat
                  </CrystalButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sizes" className="space-y-12">
          <Card>
            <CardHeader>
              <CardTitle>Button Sizes</CardTitle>
              <CardDescription>Different size options to fit various UI contexts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <CrystalButton variant="primary" size="sm">
                  Small Button
                </CrystalButton>
                <CrystalButton variant="primary" size="md">
                  Medium Button
                </CrystalButton>
                <CrystalButton variant="primary" size="lg">
                  Large Button
                </CrystalButton>
                <CrystalButton variant="primary" size="icon">
                  <Settings className="h-4 w-4" />
                </CrystalButton>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <WhatsAppButton phoneNumber="+15874296200" size="sm">
                  Small
                </WhatsAppButton>
                <WhatsAppButton phoneNumber="+15874296200" size="md">
                  Medium
                </WhatsAppButton>
                <WhatsAppButton phoneNumber="+15874296200" size="lg">
                  Large
                </WhatsAppButton>
                <WhatsAppButton phoneNumber="+15874296200" size="icon">
                  <span className="sr-only">WhatsApp</span>
                </WhatsAppButton>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Width Options</CardTitle>
              <CardDescription>Control the width of buttons for different layouts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Default Width (Auto)</h3>
                <div className="flex flex-wrap gap-4">
                  <CrystalButton variant="primary">Default Width</CrystalButton>
                  <CrystalButton variant="crystal">Crystal Style</CrystalButton>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Full Width</h3>
                <div className="space-y-4 max-w-md">
                  <CrystalButton variant="primary" fullWidth>
                    Full Width Primary
                  </CrystalButton>
                  <WhatsAppButton phoneNumber="+15874296200" fullWidth>
                    Full Width WhatsApp
                  </WhatsAppButton>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Custom Width</h3>
                <div className="space-y-4">
                  <CrystalButton variant="primary" className="w-32">
                    W-32
                  </CrystalButton>
                  <CrystalButton variant="primary" className="w-48">
                    W-48
                  </CrystalButton>
                  <CrystalButton variant="primary" className="w-64">
                    W-64
                  </CrystalButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="states" className="space-y-12">
          <Card>
            <CardHeader>
              <CardTitle>Button States</CardTitle>
              <CardDescription>Different states that buttons can have during interaction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <CrystalButton variant="primary">Default</CrystalButton>
                <CrystalButton variant="primary" disabled>
                  Disabled
                </CrystalButton>
                <CrystalButton variant="primary" isLoading>
                  Loading
                </CrystalButton>
              </div>
              <div className="flex flex-wrap gap-4">
                <CrystalButton variant="crystal">Default</CrystalButton>
                <CrystalButton variant="crystal" disabled>
                  Disabled
                </CrystalButton>
                <CrystalButton variant="crystal" isLoading>
                  Loading
                </CrystalButton>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Icons & Button Content</CardTitle>
              <CardDescription>Adding icons and other content to buttons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <CrystalButton variant="primary" leftIcon={<Download className="h-4 w-4" />}>
                  Download
                </CrystalButton>
                <CrystalButton variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Continue
                </CrystalButton>
                <CrystalButton
                  variant="primary"
                  leftIcon={<Check className="h-4 w-4" />}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Confirm
                </CrystalButton>
              </div>

              <div className="flex flex-wrap gap-4">
                <CrystalButton variant="outline" size="icon" aria-label="Copy">
                  <Copy className="h-4 w-4" />
                </CrystalButton>
                <CrystalButton variant="outline" size="icon" aria-label="Share">
                  <Share className="h-4 w-4" />
                </CrystalButton>
                <CrystalButton variant="outline" size="icon" aria-label="Settings">
                  <Settings className="h-4 w-4" />
                </CrystalButton>
                <CrystalButton variant="outline" size="icon" aria-label="Notifications">
                  <Bell className="h-4 w-4" />
                </CrystalButton>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="space-y-12">
          <Card>
            <CardHeader>
              <CardTitle>Glow Effects</CardTitle>
              <CardDescription>Customize the glow intensity of buttons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4 mb-6">
                <CrystalButton
                  variant="crystal"
                  glow="none"
                  onClick={() => setActiveGlow("none")}
                  className={activeGlow === "none" ? "ring-2 ring-white" : ""}
                >
                  No Glow
                </CrystalButton>
                <CrystalButton
                  variant="crystal"
                  glow="sm"
                  onClick={() => setActiveGlow("sm")}
                  className={activeGlow === "sm" ? "ring-2 ring-white" : ""}
                >
                  Small Glow
                </CrystalButton>
                <CrystalButton
                  variant="crystal"
                  glow="md"
                  onClick={() => setActiveGlow("md")}
                  className={activeGlow === "md" ? "ring-2 ring-white" : ""}
                >
                  Medium Glow
                </CrystalButton>
                <CrystalButton
                  variant="crystal"
                  glow="lg"
                  onClick={() => setActiveGlow("lg")}
                  className={activeGlow === "lg" ? "ring-2 ring-white" : ""}
                >
                  Large Glow
                </CrystalButton>
              </div>

              <div className="p-12 flex justify-center bg-gradient-to-b from-black to-gray-900 rounded-lg">
                <CrystalButton variant="crystal" size="lg" glow={activeGlow}>
                  Preview Glow Effect
                </CrystalButton>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Glow Colors</CardTitle>
              <CardDescription>Apply custom colored glow effects to buttons</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <CrystalButton variant="crystal" glowColor="#ff0000">
                  Red Glow
                </CrystalButton>
                <CrystalButton variant="crystal" glowColor="#00ff00">
                  Green Glow
                </CrystalButton>
                <CrystalButton variant="crystal" glowColor="#0000ff">
                  Blue Glow
                </CrystalButton>
                <CrystalButton variant="crystal" glowColor="#ff00ff">
                  Purple Glow
                </CrystalButton>
                <CrystalButton variant="crystal" glowColor="#ffff00">
                  Yellow Glow
                </CrystalButton>
                <CrystalButton variant="crystal" glowColor="#00ffff">
                  Cyan Glow
                </CrystalButton>
                <CrystalButton variant="crystal" glowColor="#ff8800">
                  Orange Glow
                </CrystalButton>
                <CrystalButton variant="crystal" glowColor="#25d366">
                  WhatsApp Glow
                </CrystalButton>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-card p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Button Design System Implementation Guide</h2>
        <div className="space-y-4">
          <p className="text-gray-300">
            To implement this button system throughout your website, use the <code>CrystalButton</code> component as
            your primary button element. For WhatsApp-specific functionality, use the <code>WhatsAppButton</code>{" "}
            component.
          </p>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Consistent styling based on the crystal aesthetic</li>
              <li>Multiple variants for different contexts (primary, secondary, crystal, etc.)</li>
              <li>Responsive sizing (sm, md, lg, icon)</li>
              <li>Support for loading states, icons, and disabled states</li>
              <li>Customizable glow effects and animations</li>
              <li>Full width options for responsive layouts</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Implementation Example:</h3>
            <pre className="bg-black/50 p-4 rounded-md overflow-x-auto text-sm">
              {`import { CrystalButton } from "@/components/ui/crystal-button";

// In your component:
<CrystalButton 
  variant="crystal"
  size="lg"
  glow="md"
  leftIcon={<DownloadIcon />}
  onClick={handleDownload}
>
  Download Resources
</CrystalButton>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

