import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    // In production, you would replace this with actual DeepSeek API calls
    // This is a placeholder implementation
    const response = await simulateDeepSeekResponse(message)

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in chat-ai API route:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

// Simulated response function - in production, replace with actual DeepSeek API
async function simulateDeepSeekResponse(message: string): Promise<string> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Common questions about Black Layers
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("pricing") || lowerMessage.includes("cost")) {
    return "Our pricing varies based on project requirements. For a custom quote, please fill out our contact form or email us at contact@blacklayers.ca."
  }

  if (lowerMessage.includes("services") || lowerMessage.includes("offer")) {
    return "Black Layers specializes in white-label application development, custom web solutions, UI/UX design, and digital branding."
  }

  // Default response
  return "Thank you for your question. For more specific information, please contact our team directly at contact@blacklayers.ca."
}

