export function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://blacklayers.com/#organization",
          name: "Black Layers",
          url: "https://blacklayers.com",
          logo: {
            "@type": "ImageObject",
            url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Layer%20with%20text-5EUvixC2xXzylWgdaUNw5Q9doHEolX.png",
            width: 144,
            height: 56,
          },
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black%20Layer%20with%20text-5EUvixC2xXzylWgdaUNw5Q9doHEolX.png",
          description:
            "Digital Product Studio specializing in custom web applications, iOS app development, and white-label solutions",
          sameAs: ["https://twitter.com/blacklayers", "https://linkedin.com/company/blacklayers"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Calgary",
            addressRegion: "AB",
            postalCode: "T3P 2H6",
            addressCountry: "CA",
          },
          priceRange: "$$$$",
          serviceType: ["iOS App Development", "Web Development", "UI/UX Design", "White-Label Solutions"],
        }),
      }}
    />
  )
}
