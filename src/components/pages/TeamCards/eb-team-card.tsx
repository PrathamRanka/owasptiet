/* eslint-disable */
"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Linkedin, Github } from "lucide-react"
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
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755619112/rakshit_uew6ee.jpg",
    linkedin: "https://www.linkedin.com/in/rakshit-dhamija-870b39286/",
    github: "https://github.com/rakshit-dhamija",
  },
  {
    title: "Sanchit Thareja",
    designation: "FINANCE SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548085/IMG_8607_-_Sanchit_Thareja_sybjtv.jpg",
    linkedin: "https://www.linkedin.com/in/sanchit-thareja/",
    github: "https://github.com/sanchit-hub",
  },
  {
    title: "Vedant Anand",
    designation: "JOINT SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755583104/1000168177_-_VEDANT_jc95re.jpg",
    linkedin: "https://www.linkedin.com/in/vedantanand17/",
    github: "https://github.com/vedantanand17",
  },
  {
    title: "Sanil Grover",
    designation: "JOINT SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548077/1000071095_-_Sanil_Grover_guh0o1.webp",
    linkedin: "https://www.linkedin.com/in/sanil-grover-b512b1264/",
    github: "https://github.com/Sanilg1",
  },
  {
    title: "Khushi Gupta",
    designation: "JOINT SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755584526/IMG-20250819-WA0022_yzpn9u.jpg",
    linkedin: "https://www.linkedin.com/in/khushi-gupta-b42264278/",
    github: "https://github.com/Khushi280905",
  },
  {
    title: "Anshum Singla",
    designation: "JOINT SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755583271/anshum_oenk9q.jpg",
    linkedin: "https://www.linkedin.com/in/anshum-singla/",
    github: "https://github.com/AnshumSingla",
  },
  {
    title: "Gurkirat Singh",
    designation: "TECHNICAL SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550312/gurkirat_zwd5t6.jpg",
    linkedin: "https://www.linkedin.com/in/gurkiratsingh2004/",
    github: "https://github.com/13kirat",
  },
  {
    title: "Amritesh Bharadwaj",
    designation: "TECHNICAL SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755594335/Amritesh_a6r6ir.jpg",
    linkedin: "https://www.linkedin.com/in/amritesh-bhardwaj/",
    github: "https://github.com/Amritesh-Bhardwaj",
  },
  {
    title: "Sumit Sinha",
    designation: "MARKETING SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548083/linkedin_pic_-_SUMIT_SINHA_ny3m4m.jpg",
    linkedin: "https://www.linkedin.com/in/sumit-sinha-454a232a6/",
    github: "https://github.com/Sumit21Sinha",
  },
  {
    title: "Arjun Angirus",
    designation: "MARKETING SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550312/arjun_ne6mbb.png",
    linkedin: "https://www.linkedin.com/in/arjunangirus/",
    github: "https://github.com/EarnTHYPart",
  },
  {
    title: "Ishan Singh",
    designation: "DESIGNING SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755585093/ishan_yjrcke.jpg",
    linkedin: "https://www.linkedin.com/in/ishan-singh-0755462ab/",
    github: "https://github.com/Ishan-412",
  },
  {
    title: "Garima Dahuja",
    designation: "DESIGNING SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755584526/WhatsApp_Image_2025-08-19_at_11.48.57_ed3cce28_t7htcl.jpg",
    linkedin: "https://www.linkedin.com/in/garima-dahuja-492b7a245/",
    github: "https://github.com/GarimaDahuja",
  },
  {
    title: "Ashmit Giridhar",
    designation: "MEDIA SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755550313/ashmitgiri_u1hxgj.png",
    linkedin: "https://linkedin.com",
    github: "#",
  },
  {
    title: "Preet Kanwar Singh Chahal",
    designation: "MEDIA SECRETARY",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548078/A5E3260E-5E88-40B2-AF39-AFBF13EA7CD1_-_Preet_Kanwar_Singh_Chahal_c06igd.jpg",
    linkedin: "https://www.linkedin.com/in/pkschahal/",
    github: "#",
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
        loading="lazy" // Lazy loading added
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Details Overlay */}
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
            {card.github && card.github !== "#" && (
              <a
                href={card.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Github className="w-5 h-5 text-white hover:text-gray-400 hover:drop-shadow-[0_0_6px_#ccc]" />
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
