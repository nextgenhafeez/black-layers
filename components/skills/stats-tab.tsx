"use client"

import { motion } from "framer-motion"
import { performanceStats } from "@/data/stats-data"
import { StatCard } from "./stat-card"

export function StatsTab() {
  return (
    <motion.div
      key="stats"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Performance Stats</h3>
        <p className="mx-auto max-w-2xl text-gray-600">
          A track record of excellence and reliability in delivering quality services.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {performanceStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </motion.div>
  )
}
