import { ProductStatistics, useProduct } from '../../../../entities/product';

export const useCreateProduct = () => {
  const productContext = useProduct();
  return (product: ProductStatistics) => {
    productContext?.createProduct(product);
  };
};
