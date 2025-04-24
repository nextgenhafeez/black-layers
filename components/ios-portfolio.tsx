"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

export function IosPortfolio() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const portfolioItems = [
    {
      title: "VooConnect",
      industry: "Social Media",
      description:
        "A TikTok-like app that allows users to create and share reels. Also features a full-fledged chat system similar to WhatsApp.",
      image: "/video-feed-interface.png",
      appStoreLink: "#",
    },
    {
      title: "AdClose – Adblock for Mobile",
      industry: "Utility / Ad Tech",
      description:
        "A high-performance ad blocker helping users block unwanted ads across their device. Currently generating $10,000+ in monthly revenue.",
      image: "/ios-ad-blocker-interface.png",
      appStoreLink: "#",
    },
    {
      title: "DirectPads",
      industry: "Real Estate",
      description:
        "A robust real estate app that allows investors and sellers to send/receive offers. Integrated with the MLS (Multiple Listing Service) of the USA.",
      image: "/mobile-real-estate-search.png",
      appStoreLink: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our iOS App Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our successful iOS applications that have helped businesses grow and engage their users
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2">Industry: {item.industry}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a href={item.appStoreLink} className="inline-flex items-center text-black font-medium hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  View on App Store
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-md text-lg">
            View All iOS Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
