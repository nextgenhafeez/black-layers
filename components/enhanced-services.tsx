import { Code, Smartphone, Server, Lightbulb, CheckCircle, Rocket } from "lucide-react"
import { HornsInnovationCard } from "./horns-innovation-card"
import { HornsInnovationHover } from "./horns-innovation-hover"

export function EnhancedServices() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="mt-4 text-gray-400 md:text-xl">Comprehensive IT solutions tailored to your business needs</p>
          <div className="mt-4 h-1 w-12 bg-white mx-auto"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <HornsInnovationCard
            title="iOS & Android Development"
            description="Full-stack mobile application development for iOS and Android platforms, ensuring seamless user experiences and robust functionality."
            icon={<Smartphone className="h-6 w-6" />}
          />

          <HornsInnovationCard
            title="Deployment Services"
            description="Complete deployment services including server setup, configuration, and maintenance to ensure your applications run smoothly."
            icon={<Server className="h-6 w-6" />}
          />

          <HornsInnovationCard
            title="Project Ideation"
            description="Collaborative project ideation sessions to help you refine your ideas and develop a clear roadmap for successful implementation."
            icon={<Lightbulb className="h-6 w-6" />}
          />

          <HornsInnovationCard
            title="Full-Stack Development"
            description="End-to-end development services covering both frontend and backend, ensuring a cohesive and integrated solution."
            icon={<Code className="h-6 w-6" />}
          />

          <HornsInnovationCard
            title="Quality Assurance"
            description="Rigorous testing and quality assurance processes to ensure your applications are bug-free and perform optimally."
            icon={<CheckCircle className="h-6 w-6" />}
          />

          <HornsInnovationCard
            title="Maintenance & Support"
            description="Ongoing maintenance and support services to keep your applications up-to-date and running smoothly after deployment."
            icon={<Rocket className="h-6 w-6" />}
          />
        </div>

        {/* Horns of Innovation hover animation pointing to portfolio section */}
        <div className="flex justify-center mt-16">
          <HornsInnovationHover text="View Our Portfolio" direction="down" size="md" />
        </div>
      </div>
    </section>
  )
}
