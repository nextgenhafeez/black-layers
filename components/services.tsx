"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Server, Lightbulb, CheckCircle, Rocket } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Custom iOS & Android applications that deliver exceptional user experiences with robust functionality.",
  },
  {
    icon: Server,
    title: "Deployment & Integration",
    description: "Seamless deployment and integration of solutions into your existing business ecosystem.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Planning",
    description: "Collaborative ideation and planning for products that align with your business goals.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored solutions built with modern technologies to meet your specific requirements.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous testing to ensure your applications meet the highest quality standards.",
  },
  {
    icon: Rocket,
    title: "Ongoing Support",
    description: "Continuous maintenance and updates to keep your applications running smoothly.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Our Expertise
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Services We Offer</h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive solutions to transform your ideas into successful digital products
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full light-card p-8">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

