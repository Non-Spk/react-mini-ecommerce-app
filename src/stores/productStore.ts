import { create } from 'zustand'
import type { ProductList, ProductItem } from '@/interfaces'

interface ProductListStore {
    productsList: ProductList
    setProductList: (newProductsList: ProductList) => void
    getProductList: () => ProductList

    // เพิ่ม search term และ category
    searchTerm: string
    setSearchTerm: (term: string) => void

    category: string | undefined
    setCategory: (category?: string) => void
}

interface ProductItemStore {
    product: ProductItem | null
    setProduct: (newProduct: ProductItem) => void
    getProduct: () => ProductItem | null
}

export const useProductListStore = create<ProductListStore>((set, get) => ({
    productsList: { products: [], total: 0, skip: 0, limit: 0 },
    setProductList: (newProductsList) => set({ productsList: newProductsList }),
    getProductList: () => get().productsList,

    searchTerm: "",
    setSearchTerm: (term: string) => set({ searchTerm: term }),

    category: undefined,
    setCategory: (category?: string) => set({ category }), // ต้องใช้เพื่อ active + filter
}));


export const useProductItemStore = create<ProductItemStore>((set, get) => ({
    product: null,
    setProduct: (newProduct: ProductItem) => set({ product: newProduct }),
    getProduct: (): ProductItem | null => get().product,
}))