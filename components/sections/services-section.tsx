"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Paintbrush, LineChart, Code, Layers, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "product-design",
    title: "Product Design",
    icon: Layers,
    description:
      "We design intuitive digital products that solve real user problems and create meaningful experiences.",
    features: ["User Research & Testing", "UX/UI Design", "Interaction Design", "Prototyping & Validation"],
    color: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    id: "development",
    title: "Development",
    icon: Code,
    description: "We build robust, scalable applications using modern technologies and best practices.",
    features: ["Web Applications", "Mobile Applications", "Custom Software", "API Development"],
    color: "bg-green-50 dark:bg-green-950/30",
  },
  {
    id: "branding",
    title: "Brand Identity",
    icon: Paintbrush,
    description: "We create distinctive brand identities that communicate your values and resonate with your audience.",
    features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Materials"],
    color: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    id: "strategy",
    title: "Strategy",
    icon: LineChart,
    description: "We develop comprehensive strategies to help you achieve your business goals and drive growth.",
    features: ["Market Research", "Competitive Analysis", "Product Strategy", "Growth Planning"],
    color: "bg-amber-50 dark:bg-amber-950/30",
  },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState("product-design")

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive digital product solutions</h2>
          <p className="text-muted-foreground">
            We offer end-to-end services to help you build, launch, and grow exceptional digital products.
          </p>
        </div>

        <Tabs
          defaultValue="product-design"
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                <service.icon className="h-4 w-4 mr-2" />
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {services.map(
                (service) =>
                  activeTab === service.id && (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <TabsContent value={service.id} forceMount className="mt-0">
                        <div className={`rounded-lg p-8 ${service.color}`}>
                          <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/2">
                              <div className="flex items-center mb-4">
                                <service.icon className="h-8 w-8 mr-3" />
                                <h3 className="text-2xl font-bold">{service.title}</h3>
                              </div>
                              <p className="text-muted-foreground mb-6">{service.description}</p>
                              <Button className="group">
                                Learn more
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </div>

                            <div className="md:w-1/2">
                              <h4 className="font-medium mb-4">What we offer:</h4>
                              <ul className="space-y-3">
                                {service.features.map((feature, index) => (
                                  <motion.li
                                    key={feature}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-center"
                                  >
                                    <div className="h-2 w-2 rounded-full bg-primary mr-3" />
                                    <span>{feature}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

