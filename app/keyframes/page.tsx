"use client"

import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { CodeBlock } from "@/components/code-block"

export default function KeyframesPage() {
  const [duration, setDuration] = useState(2000)
  const [isAnimating, setIsAnimating] = useState(false)
  const [selectedAnimation, setSelectedAnimation] = useState("bounce")
  const [iterations, setIterations] = useState(1)
  const [infinite, setInfinite] = useState(false)
  const [direction, setDirection] = useState("normal")

  const animationOptions = ["bounce", "pulse", "spin", "ping", "shake", "fadeIn", "slideIn"]

  const directionOptions = ["normal", "reverse", "alternate", "alternate-reverse"]

  const getAnimationStyle = () => {
    return {
      animation: isAnimating
        ? `${selectedAnimation} ${duration}ms ${direction} ${infinite ? "infinite" : iterations}`
        : "none",
    }
  }

  const getKeyframesCSS = () => {
    switch (selectedAnimation) {
      case "bounce":
        return `@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}`
      case "pulse":
        return `@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}`
      case "spin":
        return `@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`
      case "ping":
        return `@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}`
      case "shake":
        return `@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
}`
      case "fadeIn":
        return `@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}`
      case "slideIn":
        return `@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}`
      default:
        return ""
    }
  }

  const getUsageCSS = () => {
    return `.element {
  animation: ${selectedAnimation} ${duration}ms ${direction} ${infinite ? "infinite" : iterations};
}`
  }

  const handleToggleAnimation = () => {
    setIsAnimating(!isAnimating)

    // If turning animation on and not infinite, we need to reset after it completes
    if (!isAnimating && !infinite) {
      setTimeout(() => {
        setIsAnimating(false)
      }, duration * iterations)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">CSS Keyframe Animations</h1>
        <p className="text-muted-foreground">
          CSS keyframe animations allow you to create complex, multi-step animations by defining keyframes at various
          points in the animation sequence.
        </p>
      </div>

      <Tabs defaultValue="demo" className="w-full">
        <TabsList>
          <TabsTrigger value="demo">Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="about">About Keyframes</TabsTrigger>
        </TabsList>

        <TabsContent value="demo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Keyframe Animation Demo</CardTitle>
              <CardDescription>Select an animation type and customize the parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label>Animation Type</Label>
                    <Select value={selectedAnimation} onValueChange={setSelectedAnimation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an animation" />
                      </SelectTrigger>
                      <SelectContent>
                        {animationOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Duration: {duration}ms</Label>
                    <Slider
                      value={[duration]}
                      min={500}
                      max={5000}
                      step={100}
                      onValueChange={(value) => setDuration(value[0])}
                    />
                  </div>

                  <div>
                    <Label>Direction</Label>
                    <Select value={direction} onValueChange={setDirection}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a direction" />
                      </SelectTrigger>
                      <SelectContent>
                        {directionOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="infinite" checked={infinite} onCheckedChange={setInfinite} />
                    <Label htmlFor="infinite">Infinite</Label>
                  </div>

                  {!infinite && (
                    <div>
                      <Label>Iterations: {iterations}</Label>
                      <Slider
                        value={[iterations]}
                        min={1}
                        max={10}
                        step={1}
                        onValueChange={(value) => setIterations(value[0])}
                      />
                    </div>
                  )}

                  <Button onClick={handleToggleAnimation} className="w-full">
                    {isAnimating ? "Stop Animation" : "Start Animation"}
                  </Button>
                </div>

                <div className="flex items-center justify-center p-8 bg-muted/30 rounded-lg min-h-[300px]">
                  <div className="w-32 h-32 bg-primary rounded-lg" style={getAnimationStyle()} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>CSS Code</CardTitle>
              <CardDescription>CSS code for the current keyframe animation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Keyframes Definition</h3>
                <CodeBlock code={getKeyframesCSS()} language="css" />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Usage</h3>
                <CodeBlock code={getUsageCSS()} language="css" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About CSS Keyframe Animations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                CSS keyframe animations allow you to create complex, multi-step animations by defining keyframes at
                various points in the animation sequence. Unlike transitions, keyframe animations don't require a
                trigger and can run automatically when the page loads.
              </p>

              <h3 className="text-lg font-semibold mt-4">Key Properties</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>animation-name</strong>: Specifies the name of the @keyframes rule
                </li>
                <li>
                  <strong>animation-duration</strong>: Specifies how long the animation should take to complete one
                  cycle
                </li>
                <li>
                  <strong>animation-timing-function</strong>: Specifies the speed curve of the animation
                </li>
                <li>
                  <strong>animation-delay</strong>: Specifies a delay before the animation starts
                </li>
                <li>
                  <strong>animation-iteration-count</strong>: Specifies the number of times an animation should run
                </li>
                <li>
                  <strong>animation-direction</strong>: Specifies whether the animation should play in reverse on
                  alternate cycles
                </li>
                <li>
                  <strong>animation-fill-mode</strong>: Specifies what values are applied by the animation before and
                  after it is executing
                </li>
                <li>
                  <strong>animation-play-state</strong>: Specifies whether the animation is running or paused
                </li>
                <li>
                  <strong>animation</strong>: Shorthand property for all the animation properties above
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">Keyframe Syntax</h3>
              <p>Keyframes are defined using the @keyframes rule, followed by a name and a set of style rules:</p>
              <CodeBlock
                code={`@keyframes animationName {
  0% {
    /* styles at the start */
  }
  50% {
    /* styles at the midpoint */
  }
  100% {
    /* styles at the end */
  }
}`}
                language="css"
              />

              <p className="mt-4">You can also use the keywords "from" </p>

              <p className="mt-4">You can also use the keywords "from" and "to" instead of percentages:</p>
              <CodeBlock
                code={`@keyframes animationName {rames animationName {
  from {
    /* styles at the start (same as 0%) */
  }
  to {
    /* styles at the end (same as 100%) */
  }
}`}
                language="css"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
