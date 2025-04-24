"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Offeright",
    description:
      "A modern real estate platform empowering home buyers to create and submit offers directly. Features include a streamlined offer creation process and professional referral system.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-10-26%20at%2010.26.24%E2%80%AFAM-fxTmdIPj32oejcuCdDzWLqEtOF5Yc2.png",
    tags: ["Web Platform", "Real Estate", "Full-Stack"],
    link: "https://www.offeright.com/",
  },
  {
    id: 2,
    title: "AdClose – Adblock for Mobile",
    description:
      "A high-performance ad blocker helping users block unwanted ads across their device. Currently generating $10,000+ in monthly revenue.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-10-26%20at%209.22.10%E2%80%AFAM-1MJg9PAb3ZzBxKp7Aqj1lbvGEHKd5y.png",
    tags: ["Utility", "Ad Tech", "Mobile", "iOS"],
    link: "https://adclose.app/",
  },
  {
    id: 3,
    title: "VooConnect",
    description:
      "Innovative social media platform for short-form video content and real-time communication. Includes features like live streaming, chat functionality, and voice messaging.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-10-26%20at%2010.12.08%E2%80%AFAM-Fpw1maJSl6P3Cc0pKrlMVdA5WQQunv.png",
    tags: ["Social Media", "Live Streaming", "Mobile", "Real-time"],
    link: "https://app.vooconnect.com/",
  },
  {
    id: 4,
    title: "DirectPads",
    description:
      "Real estate platform offering instant cash offers for homes within 24 hours. Features flexible closing timelines, no-obligation offers, and a streamlined selling process.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-10-26%20at%2010.11.48%E2%80%AFAM-go4invFguf8XqHAyGeVe5zYuZbe1ty.png",
    tags: ["Real Estate", "FinTech", "Automation", "Web Platform"],
    link: "https://directpads.com/",
  },
]

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Our Work
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-lg">
            Take a look at some of our recent work and successful digital solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="light-card overflow-hidden"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="h-[350px] overflow-hidden relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={450}
                  className={`h-full w-full object-contain transition-transform duration-500 ${
                    hoveredId === project.id ? "scale-105" : ""
                  }`}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
