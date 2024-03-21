import { useProduct } from '../../../../entities/product';

export const useEditProduct = () => {
  const productContext = useProduct();

  return (id: number, sales: number, remains: string) => {
    productContext?.editProduct(id, sales, remains);
  };
};
