import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://owasptiet.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


