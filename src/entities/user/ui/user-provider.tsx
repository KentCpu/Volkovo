import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { UserContext } from '../model/user-store';
import { User } from '../model/user';

export const LOCAL_STORAGE_USER_KEY = 'user';
export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    const initialUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (initialUser) {
      setUser(JSON.parse(initialUser));
    }
    setIsInit(true);
  }, []);

  const signOut = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    setUser(null);
  };

  const defaultValue = useMemo(
    () => ({
      user,
      setUser,
      isInit,
      signOut,
    }),
    [user, isInit],
  );

  return (
    <UserContext.Provider value={defaultValue}>{children}</UserContext.Provider>
  );
};
