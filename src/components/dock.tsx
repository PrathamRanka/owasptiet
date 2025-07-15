/* eslint-disable */
import React from "react"
import { Home, Globe, Target, Users, CornerDownLeft } from "lucide-react"
import { Dock } from "@/ui/dock-two"
import { useRouter } from "next/navigation"

function DockDemo() {
  const router = useRouter()
  const handleAnchorClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const items = [
    { icon: Home, label: "About", onClick: () => handleAnchorClick("about") },
    { icon: Globe, label: "Worldwide Reach", onClick: () => handleAnchorClick("worldwide-reach") },
    { icon: Target, label: "Core Mission", onClick: () => handleAnchorClick("core-mission") },
    { icon: Users, label: "Team", onClick: () => router.push("/team")  }, // placeholder
    { icon: CornerDownLeft, label: "Footer", onClick: () => handleAnchorClick("footer") },
  ]

  return <Dock items={items} />
}

export { DockDemo }
