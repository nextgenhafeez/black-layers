export interface ChatResponse {
  keywords: string[]
  response: string
}

export const chatResponses: ChatResponse[] = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hello! Welcome to Black Layers. How can I assist you today?",
  },
  {
    keywords: ["services", "offer", "provide", "what do you do"],
    response:
      "Black Layers offers a range of digital services including web development, UI/UX design, branding, and white-label solutions. Our team specializes in creating custom digital experiences that help businesses grow online.",
  },
  {
    keywords: ["pricing", "cost", "price", "how much", "rates"],
    response:
      "Our pricing varies based on project requirements and scope. We offer competitive rates and custom quotes for each project. Would you like to discuss your specific needs so we can provide a tailored estimate?",
  },
  {
    keywords: ["portfolio", "work", "projects", "examples"],
    response:
      "You can explore our portfolio on our website to see examples of our previous work. We've worked with clients across various industries, delivering high-quality digital solutions that meet their unique needs.",
  },
  {
    keywords: ["contact", "reach", "email", "phone", "talk to someone"],
    response:
      "You can contact our team via email at contact@blacklayers.com or fill out the contact form on our website. We typically respond within 24 hours on business days.",
  },
  {
    keywords: ["timeline", "how long", "duration", "time frame"],
    response:
      "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while more complex applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    keywords: ["process", "workflow", "how does it work"],
    response:
      "Our process typically includes discovery, planning, design, development, testing, and launch phases. We maintain clear communication throughout and involve you at key decision points to ensure the final product meets your expectations.",
  },
  {
    keywords: ["white label", "white-label"],
    response:
      "Our white-label solutions allow businesses to offer digital products and services under their own brand. We handle the development and technical aspects while you focus on your client relationships and business growth.",
  },
  {
    keywords: ["support", "maintenance", "after launch"],
    response:
      "We offer ongoing support and maintenance packages to keep your digital products running smoothly. This includes regular updates, security patches, and technical assistance when needed.",
  },
  {
    keywords: ["technology", "tech stack", "platform", "framework"],
    response:
      "We work with modern technologies including React, Next.js, Node.js, and various CMS platforms. Our tech stack is chosen based on project requirements to ensure optimal performance and scalability.",
  },
]

export function findResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Check for exact matches first
  for (const item of chatResponses) {
    if (item.keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return item.response
    }
  }

  // Default response if no match is found
  return "I'm not sure I understand. Could you please rephrase your question? You can ask about our services, pricing, portfolio, or contact information."
}
