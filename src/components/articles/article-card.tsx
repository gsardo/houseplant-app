import { Article } from "@/types/article";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article data-category={article.category}>
      <h4>{article.title}</h4>
      <p>{article.excerpt}</p>
      <ul>
        {article.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <footer>
        <span>{article.author}</span>
        <span>{article.readingTime} min</span>
        <span>
          {new Date(article.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
          })}
        </span>
      </footer>
    </article>
  );
}
