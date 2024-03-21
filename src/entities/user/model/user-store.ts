import { createContext } from 'react';
import { User } from './user';

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  signOut: () => void;
  isInit: boolean;
}

export const UserContext = createContext<UserContextType | null>(null);
