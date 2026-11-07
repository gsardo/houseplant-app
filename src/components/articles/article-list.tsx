import { Article } from "@/types/article";
import { ArticleCard } from "./article-card";

export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div id="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
