interface CategoryButtonProps {
    name: string;
    slug: string;
    onClick?: (slug?: string) => void;
}

export default function CategoryButton({ name, slug, onClick }: CategoryButtonProps) {
    return (
        <button onClick={() => onClick?.(slug)}>
            {name}
        </button>
    );
}
