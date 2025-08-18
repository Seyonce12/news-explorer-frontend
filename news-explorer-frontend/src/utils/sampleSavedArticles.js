// src/data/sampleSavedArticles.js
// Static sample saved articles that include local images.
// Make sure the three files exist at: src/assets/images/article1.webp / article2.webp / article3.jpeg

import articleImg1 from "../assets/images/article1.webp";
import articleImg2 from "../assets/images/article2.webp";
import articleImg3 from "../assets/images/article3.jpeg";

export const SAMPLE_SAVED_ARTICLES = [
  {
    _id: "sample-1",
    title: "Breakthrough in Renewable Energy Technology",
    description:
      "A new type of solar cell promises higher efficiency and lower costs, researchers say.",
    url: "https://example.com/articles/renewable-energy-breakthrough",
    urlToImage: articleImg1,
    source: { name: "GreenTech Daily" },
    publishedAt: "2025-07-10T09:30:00Z",
    keyword: "Energy",
  },
  {
    _id: "sample-2",
    title: "Local Community Garden Inspires Neighbourhood",
    description:
      "Volunteers turned an empty lot into a productive community garden — a model for urban spaces.",
    url: "https://example.com/articles/community-garden",
    urlToImage: articleImg2,
    source: { name: "Neighbourhood Times" },
    publishedAt: "2025-06-21T14:05:00Z",
    keyword: "Community",
  },
  {
    _id: "sample-3",
    title: "Tech Startups Push Boundaries of AI Ethics",
    description:
      "Startups are experimenting with new ways to make AI decisions interpretable and fair.",
    url: "https://example.com/articles/ai-ethics",
    urlToImage: articleImg3,
    source: { name: "TechWorld" },
    publishedAt: "2025-05-02T08:15:00Z",
    keyword: "Technology",
  },
];
