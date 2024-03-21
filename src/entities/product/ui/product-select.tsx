import { MenuItem, OutlinedInput, Select, SelectProps } from '@mui/material';
import { Product } from '../model/product';
import { forwardRef } from 'react';

type ProductSelectProps = SelectProps & {
  products: Product[];
};

export const ProductSelect = forwardRef(
  ({ products, value, onChange, ...otherProps }: ProductSelectProps, ref) => {
    return (
      <Select
        ref={ref}
        value={value}
        onChange={onChange}
        input={<OutlinedInput label="Name" />}
        {...otherProps}
      >
        {products.map((product) => (
          <MenuItem key={product.id} value={JSON.stringify(product)}>
            {product.title}
          </MenuItem>
        ))}
      </Select>
    );
  },
);
