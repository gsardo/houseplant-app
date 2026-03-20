import { Article } from "@/types/article";

export const articlesData: Article[] = [
  {
    id: "1",
    title: "Getting Started with Indoor Plants",
    excerpt:
      "New to houseplants? This beginner-friendly guide covers everything you need to know — from choosing your first plant to understanding basic care routines that will keep your greenery thriving.",
    author: "Emma Green",
    date: "2026-03-15",
    readingTime: 5,
    category: "beginners",
    featured: true,
    tags: ["beginner", "indoor", "getting started"],
  },
  {
    id: "2",
    title: "Winter Care: Keeping Plants Happy in Cold Months",
    excerpt:
      "As temperatures drop and daylight hours shorten, your houseplants need different care. Learn how to adjust watering, lighting, and humidity to help your plants survive winter.",
    author: "James Thornton",
    date: "2026-02-20",
    readingTime: 7,
    category: "seasonal",
    featured: false,
    tags: ["winter", "seasonal", "temperature"],
  },
  {
    id: "3",
    title: "DIY Macrame Plant Hangers",
    excerpt:
      "Create beautiful hanging displays for your plants with simple macrame techniques. This step-by-step tutorial uses basic knots and affordable materials from your local craft shop.",
    author: "Sofia Reyes",
    date: "2026-01-10",
    readingTime: 10,
    category: "diy",
    featured: false,
    tags: ["diy", "macrame", "decor", "hanging"],
  },
  {
    id: "4",
    title: "Understanding Soil pH and Your Plants",
    excerpt:
      "Soil pH affects how well your plants absorb nutrients. Discover how to test your soil, what pH ranges different plants prefer, and how to amend your potting mix for optimal growth.",
    author: "Dr. Liam Chen",
    date: "2026-03-01",
    readingTime: 8,
    category: "advanced",
    featured: false,
    tags: ["soil", "pH", "nutrients", "advanced"],
  },
  {
    id: "5",
    title: "Top 5 Low-Light Plants for Dark Rooms",
    excerpt:
      "Not every room has a sunny window. These five resilient houseplants thrive in low-light conditions, making them perfect for offices, bathrooms, and north-facing rooms.",
    author: "Emma Green",
    date: "2026-02-05",
    readingTime: 4,
    category: "beginners",
    featured: true,
    tags: ["low light", "beginner", "recommendations"],
  },
  {
    id: "6",
    title: "How to Propagate Pothos: A Complete Guide",
    excerpt:
      "Pothos is one of the easiest houseplants to propagate. Learn water propagation, soil propagation, and division techniques to multiply your collection for free.",
    author: "James Thornton",
    date: "2026-01-25",
    readingTime: 6,
    category: "advanced",
    featured: false,
    tags: ["propagation", "pothos", "advanced", "tutorial"],
  },
];

export const getArticlesByCategory = (
  category: Article["category"]
): Article[] => {
  return articlesData.filter((article) => article.category === category);
};

export const getFeaturedArticles = (): Article[] => {
  return articlesData.filter((article) => article.featured);
};
