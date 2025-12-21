import { create } from "zustand";

type CartItem = {
    productId: number;
    quantity: number;
};

type CartState = {
    items: CartItem[];
    addItem: (productId: number, quantity: number) => void;
    removeItem: (productId: number) => void;
    clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
    items: [],
    addItem: (productId, quantity) =>
        set((state) => {
            const existing = state.items.find(
                (item) => item.productId === productId
            );
            if (existing) {
                return {
                    items: state.items.map((item) =>
                        item.productId === productId
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                };
            }
            return {
                items: [...state.items, { productId, quantity }],
            };
        }),
    removeItem: (productId) =>
        set((state) => ({
            items: state.items.filter((item) => item.productId !== productId),
        })),
    clearCart: () => ({ items: [] }),
}));
