import React from "react";
import type { Metadata } from "next";
import HomePageClient from "./home-client";

export const metadata: Metadata = {
  title: "Home",
  description:
    "OWASP TIET is a community-driven chapter focused on application security, workshops, hackathons, and student-led initiatives.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://owasptiet.com",
    title: "OWASP TIET",
    description:
      "OWASP TIET is a community-driven chapter focused on application security, workshops, hackathons, and student-led initiatives.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OWASP TIET",
    description:
      "OWASP TIET is a community-driven chapter focused on application security, workshops, hackathons, and student-led initiatives.",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "OWASP TIET",
            url: "https://owasptiet.com",
            sameAs: [
              "https://twitter.com/owasptiet",
              "https://www.linkedin.com/company/owasptiet/",
            ],
            logo: "https://owasptiet.com/favicon.ico",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "OWASP TIET",
            url: "https://owasptiet.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://owasptiet.com/?q={search_term_string}",
              },
              queryInput: "required name=search_term_string",
            },
          }),
        }}
      />
      <HomePageClient />
    </>
  );
}
