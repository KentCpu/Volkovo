import { createContext } from 'react';
import { ProductStatistics } from './product';

interface ProductContextType {
  products: ProductStatistics[];
  createProduct: (product: ProductStatistics) => void;
  deleteProduct: (id: number) => void;
  editProduct: (id: number, sales: number, remains: string) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);
