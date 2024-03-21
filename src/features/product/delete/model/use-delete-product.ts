import { useProduct } from '../../../../entities/product';

export const useDeleteProduct = () => {
  const productContext = useProduct();

  return (id: number) => () => productContext?.deleteProduct(id);
};
