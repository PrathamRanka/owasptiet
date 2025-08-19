/* eslint-disable */
"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Marquee } from "@/components/ui/Sponsors-ui/InfiniteCarousel";

export function Sponsors() {
  const titleSponsors = useMemo(() => [
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505364/Kelloggs_logo_logotype_a385d9.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505363/paytm_l8xl0w.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505363/redbull_tugn5g.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505363/jio_ly5sdu.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755514358/ChatGPT_Image_Aug_18_2025_04_22_09_PM_wkscf8.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755513229/mlh_hacking_edfbnt.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755513079/github_odc7w9.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755513037/pepsi_c0peu5.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755513242/ibm_ayrgb3.jpg",
  ], []);

  const associateSponsors = useMemo(() => [
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505362/blockseblock_logo_u6wicm.jpg",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755513229/souled_tjlypp.jpg",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505360/solana_t7pfvp.jpg",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755513025/replit_pmnnmg.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505360/postman_m6rzp3.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505361/eth_tnpx2h.svg",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505362/devfolio_thzxdq.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505362/codechef_bdzsdh.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505362/codingblocks_f3i7lj.png",
  ], []);

  const communityPartners = useMemo(() => [
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505363/jawed-habib_ihfrno.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505360/tim-horotns_pnnqnl.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505360/xyz_slcx2i.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505360/belgian_waffle-removebg-preview_kcvvt4.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505360/archives-removebg-preview_svslrb.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505359/dev-removebg-preview_ms1yd9.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755513068/satrbucks-removebg-preview_tykdek.png",
    "https://res.cloudinary.com/dduzorsii/image/upload/v1755505362/codingninjas_vwku0y.png",
  ], []);

  const renderMarquee = (arr: string[], reverse = false, marginTop = "mt-10") => (
    <div className={marginTop}>
      <Marquee reverse={reverse} pauseOnHover className="[--duration:20s]">
        {arr.map((imgUrl, i) => (
          <motion.div
            key={`${imgUrl}-${i}`}
            className="relative mx-4 sm:mx-5 md:mx-6 lg:mx-6"
            initial={{ opacity: 0, scale: 0.8, boxShadow: "0 0 0px rgba(0,0,0,0)" }}
            animate={{ opacity: 1, scale: 1, boxShadow: "0 10px 20px rgba(0,0,0,0.25)" }}
            exit={{ opacity: 0, scale: 0.8, boxShadow: "0 0 0px rgba(0,0,0,0)" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="h-24 w-32 sm:h-28 sm:w-44 md:h-32 md:w-52 lg:h-32 lg:w-52 xl:h-36 xl:w-56 relative">
              <Image
                src={imgUrl}
                alt={`logo_${i}`}
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 8rem, (max-width: 1024px) 10rem, 16rem"
              />
            </div>
          </motion.div>
        ))}
      </Marquee>
    </div>
  );

  return (
    <div className="relative flex w-screen flex-col items-center justify-center overflow-hidden">
      {/* Title Sponsors */}
      <div className="w-full text-center mb-8">
        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-['Orbitron'] tracking-widest uppercase text-gray-300 block">
          Title Sponsors
        </span>
      </div>
      {renderMarquee(titleSponsors, false, "mt-6")}

      {/* Associate Sponsors */}
      <div className="w-full text-center mb-8 mt-16">
        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-['Orbitron'] tracking-widest uppercase text-gray-400 block">
          Associate Sponsors
        </span>
      </div>
      {renderMarquee(associateSponsors, true, "mt-6")}

      {/* Community Partners */}
      <div className="w-full text-center mb-8 mt-16">
        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-['Orbitron'] tracking-widest uppercase text-gray-500 block">
          Community Partners
        </span>
      </div>
      {renderMarquee(communityPartners, false, "mt-6")}
    </div>
  );
}
