interface CategoryButtonProps {
    name: string;
    slug: string;
    onClick?: (slug?: string) => void;
    active?: boolean;
}

export default function CategoryButton({ name, slug, onClick, active }: CategoryButtonProps) {
    return (
        <button
            onClick={() => onClick?.(slug)}
            className={`block px-10 py-2 rounded-md cursor-pointer transition-colors text-left ${active ? "bg-blue-500 text-white" : "text-(--bg-primary)"
                }`}
        >
            {name}
        </button>
    );
}
