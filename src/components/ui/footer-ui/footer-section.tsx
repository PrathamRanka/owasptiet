"use client";

import * as React from "react";
import { Button } from "./footer-button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./footer-tooltip";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

function Footerdemo() {
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleScroll = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 relative">
        {/* Decorative blur element */}
        <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />

        {/* Main Sections */}
        <div className="flex flex-col gap-12 items-center md:flex-row md:justify-between md:items-start">
          {/* Quick Links */}
          <div className="flex-1 space-y-4 text-center md:text-left md:pr-8">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <button
                onClick={() => handleScroll("home")}
                className="block transition-colors hover:text-primary"
              >
                Home
              </button>
              <button
                onClick={() => handleScroll("about")}
                className="block transition-colors hover:text-primary"
              >
                About OWASP
              </button>
              <button
                onClick={() => handleScroll("missions")}
                className="block transition-colors hover:text-primary"
              >
                Core Mission
              </button>
              <button
                onClick={() => handleScroll("form")}
                className="block transition-colors hover:text-primary"
              >
                Form
              </button>
              <a
                href="/team"
                className="block transition-colors hover:text-primary"
              >
                Team
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Thapar Institute of Engineering</p>
              <p>Phone: +91 95013 49322</p>
              <p>Email: owasptu@gmail.com</p>
            </address>
          </div>

          {/* Social Links */}
          <div className="flex-1 text-center md:text-right">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex justify-center md:justify-end space-x-4">
              {/* Twitter */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://x.com/owasp_tiet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on X (Twitter)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Instagram */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.instagram.com/owasp_tiet/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* LinkedIn */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/company/owasp-tiet/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
  <p className="text-sm text-muted-foreground">
    © OWASP TIET STUDENT CHAPTER
  </p>
  <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
    <a href="#" className="transition-colors hover:text-primary">
      Privacy Policy
    </a>
    <a href="#" className="transition-colors hover:text-primary">
      Terms of Service
    </a>
    <a href="#" className="transition-colors hover:text-primary">
      Cookie Settings
    </a>
  </nav>
</div>

{/* Made with Love Section */}
<div className="mt-6 text-center flex items-center justify-center gap-2 text-sm text-muted-foreground">
  <span>Made with</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke="red" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.02 4.02 4 6.5 4c1.74 0 3.41 1.01 4.5 2.09C12.09 5.01 13.76 4 15.5 4 17.98 4 20 6.02 20 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
  </svg>
  <span>by OWASP Core Team</span>
</div>

      </div>
    </footer>
  );
}

export { Footerdemo };
