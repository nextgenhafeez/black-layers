"use client"

import { motion } from "framer-motion"
import type { Skill } from "@/data/skills-data"

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  const getLevelStyles = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800"
      case "Advanced":
        return "bg-blue-100 text-blue-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div key={skill.name}>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-medium">{skill.name}</span>
        <span className={`rounded-full px-2 py-1 text-xs font-medium ${getLevelStyles(skill.level)}`}>
          {skill.level}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <motion.div
          className="h-full rounded-full bg-black"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
        ></motion.div>
      </div>
    </div>
  )
}
