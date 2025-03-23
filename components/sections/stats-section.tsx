"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Globe, Award, Clock } from "lucide-react"

const stats = [
  {
    id: 1,
    value: 50,
    suffix: "+",
    label: "Clients worldwide",
    icon: Users,
  },
  {
    id: 2,
    value: 100,
    suffix: "%",
    label: "Project completion",
    icon: Award,
  },
  {
    id: 3,
    value: 12,
    suffix: "+",
    label: "Countries served",
    icon: Globe,
  },
  {
    id: 4,
    value: 10,
    suffix: "+",
    label: "Years experience",
    icon: Clock,
  },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-24 bg-secondary">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-4xl font-bold mb-2 flex items-center justify-center">
                <CountUp end={isInView ? stat.value : 0} duration={2} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, duration = 2 }) {
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true })

  return (
    <span ref={nodeRef}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2 },
          }}
        >
          {end}
        </motion.span>
      ) : (
        0
      )}
    </span>
  )
}

