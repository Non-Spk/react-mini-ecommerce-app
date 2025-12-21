export const formatPrice = (price?: number) =>
    price !== undefined
        ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price)
        : null;
