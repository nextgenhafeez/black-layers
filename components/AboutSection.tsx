"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            ref={ref}
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-lg -z-10"></div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="About us"
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Approach</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              We believe that great websites should not only look beautiful but also provide an engaging experience. Our
              scroll animations are designed to enhance user engagement and make content discovery a delightful journey.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Each animation is carefully crafted to be smooth, responsive, and accessible. We prioritize performance to
              ensure that animations enhance rather than hinder the user experience.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-purple-600 dark:text-purple-400 font-bold text-xl mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Animation Effects</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-purple-600 dark:text-purple-400 font-bold text-xl mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Responsive Design</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-purple-600 dark:text-purple-400 font-bold text-xl mb-2">99%</div>
                <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="text-purple-600 dark:text-purple-400 font-bold text-xl mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

