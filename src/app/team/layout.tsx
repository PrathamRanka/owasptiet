import type { Metadata } from "next";
import TeamLayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Executive Board and Core Members of OWASP TIET.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    type: "website",
    url: "https://owasptiet.com/team",
    title: "Team | OWASP TIET",
    description: "Meet the Executive Board and Core Members of OWASP TIET.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team | OWASP TIET",
    description: "Meet the Executive Board and Core Members of OWASP TIET.",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <TeamLayoutClient>{children}</TeamLayoutClient>;
}
