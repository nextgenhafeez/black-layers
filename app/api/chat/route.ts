import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const latestMessage = messages[messages.length - 1].content

    // Using the AI SDK with OpenAI
    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      prompt: `You are a helpful assistant for Black Layers, a creative digital agency specializing in web development, UI/UX design, and visual branding. 
      Answer the following question helpfully and professionally: ${latestMessage}`,
      temperature: 0.7,
      maxTokens: 800,
    })

    return Response.json({ message: text })
  } catch (error) {
    console.error("Chat error:", error)
    return Response.json({ error: "Failed to process chat request" }, { status: 500 })
  }
}

