export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: number;
  category: "beginners" | "advanced" | "seasonal" | "diy";
  featured: boolean;
  tags: string[];
}
