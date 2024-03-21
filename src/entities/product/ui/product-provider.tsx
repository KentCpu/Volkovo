import { ProductContext } from '../model/product-store';
import { PropsWithChildren, useState } from 'react';
import { ProductStatistics } from '../model/product';

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductStatistics[]>([]);

  const createProduct = (product: ProductStatistics) => {
    const isExistProduct = products.find((p) => p.id === product.id);
    if (isExistProduct) return;
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProduct) => prevProduct.id !== id),
    );
  };

  const editProduct = (product: ProductStatistics) => {};

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        deleteProduct,
        editProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
