import { Clock, Mail, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-black py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-gray-300 text-xl mb-8">We're here to help you 24/7, 365 days a year</p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#contact-options"
                className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="#faq"
                className="px-6 py-3 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-700 transition-colors"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section id="contact-options" className="py-16 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Options</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-card p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-gray-400 mb-4">
                Connect with our support team instantly through live chat for immediate assistance.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>Available 24/7</span>
              </div>
              <button className="w-full py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors">
                Start Chat
              </button>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Support</h3>
              <p className="text-gray-400 mb-4">
                Call our dedicated support line for direct assistance with your queries.
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>Available 24/7</span>
              </div>
              <a
                href="tel:+15874296200"
                className="block w-full py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors text-center"
              >
                +1 (587) 429-6200
              </a>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-gray-400 mb-4">Send us an email and our team will respond promptly to your inquiry.</p>
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span>Response within 24 hours</span>
              </div>
              <a
                href="mailto:support@blacklayers.com"
                className="block w-full py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors text-center"
              >
                support@blacklayers.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What are your support hours?</h3>
              <p className="text-gray-400">
                Our support team is available 24 hours a day, 7 days a week, 365 days a year. We're always here to help
                you, regardless of the time or day.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">How quickly will I receive a response?</h3>
              <p className="text-gray-400">
                For live chat, our average response time is under 2 minutes. Phone calls are answered immediately during
                business hours. Email inquiries are typically responded to within 24 hours.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Do you offer support in multiple languages?</h3>
              <p className="text-gray-400">
                Yes, our support team can assist you in English, French, Spanish, and Mandarin. Please specify your
                preferred language when contacting us.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">How do I report a technical issue?</h3>
              <p className="text-gray-400">
                You can report technical issues through any of our support channels. For faster resolution, please
                include details such as the steps to reproduce the issue, any error messages, and screenshots if
                possible.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Do you offer priority support?</h3>
              <p className="text-gray-400">
                Yes, we offer priority support for enterprise clients. Contact your account manager for more information
                about our priority support packages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
