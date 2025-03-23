import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Log the submission (for testing)
    console.log("Contact form submission via API:", data)

    return NextResponse.json({
      success: true,
      message: "Form submission received",
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to process form submission" }, { status: 500 })
  }
}

