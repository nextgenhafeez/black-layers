import Image from "next/image"
import type { FiverrProfile } from "@/lib/data"
import { Star, Clock, CheckCircle, MessageCircle } from "lucide-react"

interface ProfileHeaderProps {
  profile: FiverrProfile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_2fr] items-center">
      <div className="flex flex-col items-center md:items-start">
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
          <Image
            src={profile.avatar || "/placeholder.svg"}
            alt={profile.displayName}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          <CheckCircle className="w-4 h-4" />
          {profile.level}
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-2">{profile.displayName}</h1>
        <p className="text-xl text-gray-700 mb-4">{profile.title}</p>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 font-medium">{profile.stats.rating}</span>
            <span className="ml-1 text-gray-600">({profile.stats.reviews})</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            {profile.responseTime}
          </div>
          <div className="text-gray-600">Member since {profile.memberSince}</div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{profile.description}</p>

        <a
          href={`https://www.fiverr.com/${profile.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md shadow-md transition-colors duration-200 ease-in-out"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Contact Me
        </a>
      </div>
    </div>
  )
}
