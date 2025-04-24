import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { IosPortfolio } from "@/components/ios-portfolio"
import { IosTestimonials } from "@/components/ios-testimonials"
import { TrustElements } from "@/components/trust-elements"
import { Contact } from "@/components/contact"

// Update the metadata for SEO
export const metadata = {
  title: "iOS App Development Company | Black Layers",
  description:
    "Professional iOS app development services. We design and develop high-performance iOS applications tailored to your business needs — from idea to App Store launch.",
  keywords: "iOS app development, Swift development, iOS developer, custom iOS apps, iPhone app development",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhyChooseUs />
      <IosPortfolio />
      <IosTestimonials />
      <TrustElements />
      <Contact />
    </div>
  )
}
