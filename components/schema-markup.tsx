export function SchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Black Layers",
          description: "Digital Product Studio specializing in custom web applications and white-label solutions",
          url: "https://blacklayers.ca",
          logo: "https://blacklayers.ca/logo.png",
          image: "https://blacklayers.ca/hero-image.png",
          sameAs: ["https://twitter.com/blacklayers", "https://linkedin.com/company/blacklayers"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Your City",
            addressRegion: "Your Region",
            addressCountry: "Your Country",
          },
          priceRange: "$$",
          serviceType: [
            "Web Development",
            "UI/UX Design",
            "White-Label Solutions",
            "Digital Product Studio",
            "Custom Applications",
          ],
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Services",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Custom Web Application Development",
                description: "End-to-end development of custom web applications",
              },
              {
                "@type": "Offer",
                name: "White-Label Solutions",
                description: "White-label applications and digital solutions for businesses",
              },
            ],
          },
        }),
      }}
    />
  )
}
