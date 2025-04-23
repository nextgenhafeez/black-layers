"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const team = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "Alex has over 15 years of experience in digital product design and development. He founded Black Layers with a vision to create exceptional digital experiences that drive business growth.",
    image: "/placeholder.svg?height=400&width=300",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "alex@blacklayers.com",
    },
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Design Director",
    bio: "Sophia leads our design team with her exceptional eye for detail and deep understanding of user experience. She has worked with numerous Fortune 500 companies to create award-winning digital products.",
    image: "/placeholder.svg?height=400&width=300",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "sophia@blacklayers.com",
    },
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Technical Director",
    bio: "Marcus brings over a decade of software engineering experience to Black Layers. He ensures our technical solutions are robust, scalable, and built using the latest technologies and best practices.",
    image: "/placeholder.svg?height=400&width=300",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "marcus@blacklayers.com",
    },
  },
  {
    id: 4,
    name: "Olivia Rodriguez",
    role: "Strategy Lead",
    bio: "Olivia helps our clients navigate complex business challenges with data-driven insights and strategic thinking. She has a background in management consulting and digital transformation.",
    image: "/placeholder.svg?height=400&width=300",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "olivia@blacklayers.com",
    },
  },
]

export function TeamSection() {
  const [activeMember, setActiveMember] = useState(null)

  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the people behind Black Layers</h2>
          <p className="text-muted-foreground">
            We're a team of passionate designers, developers, and strategists dedicated to creating exceptional digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative"
              onMouseEnter={() => setActiveMember(member.id)}
              onMouseLeave={() => setActiveMember(null)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <AnimatePresence>
                  {activeMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-4 text-white"
                    >
                      <p className="text-sm mb-4">{member.bio}</p>
                      <div className="flex space-x-2">
                        <a
                          href={member.social.twitter}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-4">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            Join our team
          </Button>
        </div>
      </div>
    </section>
  )
}
