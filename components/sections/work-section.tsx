"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Nebula",
    category: "Mobile App",
    description: "A revolutionary productivity app that helps teams collaborate seamlessly across time zones.",
    image: "/placeholder.svg?height=600&width=800",
    color: "#f5f5f5",
    link: "#",
  },
  {
    id: 2,
    title: "Quantum",
    category: "Web Platform",
    description: "An AI-powered analytics dashboard for e-commerce businesses to optimize their conversion rates.",
    image: "/placeholder.svg?height=600&width=800",
    color: "#f0f0f0",
    link: "#",
  },
  {
    id: 3,
    title: "Prism",
    category: "Brand Identity",
    description: "Complete brand identity system for a cutting-edge fintech startup disrupting traditional banking.",
    image: "/placeholder.svg?height=600&width=800",
    color: "#e8e8e8",
    link: "#",
  },
  {
    id: 4,
    title: "Horizon",
    category: "Web Application",
    description: "A next-generation learning platform that adapts to individual student needs and learning styles.",
    image: "/placeholder.svg?height=600&width=800",
    color: "#f2f2f2",
    link: "#",
  },
]

export function WorkSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const constraintsRef = useRef(null)

  const activeProject = projects[activeIndex]

  return (
    <section id="work" className="py-24 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
            <p className="text-muted-foreground max-w-md">
              Explore our portfolio of digital products that have helped businesses achieve their goals.
            </p>
          </div>
          <Button variant="ghost" className="group mt-4 md:mt-0">
            View all projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "cursor-pointer p-6 rounded-lg transition-all",
                  activeIndex === index ? "bg-secondary" : "hover:bg-secondary/50",
                )}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                    <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                  </div>
                  <span
                    className={cn(
                      "text-2xl font-bold transition-opacity",
                      activeIndex === index || hoveredIndex === index ? "opacity-100" : "opacity-0",
                    )}
                  >
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div ref={constraintsRef} className="relative h-[500px] rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProject.image || "/placeholder.svg"}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{activeProject.title}</h3>
                  <p className="text-white/80 mb-4 max-w-md">{activeProject.description}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  >
                    View project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
