"use client"

import { motion } from "framer-motion"
import { reviews } from "@/data/reviews-data"
import { ReviewCard } from "./review-card"

export function ReviewsTab() {
  return (
    <motion.div
      key="reviews"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Client Reviews</h3>
        <p className="mx-auto max-w-2xl text-gray-600">
          See what clients are saying about their experience working with me.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review, index) => (
          <ReviewCard key={review.id} review={review} index={index} />
        ))}
      </div>
    </motion.div>
  )
}
