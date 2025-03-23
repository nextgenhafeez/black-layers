export interface FiverrProfile {
  username: string
  displayName: string
  avatar: string
  level: string
  description: string
  memberSince: string
  languages: string[]
  skills: string[]
  responseTime: string
  responseRate: number
  orderCompletion: number
  onTimeDelivery: number
  satisfactionRate: number
  gigs: Gig[]
  reviews: FiverrReview[]
}

export interface Gig {
  id: string
  title: string
  description: string
  price: number
  images: string[]
  category: string
  tags: string[]
  deliveryTime: string
  revisions: string
  rating: number
  reviewCount: number
  isPro?: boolean
}

export interface FiverrReview {
  id: string
  reviewer: string
  reviewerCountry: string
  reviewerAvatar: string
  rating: number
  comment: string
  date: string
  gigId?: string
}

// Mock data for the Fiverr profile
const fiverrProfiles: Record<string, FiverrProfile> = {
  hinaqadir: {
    username: "hinaqadir",
    displayName: "Hina Qadir",
    avatar: "/placeholder.svg?height=200&width=200",
    level: "Level 2 Seller",
    description:
      "Professional graphic designer specializing in logo design, branding, and UI/UX design with over 5 years of experience.",
    memberSince: "January 2019",
    languages: ["English", "Urdu"],
    skills: ["Logo Design", "Branding", "UI/UX Design", "Illustration", "Photoshop", "Illustrator", "Figma"],
    responseTime: "Within 1 hour",
    responseRate: 98,
    orderCompletion: 99,
    onTimeDelivery: 97,
    satisfactionRate: 4.9,
    gigs: [
      {
        id: "gig1",
        title: "I will design a modern minimalist logo for your business",
        description:
          "I will create a modern, minimalist, and professional logo design for your business, brand, or product. My designs are unique, memorable, and tailored to your specific needs. I use a combination of typography, simple shapes, and negative space to create logos that stand out.",
        price: 50,
        images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        category: "Logo Design",
        tags: ["minimalist", "modern", "professional", "business", "branding"],
        deliveryTime: "2 days",
        revisions: "Unlimited",
        rating: 4.9,
        reviewCount: 253,
        isPro: true,
      },
      {
        id: "gig2",
        title: "I will design a complete brand identity package",
        description:
          "Get a complete brand identity package including logo design, business card, letterhead, social media kit, and brand guidelines. Perfect for startups and businesses looking to establish a professional brand presence.",
        price: 150,
        images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        category: "Brand Identity",
        tags: ["branding", "identity", "logo", "business card", "letterhead"],
        deliveryTime: "5 days",
        revisions: "5 revisions",
        rating: 4.8,
        reviewCount: 187,
        isPro: true,
      },
      {
        id: "gig3",
        title: "I will design a custom illustration for your project",
        description:
          "Custom illustrations for your website, social media, or print materials. I specialize in character design, scene illustrations, and decorative elements that bring your ideas to life.",
        price: 80,
        images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        category: "Illustration",
        tags: ["illustration", "character design", "digital art", "custom"],
        deliveryTime: "3 days",
        revisions: "3 revisions",
        rating: 4.7,
        reviewCount: 124,
      },
      {
        id: "gig4",
        title: "I will design a professional UI/UX for your website or app",
        description:
          "Professional UI/UX design for websites and mobile applications. I focus on creating intuitive, user-friendly interfaces that enhance user experience while maintaining aesthetic appeal.",
        price: 200,
        images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        category: "UI/UX Design",
        tags: ["ui design", "ux design", "web design", "app design", "interface"],
        deliveryTime: "7 days",
        revisions: "4 revisions",
        rating: 4.9,
        reviewCount: 98,
        isPro: true,
      },
      {
        id: "gig5",
        title: "I will create social media graphics for your brand",
        description:
          "Eye-catching social media graphics designed to increase engagement and maintain brand consistency across all platforms. Package includes posts, stories, covers, and profile pictures.",
        price: 60,
        images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        category: "Social Media",
        tags: ["social media", "instagram", "facebook", "twitter", "graphics"],
        deliveryTime: "2 days",
        revisions: "2 revisions",
        rating: 4.8,
        reviewCount: 156,
      },
      {
        id: "gig6",
        title: "I will design a custom packaging for your product",
        description:
          "Stand out on the shelves with custom packaging design that captures attention and communicates your brand values. Includes box design, label design, and mockups.",
        price: 120,
        images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
        category: "Packaging",
        tags: ["packaging", "product design", "box design", "label design"],
        deliveryTime: "4 days",
        revisions: "3 revisions",
        rating: 4.7,
        reviewCount: 89,
      },
    ],
    reviews: [
      {
        id: "review1",
        reviewer: "John Smith",
        reviewerCountry: "United States",
        reviewerAvatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        comment:
          "Absolutely amazing work! Hina understood exactly what I was looking for and delivered a perfect logo for my business. Communication was excellent throughout the process.",
        date: "2 weeks ago",
        gigId: "gig1",
      },
      {
        id: "review2",
        reviewer: "Emma Johnson",
        reviewerCountry: "United Kingdom",
        reviewerAvatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        comment:
          "The brand identity package exceeded my expectations. Every element was thoughtfully designed and the brand guidelines are incredibly helpful. Highly recommend!",
        date: "1 month ago",
        gigId: "gig2",
      },
      {
        id: "review3",
        reviewer: "Michael Chen",
        reviewerCountry: "Canada",
        reviewerAvatar: "/placeholder.svg?height=50&width=50",
        rating: 4,
        comment:
          "Great illustrations that perfectly captured the style I was looking for. Would have given 5 stars but needed an extra revision to get the colors just right.",
        date: "3 weeks ago",
        gigId: "gig3",
      },
      {
        id: "review4",
        reviewer: "Sophia Rodriguez",
        reviewerCountry: "Spain",
        reviewerAvatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        comment:
          "The UI/UX design for my app is fantastic! Users have commented on how intuitive and beautiful the interface is. Worth every penny.",
        date: "2 months ago",
        gigId: "gig4",
      },
      {
        id: "review5",
        reviewer: "David Kim",
        reviewerCountry: "Australia",
        reviewerAvatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        comment:
          "Our social media engagement has increased significantly since implementing Hina's designs. The consistent style across all platforms has really strengthened our brand.",
        date: "3 weeks ago",
        gigId: "gig5",
      },
      {
        id: "review6",
        reviewer: "Laura Martinez",
        reviewerCountry: "Mexico",
        reviewerAvatar: "/placeholder.svg?height=50&width=50",
        rating: 4,
        comment:
          "The packaging design looks professional and stands out on shelves. The only reason for 4 stars is that we needed several revisions to get the dimensions right.",
        date: "1 month ago",
        gigId: "gig6",
      },
      {
        id: "review7",
        reviewer: "Thomas Wilson",
        reviewerCountry: "Germany",
        reviewerAvatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        comment:
          "Hina is incredibly talented and professional. The logo design process was smooth and the end result is perfect for my brand.",
        date: "2 weeks ago",
        gigId: "gig1",
      },
      {
        id: "review8",
        reviewer: "Olivia Brown",
        reviewerCountry: "France",
        reviewerAvatar: "/placeholder.svg?height=50&width=50",
        rating: 5,
        comment:
          "The illustrations are beautiful and exactly what I envisioned. Hina was responsive and incorporated all my feedback perfectly.",
        date: "1 month ago",
        gigId: "gig3",
      },
    ],
  },
}

export async function getFiverrProfile(username: string): Promise<FiverrProfile> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (fiverrProfiles[username]) {
    return fiverrProfiles[username]
  } else {
    throw new Error(`Profile not found for username: ${username}`)
  }
}

export async function getGigDetails(username: string, gigId: string): Promise<Gig | null> {
  await new Promise((resolve) => setTimeout(resolve, 300))

  const profile = fiverrProfiles[username]
  if (!profile) return null

  return profile.gigs.find((gig) => gig.id === gigId) || null
}

export async function getGigReviews(username: string, gigId: string): Promise<FiverrReview[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))

  const profile = fiverrProfiles[username]
  if (!profile) return []

  return profile.reviews.filter((review) => review.gigId === gigId)
}

