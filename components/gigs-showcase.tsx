import Image from "next/image"
import type { Gig } from "@/lib/data"
import { Clock } from "lucide-react"

interface GigsShowcaseProps {
  gigs: Gig[]
}

export function GigsShowcase({ gigs }: GigsShowcaseProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {gigs.map((gig) => (
        <div
          key={gig.id}
          className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={gig.image || "/placeholder.svg"}
              alt={gig.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-5">
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <Clock className="w-3 h-3 mr-1" />
              <span>{gig.deliveryTime}</span>
              <span className="mx-2">•</span>
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full">{gig.category}</span>
            </div>

            <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
              {gig.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{gig.description}</p>

            <div className="flex flex-wrap gap-1 mb-4">
              {gig.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500">Starting at</span>
              <span className="text-xl font-bold text-green-600">${gig.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
