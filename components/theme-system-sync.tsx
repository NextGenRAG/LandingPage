"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function ThemeSystemSync() {
  const { setTheme, theme } = useTheme()

  // Sync theme with system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if theme is set to "system"
      if (theme === "system") {
        setTheme(e.matches ? "dark" : "light")
      }
    }
    
    // Add listener
    mediaQuery.addEventListener("change", handleChange)
    
    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [setTheme, theme])

  // Empty render - this component only provides functionality
  return null
} 