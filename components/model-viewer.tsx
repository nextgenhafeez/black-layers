"use client"

import { useState, useCallback } from "react"
import { FileUploader } from "./file-uploader"
import { Viewer3D } from "./viewer-3d"
import { ModelControls } from "./model-controls"
import { AlertCircle, CheckCircle } from "lucide-react"

type ModelStatus = "idle" | "loading" | "success" | "error"

export function ModelViewer() {
  const [modelUrl, setModelUrl] = useState<string | null>(null)
  const [modelFormat, setModelFormat] = useState<string | null>(null)
  const [status, setStatus] = useState<ModelStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [uploadProgress, setUploadProgress] = useState<number>(0)

  const handleFileUpload = useCallback(async (file: File) => {
    // Reset states
    setStatus("loading")
    setErrorMessage("")
    setUploadProgress(0)

    // Check file type
    const fileExtension = file.name.split(".").pop()?.toLowerCase()

    if (!fileExtension) {
      setStatus("error")
      setErrorMessage("Invalid file: Could not determine file type")
      return
    }

    const supportedFormats = ["obj", "stl", "gltf", "glb"]

    if (!supportedFormats.includes(fileExtension)) {
      setStatus("error")
      setErrorMessage(`Unsupported file format: .${fileExtension}. Please upload .obj, .stl, .gltf, or .glb files.`)
      return
    }

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(progressInterval)
          return prev
        }
        return prev + 5
      })
    }, 100)

    try {
      // Create form data for upload
      const formData = new FormData()
      formData.append("model", file)

      // Upload the file
      const response = await fetch("/api/upload-model", {
        method: "POST",
        body: formData,
      })

      clearInterval(progressInterval)

      if (response.ok) {
        const data = await response.json()
        setModelUrl(data.url)
        setModelFormat(fileExtension)
        setUploadProgress(100)
        setStatus("success")
      } else {
        const error = await response.json()
        setStatus("error")
        setErrorMessage(`Upload failed: ${error.error || response.statusText}`)
      }
    } catch (error) {
      clearInterval(progressInterval)
      setStatus("error")
      setErrorMessage(`Upload failed: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <div className="bg-white/10 backdrop-blur-lg dark:bg-gray-800/30 rounded-lg shadow-lg p-6 border border-white/10">
          <h2 className="text-xl font-semibold mb-4">Upload Model</h2>

          <FileUploader onFileUpload={handleFileUpload} disabled={status === "loading"} />

          {status === "loading" && (
            <div className="mt-4">
              <p className="text-sm text-gray-200 dark:text-gray-300 mb-2">Uploading... {uploadProgress}%</p>
              <div className="w-full bg-gray-700/50 dark:bg-gray-700/30 rounded-full h-1.5">
                <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 p-3 bg-red-500/10 dark:bg-red-900/20 text-red-200 dark:text-red-300 rounded-md flex items-start gap-2 border border-red-500/20">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          {status === "success" && (
            <div className="mt-4 p-3 bg-green-500/10 dark:bg-green-900/20 text-green-200 dark:text-green-300 rounded-md flex items-start gap-2 border border-green-500/20">
              <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">Model uploaded successfully!</p>
            </div>
          )}

          <div className="mt-6">
            <h3 className="font-medium mb-2">Supported Formats</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 dark:text-gray-300 space-y-1">
              <li>.obj - Wavefront OBJ</li>
              <li>.stl - Stereolithography</li>
              <li>.gltf - GL Transmission Format</li>
              <li>.glb - Binary GL Transmission Format</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-2">Controls</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 dark:text-gray-300 space-y-1">
              <li>Left click + drag: Rotate model</li>
              <li>Right click + drag: Pan camera</li>
              <li>Scroll: Zoom in/out</li>
              <li>Double click: Reset camera</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-white/10 backdrop-blur-lg dark:bg-gray-800/30 rounded-lg shadow-lg p-6 h-full border border-white/10">
          <h2 className="text-xl font-semibold mb-4">Model Viewer</h2>

          <div className="canvas-container">
            {modelUrl ? (
              <>
                <Viewer3D modelUrl={modelUrl} modelFormat={modelFormat!} />
                <ModelControls />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-300 dark:text-gray-300 text-center">
                  {status === "loading" ? "Preparing model viewer..." : "Upload a 3D model to view it here"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
