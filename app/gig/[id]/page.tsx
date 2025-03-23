import { getGigDetails, getGigReviews, getFiverrProfile } from "@/lib/fiverr-data"
import Image from "next/image"
import Link from "next/link"
import { Clock, Repeat, Tag, Award } from "lucide-react"
import ReviewsSection from "@/components/reviews-section"

interface GigPageProps {
  params: {
    id: string
  }
}

export default async function GigPage({ params }: GigPageProps) {
  const username = "hinaqadir" // In a real app, this might come from a different source
  const gig = await getGigDetails(username, params.id)
  const reviews = await getGigReviews(username, params.id)
  const profile = await getFiverrProfile(username)

  if (!gig) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Gig not found</h1>
        <p className="mb-8">The gig you're looking for doesn't exist or has been removed.</p>
        <Link href="/" className="text-green-600 hover:underline">
          Return to profile
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="text-green-600 hover:underline mb-6 inline-block">
          ← Back to profile
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-6">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">{gig.title}</h1>
                {gig.isPro && (
                  <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-md flex items-center">
                    <Award className="w-4 h-4 mr-1.5" />
                    PRO SELLER
                  </div>
                )}
              </div>

              <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden">
                <Image src={gig.images[0] || "/placeholder.svg"} alt={gig.title} fill className="object-cover" />
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">About This Gig</h2>
                <p className="text-gray-700">{gig.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Delivery Time</p>
                    <p className="font-medium">{gig.deliveryTime}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Repeat className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Revisions</p>
                    <p className="font-medium">{gig.revisions}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Tag className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">{gig.category}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {gig.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-1/3 p-6 border-t md:border-t-0 md:border-l">
              <div className="sticky top-6">
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Price</h3>
                    <p className="text-2xl font-bold text-green-600">${gig.price}</p>
                  </div>
                  <p className="text-gray-600 mb-6">{gig.description.substring(0, 100)}...</p>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition-colors">
                    Continue (${gig.price})
                  </button>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">About the Seller</h3>
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={profile.avatar || "/placeholder.svg"}
                        alt={profile.displayName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{profile.displayName}</h4>
                      <p className="text-sm text-gray-500">{profile.level}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Response Time</span>
                      <span className="text-sm font-medium">{profile.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Order Completion</span>
                      <span className="text-sm font-medium">{profile.orderCompletion}%</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <Link
                      href="/pro-seller"
                      className="w-full flex items-center justify-center py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded transition-colors"
                    >
                      <Award className="w-4 h-4 mr-2" />
                      Pro Seller Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-16">
          <h2 className="text-2xl font-semibold mb-6">Reviews for this Gig</h2>
          {reviews.length > 0 ? (
            <ReviewsSection reviews={reviews} />
          ) : (
            <p className="text-gray-600">No reviews yet for this gig.</p>
          )}
        </div>
      </div>
    </main>
  )
}

