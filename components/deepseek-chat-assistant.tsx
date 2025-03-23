"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { MessageCircle, X, Send } from "lucide-react"

type Message = {
  id: string
  text: string
  sender: "user" | "assistant"
  timestamp: Date
  html?: boolean
}

// This is a placeholder for the actual DeepSeek API integration
// In production, you would replace this with actual API calls
const simulateDeepSeekResponse = async (message: string): Promise<{ text: string; html?: boolean }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // WhatsApp link with icon
  const whatsappLink =
    '<a href="https://wa.me/15874296200" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-green-600 hover:text-green-700 font-medium"><svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> Click here to reach us on WhatsApp</a>'

  // Common questions about Black Layers
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("pricing") || lowerMessage.includes("cost") || lowerMessage.includes("price")) {
    return {
      text: `Our pricing varies based on project requirements. For a custom quote, please fill out our contact form or email us at contact@blacklayers.ca. We offer competitive rates for our white-label services and custom development work.\n\nYou can also reach us directly: ${whatsappLink}`,
      html: true,
    }
  }

  if (lowerMessage.includes("services") || lowerMessage.includes("offer")) {
    return {
      text: `Black Layers specializes in white-label application development, custom web solutions, UI/UX design, and digital branding. Our team can build everything from simple websites to complex web applications tailored to your specific business needs.\n\nWant to discuss your project? ${whatsappLink}`,
      html: true,
    }
  }

  if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email")) {
    return {
      text: `You can reach our team at contact@blacklayers.ca, via our contact form on the website, or directly through WhatsApp:\n\n${whatsappLink}\n\nWe typically respond to inquiries within 24 hours during business days.`,
      html: true,
    }
  }

  if (lowerMessage.includes("portfolio") || lowerMessage.includes("work") || lowerMessage.includes("projects")) {
    return {
      text: `Our portfolio includes a diverse range of projects across various industries. We've developed e-commerce platforms, business management systems, marketing websites, and custom web applications. Each project is tailored to meet the specific needs and goals of our clients.\n\nInterested in discussing your project? ${whatsappLink}`,
      html: true,
    }
  }

  if (lowerMessage.includes("timeline") || lowerMessage.includes("how long") || lowerMessage.includes("deadline")) {
    return {
      text: `Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while more complex applications can take 2-3 months or more. We'll provide you with a detailed timeline during our initial consultation based on your specific requirements.\n\nReady to discuss your timeline? ${whatsappLink}`,
      html: true,
    }
  }

  if (lowerMessage.includes("process") || lowerMessage.includes("how do you work")) {
    return {
      text: `Our development process includes: 1) Initial consultation to understand your requirements, 2) Proposal and planning phase, 3) Design and prototyping, 4) Development and testing, 5) Launch and deployment, 6) Ongoing support and maintenance. We keep you involved throughout the entire process with regular updates and feedback sessions.\n\nWant to start the process? ${whatsappLink}`,
      html: true,
    }
  }

  if (lowerMessage.includes("white label") || lowerMessage.includes("white-label")) {
    return {
      text: `Our white-label services allow you to offer our development solutions under your own brand. This is perfect for agencies and businesses that want to expand their service offerings without hiring additional staff. We handle the technical work while you maintain the client relationship.\n\nInterested in our white-label services? ${whatsappLink}`,
      html: true,
    }
  }

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return {
      text: `Hello! I'm the Black Layers AI assistant. How can I help you today? Feel free to ask about our services, process, or anything else related to our digital solutions.\n\nYou can also reach our team directly: ${whatsappLink}`,
      html: true,
    }
  }

  if (lowerMessage.includes("whatsapp") || lowerMessage.includes("chat") || lowerMessage.includes("message")) {
    return {
      text: `You can reach us directly on WhatsApp:\n\n${whatsappLink}\n\nOur team is available to discuss your project requirements and answer any questions you might have.`,
      html: true,
    }
  }

  // Default response for other queries
  return {
    text: `Thank you for your question. Black Layers specializes in custom web development and white-label solutions. For more specific information about your inquiry, please contact our team directly at contact@blacklayers.ca, fill out our contact form, or reach us on WhatsApp:\n\n${whatsappLink}`,
    html: true,
  }
}

export function DeepseekChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there! I'm your Black Layers AI assistant powered by DeepSeek. How can I help you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isTyping) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      // Get response from DeepSeek (simulated for now)
      const response = await simulateDeepSeekResponse(userMessage.text)

      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: "assistant",
        timestamp: new Date(),
        html: response.html,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error getting response:", error)
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered an error. Please try again or contact our team directly.",
        sender: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 text-white">
            <h3 className="font-medium">Black Layers AI Assistant</h3>
            <p className="text-xs opacity-80">Powered by DeepSeek</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.html ? (
                    <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: message.text }} />
                  ) : (
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  )}
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isTyping}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputValue.trim() || isTyping}
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

