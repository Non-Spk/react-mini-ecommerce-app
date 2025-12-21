type Props = {
    onAdd: () => void;
};

export default function AddToCartButton({ onAdd }: Props) {
    return (
        <button onClick={onAdd}>
            Add to cart
        </button>
    );
}