"use client";

import { motion, easeInOut, easeOut, type Transition } from "framer-motion";
import { StarsBackground } from "@/ui/stars-background";
import { ShootingStars } from "@/ui/shooting-stars";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    } as Transition,
  },
};


const footerData = {
  sections: [
    {
      title: "OWASP TIET",
      links: ["About Us", "Our Vision", "Team 2025", "Contact"],
    },
    {
      title: "Projects",
      links: ["Flagship Projects", "Research", "GitHub Repos", "Showcase"],
    },
    {
      title: "Community",
      links: ["Events", "Workshops", "CTFs", "Discord"],
    },
    {
      title: "Resources",
      links: ["Docs", "Learning Hub", "Code of Conduct", "FAQs"],
    },
  ],
  social: [
    { href: "https://twitter.com/owasptiet", label: "Twitter", icon: "T" },
    { href: "https://github.com/OWASP-TIET", label: "GitHub", icon: "G" },
    { href: "https://linkedin.com/company/owasp-tiet", label: "LinkedIn", icon: "L" },
  ],
  title: "OWASP TIET",
  subtitle: "Empowering ethical tech at Thapar — 2025",
  copyright: "©2025 OWASP TIET",
};


const NavSection = ({
  title,
  links,
  index,
  className = "",
}: {
  title: string;
  links: string[];
  index: number;
  className?: string;
}) => (
  <motion.div variants={itemVariants} custom={index} className={`flex flex-col gap-2 ${className}`}>
    <motion.h3
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      className="mb-2 uppercase text-xs font-semibold tracking-wider border-b border-border pb-1 text-white"
    >
      {title}
    </motion.h3>
    {links.map((link, linkIndex) => (
      <motion.a
        key={linkIndex}
        variants={linkVariants}
        custom={linkIndex}
        href="#"
        whileHover={{
          x: 8,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        className="text-white hover:text-gray-300 transition-colors duration-300 font-sans text-xs md:text-sm group relative"
      >
        <span className="relative">
          {link}
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </span>
      </motion.a>
    ))}
  </motion.div>
);

const SocialLink = ({
  href,
  label,
  icon,
  index,
  className="",
  
}: {
  href: string;
  label: string;
  icon: string;
  index: number;
  className?: string;
}) => (
  <motion.a
    variants={socialVariants}
    custom={index}
    href={href}
    whileHover={{
      scale: 1.2,
      rotate: 12,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    }}
    whileTap={{ scale: 0.9 }}
    className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-muted hover:bg-gradient-to-r hover:from-primary hover:to-secondary flex items-center justify-center transition-colors duration-300 group ${className}`}
    aria-label={label}
  >
    <motion.span
      className="text-xs md:text-sm font-bold text-muted-foreground group-hover:text-primary-foreground"
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.span>
  </motion.a>
);

export default function StickyFooter() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* ⭐ Background Stars and Shooting Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
        {/* Dark overlay for contrast */}
      </div>

      {/* ⬇️ Sticky Footer Content */}
      <div className="relative h-[calc(100vh+70vh)] -top-[100vh]">
        <div className="h-[70vh] sticky top-[calc(100vh-70vh)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="py-6 md:py-12 px-4 md:px-12 h-full w-full flex flex-col justify-between relative overflow-hidden"
          >
            {/* Footer Links Section */}
            <motion.div variants={containerVariants} className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 lg:gap-20">
                {footerData.sections.map((section, index) => (
                  <NavSection
                    key={section.title}
                    title={section.title}
                    links={section.links}
                    index={index}
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  />
                ))}
              </div>
            </motion.div>

            {/* Title + Subtitle + Socials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: easeOut }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end relative z-10 gap-4 md:gap-6 mt-6"
            >
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8, ease: easeOut }}
                  whileHover={{
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="text-white text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] leading-[0.8] font-serif cursor-default"
                >
                  {footerData.title}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex items-center gap-3 md:gap-4 mt-3 md:mt-4"
                >
                  <motion.div
                    className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"
                    animate={{ scaleX: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
                  />
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="text-white text-xs md:text-sm font-sans hover:text-gray-300 transition-colors duration-300"
                  >
                    {footerData.subtitle}
                  </motion.p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="text-left md:text-right"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="text-white text-xs md:text-sm mb-2 md:mb-3 hover:text-gray-300 transition-colors duration-300"
                >
                  {footerData.copyright}
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 2, staggerChildren: 0.1 }}
                  className="flex gap-2 md:gap-3"
                >
                  {footerData.social.map((social, index) => (
                    <SocialLink
                      key={social.label}
                      href={social.href}
                      label={social.label}
                      icon={social.icon}
                      index={index}
                      className="text-white hover:text-gray-300 transition-colors duration-300"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
