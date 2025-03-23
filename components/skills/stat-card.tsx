"use client"

import { motion } from "framer-motion"
import { Star, CheckCircle, Clock, ShoppingBag } from "lucide-react"
import type { Stat } from "@/data/stats-data"

interface StatCardProps {
  stat: Stat
}

export function StatCard({ stat }: StatCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return <Star className={`h-8 w-8 text-${stat.color}-500`} />
      case "CheckCircle":
        return <CheckCircle className={`h-8 w-8 text-${stat.color}-500`} />
      case "Clock":
        return <Clock className={`h-8 w-8 text-${stat.color}-500`} />
      case "ShoppingBag":
        return <ShoppingBag className={`h-8 w-8 text-${stat.color}-500`} />
      default:
        return null
    }
  }

  return (
    <motion.div
      className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-${stat.color}-100`}>
        {getIcon(stat.icon)}
      </div>
      <span className="mb-1 text-4xl font-bold">{stat.value}</span>
      <span className="mb-1 font-medium text-gray-700">{stat.title}</span>
      <span className="text-sm text-gray-500">{stat.description}</span>
    </motion.div>
  )
}

