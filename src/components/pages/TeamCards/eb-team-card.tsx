/* eslint-disable */
"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

type Card = {
  title: string
  designation: string
  src: string
  linkedin?: string
  github?: string
}

const teamCards: Card[] = [
  {
    title: "Rakshit Dhamija",
    designation: "GENERAL SECRETARY",
    src: "",
    linkedin: "https://linkedin.com",
    github: "https://github.com/",
  },
  {
    title: "Sanchit Thareja",
    designation: "FINANCE SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548085/IMG_8607_-_Sanchit_Thareja_sybjtv.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Vedant Anand",
    designation: "JOINT SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548076/1000168177_-_VEDANT_jc95re.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Sanil Grover",
    designation: "FINANCE SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548077/1000071095_-_Sanil_Grover_guh0o1.webp",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Khushi Gupta",
    designation: "JOINT SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550313/khushi_ze1edb.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Anshum Single",
    designation: "JOINT SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550311/anshum_nsyofe.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Gurkirat Singh",
    designation: "TECHNICAL SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550312/gurkirat_zwd5t6.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Amritesh Bharadwaj",
    designation: "TECHNICAL SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550315/amritesh_lfyhk1.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Sumit Sinha",
    designation: "MARKETING SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548083/linkedin_pic_-_SUMIT_SINHA_ny3m4m.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Arjun Angirus",
    designation: "MARKETING SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550312/arjun_ne6mbb.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Ishan Singh",
    designation: "DESIGNING SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550313/ishan_yjrcke.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Garima Dahuja",
    designation: "DESIGNING SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550312/garima_ojexh5.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Ashmit Giri",
    designation: "MEDIA SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550313/ashmitgiri_u1hxgj.png",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    title: "Preet Kanwar Singh Chahal",
    designation: "MEDIA SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548078/A5E3260E-5E88-40B2-AF39-AFBF13EA7CD1_-_Preet_Kanwar_Singh_Chahal_c06igd.jpg",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
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
      id={card.title.toLowerCase().replace(/\s+/g, "-")}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative overflow-hidden rounded-xl h-72 md:h-96 w-full transition-all duration-300 ease-out shadow-xl",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {/* Background Image */}
      <Image
        src={card.src}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Details Overlay (Visible by default, hides on hover) */}
      <div
        className={cn(
          "absolute inset-0 bg-black/40 flex flex-col justify-end px-4 py-6 transition-opacity duration-300",
          hovered === index ? "opacity-90" : "opacity-100"
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
