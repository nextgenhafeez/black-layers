import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Black Layers | Official Brand Assets",
  description:
    "Official logo and brand assets for Black Layers, a professional iOS app development company based in Calgary, Canada.",
}

export default function BrandPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Black Layers Brand Assets</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Official Logo</h2>
        <div className="border p-8 inline-block bg-white mb-4">
          <Image
            src="/blacklayers-logo.png"
            alt="Black Layers official logo"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <p className="text-lg mb-4">
          This is the official logo of Black Layers, an iOS app development company based in Calgary, Canada.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Brand Guidelines</h2>
        <p className="mb-4">
          Our logo represents our commitment to quality and innovation in iOS app development. When using our logo,
          please:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Do not alter the colors</li>
          <li>Do not stretch or distort the proportions</li>
          <li>Maintain adequate spacing around the logo</li>
          <li>Do not use the logo on backgrounds that reduce visibility</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          For questions about using our brand assets, please contact us at{" "}
          <a href="mailto:info@blacklayers.ca" className="text-blue-600 hover:underline">
            info@blacklayers.ca
          </a>
        </p>
      </div>
    </div>
  )
}
