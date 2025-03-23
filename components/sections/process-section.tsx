"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, Search, Palette, Code, Rocket, BarChart } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Discovery",
    icon: Search,
    description: "We start by understanding your business, users, and goals through in-depth research and analysis.",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Strategy",
    icon: Lightbulb,
    description: "We develop a comprehensive strategy that aligns with your business objectives and user needs.",
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Design",
    icon: Palette,
    description: "We create intuitive, engaging designs that bring your vision to life and delight your users.",
    color: "bg-pink-500",
  },
  {
    id: 4,
    title: "Development",
    icon: Code,
    description: "We build robust, scalable solutions using modern technologies and best practices.",
    color: "bg-green-500",
  },
  {
    id: 5,
    title: "Launch",
    icon: Rocket,
    description: "We ensure a smooth deployment and help you introduce your product to the world.",
    color: "bg-orange-500",
  },
  {
    id: 6,
    title: "Growth",
    icon: BarChart,
    description: "We continuously optimize your product based on data and user feedback to drive growth.",
    color: "bg-teal-500",
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="process" className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How we bring your vision to life</h2>
          <p className="text-muted-foreground">
            Our proven methodology ensures we deliver exceptional results that meet your business objectives.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 z-0" />

          {/* Timeline steps */}
          <div className="relative z-10 space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                onMouseEnter={() => setActiveStep(step.id)}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-background flex items-center justify-center">
                  <motion.div
                    className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center text-white`}
                    animate={{
                      scale: activeStep === step.id ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 text-left"} pt-16 md:pt-0`}
                >
                  <motion.div
                    animate={{
                      scale: activeStep === step.id ? 1.05 : 1,
                      opacity: activeStep === step.id ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-card p-6 rounded-lg shadow-sm"
                  >
                    <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                      Step {step.id}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                </div>

                {/* Empty space for the other side */}
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

