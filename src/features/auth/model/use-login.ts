import { LoginFormData } from '../ui/login-form';
import { useNavigate } from 'react-router-dom';
import { PathPage } from '../../../shared/constants/path-page';
import { LOCAL_STORAGE_USER_KEY, useUser } from '../../../entities/user';
import { Role } from '../../../shared/constants/roles';

export const useLogin = () => {
  const navigate = useNavigate();
  const userContext = useUser();

  return (data: LoginFormData) => {
    const user = { login: data.login, role: Role.USER };
    userContext?.setUser?.(user);
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
    navigate(PathPage.PRODUCTS);
  };
};
