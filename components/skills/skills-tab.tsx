"use client"

import { motion } from "framer-motion"
import { skillCategories } from "@/data/skills-data"
import { CategoryCard } from "./category-card"

export function SkillsTab() {
  return (
    <motion.div
      key="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {skillCategories.map((category, index) => (
        <CategoryCard key={category.name} category={category} index={index} />
      ))}
    </motion.div>
  )
}
