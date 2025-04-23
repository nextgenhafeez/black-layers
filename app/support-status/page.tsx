import { SupportStatusBox } from "@/components/support-status-box"
import { Clock, MessageCircle, Phone } from "lucide-react"

export default function SupportStatusPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-2 text-center">24/7 Support Status</h1>
      <p className="text-gray-400 text-center mb-12">Visual indicators of our always-available support services</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <SupportStatusBox
          title="24/7 Support"
          subtitle="Our team is available round the clock to address your concerns and queries."
          icon={<Clock className="h-8 w-8 text-primary" />}
        />

        <SupportStatusBox
          title="Live Chat Support"
          subtitle="Connect with our support team instantly through live chat for immediate assistance."
          icon={<MessageCircle className="h-8 w-8 text-primary" />}
          lineColor="#00aaff"
        />

        <SupportStatusBox
          title="Phone Support"
          subtitle="Call our dedicated support line for direct assistance with your queries."
          icon={<Phone className="h-8 w-8 text-primary" />}
          lineColor="#00ff7f"
        />
      </div>

      <div className="bg-card p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">About Our Support Status Indicators</h3>
        <div className="space-y-4 text-gray-300">
          <p>
            Our support status boxes provide real-time visual indicators of our support services availability. The key
            features include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Animated red border that continuously moves around the box edges</li>
            <li>Transparent black background with subtle blur effect</li>
            <li>Glowing edges that match the border color</li>
            <li>Pulsing green indicator showing active status</li>
            <li>Clear information about the type of support available</li>
          </ul>
          <p>
            These visual indicators are displayed throughout our website to ensure you always know that help is just a
            click away, no matter when you need assistance.
          </p>
        </div>
      </div>
    </div>
  )
}
