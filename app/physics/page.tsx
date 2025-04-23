"use client"

import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CodeBlock } from "@/components/code-block"

export default function PhysicsPage() {
  const [selectedDemo, setSelectedDemo] = useState("spring")
  const [stiffness, setStiffness] = useState(100)
  const [damping, setDamping] = useState(10)
  const [mass, setMass] = useState(1)
  const [velocity, setVelocity] = useState(0)
  const [bounce, setBounce] = useState(0.25)
  const [gravity, setGravity] = useState(9.8)
  const [isAnimating, setIsAnimating] = useState(false)

  const controls = useAnimation()

  const handleStartAnimation = async () => {
    setIsAnimating(true)

    if (selectedDemo === "spring") {
      await controls.start({
        x: isAnimating ? 0 : 200,
        transition: {
          type: "spring",
          stiffness,
          damping,
          mass,
          velocity,
        },
      })
    } else if (selectedDemo === "bounce") {
      await controls.start({
        y: isAnimating ? 0 : 200,
        transition: {
          type: "bounce",
          bounce,
          duration: 2,
        },
      })
    } else if (selectedDemo === "inertia") {
      await controls.start({
        x: isAnimating ? 0 : 200,
        transition: {
          type: "inertia",
          velocity: 100,
          power: 0.8,
        },
      })
    } else if (selectedDemo === "gravity") {
      await controls.start({
        y: 200,
        transition: {
          type: "inertia",
          velocity: 0,
          power: gravity / 10,
          timeConstant: 200,
        },
      })

      // Bounce back up with reduced velocity
      await controls.start({
        y: 0,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 15,
        },
      })
    }

    setIsAnimating(!isAnimating)
  }

  const getCodeExample = () => {
    switch (selectedDemo) {
      case "spring":
        return `import { motion } from "framer-motion";

export function SpringAnimation() {
  return (
    <motion.div
      animate={{ x: 200 }}
      transition={{
        type: "spring",
        stiffness: ${stiffness},
        damping: ${damping},
        mass: ${mass},
        velocity: ${velocity}
      }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  );
}`
      case "bounce":
        return `import { motion } from "framer-motion";

export function BounceAnimation() {
  return (
    <motion.div
      animate={{ y: 200 }}
      transition={{
        type: "bounce",
        bounce: ${bounce},
        duration: 2
      }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  );
}`
      case "inertia":
        return `import { motion } from "framer-motion";

export function InertiaAnimation() {
  return (
    <motion.div
      animate={{ x: 200 }}
      transition={{
        type: "inertia",
        velocity: 100,
        power: 0.8
      }}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  );
}`
      case "gravity":
        return `import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function GravityAnimation() {
  const controls = useAnimation();
  
  useEffect(() => {
    const animate = async () => {
      // Fall down with gravity
      await controls.start({
        y: 200,
        transition: {
          type: "inertia",
          velocity: 0,
          power: ${gravity / 10},
          timeConstant: 200
        }
      });
      
      // Bounce back up with reduced velocity
      await controls.start({
        y: 0,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 15
        }
      });
    };
    
    animate();
  }, [controls]);
  
  return (
    <motion.div
      animate={controls}
      className="w-32 h-32 bg-blue-500 rounded-lg"
    />
  );
}`
      default:
        return ""
    }
  }

  const renderControls = () => {
    switch (selectedDemo) {
      case "spring":
        return (
          <>
            <div>
              <Label>Stiffness: {stiffness}</Label>
              <Slider
                value={[stiffness]}
                min={10}
                max={1000}
                step={10}
                onValueChange={(value) => setStiffness(value[0])}
              />
            </div>
            <div>
              <Label>Damping: {damping}</Label>
              <Slider value={[damping]} min={0} max={100} step={1} onValueChange={(value) => setDamping(value[0])} />
            </div>
            <div>
              <Label>Mass: {mass}</Label>
              <Slider value={[mass]} min={0.1} max={10} step={0.1} onValueChange={(value) => setMass(value[0])} />
            </div>
            <div>
              <Label>Initial Velocity: {velocity}</Label>
              <Slider
                value={[velocity]}
                min={-500}
                max={500}
                step={10}
                onValueChange={(value) => setVelocity(value[0])}
              />
            </div>
          </>
        )
      case "bounce":
        return (
          <div>
            <Label>Bounce: {bounce}</Label>
            <Slider value={[bounce]} min={0} max={1} step={0.01} onValueChange={(value) => setBounce(value[0])} />
          </div>
        )
      case "gravity":
        return (
          <div>
            <Label>Gravity: {gravity} m/s²</Label>
            <Slider value={[gravity]} min={1} max={30} step={0.1} onValueChange={(value) => setGravity(value[0])} />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Physics-Based Animations</h1>
        <p className="text-muted-foreground">
          Physics-based animations use principles of physics to create realistic motion, making interfaces feel more
          natural and intuitive.
        </p>
      </div>

      <Tabs defaultValue="demo" className="w-full">
        <TabsList>
          <TabsTrigger value="demo">Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="about">About Physics Animations</TabsTrigger>
        </TabsList>

        <TabsContent value="demo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Physics Animation Demo</CardTitle>
              <CardDescription>Select a physics model and customize the parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label>Physics Model</Label>
                    <Select value={selectedDemo} onValueChange={setSelectedDemo}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a physics model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spring">Spring</SelectItem>
                        <SelectItem value="bounce">Bounce</SelectItem>
                        <SelectItem value="inertia">Inertia</SelectItem>
                        <SelectItem value="gravity">Gravity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {renderControls()}

                  <Button onClick={handleStartAnimation} className="w-full">
                    {isAnimating ? "Reset Animation" : "Start Animation"}
                  </Button>
                </div>

                <div className="relative flex items-center justify-center p-8 bg-muted/30 rounded-lg min-h-[300px]">
                  <motion.div animate={controls} className="w-32 h-32 bg-primary rounded-lg" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>React Code</CardTitle>
              <CardDescription>React code using Framer Motion for the current physics animation</CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock code={getCodeExample()} language="jsx" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About Physics-Based Animations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Physics-based animations use principles of physics to create realistic motion, making interfaces feel
                more natural and intuitive. Unlike traditional animations that follow predefined paths, physics
                animations respond dynamically based on properties like mass, velocity, and forces.
              </p>

              <h3 className="text-lg font-semibold mt-4">Common Physics Models</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Spring</strong>: Simulates the motion of a spring, with properties like stiffness and damping
                </li>
                <li>
                  <strong>Bounce</strong>: Creates a bouncing effect, useful for emphasizing elements
                </li>
                <li>
                  <strong>Inertia</strong>: Simulates momentum and gradual deceleration, great for swipe interactions
                </li>
                <li>
                  <strong>Gravity</strong>: Simulates the effect of gravity on objects
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">Key Parameters</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Stiffness</strong>: How rigid the spring is (higher values create faster, more energetic
                  animations)
                </li>
                <li>
                  <strong>Damping</strong>: How quickly the spring stops (higher values reduce oscillation)
                </li>
                <li>
                  <strong>Mass</strong>: The virtual mass of the object (higher values create more momentum)
                </li>
                <li>
                  <strong>Velocity</strong>: Initial speed of the animation
                </li>
                <li>
                  <strong>Bounce</strong>: How energetic the bounce is (0 to 1)
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4">Benefits</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>More natural and realistic motion</li>
                <li>Responsive to user interaction</li>
                <li>Can adapt to different states dynamically</li>
                <li>Creates a more engaging and polished user experience</li>
              </ul>

              <p className="mt-4">
                In this demo, we're using Framer Motion, a popular animation library for React that provides easy-to-use
                physics-based animations. Framer Motion abstracts away the complex physics calculations while still
                giving you control over the key parameters.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
