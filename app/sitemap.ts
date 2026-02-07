import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.evidencestandard.org";

  return [
    {
      url: `${base}/`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/governance`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
