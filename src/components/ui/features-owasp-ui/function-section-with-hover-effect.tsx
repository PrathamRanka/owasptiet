/* eslint-disable */
"use client";

import { cn } from "@/lib/utils";
import {
  IconSparkles,
  IconFlagCheck,
  IconUsersGroup,
  IconBinary,
  IconCircuitCellPlus,
  IconCalendarEvent,
  IconSwords,
  IconShieldLock,
} from "@tabler/icons-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "EVENTS: WHERE SECURITY MEETS INNOVATION",
      description:
        "HackOWASP: Our flagship hackathon challenges you to build secure solutions under pressure, mentored by industry experts.\nCapture The Flag (CTF): Compete in adrenaline-fueled cybersecurity battles – exploit vulnerabilities, defend systems, and sharpen your tactical skills.",
      icon: <IconFlagCheck />,
    },
    {
      title: "JUNIOR-SENIOR SYNERGY: GUIDANCE BEYOND THE CLASSROOM",
      description:
        "Structured mentorship where seniors provide:\n• Course Support for cybersecurity, AI, cloud, web dev\n• Tech Resources for certifications (CEH, CompTIA+)\n• Project Rescue for troubleshooting and design challenges",
      icon: <IconUsersGroup />,
    },
    {
      title: "TECH WITH TEETH: SECURITY THAT DELIVERS IMPACT",
      description:
        "We engineer solutions that solve real vulnerabilities:\n• Offensive security tools (pen-testing, threat detection)\n• AI/IoT/cloud projects\n• Features that 'bite back' against threats",
      icon: <IconBinary />,
    },
    {
      title: "PROJECT BUILDING: FROM IDEATION TO DEPLOYMENT",
      description:
        "Join end-to-end development:\n• Build scanners, DApps, forensic tools\n• Collaborate in cross-functional teams\n• Deploy real-world solutions with industry partners",
      icon: <IconCircuitCellPlus />,
    },
    {
      title: "BEYOND CODE: LAUNCHPADS FOR EVERY PASSION",
      description:
        "Non-tech roles power our mission:\n• Marketing & Branding for events\n• UX/Design for security platforms\n• Finance & Startups for funding and growth\n• Event Management for top-tier conferences",
      icon: <IconSparkles />,
    },
    {
      title: "OUR CULTURE: NO HIERARCHIES, ONLY HUSTLERS",
      description:
        "A flat community where every member codes, defends, and strategizes together. Security isn’t just a skill – it’s our mindset.",
      icon: <IconShieldLock />,
    },
  ];

  // Keen Slider setup for mobile
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    mode: "snap",
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 1.5, spacing: 16 } },
    },
  });

  // Auto swipe every 4 seconds
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      if (slider.current) slider.current.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);

  const handlePrev = () => {
    if (slider.current) slider.current.prev();
  };
  const handleNext = () => {
    if (slider.current) slider.current.next();
  };

  return (
    <section className="w-full py-16 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm tracking-widest uppercase text-blue-400 font-semibold font-mono block mb-4">
            OWASP Missions
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-['Orbitron'] uppercase">
            YOUR LAUNCHPAD FOR YOUR TECH JOURNEY
          </h2>
          <p className="mt-6 text-sm sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            We’re more than a cybersecurity chapter – we’re an innovation
            ecosystem where curious minds become tech leaders. At OWASP Thapar,
            you’ll bridge theory with real-world impact through collaborative
            security projects, industry-aligned events, and multidisciplinary
            growth.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>

        {/* Mobile Swipable Cards */}
        <div className="md:hidden w-full relative">
          <button
            onClick={handlePrev}
            className="absolute left-3 top-[115%] -translate-y-1/2 z-20 bg-transparent text-white p-3 rounded-full shadow-lg"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-[115%] -translate-y-1/2 z-20 bg-transparent text-white p-3 rounded-full shadow-lg"
          >
            ▶
          </button>

          <div ref={sliderRef} className="keen-slider">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="keen-slider__slide min-w-[80%] mx-auto bg-neutral-900 rounded-xl border border-neutral-700 p-6 flex flex-col"
              >
                <div className="text-blue-400 text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-300 text-base whitespace-pre-line leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn("flex flex-col py-12 relative group/feature")}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100/5 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100/5 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-6 sm:px-8 text-blue-400 group-hover/feature:text-white transition-colors duration-200 text-2xl">
        {icon}
      </div>
      <div className="text-lg sm:text-xl font-semibold mb-3 relative z-10 px-6 sm:px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-700 group-hover/feature:bg-cyan-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm sm:text-base text-neutral-300 max-w-xs relative z-10 px-6 sm:px-8 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};
