"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import ReactCrop, { type Crop } from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"
import { updateLogo } from "@/app/actions/logo-actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Upload, CropIcon, Save, AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function LogoUploader({ currentLogo }: { currentLogo: { url: string; width: number; height: number } }) {
  const router = useRouter()
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isCropDialogOpen, setIsCropDialogOpen] = useState(false)
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false)

  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    width: 80,
    height: 80,
    x: 10,
    y: 10,
  })
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  const [logoWidth, setLogoWidth] = useState(currentLogo.width)
  const [logoHeight, setLogoHeight] = useState(currentLogo.height)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null)
    setUploadSuccess(false)

    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/svg+xml", "image/webp"]
    if (!validTypes.includes(file.type)) {
      setUploadError("Invalid file type. Please upload a JPEG, PNG, SVG, or WebP image.")
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError("File is too large. Maximum size is 5MB.")
      return
    }

    setSelectedFile(file)

    // Create preview URL
    const objectUrl = URL.createObjectURL(file)
    setPreviewUrl(objectUrl)

    // Open crop dialog
    setIsCropDialogOpen(true)

    // Clean up preview URL when component unmounts
    return () => URL.revokeObjectURL(objectUrl)
  }

  const handleCropComplete = useCallback((crop: Crop) => {
    setCompletedCrop(crop)
  }, [])

  const getCroppedImg = useCallback(async () => {
    if (!imgRef.current || !completedCrop) return null

    const image = imgRef.current
    const canvas = document.createElement("canvas")
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height

    canvas.width = completedCrop.width * scaleX
    canvas.height = completedCrop.height * scaleY

    const ctx = canvas.getContext("2d")
    if (!ctx) return null

    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
    )

    // Convert canvas to blob
    return new Promise<File>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob || !selectedFile) {
          reject(new Error("Canvas is empty or file is not selected"))
          return
        }

        const file = new File([blob], selectedFile.name, {
          type: selectedFile.type,
          lastModified: Date.now(),
        })

        resolve(file)
      }, selectedFile?.type)
    })
  }, [completedCrop, selectedFile])

  const handleSaveCrop = async () => {
    try {
      const croppedFile = await getCroppedImg()
      if (croppedFile) {
        setSelectedFile(croppedFile)
        const objectUrl = URL.createObjectURL(croppedFile)
        setPreviewUrl(objectUrl)
      }
      setIsCropDialogOpen(false)
    } catch (error) {
      console.error("Error cropping image:", error)
      setUploadError("Failed to crop image")
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return

    setIsUploading(true)
    setUploadError(null)

    try {
      const formData = new FormData()
      formData.append("logo", selectedFile)
      formData.append("width", logoWidth.toString())
      formData.append("height", logoHeight.toString())

      const response = await fetch("/api/upload-logo", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to upload logo")
      }

      // Update the logo in the database
      const result = await updateLogo(data.url, logoWidth, logoHeight)

      if (!result.success) {
        throw new Error(result.error || "Failed to update logo")
      }

      setUploadSuccess(true)
      router.refresh() // Refresh the page to show the new logo
    } catch (error) {
      console.error("Error uploading logo:", error)
      setUploadError(error instanceof Error ? error.message : "Failed to upload logo")
    } finally {
      setIsUploading(false)
    }
  }

  const handleCancel = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
    setUploadError(null)
    setUploadSuccess(false)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Logo Uploader</CardTitle>
        <CardDescription>Upload a new logo for your website. Supported formats: JPEG, PNG, SVG, WebP.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Logo */}
        <div className="space-y-2">
          <Label>Current Logo</Label>
          <div className="border rounded-md p-4 flex items-center justify-center bg-muted/30 h-[150px]">
            <Image
              src={currentLogo.url || "/placeholder.svg"}
              alt="Current Logo"
              width={currentLogo.width}
              height={currentLogo.height}
              className="max-h-[120px] w-auto object-contain"
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <Label htmlFor="logo-upload">Upload New Logo</Label>
          <div className="flex items-center gap-4">
            <Input
              id="logo-upload"
              type="file"
              accept="image/jpeg,image/png,image/svg+xml,image/webp"
              onChange={handleFileChange}
              className="flex-1"
            />
            <Button variant="outline" onClick={() => document.getElementById("logo-upload")?.click()} type="button">
              <Upload className="h-4 w-4 mr-2" />
              Browse
            </Button>
          </div>
        </div>

        {/* Logo Dimensions */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="logo-width">Width (px)</Label>
            <div className="flex items-center gap-2">
              <Slider
                id="logo-width"
                min={50}
                max={500}
                step={10}
                value={[logoWidth]}
                onValueChange={(value) => setLogoWidth(value[0])}
                className="flex-1"
              />
              <span className="w-12 text-center">{logoWidth}</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="logo-height">Height (px)</Label>
            <div className="flex items-center gap-2">
              <Slider
                id="logo-height"
                min={50}
                max={300}
                step={10}
                value={[logoHeight]}
                onValueChange={(value) => setLogoHeight(value[0])}
                className="flex-1"
              />
              <span className="w-12 text-center">{logoHeight}</span>
            </div>
          </div>
        </div>

        {/* Preview */}
        {previewUrl && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Preview</Label>
              <Button variant="outline" size="sm" onClick={() => setIsCropDialogOpen(true)}>
                <CropIcon className="h-4 w-4 mr-2" />
                Crop
              </Button>
            </div>
            <div className="border rounded-md p-4 flex items-center justify-center bg-muted/30 h-[150px]">
              <Image
                src={previewUrl || "/placeholder.svg"}
                alt="Logo Preview"
                width={logoWidth}
                height={logoHeight}
                className="max-h-[120px] w-auto object-contain"
              />
            </div>
          </div>
        )}

        {/* Error Message */}
        {uploadError && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{uploadError}</AlertDescription>
          </Alert>
        )}

        {/* Success Message */}
        {uploadSuccess && (
          <Alert className="bg-green-500/10 text-green-500 border-green-500/20">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>Logo has been updated successfully!</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {selectedFile ? (
          <>
            <Button variant="outline" onClick={() => setIsAlertDialogOpen(true)} disabled={isUploading}>
              Cancel
            </Button>
            <Button onClick={handleUpload} disabled={isUploading}>
              {isUploading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save New Logo
                </>
              )}
            </Button>
          </>
        ) : (
          <div className="ml-auto">
            <Button variant="outline" onClick={() => document.getElementById("logo-upload")?.click()}>
              <Upload className="h-4 w-4 mr-2" />
              Select Logo
            </Button>
          </div>
        )}
      </CardFooter>

      {/* Crop Dialog */}
      <Dialog open={isCropDialogOpen} onOpenChange={setIsCropDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Crop Logo</DialogTitle>
          </DialogHeader>
          {previewUrl && (
            <div className="overflow-auto max-h-[60vh]">
              <ReactCrop
                crop={crop}
                onChange={(c) => setCrop(c)}
                onComplete={handleCropComplete}
                aspect={logoWidth / logoHeight}
              >
                <img ref={imgRef} src={previewUrl || "/placeholder.svg"} alt="Crop Preview" className="max-w-full" />
              </ReactCrop>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCropDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveCrop}>Apply Crop</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Upload?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel? Your selected logo will not be saved.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No, Continue Editing</AlertDialogCancel>
            <AlertDialogAction onClick={handleCancel}>Yes, Cancel Upload</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  )
}

