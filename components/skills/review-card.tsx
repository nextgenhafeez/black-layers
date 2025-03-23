"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import type { Review } from "@/data/reviews-data"

interface ReviewCardProps {
  review: Review
  index: number
}

export function ReviewCard({ review, index }: ReviewCardProps) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <motion.div
      key={review.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative rounded-xl bg-white p-6 shadow-sm"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="absolute -left-2 -top-2 text-gray-200">
        <Quote className="h-8 w-8 rotate-180" />
      </div>
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-gray-700">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.country}</p>
          <div className="mt-1 flex">{renderStars(review.rating)}</div>
        </div>
        <div className="ml-auto text-xs text-gray-500">{review.date}</div>
      </div>
      <p className="mb-4 text-gray-700">{review.comment}</p>
      <div className="border-t border-gray-100 pt-4 text-sm text-gray-600">
        <span className="font-medium">Service:</span> {review.service}
      </div>
    </motion.div>
  )
}

