import type { MetadataRoute } from "next";
import { allProjects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ryanwilson.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = allProjects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/hire`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectRoutes,
  ];
}
