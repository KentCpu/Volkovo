import { useContext } from 'react';
import { ProductContext } from './product-store';

export const useProduct = () => {
  return useContext(ProductContext);
};
