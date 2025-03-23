import Image from "next/image"
import Link from "next/link"

export default function SiteLogo() {
  return (
    <Link href="/" className="flex items-center group">
      <div className="relative w-32 h-12 sm:w-36 sm:h-14">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Layer%20with%20text-5EUvixC2xXzylWgdaUNw5Q9doHEolX.png"
          alt="Black Layers Logo"
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 128px, 144px"
          priority
        />
      </div>
    </Link>
  )
}

