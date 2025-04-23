"use client"

import type React from "react"

interface TabButtonProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

export function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-6 py-2.5 text-sm font-medium transition-all ${
        active ? "bg-black text-white shadow-md" : "text-gray-700 hover:bg-gray-200"
      }`}
      aria-selected={active}
      role="tab"
    >
      {children}
    </button>
  )
}
