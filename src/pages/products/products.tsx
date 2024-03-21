import { CreateProductButton } from '../../features/product/create/ui/create-product-button';
import { Container } from '@mui/material';
import { ProductTable } from '../../entities/product';
import { DeleteProductButton } from '../../features/product/delete';

export const Products = () => {
  return (
    <Container>
      <CreateProductButton />
      <ProductTable
        productActions={(id) => {
          return (
            <>
              <DeleteProductButton id={id} />
            </>
          );
        }}
      />
    </Container>
  );
};
