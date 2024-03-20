import { useContext } from 'react';
import { UserContext } from './user-store';

export const useUser = () => {
  return useContext(UserContext);
};
