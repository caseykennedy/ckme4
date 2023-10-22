import type { MetadataRoute } from "next";

import siteMetadata from "~/data/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  const routes = [""].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    // changeFrequency: "monthly",
    priority: 1,
  }));

  return [...routes];
}
