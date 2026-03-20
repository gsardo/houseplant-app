import { Article } from "@/types/article";
import { ArticleCard } from "./article-card";

export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="flex flex-col gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
