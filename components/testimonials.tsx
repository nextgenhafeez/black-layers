"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "Black Layers transformed our business with their custom solution. The team was professional, responsive, and delivered exactly what we needed.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    content:
      "Working with Black Layers was a game-changer for our company. Their attention to detail and commitment to quality resulted in an application that exceeded our expectations.",
    author: "Michael Chen",
    position: "CTO, Innovate Solutions",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    content:
      "From concept to deployment, Black Layers guided us through every step of the process. Their expertise and dedication made all the difference in our project's success.",
    author: "Emily Rodriguez",
    position: "Product Manager, NextGen Apps",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it — hear from some of our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="light-card p-8 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-blue-100">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg italic mb-6">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-blue-600" : "bg-gray-300"}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

