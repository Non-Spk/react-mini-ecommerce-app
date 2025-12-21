interface CategoryButtonProps {
    name: string;
    slug: string;
    onClick?: (slug?: string) => void;
}

export default function CategoryButton({ name, slug, onClick }: CategoryButtonProps) {
    return (
        <button onClick={() => onClick?.(slug)} className="block px-10 py-2 rounded-md cursor-pointer transition-colors text-(--bg-primary) text-left">
            {name}
        </button>
    );
}
