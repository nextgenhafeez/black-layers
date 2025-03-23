import type { Gig } from "@/lib/fiverr-data"
import Image from "next/image"
import Link from "next/link"
import { Award, Clock, Star } from "lucide-react"

interface GigsListProps {
  gigs: Gig[]
}

export default function GigsList({ gigs }: GigsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {gigs.map((gig) => (
        <Link key={gig.id} href={`/gig/${gig.id}`} className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={gig.images[0] || "/placeholder.svg"}
                alt={gig.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {gig.isPro && (
                <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  PRO
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {gig.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{gig.description}</p>
              <div className="flex items-center mb-3">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium ml-1">{gig.rating}</span>
                <span className="text-sm text-gray-500 ml-1">({gig.reviewCount})</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {gig.deliveryTime}
                </div>
                <div className="font-bold text-gray-900">From ${gig.price}</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

