"use client"

import { motion } from "framer-motion"
import type { SkillCategory } from "@/data/skills-data"
import { SkillCard } from "./skill-card"

interface CategoryCardProps {
  category: SkillCategory
  index: number
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <h3 className="mb-4 text-xl font-bold">{category.name}</h3>
      <div className="space-y-5">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}
