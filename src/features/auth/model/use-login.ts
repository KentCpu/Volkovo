import { LoginFormData } from '../ui/login-form';
import { login } from '../api/login';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { PathPage } from '../../../shared/constants/path-page';
import { LOCAL_STORAGE_USER_KEY, useUser } from '../../../entities/user';
import { Role } from '../../../shared/constants/roles';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = (data: LoginFormData) => {
    setIsLoading(true);
    login(data)
      .then(() => {
        const user = { email: data.email, role: Role.USER };
        setUser?.(user);
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
        navigate(PathPage.PRODUCTS);
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  };

  return { isLoading, handleLogin };
};
