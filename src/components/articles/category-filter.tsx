const categories = [
  { label: "All", value: "all" },
  { label: "Beginners", value: "beginners" },
  { label: "Advanced", value: "advanced" },
  { label: "Seasonal", value: "seasonal" },
  { label: "DIY", value: "diy" },
];

export function CategoryFilter() {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      {categories.map((cat) => (
        <button
          key={cat.value}
          className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full
                     border border-white/20 transition-all duration-200
                     hover:bg-white/20 hover:scale-105 active:scale-95"
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
