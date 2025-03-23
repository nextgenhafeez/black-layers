"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    content:
      "Black Layers transformed our vision into a stunning digital product that exceeded our expectations. Their attention to detail and strategic approach made all the difference.",
    author: "Sarah Johnson",
    role: "CEO, TechVision",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    content:
      "Working with Black Layers was a game-changer for our business. They delivered a product that not only looks beautiful but also drives real results for our bottom line.",
    author: "Michael Chen",
    role: "Founder, Quantum Finance",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    content:
      "The team at Black Layers brought a level of creativity and technical expertise that truly set them apart. They weren't just vendors; they became strategic partners in our success.",
    author: "Emily Rodriguez",
    role: "Product Director, Nebula Health",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What our clients say</h2>
            <div className="flex space-x-2 mt-4 md:mt-0">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[current].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
              >
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-8 h-full">
                  <Quote className="h-10 w-10 text-primary-foreground/20 mb-4" />
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-3/4">
                      <p className="text-lg md:text-xl mb-6">"{testimonials[current].content}"</p>
                      <div className="flex items-center">
                        <div className="mr-4 rounded-full overflow-hidden h-12 w-12 border-2 border-primary-foreground/20">
                          <Image
                            src={testimonials[current].image || "/placeholder.svg"}
                            alt={testimonials[current].author}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonials[current].author}</h4>
                          <p className="text-sm text-primary-foreground/70">{testimonials[current].role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/4 flex items-center justify-center">
                      <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className="w-3 h-3 rounded-full focus:outline-none"
                            aria-label={`Go to slide ${index + 1}`}
                          >
                            <span
                              className={`block w-full h-full rounded-full transition-colors ${
                                current === index
                                  ? "bg-primary-foreground"
                                  : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

