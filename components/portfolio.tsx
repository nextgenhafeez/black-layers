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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-09-07%20at%2011.08.50%E2%80%AFPM.png-kStfOIpUowXWkyhpfhoKOkB4oUIGrR.jpeg",
    tags: ["Web Platform", "Real Estate", "Full-Stack"],
    link: "https://www.offeright.com/",
  },
  {
    id: 2,
    title: "Zero Messenger",
    description:
      "Next-generation secure messaging platform with advanced privacy features, end-to-end encryption, and AI assistance. Features zero-knowledge architecture and digital rights protection.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-09-07%20at%2011.13.22%E2%80%AFPM-VrmTgJ3lV5qUfmaocbthg8zf9x1Gfw.png",
    tags: ["Privacy", "AI", "Encryption", "Mobile"],
    link: "https://zero.tech/messenger",
  },
  {
    id: 3,
    title: "VooConnect",
    description:
      "Innovative social media platform for short-form video content and real-time communication. Includes features like live streaming, chat functionality, and voice messaging.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-09-07%20at%2011.17.11%E2%80%AFPM-03g0kRt06yt5sb2BNFhcewwxi79zo1.png",
    tags: ["Social Media", "Live Streaming", "Mobile", "Real-time"],
    link: "https://app.vooconnect.com/",
  },
  {
    id: 4,
    title: "DirectPads",
    description:
      "Real estate platform offering instant cash offers for homes within 24 hours. Features flexible closing timelines, no-obligation offers, and a streamlined selling process.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-09-07%20at%2011.19.58%E2%80%AFPM-dTqP8ZPnGiBhEkP0DH1cAm6gBjWAgC.png",
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

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="light-card overflow-hidden"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={450}
                  className={`h-full w-full object-cover transition-transform duration-500 ${
                    hoveredId === project.id ? "scale-105" : ""
                  }`}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
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
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
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
