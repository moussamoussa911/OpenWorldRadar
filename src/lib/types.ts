export type ContentStatus = "official" | "analysis" | "rumor" | "speculation";
export type SourceType = "official" | "media" | "social" | "community" | "unknown";
export type Confidence = "official" | "likely" | "speculation";

export type Source = {
  title: string;
  url: string;
  publisher: string;
  date: string;
  type: SourceType;
  accessedAt?: string;
  trustLevel?: "primary" | "secondary" | "community";
  notes?: string;
};

export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  status: ContentStatus;
  sources: Source[];
  coverImage: string;
  gallery: string[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  platform: string[];
  affiliateUrl?: string;
  image: string;
  pros: string[];
  cons: string[];
  recommendationText: string;
};

export type MapPin = {
  id: string;
  title: string;
  description: string;
  category: string;
  position: { x: number; y: number };
  confidence: Confidence;
  source: Source;
  image: string;
};

export type GalleryImage = {
  id: string;
  title: string;
  category: string;
  credit: string;
  source?: Source;
  image: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type MediaAsset = {
  id: string;
  title: string;
  kind: "original-illustration" | "official-download" | "official-embed" | "licensed-photo" | "affiliate-product";
  recommendedUse: string;
  riskLevel: "low" | "medium" | "high";
  creditLine: string;
  source?: Source;
  storage: "local" | "remote-link-only" | "future-cms";
  notes: string;
};
