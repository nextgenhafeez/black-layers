"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content:
      "The scroll animations on our new website have significantly increased user engagement. Our visitors spend more time exploring our content, and our conversion rates have improved.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content:
      "Working with this team was a pleasure. They understood our vision and created a website that not only looks beautiful but also provides an interactive experience that our users love.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, TechStart",
    content:
      "The attention to detail in the animations is impressive. Each scroll effect is purposeful and enhances the storytelling aspect of our brand. Highly recommended!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-on-scroll stagger-delay-1">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg ${activeIndex === index ? "block" : "hidden"}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={activeIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-600"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

