import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("model") as File

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    // Get file extension
    const fileExtension = file.name.split(".").pop()?.toLowerCase()

    if (!fileExtension) {
      return NextResponse.json({ error: "Invalid file: Could not determine file type" }, { status: 400 })
    }

    const supportedFormats = ["obj", "stl", "gltf", "glb"]

    if (!supportedFormats.includes(fileExtension)) {
      return NextResponse.json({ error: `Unsupported file format: .${fileExtension}` }, { status: 400 })
    }

    // Create a unique filename
    const timestamp = Date.now()
    const filename = `model_${timestamp}.${fileExtension}`

    // For Vercel deployment, we can't write to the filesystem
    // Instead, we'll simulate a successful upload and return a mock URL
    // In a real application, you would use a storage service like AWS S3 or Vercel Blob Storage

    // Mock successful upload
    const fileUrl = `/placeholder.svg?height=600&width=800`

    return NextResponse.json({ url: fileUrl })
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json({ error: "Error uploading file" }, { status: 500 })
  }
}

