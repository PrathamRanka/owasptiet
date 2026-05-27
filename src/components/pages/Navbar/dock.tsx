"use client"

import React from "react"
import {
  Home,
  Globe,
  Flag,
  FileText,
  Handshake,
  Users2
} from "lucide-react";
import { Dock } from "@/components/ui/dock-ui/dock-two"
import { useRouter } from "next/navigation"

export default function DockDemo() {
  const router = useRouter()

  const handleAnchorClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleTeamClick = () => {
    router.push("/team")
  }

  const items = [
    { icon: Home, label: "Home", onClick: () => handleAnchorClick("home") },
    { icon: Globe, label: "About", onClick: () => handleAnchorClick("about") },
    { icon: Flag, label: "Missions", onClick: () => handleAnchorClick("missions") },
    { icon: Handshake, label: "Sponsors", onClick: () => handleAnchorClick("sponsors") },
    { icon: FileText, label: "Form", onClick: () => handleAnchorClick("form") },
    { icon: Users2, label: "Team", onClick: handleTeamClick },
  ];

  return <Dock items={items} />
}

