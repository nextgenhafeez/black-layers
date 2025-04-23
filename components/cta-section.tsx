import { InteractiveButton } from "./interactive-button"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-lg text-gray-300 mb-8">
          We're excited to hear about your ideas and help bring them to life. Our team is ready to provide the expertise
          and creativity needed for your next digital project.
          <span className="inline-flex items-center mx-2">
            <InteractiveButton href="#contact">Get in touch</InteractiveButton>
          </span>
          today to schedule a consultation and take the first step towards transforming your vision into reality.
        </p>
        <p className="text-gray-400 mt-4">No obligation, just a conversation about possibilities.</p>
      </div>
    </section>
  )
}
