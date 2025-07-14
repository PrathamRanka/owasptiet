"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

export function useSafeMediaQuery(query: string): boolean {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true)
    }
  }, [])

  const match = useMediaQuery(query)
  return isClient ? match : false
}
