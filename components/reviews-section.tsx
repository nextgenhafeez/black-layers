"use client"

import Image from "next/image"
import type { Review } from "@/lib/data"
import { Star, Quote } from "lucide-react"

interface ReviewsSectionProps {
  reviews: Review[]
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={review.clientAvatar || "/placeholder.svg"}
                alt={review.clientName}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{review.clientName}</h3>
              <p className="text-sm text-gray-500">{review.clientCountry}</p>
              <div className="flex mt-1">{renderStars(review.rating)}</div>
            </div>
            <div className="ml-auto text-xs text-gray-500">{review.date}</div>
          </div>

          <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-100 rotate-180" />
            <p className="text-gray-700 pl-4 relative z-10">{review.comment}</p>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Service:</span> {review.gigTitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

