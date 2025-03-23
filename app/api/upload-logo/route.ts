import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import sharp from "sharp"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("logo") as File

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/webp"]
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload a JPEG, PNG, SVG, or WebP image." },
        { status: 400 },
      )
    }

    // Get dimensions from formData
    const width = Number.parseInt(formData.get("width") as string) || 300
    const height = Number.parseInt(formData.get("height") as string) || 100

    // Process the image with sharp
    const buffer = Buffer.from(await file.arrayBuffer())

    // For SVG files, we don't resize
    let processedImageBuffer
    if (file.type === "image/svg+xml") {
      processedImageBuffer = buffer
    } else {
      // For other image types, resize and optimize
      processedImageBuffer = await sharp(buffer)
        .resize({
          width,
          height,
          fit: "inside",
          withoutEnlargement: true,
        })
        .toBuffer()
    }

    // Create a new file with processed image
    const processedFile = new File([processedImageBuffer], file.name, { type: file.type })

    // Upload to Vercel Blob storage
    const blob = await put(`logos/${Date.now()}_${file.name}`, processedFile, {
      access: "public",
    })

    // Return the URL of the uploaded logo
    return NextResponse.json({
      url: blob.url,
      success: true,
    })
  } catch (error) {
    console.error("Error uploading logo:", error)
    return NextResponse.json({ error: "Failed to upload logo" }, { status: 500 })
  }
}

