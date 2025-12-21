import { useNavigate } from "react-router-dom";
import type { ProductItem } from "@/interfaces/product";

type Props = {
    product: ProductItem;
};

export default function ProductCard({ product }: Props) {
    const navigate = useNavigate();

    return (
        <li
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer"
        >
            {product.title}
        </li>
    );
}
