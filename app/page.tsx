import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhiteLabelSection } from "@/components/white-label-section"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { SkillsExpertise } from "@/components/skills-expertise"

// Example of adding metadata to your home page
export const metadata = {
  title: "Black Layers | Digital Product Studio & Custom Web Applications",
  description:
    "Transform your business with custom white-label applications, React development, and digital solutions by Black Layers studio.",
  keywords: "digital product studio, custom web applications, white-label solutions, React development",
}

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
