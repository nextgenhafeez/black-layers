import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhiteLabelSection } from "@/components/white-label-section"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { SkillsExpertise } from "@/components/skills-expertise"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SkillsExpertise />
      <Services />
      <WhiteLabelSection />
      <Portfolio />
      <Contact />
    </div>
  )
}

