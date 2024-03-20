import {PropsWithChildren, useEffect, useMemo, useState} from 'react';
import {UserContext} from "../model/user-store";
import {User} from "../model/user";


export const LOCAL_STORAGE_USER_KEY = 'user';
export const UserProvider = ({children}: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const initialUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if(initialUser) {
      setUser(JSON.parse(initialUser))
    }
  }, []);

  const defaultValue = useMemo(() => ({
    user,
    setUser,
  }), [user]);

  return (
      <UserContext.Provider value={user ? defaultValue : null}>
        {children}
      </UserContext.Provider>
  );
};
