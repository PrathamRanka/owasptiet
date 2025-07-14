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

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Welcome to the Guild",
      description:
        "New to OWASP Thapar? You’re not just joining a tech club—you’re entering a guild of hackers, makers, builders, and defenders.",
      icon: <IconSparkles />,
    },
    {
      title: "Chapter Meets",
      description:
        "Our monthly chapter meets are the soul of our community—discussions, debates, and deep dives into everything security.",
      icon: <IconCalendarEvent />,
    },
    {
      title: "HackOWASP 7.0",
      description:
        "Our flagship 36-hour hackathon brings minds from across the nation. Code hard, caffeinate harder, and defend your stack.",
      icon: <IconFlagCheck />,
    },
    {
      title: "Capture The Flag (CTF)",
      description:
        "Got what it takes to crack hashes, exploit flaws, and pwn binaries? Join our CTFs and flex your cyber muscle.",
      icon: <IconSwords />,
    },
    {
      title: "Workshops & Bootcamps",
      description:
        "From intro to infosec to advanced malware analysis—learn by doing in high-energy, hands-on sessions.",
      icon: <IconCircuitCellPlus />,
    },
    {
      title: "Core Team Culture",
      description:
        "We’re not a hierarchy. We’re a crew. Everyone builds, learns, and grows together—with memes, of course.",
      icon: <IconUsersGroup />,
    },
    {
      title: "Tech with Teeth",
      description:
        "We don’t just ship pretty UIs—we engineer resilient systems, smart scanners, and real-world-ready tools.",
      icon: <IconBinary />,
    },
    {
      title: "Security. Always.",
      description:
        "At our core, we’re defenders. OWASP Thapar believes security isn’t a feature—it’s a mindset.",
      icon: <IconShieldLock />,
    },
  ];

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center -mt-24 pb-24 sm:pb-32"> {/* ⬅ shift upward */}
      <div className="relative z-10 py-20 px-8 sm:px-16 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)] font-['Orbitron'] uppercase">
            ENTER THE ARENA
          </h2>
          <p className="mt-6 text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            OWASP Thapar is not just about security it is a playground for hackers, a launchpad for devs, and a haven for the curious. Here is a taste of what we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
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
      className={cn(
        "flex flex-col lg:border-r py-12 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100/5 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100/5 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-400 group-hover/feature:text-white transition-colors duration-200">
        {icon}
      </div>
      <div className="text-xl font-semibold mb-3 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-blue-700 group-hover/feature:bg-cyan-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
