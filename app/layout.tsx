import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DeepseekChatAssistant } from "@/components/deepseek-chat-assistant"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Black Layers | Digital Product Studio",
  description: "Transform your business with custom white-label applications and digital solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <Navbar />
        <main>{children}</main>
        <DeepseekChatAssistant />
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'