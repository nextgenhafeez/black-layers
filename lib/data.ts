export interface FiverrProfile {
  username: string
  displayName: string
  title: string
  description: string
  avatar: string
  level: string
  memberSince: string
  responseTime: string
  languages: string[]
  skills: Skill[]
  stats: Stats
  gigs: Gig[]
  reviews: Review[]
}

export interface Skill {
  name: string
  level: number // 1-5
  category: string
}

export interface Stats {
  rating: number
  reviews: number
  completionRate: number
  onTimeDelivery: number
  responseRate: number
  orderCount: number
}

export interface Gig {
  id: string
  title: string
  description: string
  image: string
  price: number
  deliveryTime: string
  category: string
  tags: string[]
}

export interface Review {
  id: string
  clientName: string
  clientCountry: string
  clientAvatar: string
  rating: number
  comment: string
  date: string
  gigTitle: string
}

export function getFiverrProfile(): FiverrProfile {
  return {
    username: "hinaqadir",
    displayName: "Hina Qadir",
    title: "Professional Web & Mobile App Developer",
    description:
      "Experienced full-stack developer specializing in creating modern, responsive web applications and mobile apps. With over 5 years of experience, I deliver high-quality solutions tailored to your business needs.",
    avatar: "/placeholder.svg?height=300&width=300",
    level: "Level 2 Seller",
    memberSince: "January 2020",
    responseTime: "Within a few hours",
    languages: ["English", "Urdu"],
    skills: [
      { name: "React.js", level: 5, category: "Frontend" },
      { name: "Node.js", level: 4, category: "Backend" },
      { name: "React Native", level: 4, category: "Mobile" },
      { name: "JavaScript", level: 5, category: "Programming" },
      { name: "TypeScript", level: 4, category: "Programming" },
      { name: "HTML/CSS", level: 5, category: "Frontend" },
      { name: "MongoDB", level: 4, category: "Database" },
      { name: "UI/UX Design", level: 3, category: "Design" },
      { name: "Express.js", level: 4, category: "Backend" },
      { name: "Next.js", level: 4, category: "Frontend" },
      { name: "Firebase", level: 4, category: "Backend" },
      { name: "RESTful APIs", level: 5, category: "Backend" },
    ],
    stats: {
      rating: 4.9,
      reviews: 187,
      completionRate: 98,
      onTimeDelivery: 99,
      responseRate: 100,
      orderCount: 215,
    },
    gigs: [
      {
        id: "gig1",
        title: "I will develop a responsive website using React and Next.js",
        description:
          "Get a modern, fast, and SEO-friendly website built with the latest technologies. Includes responsive design, animations, and integration with your backend services.",
        image: "/placeholder.svg?height=600&width=800",
        price: 150,
        deliveryTime: "3 days",
        category: "Web Development",
        tags: ["react", "nextjs", "responsive", "frontend"],
      },
      {
        id: "gig2",
        title: "I will create a custom React Native mobile app for iOS and Android",
        description:
          "Get your business idea transformed into a fully functional mobile app for both iOS and Android platforms using React Native. Includes UI design and backend integration.",
        image: "/placeholder.svg?height=600&width=800",
        price: 300,
        deliveryTime: "7 days",
        category: "Mobile Development",
        tags: ["react native", "mobile app", "ios", "android"],
      },
      {
        id: "gig3",
        title: "I will build a MERN stack web application with authentication",
        description:
          "Full-stack web application development using MongoDB, Express.js, React, and Node.js. Includes user authentication, database design, and API development.",
        image: "/placeholder.svg?height=600&width=800",
        price: 250,
        deliveryTime: "5 days",
        category: "Full Stack Development",
        tags: ["mern", "mongodb", "express", "react", "node"],
      },
      {
        id: "gig4",
        title: "I will develop a custom e-commerce website with payment integration",
        description:
          "Get a complete e-commerce solution with product management, shopping cart, checkout process, and payment gateway integration. Mobile-responsive and SEO-friendly.",
        image: "/placeholder.svg?height=600&width=800",
        price: 400,
        deliveryTime: "10 days",
        category: "E-commerce",
        tags: ["ecommerce", "stripe", "paypal", "shopping cart"],
      },
    ],
    reviews: [
      {
        id: "rev1",
        clientName: "Alex Johnson",
        clientCountry: "United States",
        clientAvatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        comment:
          "Hina delivered an exceptional website that exceeded my expectations. Her communication was clear throughout the project, and she implemented all the features I requested. I'll definitely work with her again!",
        date: "2 weeks ago",
        gigTitle: "I will develop a responsive website using React and Next.js",
      },
      {
        id: "rev2",
        clientName: "Sarah Williams",
        clientCountry: "United Kingdom",
        clientAvatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        comment:
          "The mobile app Hina created for my business is fantastic! It works flawlessly on both iOS and Android, and the user interface is beautiful. She was very responsive to my feedback and made revisions quickly.",
        date: "1 month ago",
        gigTitle: "I will create a custom React Native mobile app for iOS and Android",
      },
      {
        id: "rev3",
        clientName: "Michael Chen",
        clientCountry: "Canada",
        clientAvatar: "/placeholder.svg?height=100&width=100",
        rating: 4,
        comment:
          "Great experience working with Hina on my e-commerce website. She implemented all the features I needed and the payment integration works perfectly. The only reason for 4 stars is that we had some minor delays, but the final product is excellent.",
        date: "2 months ago",
        gigTitle: "I will develop a custom e-commerce website with payment integration",
      },
      {
        id: "rev4",
        clientName: "Emma Rodriguez",
        clientCountry: "Australia",
        clientAvatar: "/placeholder.svg?height=100&width=100",
        rating: 5,
        comment:
          "Hina is a true professional! She built a complete web application for my startup, including user authentication and database integration. The code is clean and well-documented, making it easy for our team to maintain.",
        date: "3 months ago",
        gigTitle: "I will build a MERN stack web application with authentication",
      },
    ],
  }
}
