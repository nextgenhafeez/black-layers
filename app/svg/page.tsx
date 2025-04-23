"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { CodeBlock } from "@/components/code-block"

export default function SvgPage() {
  const [selectedDemo, setSelectedDemo] = useState("path")
  const [duration, setDuration] = useState(2)
  const [isAnimating, setIsAnimating] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [pathLength, setPathLength] = useState(0)

  const handleStartAnimation = () => {
    setIsAnimating(!isAnimating)

    if (selectedDemo === "path" && !isAnimating) {
      setPathLength(0)
      setTimeout(() => {
        setPathLength(1)
      }, 100)
    }
  }

  const getCodeExample = () => {
    switch (selectedDemo) {
      case "path":
        return `import { motion } from "framer-motion";

export function PathAnimation() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <motion.path
        d="M10,90 C30,90 30,50 50,50 C70,50 70,90 90,90 C110,90 110,50 130,50 C150,50 150,90 170,90 C190,90 190,50 190,50"
        fill="transparent"
        stroke="#0284c7"
        strokeWidth="8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: ${duration}, ease: "easeInOut" ${repeat ? ", repeat: Infinity" : ""} }}
      />
    </svg>
  );
}`
      case "morph":
        return `import { motion } from "framer-motion";

export function MorphAnimation() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <motion.path
        fill="#0284c7"
        initial={{ d: "M100,10 L180,90 L100,190 L20,90 Z" }}
        animate={{ d: "M100,10 C140,10 180,50 180,100 C180,150 140,190 100,190 C60,190 20,150 20,100 C20,50 60,10 100,10 Z" }}
        transition={{ duration: ${duration}, ease: "easeInOut" ${repeat ? ", repeat: Infinity, repeatType: 'reverse'" : ""} }}
      />
    </svg>
  );
}`
      case "coordinated":
        return `import { motion } from "framer-motion";

export function CoordinatedAnimation() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200">
      <motion.circle
        cx="100"
        cy="100"
        r="50"
        fill="#0284c7"
        initial={{ opacity: 0.2, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: ${duration} ${repeat ? ", repeat: Infinity, repeatType: 'reverse'" : ""} }}
      />
      <motion.rect
        x="75"
        y="75"
        width="50"
        height="50"
        fill="#f43f5e"
        initial={{ opacity: 0.2, rotate: 0 }}
        animate={{ opacity: 1, rotate: 90 }}
        transition={{ duration: ${duration} ${repeat ? ", repeat: Infinity, repeatType: 'reverse'" : ""} }}
      />
    </svg>
  );
}`
      default:
        return ""
    }
  }

  const renderDemo = () => {
    switch (selectedDemo) {
      case "path":
        return (
          <svg width="200" height="200" viewBox="0 0 200 200">
            <motion.path
              d="M10,90 C30,90 30,50 50,50 C70,50 70,90 90,90 C110,90 110,50 130,50 C150,50 150,90 170,90 C190,90 190,50 190,50"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: pathLength }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                repeat: repeat ? Number.POSITIVE_INFINITY : 0,
                repeatType: "loop",
              }}
            />
          </svg>
        )
      case "morph":
        return (
          <svg width="200" height="200" viewBox="0 0 200 200">
            <motion.path
              fill="currentColor"
              initial={{ d: "M100,10 L180,90 L100,190 L20,90 Z" }}
              animate={
                isAnimating
                  ? {
                      d: "M100,10 C140,10 180,50 180,100 C180,150 140,190 100,190 C60,190 20,150 20,100 C20,50 60,10 100,10 Z",
                    }
                  : {
                      d: "M100,10 L180,90 L100,190 L20,90 Z",
                    }
              }
              transition={{
                duration: duration,
                ease: "easeInOut",
                repeat: repeat ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
              }}
            />
          </svg>
        )
      case "coordinated":
        return (
          <svg width="200" height="200" viewBox="0 0 200 200">
            <motion.circle
              cx="100"
              cy="100"
              r="50"
              fill="currentColor"
              initial={{ opacity: 0.2, scale: 0.5 }}
              animate={isAnimating ? { opacity: 1, scale: 1 } : { opacity: 0.2, scale: 0.5 }}
              transition={{
                duration: duration,
                repeat: repeat ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
              }}
            />
            <motion.rect
              x="75"
              y="75"
              width="50"
              height="50"
              fill="#f43f5e"
              initial={{ opacity: 0.2, rotate: 0 }}
              animate={isAnimating ? { opacity: 1, rotate: 90 } : { opacity: 0.2, rotate: 0 }}
              transition={{
                duration: duration,
                repeat: repeat ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
              }}
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">SVG Animations</h1>
        <p className="text-muted-foreground">
          SVG animations allow for smooth, scalable vector graphics animations that look crisp at any size and can be
          highly interactive.
        </p>
      </div>

      <Tabs defaultValue="demo" className="w-full">
        <TabsList>
          <TabsTrigger value="demo">Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="about">About SVG Animations</TabsTrigger>
        </TabsList>

        <TabsContent value="demo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SVG Animation Demo</CardTitle>
              <CardDescription>Select an SVG animation type and customize the parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label>Animation Type</Label>
                    <Select value={selectedDemo} onValueChange={setSelectedDemo}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an animation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="path">Path Drawing</SelectItem>
                        <SelectItem value="morph">Shape Morphing</SelectItem>
                        <SelectItem value="coordinated">Coordinated Animation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Duration: {duration}s</Label>
                    <Slider
                      value={[duration]}
                      min={0.5}
                      max={5}
                      step={0.1}
                      onValueChange={(value) => setDuration(value[0])}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="repeat" checked={repeat} onCheckedChange={setRepeat} />
                    <Label htmlFor="repeat">Repeat Animation</Label>
                  </div>

                  <Button onClick={handleStartAnimation} className="w-full">
                    {isAnimating ? "Reset Animation" : "Start Animation"}
                  </Button>
                </div>

                <div className="flex items-center justify-center p-8 bg-muted/30 rounded-lg min-h-[300px]">
                  {renderDemo()}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>React Code</CardTitle>
              <CardDescription>React code using Framer Motion for the current SVG animation</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={getCodeExample()} language="jsx" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About SVG Animations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                SVG (Scalable Vector Graphics) animations offer several advantages over traditional image animations.
                SVGs are resolution-independent, meaning they look crisp at any size, and they typically have smaller
                file sizes than raster images.
              </p>

              <h3 className="text-lg font-semibold mt-4">Common SVG Animation Techniques</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Path Drawing</strong>: Animating the drawing of SVG paths using the stroke-dasharray and
                  stroke-dashoffset properties
                </li>
                <li>
                  <strong>Shape Morphing</strong>: Transforming one shape into another by animating path data
                </li>
                <li>
                  <strong>Transformations</strong>: Using scale, rotate, translate, and skew to animate SVG elements
                </li>
                <li>
                  <strong>Color Changes</strong>: Animating fill, stroke, and opacity properties
                </li>
                <li>
                  <strong>Coordinated Animations</strong>: Combining multiple animations to create complex effects
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">Animation Methods</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>CSS Animations</strong>: Using CSS keyframes to animate SVG properties
                </li>
                <li>
                  <strong>SMIL</strong>: SVG's native animation elements (though less used today due to browser support
                  issues)
                </li>
                <li>
                  <strong>JavaScript Libraries</strong>: Using libraries like Framer Motion, GreenSock (GSAP), or
                  Anime.js for more complex animations
                </li>
                <li>
                  <strong>React Spring</strong>: Physics-based animations for SVG elements
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">Benefits of SVG Animations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Resolution independence (looks good on all screen sizes and densities)</li>
                <li>Smaller file sizes compared to GIFs or videos</li>
                <li>Precise control over individual elements within the graphic</li>
                <li>Accessibility (SVG elements can have ARIA attributes)</li>
                <li>Interactivity (can respond to user events)</li>
                <li>Can be styled with CSS</li>
              </ul>

              <p className="mt-4">
                In this demo, we're using Framer Motion to animate SVG elements in React. Framer Motion provides a
                simple API for creating complex SVG animations, including path drawing, shape morphing, and coordinated
                animations.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
