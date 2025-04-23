import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhiteLabelSection } from "@/components/white-label-section"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { SkillsExpertise } from "@/components/skills-expertise"

// Enhanced metadata for better SEO
export const metadata = {
  title: "Black Layers | Premium Digital Product Studio & Custom Web Applications",
  description:
    "Transform your business with custom white-label applications, React development, and innovative digital solutions by Black Layers studio. Expert web development services.",
  keywords:
    "digital product studio, custom web applications, white-label solutions, React development, Next.js development, UI/UX design, web development services, digital transformation",
  alternates: {
    canonical: "https://blacklayers.ca",
  },
  openGraph: {
    title: "Black Layers | Digital Product Studio",
    description: "Transform your business with custom white-label applications and digital solutions.",
    url: "https://blacklayers.ca",
    siteName: "Black Layers",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Layers | Digital Product Studio",
    description: "Transform your business with custom white-label applications and digital solutions.",
    creator: "@blacklayers",
  },
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
