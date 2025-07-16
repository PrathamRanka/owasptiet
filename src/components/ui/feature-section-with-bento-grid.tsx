/* eslint-disable */
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  BugPlay,
  Activity,
  Users,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/bento-badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-4 items-center text-center">
            <div>
              <Badge className="bg-transparent shadow-none backdrop-blur-0 border-none p-0 text-xs sm:text-sm tracking-widest uppercase text-blue-400 font-semibold font-mono">
                OWASP Workshops
              </Badge>

            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase font-['Orbitron'] text-white tracking-wide">
                Explore. Hack. Secure. Learn.
              </h2>
             <p className="text-lg max-w-xl lg:max-w-2xl mx-auto text-center leading-relaxed text-white/70">
              Workshops that don’t just teach they challenge, break & build.
            </p>

            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col backdrop-blur-md hover:shadow-lg transition-all">
              <ShieldCheck className="w-8 h-8 text-white" />
              <div className="flex flex-col text-white">
                <h3 className="text-xl font-semibold tracking-tight mb-1">
                  Web App Security 101
                </h3>
                <p className="text-white/70 text-base max-w-xs mb-4">
                  Learn how attackers exploit web apps and how to defend using OWASP Top 10.
                </p>
                <Button
                  variant="ghost"
                  className="text-white w-fit gap-2 p-0 hover:underline hover:text-black"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-md aspect-square p-6 flex justify-between flex-col backdrop-blur-md hover:shadow-lg transition-all">
              <Activity className="w-8 h-8 text-white" />
              <div className="flex flex-col text-white">
                <h3 className="text-xl font-semibold tracking-tight mb-1">
                  CTF Bootcamp
                </h3>
                <p className="text-white/70 text-base max-w-xs mb-4">
                  Practice Capture The Flag challenges and sharpen your hacker mindset.
                </p>
                <Button
                  variant="ghost"
                  className="text-white w-fit gap-2 p-0 hover:underline hover:text-black"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-md aspect-square p-6 flex justify-between flex-col backdrop-blur-md hover:shadow-lg transition-all">
              <BugPlay className="w-8 h-8 text-white" />
              <div className="flex flex-col text-white">
                <h3 className="text-xl font-semibold tracking-tight mb-1">
                  Bug Bounty Basics
                </h3>
                <p className="text-white/70 text-base max-w-xs mb-4">
                  Learn to report real-world bugs and earn bounties using platforms like HackerOne.
                </p>
                <Button
                  variant="ghost"
                  className="text-white w-fit gap-2 p-0 hover:text-black hover:underline"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 border border-white/10 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col backdrop-blur-md hover:shadow-lg transition-all">
              <Users className="w-8 h-8 text-white" />
              <div className="flex flex-col text-white">
                <h3 className="text-xl font-semibold tracking-tight mb-1">
                  Secure DevOps
                </h3>
                <p className="text-white/70 text-base max-w-xs mb-4">
                  Integrate security into your CI/CD pipelines with tools like SonarQube, Snyk, and OWASP ZAP.
                </p>
                <Button
                  variant="ghost"
                  className="text-white w-fit gap-2 p-0 hover:text-black hover:underline"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
