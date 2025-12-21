import { useNavigate } from "react-router-dom";
import type { ProductItem } from "@/interfaces/product";
import RatingStar from "@/components/RatingStar";

type Props = {
    product: ProductItem;
};

export default function ProductCard({ product }: Props) {
    const navigate = useNavigate();
    const formattedPrice =
        product.price !== undefined
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(product.price)
            : null;
    const stars = Math.round(product.rating || 0);
    const starArray = Array.from({ length: 5 }, (_, i) => i < stars);
    return (
        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer bg-(--bg-primary) text-(--text-primary) rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
        >
            <img
                src={product.images?.[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold mb-3">{product.title}</h3>
            <div className="flex justify-between items-center mt-auto">
                <div className="flex space-x-1">
                    {starArray.map((filled, idx) => (
                        <RatingStar key={idx} filled={filled} size={16} />
                    ))}
                </div>
                {formattedPrice && (
                    <span className="text-green-500 font-medium">{formattedPrice}</span>
                )}
            </div>
        </div>
    );
}
