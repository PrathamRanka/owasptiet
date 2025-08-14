/*eslint-disable*/
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
    { title: "Welcome to the Guild", description: "New to OWASP Thapar? You’re not just joining a tech club—you’re entering a guild of hackers, makers, builders, and defenders.", icon: <IconSparkles /> },
    { title: "Chapter Meets", description: "Our monthly chapter meets are the soul of our community—discussions, debates, and deep dives into everything security.", icon: <IconCalendarEvent /> },
    { title: "HackOWASP 7.0", description: "Our flagship 36-hour hackathon brings minds from across the nation. Code hard, caffeinate harder, and defend your stack.", icon: <IconFlagCheck /> },
    { title: "Capture The Flag (CTF)", description: "Got what it takes to crack hashes, exploit flaws, and pwn binaries? Join our CTFs and flex your cyber muscle.", icon: <IconSwords /> },
    { title: "Workshops & Bootcamps", description: "From intro to infosec to advanced malware analysis—learn by doing in high-energy, hands-on sessions.", icon: <IconCircuitCellPlus /> },
    { title: "Core Team Culture", description: "We’re not a hierarchy. We’re a crew. Everyone builds, learns, and grows together—with memes, of course.", icon: <IconUsersGroup /> },
    { title: "Tech with Teeth", description: "We don’t just ship pretty UIs—we engineer resilient systems, smart scanners, and real-world-ready tools.", icon: <IconBinary /> },
    { title: "Security. Always.", description: "At our core, we’re defenders. OWASP Thapar believes security isn’t a feature—it’s a mindset.", icon: <IconShieldLock /> },
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
      if (slider.current) slider.current.next(); // always use slider.current
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
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-['Orbitron'] uppercase">
            Enter The Arena
          </h2>
          <p className="mt-6 text-sm sm:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            OWASP Thapar is not just about security—it’s a playground for hackers, a launchpad for devs, and a haven for the curious. Here’s a taste of what we do.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>

        {/* Mobile Swipable Cards */}
        <div className="md:hidden w-full relative">
          {/* Buttons */}
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
                <div className="text-blue-400 text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-neutral-300 text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Feature = ({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number }) => {
  return (
    <div
      className={cn(
        "flex flex-col py-12 relative group/feature",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100/5 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100/5 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-6 sm:px-8 text-blue-400 group-hover/feature:text-white transition-colors duration-200 text-2xl">{icon}</div>
      <div className="text-lg sm:text-xl font-semibold mb-3 relative z-10 px-6 sm:px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-700 group-hover/feature:bg-cyan-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">{title}</span>
      </div>
      <p className="text-sm sm:text-base text-neutral-300 max-w-xs relative z-10 px-6 sm:px-8 leading-relaxed">{description}</p>
    </div>
  );
};
