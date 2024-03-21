import React, { useState } from 'react';
import { GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import { EditProductModal } from './edit-product-modal';

interface EditProductButtonProps {
  id: number;
}

export const EditProductButton = ({ id }: EditProductButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Редактировать"
        onClick={() => setIsOpen(true)}
      />
      <EditProductModal
        id={id}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
