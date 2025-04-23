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
          url: "https://blacklayers.com",
          sameAs: ["https://twitter.com/blacklayers", "https://linkedin.com/company/blacklayers"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Your City",
            addressRegion: "Your Region",
            addressCountry: "Your Country",
          },
          priceRange: "$$$$",
          serviceType: ["Web Development", "UI/UX Design", "White-Label Solutions"],
        }),
      }}
    />
  )
}
