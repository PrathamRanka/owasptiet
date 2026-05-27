import TeamPageClient from "./team-client";

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "OWASP TIET Team",
            url: "https://owasptiet.com/team",
            description: "Meet the executive board and core members of OWASP TIET.",
          }),
        }}
      />
      <TeamPageClient />
    </>
  );
}
