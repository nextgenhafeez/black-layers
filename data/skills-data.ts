export interface Skill {
  name: string
  level: "Expert" | "Advanced" | "Intermediate" | "Basic" | "Beginner"
  percentage: number
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: "Expert", percentage: 95 },
      { name: "HTML/CSS", level: "Expert", percentage: 95 },
      { name: "Next.js", level: "Advanced", percentage: 85 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced", percentage: 85 },
      { name: "Express.js", level: "Advanced", percentage: 85 },
      { name: "Firebase", level: "Advanced", percentage: 80 },
      { name: "RESTful APIs", level: "Expert", percentage: 90 },
    ],
  },
  {
    name: "Mobile",
    skills: [{ name: "React Native", level: "Advanced", percentage: 85 }],
  },
  {
    name: "Programming",
    skills: [
      { name: "JavaScript", level: "Expert", percentage: 95 },
      { name: "TypeScript", level: "Advanced", percentage: 85 },
    ],
  },
  {
    name: "Database",
    skills: [{ name: "MongoDB", level: "Advanced", percentage: 80 }],
  },
  {
    name: "Design",
    skills: [{ name: "UI/UX Design", level: "Intermediate", percentage: 70 }],
  },
]

