import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://carlosdelangel.com"; // Replace with your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add more routes here if you add more pages, e.g.:
    // {
    //   url: `${baseUrl}/projects`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ];
}
