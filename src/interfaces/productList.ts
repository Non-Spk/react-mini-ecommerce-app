export interface ProductListResponse {
  limit: number;
  products: ProductListItem[];
  skip: number;
  total: number;
}

export interface ProductListItem {
  id: number;
  title: string;
  price: number;
  rating: number;
}
