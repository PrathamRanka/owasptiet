import { Button } from "@/ui/button";
import {
  ShieldCheck,
  BugPlay,
  Activity,
  Users,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/ui/bento-badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-white/10 text-white border border-white/20 backdrop-blur-md">
                OWASP Workshops
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tight font-extrabold text-white drop-shadow">
                Explore. Hack. Secure. Learn.
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed text-white/70">
                Dive deep into security with hands-on workshops—from beginner bugs to secure DevOps pipelines.
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
                  className="text-white w-fit gap-2 p-0 hover:underline hover:text-white/80"
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
                  className="text-white w-fit gap-2 p-0 hover:underline hover:text-white/80"
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
                  className="text-white w-fit gap-2 p-0 hover:underline hover:text-white/80"
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
                  className="text-white w-fit gap-2 p-0 hover:underline hover:text-white/80"
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
