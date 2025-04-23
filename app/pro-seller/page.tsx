import Link from "next/link"
import { Award, Check, ArrowLeft } from "lucide-react"

export default function ProSellerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-green-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Profile
        </Link>

        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-lg shadow-xl overflow-hidden mb-12">
          <div className="p-8 md:p-12 text-white">
            <div className="flex items-center mb-6">
              <Award className="w-10 h-10 mr-4" />
              <h1 className="text-3xl md:text-4xl font-bold">Pro Seller Program</h1>
            </div>
            <p className="text-lg md:text-xl max-w-3xl opacity-90 mb-8">
              Join our exclusive Pro Seller Program and unlock premium benefits to grow your freelance business faster.
            </p>
            <button className="px-8 py-4 bg-white text-purple-700 font-bold rounded-md hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Priority Visibility</h3>
            <p className="text-gray-600">
              Your gigs will be featured prominently in search results, increasing your chances of being discovered by
              potential clients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Custom Branding</h3>
            <p className="text-gray-600">
              Customize your profile with unique branding elements to stand out from the competition and build a
              stronger identity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
            <p className="text-gray-600">
              Gain access to detailed performance metrics and insights to optimize your offerings and increase your
              earnings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
            <p className="text-gray-600">
              Get priority access to our support team with faster response times and personalized assistance for your
              business needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Higher Pricing Tiers</h3>
            <p className="text-gray-600">
              Unlock the ability to set higher prices for your premium services, increasing your potential earnings per
              project.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Early Access Features</h3>
            <p className="text-gray-600">
              Be the first to try new platform features and tools before they're available to regular sellers.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">Pro Seller Success Stories</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="italic text-gray-600 mb-2">
                    "Joining the Pro Seller program doubled my monthly income within just 3 months. The increased
                    visibility and premium features made all the difference."
                  </p>
                  <p className="font-medium">— Sarah K., Graphic Designer</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="italic text-gray-600 mb-2">
                    "The analytics tools helped me understand exactly what my clients were looking for, allowing me to
                    optimize my gigs and increase my conversion rate by 40%."
                  </p>
                  <p className="font-medium">— Michael T., Web Developer</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="italic text-gray-600 mb-2">
                    "The dedicated support team has been invaluable for my business growth. They've helped me navigate
                    challenges and scale my services effectively."
                  </p>
                  <p className="font-medium">— Jessica M., Content Writer</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-gray-100 p-8">
              <h2 className="text-2xl font-bold mb-6">Pricing & Plans</h2>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Monthly</h3>
                  <span className="text-2xl font-bold">$29.99</span>
                </div>
                <p className="text-gray-600 mb-4">Perfect for testing the waters and experiencing the benefits.</p>
                <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded transition-colors">
                  Select Plan
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border-2 border-purple-500 relative">
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl">
                  BEST VALUE
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Annual</h3>
                  <div>
                    <span className="text-2xl font-bold">$19.99</span>
                    <span className="text-sm text-gray-500">/month</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Save 33% with our annual plan and maximize your earnings.</p>
                <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded transition-colors">
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Freelance Business?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of successful freelancers who have transformed their careers with our Pro Seller Program.
          </p>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md shadow-lg transition-colors">
            Apply for Pro Seller Status
          </button>
        </div>
      </div>
    </main>
  )
}
