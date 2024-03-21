import { CreateProductButton } from '../../features/product/create/ui/create-product-button';
import { Box, Container } from '@mui/material';
import { ProductTable } from '../../entities/product';
import { DeleteProductButton } from '../../features/product/delete';
import { EditProductButton } from '../../features/product/edit';
import { Header } from '../../widgets/ui/header';

export const Products = () => {
  return (
    <>
      <Box mb={3}>
        <Header />
      </Box>
      <Container>
        <CreateProductButton />
        <ProductTable
          productActions={(id) => {
            return (
              <>
                <DeleteProductButton id={id} />
                <EditProductButton id={id} />
              </>
            );
          }}
        />
      </Container>
    </>
  );
};
