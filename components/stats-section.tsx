"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Clock, Award } from "lucide-react"

// Counter animation hook
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      startTime = timestamp
      animate(timestamp)
    }

    const animate = (timestamp: number) => {
      const runtime = timestamp - startTime
      const relativeProgress = runtime / duration

      if (relativeProgress < 1) {
        setCount(Math.floor(end * relativeProgress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
        cancelAnimationFrame(animationFrame)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])

  return { count, ref: nodeRef }
}

export function StatsSection() {
  const { count: completionCount, ref: completionRef } = useCounter(100)
  const { count: experienceCount, ref: experienceRef } = useCounter(10)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Completion */}
          <motion.div
            className="p-8 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Project Completion</h3>
              <p className="mb-6 text-gray-600">
                We guarantee complete project delivery and successful handover to our clients.
              </p>
              <div className="relative w-48 h-48 mb-6" ref={completionRef}>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="black"
                    strokeWidth="8"
                    strokeDasharray={`${completionCount * 2.83} 283`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                  <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="24" fontWeight="bold">
                    {completionCount}%
                  </text>
                </svg>
              </div>
              <p className="font-bold text-xl">Completed</p>
            </div>
          </motion.div>

          {/* 24/7 Support */}
          <motion.div
            className="p-8 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Clock className="w-16 h-16 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
              <p className="mb-6 text-gray-600">
                Our team is available round the clock to address your concerns and queries.
              </p>
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-36 h-36">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm font-medium">Available</div>
                        <div className="text-2xl font-bold">24/7</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="font-bold text-xl">Available now</p>
              </div>
            </div>
          </motion.div>

          {/* Years Experience */}
          <motion.div
            className="p-8 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            ref={experienceRef}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Award className="w-16 h-16 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Years Experience</h3>
              <p className="mb-6 text-gray-600">
                With over a decade of experience, we bring expertise and innovation to every white-label project.
              </p>
              <div className="relative w-48 h-48 mb-6 flex items-center justify-center">
                <div className="text-7xl font-bold">{experienceCount}+</div>
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-8 bg-black opacity-10"
                      style={{
                        transform: `rotate(${i * 45}deg)`,
                        transformOrigin: "center 120px",
                        left: "calc(50% - 2px)",
                        top: "0",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <p className="font-bold text-xl">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
