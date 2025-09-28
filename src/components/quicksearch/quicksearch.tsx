interface QuickSearchProps {
    activeCategory: string | null;
    onCategorySelect: (category: string | null) => void;
}

export function QuickSearch({ activeCategory, onCategorySelect }: QuickSearchProps) {
    const categories = [
        { id: 'easy-care', label: 'Easy care' },
        { id: 'pet-friendly', label: 'Pet friendly' },
        { id: 'succulents', label: 'Succulents' },
        { id: 'low-light', label: 'Low light plants' }
    ];

    return (
        <div className="quick-search">
            <div className="quick-search-buttons">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => onCategorySelect(
                            activeCategory === category.id ? null : category.id
                        )}
                        className={`quick-search-btn ${
                            activeCategory === category.id ? 'active' : ''
                        }`}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
