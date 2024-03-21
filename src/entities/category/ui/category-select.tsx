import { mockCategory } from '../model/mock-category';
import { MenuItem, OutlinedInput, Select, SelectProps } from '@mui/material';
import { Category } from '../model/category';
import { forwardRef } from 'react';

type CategorySelectProps = {
  category: Category[];
} & SelectProps;

export const CategorySelect = forwardRef(
  ({ value, onChange, ...otherProps }: CategorySelectProps, ref) => {
    return (
      <Select
        ref={ref}
        value={value}
        onChange={onChange}
        input={<OutlinedInput label="Name" />}
        {...otherProps}
      >
        {mockCategory.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.title}
          </MenuItem>
        ))}
      </Select>
    );
  },
);
