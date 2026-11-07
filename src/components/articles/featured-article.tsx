import { Article } from "@/types/article";

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article id="featured-article">
      <div id="featured-visual">🌿</div>
      <div>
        <mark>Featured</mark>
        <h4>{article.title}</h4>
        <p>{article.excerpt}</p>
        <footer>
          <span>{article.author}</span>
          <span>{article.readingTime} min read</span>
          <span>
            {new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
          </span>
        </footer>
      </div>
    </article>
  );
}
