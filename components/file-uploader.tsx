"use client"

import type React from "react"

import { useCallback, useState } from "react"
import { Upload } from "lucide-react"

interface FileUploaderProps {
  onFileUpload: (file: File) => void
  disabled?: boolean
}

export function FileUploader({ onFileUpload, disabled = false }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragEnter = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      if (!disabled) setIsDragging(true)
    },
    [disabled],
  )

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      if (!disabled) setIsDragging(true)
    },
    [disabled],
  )

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)

      if (disabled) return

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0]
        onFileUpload(file)
      }
    },
    [disabled, onFileUpload],
  )

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return

      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0]
        onFileUpload(file)
        // Reset the input value so the same file can be uploaded again if needed
        e.target.value = ""
      }
    },
    [disabled, onFileUpload],
  )

  return (
    <div
      className={`file-drop-area p-6 text-center ${isDragging ? "active border-blue-400/70 bg-blue-500/10" : "border-white/20"} ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"} transition-all duration-300 ease-in-out`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => {
        if (!disabled) {
          document.getElementById("file-input")?.click()
        }
      }}
    >
      <input
        id="file-input"
        type="file"
        className="hidden"
        accept=".obj,.stl,.gltf,.glb"
        onChange={handleFileChange}
        disabled={disabled}
      />

      <div className="flex flex-col items-center justify-center">
        <Upload className="h-10 w-10 text-blue-400 mb-3" />
        <p className="text-sm font-medium mb-1 text-white">
          {disabled ? "Upload in progress..." : "Drag & drop your 3D model here"}
        </p>
        <p className="text-xs text-gray-300">or click to browse files</p>
        <p className="text-xs text-gray-300 mt-2">Supports .obj, .stl, .gltf, .glb</p>
      </div>
    </div>
  )
}
