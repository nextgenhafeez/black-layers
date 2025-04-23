"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const articles = [
  {
    id: 1,
    title: "The Future of Digital Product Design",
    excerpt: "Exploring emerging trends and technologies that are shaping the future of digital product design.",
    date: "June 15, 2023",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-of-digital-product-design",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    excerpt:
      "Best practices and architectural patterns for building web applications that can scale with your business.",
    date: "May 22, 2023",
    category: "Development",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-scalable-web-applications",
  },
  {
    id: 3,
    title: "User-Centered Design Process",
    excerpt: "A comprehensive guide to implementing a user-centered design process in your organization.",
    date: "April 10, 2023",
    category: "Design",
    image: "/placeholder.svg?height=400&width=600",
    slug: "user-centered-design-process",
  },
]

export function BlogSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Latest insights</h2>
          </div>
          <Button variant="ghost" className="group mt-4 md:mt-0">
            View all articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${article.slug}`} className="group block">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span
                      className={cn(
                        "inline-block px-2 py-1 rounded-full text-xs font-medium mr-2",
                        article.category === "Design"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                          : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
                      )}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
