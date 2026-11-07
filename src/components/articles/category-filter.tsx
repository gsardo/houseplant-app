const categories = [
  { label: "All", value: "all" },
  { label: "Beginners", value: "beginners" },
  { label: "Advanced", value: "advanced" },
  { label: "Seasonal", value: "seasonal" },
  { label: "DIY", value: "diy" },
];

export function CategoryFilter() {
  return (
    <div id="category-filter">
      {categories.map((cat) => (
        <button key={cat.value}>{cat.label}</button>
      ))}
    </div>
  );
}
