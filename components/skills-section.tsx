import type { Skill } from "@/lib/data"

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-4">Skills & Expertise</h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        A comprehensive overview of my technical skills and areas of expertise.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="space-y-4">
              {categorySkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">
                      {skill.level === 5
                        ? "Expert"
                        : skill.level === 4
                          ? "Advanced"
                          : skill.level === 3
                            ? "Intermediate"
                            : skill.level === 2
                              ? "Basic"
                              : "Beginner"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${skill.level * 20}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

