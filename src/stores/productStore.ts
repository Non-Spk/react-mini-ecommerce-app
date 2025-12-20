import { create } from 'zustand'
import type { ProductList, ProductItem } from '@/interfaces'

interface ProductListStore {
    productsList: ProductList
    setProductList: (newProductsList: ProductList) => void
    getProductList: () => ProductList
}

interface ProductItemStore {
    product: ProductItem | null
    setProduct: (newProduct: ProductItem) => void
    getProduct: () => ProductItem | null
}

export const useProductListStore = create<ProductListStore>((set, get) => ({
    productsList: {
        products: [],
        total: 0,
        skip: 0,
        limit: 0,
    },
    setProductList: (newProductsList: ProductList) =>
        set({ productsList: newProductsList }),
    getProductList: (): ProductList => get().productsList,
}))

export const useProductItemStore = create<ProductItemStore>((set, get) => ({
    product: null,
    setProduct: (newProduct: ProductItem) => set({ product: newProduct }),
    getProduct: (): ProductItem | null => get().product,
}))