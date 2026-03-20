import { Article } from "@/types/article";

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article className="bg-dark-100 rounded-2xl p-6 shadow-inner shadow-light-100/10">
      {/* Horizontal flex: stacks on mobile, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Placeholder image area */}
        <div className="flex-shrink-0 w-full md:w-64 h-48 bg-white/10 rounded-xl flex items-center justify-center">
          <span className="text-5xl">🌿</span>
        </div>

        {/* Article content */}
        <div className="flex-1">
          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs font-medium uppercase">
            Featured
          </span>
          <h4 className="text-white font-bold text-xl text-left mx-0 max-w-none mt-2 mb-2">
            {article.title}
          </h4>
          <p className="text-gray-100 text-sm leading-relaxed mb-3">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 text-gray-100 text-xs">
            <span>{article.author}</span>
            <span>·</span>
            <span>{article.readingTime} min read</span>
            <span>·</span>
            <span>{new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
