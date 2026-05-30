import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteConfig.url}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/services/seo-optimization`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/services/website-advertising-abu-dhabi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    {
      url: `${siteConfig.url}/services/website-advertising-dubai`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    {
      url: `${siteConfig.url}/services/website-advertising-uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    {
      url: `${siteConfig.url}/services/maintenance`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/services/whatsapp-integration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/services/website-design`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteConfig.url}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
