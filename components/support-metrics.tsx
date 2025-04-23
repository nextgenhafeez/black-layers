import type { FiverrProfile } from "@/lib/fiverr-data"
import { Clock, CheckCircle, BarChart, MessageCircle, Star } from "lucide-react"

interface SupportMetricsProps {
  profile: FiverrProfile
}

export default function SupportMetrics({ profile }: SupportMetricsProps) {
  const metrics = [
    {
      icon: <Clock className="h-6 w-6 text-green-500" />,
      title: "Response Time",
      value: profile.responseTime,
      description: "Average time to respond to messages",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-500" />,
      title: "Response Rate",
      value: `${profile.responseRate}%`,
      description: "Percentage of messages responded to",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      title: "Order Completion",
      value: `${profile.orderCompletion}%`,
      description: "Percentage of orders completed successfully",
    },
    {
      icon: <BarChart className="h-6 w-6 text-green-500" />,
      title: "On-time Delivery",
      value: `${profile.onTimeDelivery}%`,
      description: "Percentage of orders delivered on time",
    },
    {
      icon: <Star className="h-6 w-6 text-green-500" />,
      title: "Satisfaction Rate",
      value: `${profile.satisfactionRate}/5`,
      description: "Average rating from customers",
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg">
            <div className="mb-2">{metric.icon}</div>
            <h3 className="font-semibold text-gray-900">{metric.title}</h3>
            <p className="text-2xl font-bold text-green-600 my-2">{metric.value}</p>
            <p className="text-xs text-gray-500">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
