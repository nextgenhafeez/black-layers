"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Palette, Globe, Zap, Award, BarChart } from "lucide-react"

export function WhiteLabelSection() {
  const benefits = [
    {
      icon: Palette,
      title: "Custom Branding",
      description:
        "Fully customize the look and feel to match your brand identity with your logo, colors, and design elements.",
    },
    {
      icon: Globe,
      title: "Expand Market Reach",
      description: "Quickly enter new markets without the time and cost of building applications from scratch.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Launch your branded application in weeks, not months, with our streamlined development process.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "Leverage enterprise-grade technology and infrastructure while maintaining your unique brand presence.",
    },
    {
      icon: BarChart,
      title: "Scalable Solutions",
      description: "Grow your user base without worrying about technical limitations or performance issues.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
              White-Label Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Transform Your Business with <span className="text-blue-600">White-Labeled Applications</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Launch your own branded applications without the complexity of building from scratch. Our white-label
              solutions provide a seamless path to market with your identity at the forefront.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Discuss your white-label project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100/30 rounded-3xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="h-12 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto pr-8 text-white font-medium">Your Brand App</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-10 w-32 bg-gray-100 rounded-md animate-pulse"></div>
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <Palette className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-100 rounded w-5/6 animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="h-24 bg-gray-100 rounded-lg animate-pulse"></div>
                    <div className="h-24 bg-gray-100 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="flex justify-center">
                    <div className="h-10 w-32 rounded-md bg-blue-600 animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 animate-pulse">
                  <span className="text-xs font-medium">YOUR LOGO</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
