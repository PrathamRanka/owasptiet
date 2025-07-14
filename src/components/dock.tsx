import React from "react"
import { Home, Globe, Target, Users, Award, CornerDownLeft } from "lucide-react"
import { Dock } from "@/ui/dock-two"

function DockDemo() {
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
    { icon: Users, label: "Team", onClick: () => alert("Add your Team page routing here") }, // placeholder
    { icon: Award, label: "Sponsors", onClick: () => handleAnchorClick("sponsors") },
    { icon: CornerDownLeft, label: "Footer", onClick: () => handleAnchorClick("footer") },
  ]

  return <Dock items={items} />
}

export { DockDemo }
