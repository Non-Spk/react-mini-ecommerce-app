import CategoryButton from "@/components/CategoryButton";
import { useCategories } from "@/hooks";

interface SideBarProps {
    selectedCategory?: string;
    onSelectCategory: (category?: string) => void;
}

export default function SideBar({ selectedCategory, onSelectCategory }: SideBarProps) {
    const { categories, loading, error } = useCategories();
    if (loading) return <p>Loading categories...</p>;
    if (error) return <p>{error}</p>;

    return (
        <aside className='sticky top-0 h-full w-64 shadow-lg flex flex-col py-4 bg-(--bg-secondary)/95'>
            <h2 className="text-lg font-bold text-(--bg-primary) mx-6 px-2 mb-2">
                Categories
            </h2>
            <div className="flex flex-col gap-1">
                <CategoryButton
                    name="All"
                    slug=""
                    active={!selectedCategory}
                    onClick={() => onSelectCategory(undefined)}
                />
                {categories.map(cat => (
                    <CategoryButton
                        key={cat.slug}
                        name={cat.name}
                        slug={cat.slug}
                        active={selectedCategory === cat.slug}
                        onClick={onSelectCategory}
                    />
                ))}
            </div>
        </aside>
    );
}
