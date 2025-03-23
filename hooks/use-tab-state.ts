"use client"

import { useState } from "react"

type TabType = "skills" | "stats" | "reviews"

export function useTabState(initialTab: TabType = "skills") {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab)

  const switchTab = (tab: TabType) => {
    setActiveTab(tab)
  }

  return {
    activeTab,
    switchTab,
  }
}

