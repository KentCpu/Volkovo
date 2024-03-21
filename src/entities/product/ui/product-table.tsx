import { useProduct } from '../model/use-product';
import {
  DataGrid,
  GridActionsCellItemProps,
  GridColDef,
} from '@mui/x-data-grid';
import { mockCategory } from '../../category/model/mock-category';
import { ReactElement } from 'react';

interface ProductTableProps {
  productActions: (id: number) => ReactElement<GridActionsCellItemProps>;
}

export const ProductTable = ({ productActions }: ProductTableProps) => {
  const productContext = useProduct();
  const product = productContext?.products.map((product) => ({
    ...product,
    category: mockCategory.find(
      (category) => category.id === product.categoryId,
    )?.title,
    categoryId: undefined,
  }));

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'category', headerName: 'Категория', width: 130 },
    { field: 'title', headerName: 'Название товара', flex: 1 },
    {
      field: 'weight',
      headerName: 'Количество или вес приготовленного товара',
      flex: 1,
    },
    {
      field: 'remains',
      headerName: 'Остатки',
      flex: 1,
    },
    {
      field: 'sales',
      headerName: 'Продажи',
      flex: 1,
    },
    {
      width: 150,
      type: 'actions',
      field: 'actions',
      headerName: 'Действия',
      getActions: (params) => {
        return [productActions(+params.id)];
      },
    },
  ];

  return <DataGrid rows={product ?? []} columns={columns} />;
};
