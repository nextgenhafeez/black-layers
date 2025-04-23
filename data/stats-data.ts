export interface Stat {
  id: string
  title: string
  value: string
  description: string
  icon: string
  color: string
}

export const performanceStats: Stat[] = [
  {
    id: "rating",
    title: "Average Rating",
    value: "4.9",
    description: "from 187 reviews",
    icon: "Star",
    color: "yellow",
  },
  {
    id: "completion",
    title: "Completion Rate",
    value: "98%",
    description: "orders completed successfully",
    icon: "CheckCircle",
    color: "green",
  },
  {
    id: "delivery",
    title: "On-time Delivery",
    value: "99%",
    description: "delivered before deadline",
    icon: "Clock",
    color: "blue",
  },
  {
    id: "orders",
    title: "Orders Completed",
    value: "215+",
    description: "satisfied clients",
    icon: "ShoppingBag",
    color: "purple",
  },
]
