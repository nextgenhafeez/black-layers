export interface Review {
  id: number
  name: string
  country: string
  date: string
  rating: number
  comment: string
  service: string
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Johnson",
    country: "United States",
    date: "2 weeks ago",
    rating: 5,
    comment:
      "Abdul Qadir delivered an exceptional website that exceeded my expectations. His communication was clear throughout the project, and he implemented all the features I requested. I'll definitely work with him again!",
    service: "I will develop a responsive website using React and Next.js",
  },
  {
    id: 2,
    name: "Sarah Williams",
    country: "United Kingdom",
    date: "1 month ago",
    rating: 5,
    comment:
      "The mobile app Abdul Qadir created for my business is fantastic! It works flawlessly on both iOS and Android, and the user interface is beautiful. He was very responsive to my feedback and made revisions quickly.",
    service: "I will create a custom React Native mobile app for iOS and Android",
  },
  {
    id: 3,
    name: "Michael Chen",
    country: "Canada",
    date: "2 months ago",
    rating: 4,
    comment:
      "Great experience working with Abdul Qadir on my e-commerce website. He implemented all the features I needed and the payment integration works perfectly. The only reason for 4 stars is that we had some minor delays, but the final product is excellent.",
    service: "I will develop a custom e-commerce website with payment integration",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    country: "Australia",
    date: "3 months ago",
    rating: 5,
    comment:
      "Abdul Qadir is a true professional! He built a complete web application for my startup, including user authentication and database integration. The code is clean and well-documented, making it easy for our team to maintain.",
    service: "I will build a MERN stack web application with authentication",
  },
]

