type Props = {
    onAdd: () => void;
};

export default function AddToCartButton({ onAdd }: Props) {
    return (
        <button
            onClick={onAdd}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
        >
            Add to cart
        </button>
    );
}
