import { ProjectCompletionStatus } from "./project-completion-status"
import { SupportStatusBox } from "./support-status-box"
import { ExperienceBox } from "./experience-box"

export function About() {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Black Layers</h2>
          <div className="mt-4 h-1 w-12 bg-primary mx-auto"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Who We Are</h3>
            <p className="text-gray-400">
              Black Layers is a premier IT consultancy dedicated to delivering exceptional digital solutions. With our
              expertise in full-stack development and deployment services, we help businesses transform their ideas into
              successful digital products.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-400">
              Our mission is to provide innovative, high-quality IT solutions that help our clients achieve their
              business objectives. We are committed to 100% project completion and successful handover, ensuring our
              clients receive maximum value from our services.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <ProjectCompletionStatus
            percentage={100}
            title="Project Completion"
            subtitle="We guarantee complete project delivery and successful handover to our clients."
            showPercentage={true}
            animateOnLoad={true}
            lineColor="#ffffff" // Set line color to white
          />
          <SupportStatusBox
            title="24/7 Support"
            subtitle="Our team is available round the clock to address your concerns and queries."
            lineColor="#ffffff" // Set line color to white
          />
          <ExperienceBox
            years={10}
            title="Years Experience"
            subtitle="With over a decade of experience,"
            description="we bring expertise and innovation to every project."
            lineColor="#ffffff" // Set line color to white
          />
        </div>
      </div>
    </section>
  )
}

