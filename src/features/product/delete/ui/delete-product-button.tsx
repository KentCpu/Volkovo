import { GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteProduct } from '../model/use-delete-product';

interface DeleteProductButtonProps {
  id: number;
}

export const DeleteProductButton = ({ id }: DeleteProductButtonProps) => {
  const deleteProduct = useDeleteProduct();
  return (
    <GridActionsCellItem
      icon={<DeleteIcon />}
      label="Удалить"
      onClick={deleteProduct(id)}
    />
  );
};
