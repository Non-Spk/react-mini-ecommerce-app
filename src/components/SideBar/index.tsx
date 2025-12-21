import CategoryButton from "@/components/CategoryButton";
import { useCategories } from "@/hooks";

interface SideBarProps {
    onSelectCategory: (category?: string) => void;
}

export default function SideBar({ onSelectCategory }: SideBarProps) {
    const { categories, loading, error } = useCategories();
    if (loading) return <p>Loading categories...</p>;
    if (error) return <p>{error}</p>;
    return (
        <aside>
            <h2>Categories</h2>
            <div>
                <CategoryButton name="All" slug="" onClick={() => onSelectCategory(undefined)} />
                {categories.map(cat => (
                    <CategoryButton
                        key={cat.slug}
                        name={cat.name}
                        slug={cat.slug}
                        onClick={onSelectCategory}
                    />
                ))}
            </div>
        </aside>
    );
}
