import { useNavigate } from "react-router-dom";
import type { ProductItem } from "@/interfaces/product";
import RatingStarList from "@/components/RatingStarList";
import { formatPrice } from "@/utils/format";

type Props = {
    product: ProductItem;
};

export default function ProductCard({ product }: Props) {
    const navigate = useNavigate();
    const formattedPrice = formatPrice(product.price);

    return (
        <div
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer bg-(--bg-primary) text-(--text-primary) rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
        >
            <div className="h-full overflow-hidden rounded-md mb-3">
                <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-lg font-semibold mb-3">{product.title}</h3>
            <div className="flex justify-between items-center mt-auto">
                <RatingStarList rating={product.rating} />
                {formattedPrice && <span className="text-green-500 font-medium">{formattedPrice}</span>}
            </div>
        </div>
    );
}
