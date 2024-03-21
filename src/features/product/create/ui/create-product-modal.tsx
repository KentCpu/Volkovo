import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {
  getProductsByCategory,
  Product,
  ProductSelect,
} from '../../../../entities/product';
import { CategorySelect } from '../../../../entities/category';
import { mockCategory } from '../../../../entities/category/model/mock-category';
import { useState } from 'react';
import { CustomAlert } from '../../../../shared/ui/alert';
import { useCreateProduct } from '../model/use-create-product';

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  borderRadius: 5,
  bgcolor: 'background.paper',
  p: 4,
};

export const CreateProductModal = ({
  isOpen,
  onClose,
}: CreateProductModalProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { control, reset, handleSubmit, watch } = useForm({
    defaultValues: {
      categoryId: '',
      product: '',
      weight: '',
    },
  });

  const createProduct = useCreateProduct();

  return (
    <Modal open={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit(({ product, weight }) => {
          const currentProduct = JSON.parse(product) as Product;
          createProduct({
            weight: weight,
            remains: weight,
            sales: 0,
            ...currentProduct,
          });
          setIsSuccess(true);
          reset();
        })}
      >
        <CustomAlert
          showTime={3000}
          isOpen={isSuccess}
          setIsOpen={setIsSuccess}
          severity="success"
        >
          Товар добавлен
        </CustomAlert>
        <Stack spacing={2} sx={style}>
          <Typography variant="h6" component="h2" align="center">
            Добавление товара
          </Typography>
          <Controller
            control={control}
            name="categoryId"
            rules={{ required: 'Обязательное поле' }}
            render={({ field, fieldState }) => (
              <FormControl error={!!fieldState.error?.message}>
                <InputLabel id="categoryId">Категория</InputLabel>
                <CategorySelect
                  id="categoryId"
                  category={mockCategory}
                  {...field}
                />
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="product"
            rules={{ required: 'Обязательное поле' }}
            render={({ field, fieldState }) => (
              <FormControl error={!!fieldState.error?.message}>
                <InputLabel id="productId">Товар</InputLabel>
                <ProductSelect
                  id="productId"
                  products={getProductsByCategory(+watch('categoryId'))}
                  {...field}
                />
                <FormHelperText>{fieldState.error?.message}</FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="weight"
            rules={{ required: 'Обязательное поле' }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                placeholder={'Вес(кг) или количество товара'}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Button type="submit" variant="contained">
            Потвердить создание
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};
