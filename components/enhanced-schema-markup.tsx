export default function EnhancedSchemaMarkup() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://blacklayers.ca/#organization",
          name: "Black Layers",
          alternateName: "BLACKLAYERS",
          url: "https://blacklayers.ca",
          logo: {
            "@type": "ImageObject",
            url: "https://blacklayers.ca/blacklayers-logo.png",
            width: 512,
            height: 512,
            caption: "Black Layers logo",
          },
          image: {
            "@type": "ImageObject",
            url: "https://blacklayers.ca/blacklayers-logo.png",
            width: 512,
            height: 512,
          },
          description:
            "iOS App Development Company specializing in high-performance ad blockers and custom mobile applications.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "33 Carringham Gate NW",
            addressLocality: "Calgary",
            addressRegion: "AB",
            postalCode: "T3P 2H6",
            addressCountry: "CA",
          },
          telephone: "+1-587-429-6200",
          sameAs: ["https://www.fiverr.com/blacklayers", "https://github.com/blacklayers"],
        }),
      }}
    />
  )
}
