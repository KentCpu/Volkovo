export interface Product {
  id: number;
  article: string;
  title: string;
  categoryId: number;
}

export interface ProductStatistics extends Product {
  weight: string;
  sales: number;
  remains: string;
}
