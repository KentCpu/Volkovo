import { createContext } from 'react';
import { User } from './user';

interface UserContextType {
  user?: User | null;
  setUser?: (user: User) => void;
  isInit: boolean;
}

export const UserContext = createContext<UserContextType>({ isInit: false });
