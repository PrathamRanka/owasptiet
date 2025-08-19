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
    title: "Avneet Kaur Bhatia",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548082/IMG_5039_-_Avneet_kaur_Bhatia_rjnods.jpg",
    linkedin: "https://www.linkedin.com/in/avneet-kaur-bhatia-5a60bb314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/Avneetbhatia12",
  },
  {
    title: "Pratham Ranka",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548702/ME_pk41bw.jpg",
    linkedin: "linkedin.com/in/prathamranka06",
    github: "https://github.com/PrathamRanka",
  },
    {
    title: "Harshdeep Athawale",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548080/good_pic_-_Harshdeep_Athawale_cs7fx3.jpg",
    linkedin: "http://www.linkedin.com/in/harshdeepathawale",
    github: "https://github.com/HarshdeepAthawale",
  },
  {
    title: "Krish Kumar",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548773/Screenshot_20250817_214557_WhatsApp_-_Krish_Kumar_dugrr2.png",
    linkedin: "https://www.linkedin.com/in/krish-kumar-90a78a33b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Krishkumar527",
  },
  {
    title: "Sanchita Jain",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548084/Sanchita_1024031020_-_Sanchita_Jain_dwkrad.png",
    linkedin: "https://www.linkedin.com/in/sanchita-jain-5724b6310/",
    github: "https://github.com/sanchita1001",
  },
  {
    title: "Sagarika Wankhede",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548084/profile_picture_sagarika_-_Sagarika_Wankhede_ohukao.jpg",
    linkedin: "https://www.linkedin.com/in/sagarikawankhede/",
    github: "https://github.com/SagarikaWankhede",
  },
  {
    title: "Aryaman Malik",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548088/IMG_20250322_231158_-_ARYAMAN_MALIK_aef2lj.jpg",
    linkedin: "https://www.linkedin.com/in/aryaman-malik-a3342126b",
    github: "https://github.com/SlayerDraco",
  },
  {
    title: "Antriksh",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548081/IMG-20250409-WA0004_-_Antriksh_lwmxxg.jpg",
    linkedin: "https://www.linkedin.com/in/antrikshsingh08?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Antriksh1984",
  },
  {
    title: "Vishwa",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755587074/vishwa_p8ai2n.jpg",
    linkedin: "https://www.linkedin.com/in/vishwa-choudhary-648b3a316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/awhsiv05",
  },
  {
    title: "Kumari Manya",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548085/OwaspProfile_-_Kumari_Manya_qv54t5.jpg",
    linkedin: "https://www.linkedin.com/in/kumari-manya-346118328/",
    github: "https://github.com/ManyaK22",
  },
  {
    title: "Anmol Mittal",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548080/20250411_230819_-_Anmol_Mittal_vrdogv.jpg",
    linkedin: "",
    github: "https://github.com/CoderAnmolMittal",
  },
  {
    title: "Vanshika",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755593629/vanshika_zhn1sc.jpg",
    linkedin: "https://www.linkedin.com/in/vanshika-bansal-62b546330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/vanshii18",
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
    github: "",
  },
  {
    title: "Kavya",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755583036/IMG-20250717-WA0026_-_Kavya_ay9p7d.jpg",
    linkedin: "https://www.linkedin.com/in/kavya-thukral-82b090325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/kavvz20",
  },
  {
    title: "Dhruv Mittal",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548080/dhruvuvuvuvuv_-_Dhruv_Mittal_byjtil.jpg",
    linkedin: "https://www.linkedin.com/in/its-dhruv-here/",
    github: "https://github.com/its-dhruv-here",
  },
  {
    title: "Sehajneet Kaur",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548080/IMG_2403_-_Sehajneet_Kaur_ilblyf.jpg",
    linkedin: "http://www.linkedin.com/in/sehajneet-kaur-788412330",
    github: "https://github.com/Sehaj38",
  },
    {
    title: "Kushagra Goel",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755586879/kushagra_ask1gu.jpg",
    linkedin: "https://www.linkedin.com/in/kushagra-goel-174828313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://www.linkedin.com/in/kushagra-goel-174828313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },

  {
    title: "Sparsh Khandelwal",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548080/IMG_3985_-_Sparsh_Khandelwal_cyysfl.jpg",
    linkedin: "http://www.linkedin.com/in/sparsh-khandelwal-256333314",
    github: "https://github.com/sparsh914",
  },
  {
    title: "Mehak Garg",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548079/1000160078_-_Mehak_Garg_x48aoi.jpg",
    linkedin: "https://www.linkedin.com/in/mehakgarg007",
    github: "https://github.com/Mehak1314",
  },
  {
    title: "Sneha Tanwar",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548083/IMG-20250609-WA0006_3_-_Sneha_Tanwar_bthcs0.jpg",
    linkedin: "https://www.linkedin.com/in/sneha-tanwar-a8186a213/",
    github: "https://github.com/SnehaTanwar006",
  },
  {
    title: "Priyancy Ajmani",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755548087/WhatsApp_Image_2025-08-17_at_20.26.42_a7a79124_-_Priyancy_Ajmani_toexxk.jpg",
    linkedin: "https://www.linkedin.com/in/priyancy-ajmani-b4a02b2bb?trk=contact-info",
    github: "https://github.com/ajmanipriyancy",
  },
  {
    title: "Saurabh Shivhare",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755597066/saurabh_euquc8.jpg",
    linkedin: "https://www.linkedin.com/in/saurabh-shivhare-aa0aa3337/",
    github: "https://github.com/",
  },
  {
    title: "Prabal Gupta",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755597066/Prabal_gglbtw.jpg",
    linkedin: "https://www.linkedin.com/in/prabal-gupta-27008533b/",
    github: "https://github.com/",
  },
  {
    title: "Bhavya Yelchala",
    designation: "Core",
    src: "https://res.cloudinary.com/dduzorsii/image/upload/v1755588506/bhavya_t5qpk4.jpg",
    linkedin: "https://www.linkedin.com/in/bhavya-reddy-a9245232a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github: "https://github.com/bhavyareddy369",
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
