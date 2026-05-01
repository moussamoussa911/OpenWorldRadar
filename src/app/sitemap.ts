import type { MetadataRoute } from "next";
import { articles, guideArticles, siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/news", "/release", "/map", "/gallery", "/setup-builder", "/guides", "/about", "/contact", "/impressum", "/datenschutz"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() })),
    ...articles.map((article) => ({ url: `${siteUrl}/news/${article.slug}`, lastModified: new Date(article.updatedAt) })),
    ...guideArticles.map((article) => ({ url: `${siteUrl}/guides/${article.slug}`, lastModified: new Date(article.updatedAt) })),
  ];
}
