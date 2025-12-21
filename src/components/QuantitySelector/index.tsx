type Props = {
    quantity: number;
    onChange: (value: number) => void;
};

export default function QuantitySelector({ quantity, onChange }: Props) {
    return (
        <div>
            <button onClick={() => onChange(Math.max(1, quantity - 1))}>-</button>
            <span style={{ margin: "0 8px" }}>{quantity}</span>
            <button onClick={() => onChange(quantity + 1)}>+</button>
        </div>
    );
}