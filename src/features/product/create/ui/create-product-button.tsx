import { useState } from 'react';
import { CreateProductModal } from './create-product-modal';
import { Button } from '@mui/material';

export const CreateProductButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={onOpen}>Создать товар</Button>
      <CreateProductModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};
