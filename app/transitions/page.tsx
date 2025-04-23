"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CodeBlock } from "@/components/code-block"

export default function TransitionsPage() {
  const [duration, setDuration] = useState(300)
  const [isActive, setIsActive] = useState(false)
  const [easing, setEasing] = useState("ease")
  const [selectedDemo, setSelectedDemo] = useState("color")

  const easingOptions = [
    "linear",
    "ease",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "cubic-bezier(0.175, 0.885, 0.32, 1.275)", // easeOutBack
  ]

  const getTransitionStyle = () => {
    return {
      transition: `all ${duration}ms ${easing}`,
    }
  }

  const renderDemo = () => {
    switch (selectedDemo) {
      case "color":
        return (
          <div
            className={`w-32 h-32 rounded-lg ${isActive ? "bg-primary" : "bg-muted"}`}
            style={getTransitionStyle()}
          />
        )
      case "size":
        return (
          <div
            className={`rounded-lg bg-primary`}
            style={{
              ...getTransitionStyle(),
              width: isActive ? "12rem" : "6rem",
              height: isActive ? "12rem" : "6rem",
            }}
          />
        )
      case "position":
        return (
          <div className="relative h-40 w-full border rounded-lg">
            <div
              className="absolute w-16 h-16 bg-primary rounded-lg"
              style={{
                ...getTransitionStyle(),
                left: isActive ? "calc(100% - 4rem)" : "0",
                top: isActive ? "calc(100% - 4rem)" : "0",
              }}
            />
          </div>
        )
      case "opacity":
        return (
          <div
            className="w-32 h-32 rounded-lg bg-primary"
            style={{
              ...getTransitionStyle(),
              opacity: isActive ? 1 : 0.2,
            }}
          />
        )
      case "transform":
        return (
          <div
            className="w-32 h-32 rounded-lg bg-primary"
            style={{
              ...getTransitionStyle(),
              transform: isActive ? "rotate(180deg) scale(1.2)" : "rotate(0) scale(1)",
            }}
          />
        )
      default:
        return null
    }
  }

  const getCodeExample = () => {
    const baseStyle = `transition: all ${duration}ms ${easing};`

    switch (selectedDemo) {
      case "color":
        return `.element {
  ${baseStyle}
  background-color: #1e293b; /* bg-muted */
}

.element.active {
  background-color: #0284c7; /* bg-primary */
}`
      case "size":
        return `.element {
  ${baseStyle}
  width: 6rem;
  height: 6rem;
  background-color: #0284c7; /* bg-primary */
}

.element.active {
  width: 12rem;
  height: 12rem;
}`
      case "position":
        return `.container {
  position: relative;
  height: 10rem;
  width: 100%;
}

.element {
  ${baseStyle}
  position: absolute;
  width: 4rem;
  height: 4rem;
  background-color: #0284c7; /* bg-primary */
  left: 0;
  top: 0;
}

.element.active {
  left: calc(100% - 4rem);
  top: calc(100% - 4rem);
}`
      case "opacity":
        return `.element {
  ${baseStyle}
  opacity: 0.2;
  background-color: #0284c7; /* bg-primary */
}

.element.active {
  opacity: 1;
}`
      case "transform":
        return `.element {
  ${baseStyle}
  transform: rotate(0) scale(1);
  background-color: #0284c7; /* bg-primary */
}

.element.active {
  transform: rotate(180deg) scale(1.2);
}`
      default:
        return ""
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">CSS Transitions</h1>
        <p className="text-muted-foreground">
          CSS transitions provide a way to control animation speed when changing CSS properties. They allow property
          changes to occur smoothly over a specified duration.
        </p>
      </div>

      <Tabs defaultValue="demo" className="w-full">
        <TabsList>
          <TabsTrigger value="demo">Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="about">About Transitions</TabsTrigger>
        </TabsList>

        <TabsContent value="demo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Transition Demo</CardTitle>
              <CardDescription>Select a demo type and customize the transition parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label>Demo Type</Label>
                    <Select value={selectedDemo} onValueChange={setSelectedDemo}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a demo type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="color">Color Change</SelectItem>
                        <SelectItem value="size">Size Change</SelectItem>
                        <SelectItem value="position">Position Change</SelectItem>
                        <SelectItem value="opacity">Opacity Change</SelectItem>
                        <SelectItem value="transform">Transform</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Duration: {duration}ms</Label>
                    <Slider
                      value={[duration]}
                      min={100}
                      max={2000}
                      step={100}
                      onValueChange={(value) => setDuration(value[0])}
                    />
                  </div>

                  <div>
                    <Label>Easing Function</Label>
                    <Select value={easing} onValueChange={setEasing}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an easing function" />
                      </SelectTrigger>
                      <SelectContent>
                        {easingOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button onClick={() => setIsActive(!isActive)} className="w-full">
                    Toggle Animation
                  </Button>
                </div>

                <div className="flex items-center justify-center p-8 bg-muted/30 rounded-lg">{renderDemo()}</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>CSS Code</CardTitle>
              <CardDescription>CSS code for the current transition demo</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={getCodeExample()} language="css" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About CSS Transitions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having
                property changes take effect immediately, you can cause the changes to take place over a period of time.
              </p>

              <h3 className="text-lg font-semibold mt-4">Key Properties</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>transition-property</strong>: Specifies the name of the CSS property the transition effect is
                  for
                </li>
                <li>
                  <strong>transition-duration</strong>: Specifies how many seconds or milliseconds the transition takes
                </li>
                <li>
                  <strong>transition-timing-function</strong>: Specifies the speed curve of the transition effect
                </li>
                <li>
                  <strong>transition-delay</strong>: Defines when the transition will start
                </li>
                <li>
                  <strong>transition</strong>: Shorthand property for the four transition properties above
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">Common Easing Functions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>linear</strong>: Constant speed from start to end
                </li>
                <li>
                  <strong>ease</strong>: Slow start, then fast, then slow end (default)
                </li>
                <li>
                  <strong>ease-in</strong>: Slow start, then fast end
                </li>
                <li>
                  <strong>ease-out</strong>: Fast start, then slow end
                </li>
                <li>
                  <strong>ease-in-out</strong>: Slow start, fast middle, slow end
                </li>
                <li>
                  <strong>cubic-bezier()</strong>: Define your own values in a cubic-bezier function
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
