import { mockProduct } from './mock-product';

export const getProductsByCategory = (categoryId: number) => {
  return mockProduct.filter((prodcut) => prodcut.categoryId === categoryId);
};
