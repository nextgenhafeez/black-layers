"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const reasons = [
    {
      icon: "✅",
      title: "100% Native Swift & SwiftUI Development",
      description: "We build high-performance apps using Apple's latest technologies",
    },
    {
      icon: "✅",
      title: "App Store Publishing Support",
      description: "We handle the entire submission process to get your app live",
    },
    {
      icon: "✅",
      title: "UX/UI Design Included",
      description: "Beautiful, intuitive interfaces that follow Apple's design guidelines",
    },
    {
      icon: "✅",
      title: "API & Backend Integration",
      description: "Seamless connection with your existing systems or custom backend solutions",
    },
    {
      icon: "✅",
      title: "Ongoing Maintenance Available",
      description: "Keep your app updated with the latest iOS versions and features",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We're the Right Team for Your iOS App</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our specialized expertise in iOS development ensures your app will stand out in the App Store
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
