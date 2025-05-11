import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { DeepseekChatAssistant } from "@/components/deepseek-chat-assistant"
import Script from "next/script"
import { SchemaMarkup } from "@/components/schema-markup"
import EnhancedSchemaMarkup from "@/components/enhanced-schema-markup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "iOS App Development Company | Black Layers",
  description:
    "Professional iOS app development services. We design and develop high-performance iOS applications tailored to your business needs — from idea to App Store launch.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
        <EnhancedSchemaMarkup />
      </head>
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Navbar />
        <main>{children}</main>
        <DeepseekChatAssistant />
        <Footer />

        {/* Move scripts to the end of body to prevent blocking render */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17029942619" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17029942619');
          `}
        </Script>
        <Script id="google-conversion" strategy="lazyOnload">
          {`
            gtag('event', 'conversion', {'send_to': 'AW-17029942619/bOyCCPyG07waENuawbg_'});
          `}
        </Script>
      </body>
    </html>
  )
}
