"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

type Card = {
  title: string
  designation: string
  src: string
  linkedin: string
  github: string
}

const coreTeamCards: Card[] = [
    {
    title: "Pratham Ranka",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1763584995/ME_oiee2d.jpg",
    linkedin: "https://www.linkedin.com/in/prathamranka06",
    github: "https://github.com/PrathamRanka",
  },
   {
    title: "Anmol Mittal",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548080/20250411_230819_-_Anmol_Mittal_vrdogv.jpg",
    linkedin: "https://www.linkedin.com/in/anmol-mittal-75506337b/",
    github: "https://github.com/CoderAnmolMittal",
  },
  {
    title: "Sanchita Jain",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548084/Sanchita_1024031020_-_Sanchita_Jain_dwkrad.png",
    linkedin: "https://www.linkedin.com/in/sanchita-jain-5724b6310/",
    github: "https://github.com/sanchita1001",
  },
  {
    title: "Avneet Kaur Bhatia",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548082/IMG_5039_-_Avneet_kaur_Bhatia_rjnods.jpg",
    linkedin: "https://www.linkedin.com/in/avneet-kaur-bhatia-5a60bb314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/Avneetbhatia12",
  },

  {
    title: "Kumari Manya",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548085/OwaspProfile_-_Kumari_Manya_qv54t5.jpg",
    linkedin: "https://www.linkedin.com/in/kumari-manya-346118328/",
    github: "https://github.com/ManyaK22",
  },
  
  {
    title: "Bhoomi Jain",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548076/bhoomi_profile_-_Bhoomi_Jain_oozbox.jpg",
    linkedin: "https://www.linkedin.com/in/bhoomi-jain-7378b6330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/bhoomi0312",
  },
  {
    title: "Akshita",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548083/photo_w_-_Akshita_uhhnyb.jpg",
    linkedin: "https://www.linkedin.com/in/akshita251/",
    github: "https://github.com/akshita264",
  },
  {
    title: "Avleen Kaur",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548082/IMG-20250818-WA0002_2_-_Avleen_Kaur_n3x0j2.jpg",
    linkedin: "https://www.linkedin.com/in/avleen-kaur-42019a377",
    github: "/team",
  },
  {
    title: "Kavya",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755583036/IMG-20250717-WA0026_-_Kavya_ay9p7d.jpg",
    linkedin: "https://www.linkedin.com/in/kavya-thukral-82b090325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/kavvz20",
  },
  {
    title: "Sehajneet Kaur",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548080/IMG_2403_-_Sehajneet_Kaur_ilblyf.jpg",
    linkedin: "http://www.linkedin.com/in/sehajneet-kaur-788412330",
    github: "https://github.com/Sehaj38",
  },
  {
    title: "Saurabh Shivhare",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1763635517/saurabh_qd6jzj.jpg",
    linkedin: "https://www.linkedin.com/in/saurabh-shivhare-aa0aa3337/",
    github: "https://github.com/simplernix",
  },
  {
    title: "Bhavya Yelchala",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755588506/bhavya_t5qpk4.jpg",
    linkedin: "https://www.linkedin.com/in/bhavya-reddy-a9245232a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/bhavyareddy369",
  },
  {
    title: "Kunwarpreet Singh",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1763622275/kunwar_rtsoyq.jpg",
    linkedin: "https://www.linkedin.com/in/kunwar1908/",
    github: "https://github.com/kunwar1908",
  },
  {
    title: "Adhiraj Singh Saini",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1763622262/adhiraj_g9t5p5.jpg",
    linkedin: "https://www.linkedin.com/in/adhiraj-singh-saini-855805322/",
    github: "https://github.com/AdhirajCoder16",
  },
  {
    title: "Harsh Arora",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1763626145/harsh_d1wclt.jpg",
    linkedin: "https://www.linkedin.com/in/harsh-rakesh-arora-613091348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/harshrarora",
  },
    {
    title: "Ishan Sethia",
    designation: "Core",
    src: "",
    linkedin: "",
    github: ""
  },
      {
    title: "Harshita",
    designation: "Core",
    src: "",
    linkedin: "",
    github: ""
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
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative overflow-hidden rounded-xl h-72 md:h-96 w-full transition-all duration-300 ease-out shadow-xl",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

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
            <a
              href={card.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5 text-white hover:text-blue-400 hover:drop-shadow-[0_0_6px_#3b82f6]" />
            </a>
            <a
              href={card.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Github className="w-5 h-5 text-white hover:text-gray-300 hover:drop-shadow-[0_0_6px_#a3a3a3]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
)

CardComponent.displayName = "CardComponent"

export default function CoreCards() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 w-full">

      {coreTeamCards.map((card, index) => (
        <div key={index}>
          <CardComponent
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        </div>
      ))}
    </div>
  )
}
