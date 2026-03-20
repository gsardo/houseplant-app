import { Article } from "@/types/article";

const categoryColors: Record<Article["category"], string> = {
  beginners: "bg-green-500",
  advanced: "bg-purple-500",
  seasonal: "bg-orange-500",
  diy: "bg-blue-500",
};

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="bg-dark-100 rounded-2xl p-5 shadow-inner shadow-light-100/10">
      {/* Horizontal flex card: stacks on mobile, row on sm+ */}
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        {/* Category colour indicator bar */}
        <div
          className={`flex-shrink-0 w-full sm:w-1 h-1 sm:h-auto sm:self-stretch rounded-full ${categoryColors[article.category]}`}
        />

        {/* Main content area — grows to fill */}
        <div className="flex-1">
          <h4 className="text-white font-bold text-base text-left mx-0 max-w-none mb-1">
            {article.title}
          </h4>
          <p className="text-gray-100 text-sm leading-relaxed mb-2">
            {article.excerpt}
          </p>
          {/* Tags row using flex-wrap */}
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-white/10 text-white/70 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata column — fixed width, right-aligned */}
        <div className="flex-shrink-0 flex flex-col items-end text-xs text-gray-100 gap-1">
          <span>{article.author}</span>
          <span>{article.readingTime} min</span>
          <span>
            {new Date(article.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
            })}
          </span>
        </div>
      </div>
    </article>
  );
}
