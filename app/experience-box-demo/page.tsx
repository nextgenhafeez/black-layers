import { ExperienceBox } from "@/components/experience-box"

export default function ExperienceBoxDemo() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Experience Box Demo</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold mb-4">Default</h2>
          <ExperienceBox />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Custom Years</h2>
          <ExperienceBox years={15} title="Years in Industry" />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Custom Colors</h2>
          <ExperienceBox lineColor="#00ff00" glowIntensity={0.8} />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Custom Content</h2>
          <ExperienceBox
            years={20}
            title="Years of Excellence"
            subtitle="Two decades of delivering"
            description="exceptional solutions to our global clients."
          />
        </div>
      </div>
    </div>
  )
}

