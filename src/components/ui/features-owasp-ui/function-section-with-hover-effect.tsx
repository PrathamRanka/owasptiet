/* eslint-disable */
"use client";

import { cn } from "@/lib/utils";
import {
  IconSparkles,
  IconFlagCheck,
  IconUsersGroup,
  IconBinary,
  IconCircuitCellPlus,
  IconShield,
  IconRocket,
  IconShieldLock,
} from "@tabler/icons-react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "REGULAR MEET-UPS",
      description:
        "• Dive into new tech topics every week\n• Network and exchange ideas with fellow members",
      icon: <IconShield />,
    },
    {
      title: "SKILL DEVELOPMENT",
      description:
        "• Hands-on exercises to sharpen coding and problem-solving\n• Collaborate on mini-projects to strengthen practical skills",
      icon: <IconBinary />,
    },
    {
      title: "DESIGN OPPORTUNITIES",
      description:
        "• Create visuals for OWASP events posters, banners, videos\n• Develop your design thinking and communication skills",
      icon: <IconSparkles />,
    },
    {
      title: "PROJECT OPPORTUNITIES",
      description:
        "• Work on real tech projects from start to finish\n• Learn debugging, teamwork, and building deployable solutions",
      icon: <IconRocket />,
    },
    {
      title: "STRONG ALUMNI NETWORK",
      description:
        "• Get mentorship from OWASP alumni with real-world experience\n• Gain insights into tech careers and industry practices",
      icon: <IconUsersGroup />,
    },
    {
      title: "CROWN JEWEL EVENTS",
      description:
        "• HackOWASP – the legendary flagship hackathon of OWASP\n• CTF – the ultimate cybersecurity challenge\n• Managed entirely by our team, it's the largest tech event at Thapar",
      icon: <IconFlagCheck />,
    },
  ];

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    mode: "snap",
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 1.5, spacing: 16 } },
    },
  });

  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      if (slider.current) slider.current.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);

  const handlePrev = () => slider.current?.prev();
  const handleNext = () => slider.current?.next();

  return (
    <section className="w-full py-16 px-6 sm:px-10 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm tracking-widest uppercase text-blue-400 font-semibold font-mono block mb-4">
            OWASP MISSIONS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-['Orbitron'] uppercase">
            Your Tech Launchpad
          </h2>
          <p className="mt-6 text-sm sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Not just a club, an ecosystem. Build, break, secure, and innovate with a community that thrives on real-world challenges and endless learning.
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
            className="absolute left-3 top-[110%] -translate-y-1/2 z-20 bg-transparent text-white p-3 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-[110%] -translate-y-1/2 z-20 bg-transparent text-white p-3 rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div ref={sliderRef} className="keen-slider">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="keen-slider__slide min-w-[80%] mx-auto bg-neutral-900 rounded-xl border border-neutral-700 p-6 flex flex-col"
              >
                <div className="text-blue-400 text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-base whitespace-pre-line leading-relaxed text-neutral-300">
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
    <div className={cn("flex flex-col py-12 relative group/feature")}>
      {/* Removed white glow hover background */}

      <div className="mb-4 relative z-10 px-6 sm:px-8 text-blue-400 group-hover/feature:text-white transition-colors duration-200 text-4xl">
        {icon}
      </div>
      <div className="text-xl sm:text-2xl font-semibold mb-3 relative z-10 px-6 sm:px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-700 group-hover/feature:bg-cyan-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-base sm:text-lg text-neutral-300 max-w-xs relative z-10 px-6 sm:px-8 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};
