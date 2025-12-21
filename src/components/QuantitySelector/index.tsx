type Props = {
    quantity: number;
    onChange: (value: number) => void;
};

export default function QuantitySelector({ quantity, onChange }: Props) {
    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => onChange(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-(--bg-secondary)/80 text-(--text-primary) rounded hover:bg-(--bg-primary)/80 transition"
            >
                -
            </button>
            <span className="px-2">{quantity}</span>
            <button
                onClick={() => onChange(quantity + 1)}
                className="px-3 py-1 bg-(--bg-secondary)/80 text-(--text-primary) rounded hover:bg-(--bg-primary)/80 transition"
            >
                +
            </button>
        </div>
    );
}
