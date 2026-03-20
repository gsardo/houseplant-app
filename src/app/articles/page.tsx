import { articlesData, getFeaturedArticles } from "@/data/articles";
import { FeaturedArticle } from "@/components/articles/featured-article";
import { CategoryFilter } from "@/components/articles/category-filter";
import { ArticleList } from "@/components/articles/article-list";

export default function ArticlesPage() {
  const featured = getFeaturedArticles()[0];
  const otherArticles = articlesData.filter((a) => a.id !== featured?.id);

  return (
    <div className="max-w-4xl mx-auto px-5 py-12">
      <h2>Articles</h2>

      {featured && <FeaturedArticle article={featured} />}

      <CategoryFilter />

      <ArticleList articles={otherArticles} />
    </div>
  );
}
