import { useState } from 'react';
import { Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { CustomAlert } from '../../../../shared/ui/alert';
import { useEditProduct } from '../model/use-edit-product';

interface EditProductModalProps {
  id: number;
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

export const EditProductModal = ({
  id,
  isOpen,
  onClose,
}: EditProductModalProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { control, reset, handleSubmit, watch } = useForm({
    defaultValues: {
      sales: '',
      remains: '',
    },
  });

  const editProduct = useEditProduct();

  return (
    <Modal open={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit(({ sales, remains }) => {
          editProduct(id, +sales, remains);
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
            name="sales"
            rules={{ required: 'Обязательное поле' }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                placeholder={'Продажи за сегодня'}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="remains"
            rules={{ required: 'Обязательное поле' }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                placeholder={'Остатки'}
                error={!!fieldState.error?.message}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Button type="submit" variant="contained">
            Потвердить редактирование
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};
