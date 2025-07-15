"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Github, Linkedin } from "lucide-react"

type Card = {
  title: string
  designation: string
  src: string
  linkedin?: string
  github?: string
}

const teamCards: Card[] = [
  {
    title: "Rujul Goel",
    designation: "GENERAL SECRETARY",
    src: "/rujul.jpeg",
    linkedin: "https://linkedin.com",
    github: "https://github.com/",
  },
  {
    title: "Siddharth Agrawal",
    designation: "JOINT SECRETARY",
    src: "/sid.jpeg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Raunak Shahi",
    designation: "FINANCE SECRETARY",
    src: "/raunak.jpeg",
    linkedin: "https://linkedin.com/in",
    github: "https://github.com/",
  },
  {
    title: "Ashmit Thawait",
    designation: "JOINT SECRETARY",
    src: "/asmit.jpeg",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
  },
  {
    title: "Gazal Arora",
    designation: "JOINT SECRETARY",
    src: "/gazal.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Parth Taggar",
    designation: "JOINT SECRETARY",
    src: "/parth.jpeg",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
  }
]

const CardComponent = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card
    index: number
    hovered: number | null
    setHovered: React.Dispatch<React.SetStateAction<number | null>>
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative overflow-hidden rounded-xl h-72 md:h-96 width-full transition-all duration-300 ease-out shadow-xl ",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div
        className={cn(
          "absolute inset-0 bg-black/40 flex flex-col justify-end px-4 py-6 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.8)]">
          <div className="text-xl md:text-2xl font-bold">{card.title}</div>
          <div className="text-sm text-gray-300 mt-1">{card.designation}</div>

          <div className="flex gap-4 mt-3">
            {card.linkedin && (
              <a
                href={card.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white hover:text-blue-400 hover:drop-shadow-[0_0_6px_#3b82f6]" />
              </a>
            )}
            {card.github && (
              <a
                href={card.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Github className="w-5 h-5 text-white hover:text-gray-300 hover:drop-shadow-[0_0_6px_#a3a3a3]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
)

CardComponent.displayName = "CardComponent"

export function TeamCards() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4 w-full">
      {teamCards.map((card, index) => (
        <CardComponent
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}
