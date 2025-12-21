import type { ProductItem } from "@/interfaces";

type Props = {
    product: ProductItem;
};

export default function ProductDetailView({ product }: Props) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-(--text-primary)">{product.title}</h1>
            {product.description && (
                <p className="text-(--text-primary)/50 leading-relaxed">{product.description}</p>
            )}
            {product.price !== undefined && (
                <p className="text-2xl text-green-500 font-semibold">
                    {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)}
                </p>
            )}
        </div>
    );
}
