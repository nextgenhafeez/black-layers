"use client"

import Image from "next/image"
import { ExternalLink } from "lucide-react"

const apps = [
  {
    id: 1,
    title: "VooConnect",
    description:
      "A TikTok-like app that allows users to create and share reels. Also features a full-fledged chat system similar to WhatsApp.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-10-26%20at%2010.12.08%E2%80%AFAM-Fpw1maJSl6P3Cc0pKrlMVdA5WQQunv.png",
    industry: "Social Media",
    link: "https://apps.apple.com/app/vooconnect/id1573637452",
  },
  {
    id: 2,
    title: "AdClose – Adblock for Mobile",
    description:
      "A high-performance ad blocker helping users block unwanted ads across their device. Currently generating $10,000+ in monthly revenue.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-10-26%20at%209.22.10%E2%80%AFAM-1MJg9PAb3ZzBxKp7Aqj1lbvGEHKd5y.png",
    industry: "Utility / Ad Tech",
    link: "https://apps.apple.com/sa/app/adclose-adblock-for-mobile/id6443847618",
  },
  {
    id: 3,
    title: "DirectPads",
    description:
      "A robust real estate app that allows investors and sellers to send/receive offers. Integrated with the MLS (Multiple Listing Service) of the USA.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%201446-10-26%20at%2010.11.48%E2%80%AFAM-go4invFguf8XqHAyGeVe5zYuZbe1ty.png",
    industry: "Real Estate",
    link: "https://apps.apple.com/pk/app/directpads/id1585676126",
  },
]

export function IosPortfolio() {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold mb-2">Our iOS App Portfolio</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our successful iOS applications that have helped businesses grow and engage their users
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {apps.map((app) => (
            <div key={app.id} className="flex flex-col">
              <div className="relative h-[300px] mb-1 overflow-hidden rounded-lg">
                <Image
                  src={app.image || "/placeholder.svg"}
                  alt={app.title}
                  fill
                  className="object-contain p-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="pt-0">
                <div className="text-xs text-gray-500">Industry: {app.industry}</div>
                <h3 className="text-lg font-bold">{app.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{app.description}</p>
                <a
                  href={app.link}
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-1">View on App Store</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
