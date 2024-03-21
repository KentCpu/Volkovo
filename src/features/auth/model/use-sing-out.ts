import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../entities/user';
import { PathPage } from '../../../shared/constants/path-page';

export const useSingOut = () => {
  const navigate = useNavigate();
  const userContext = useUser();

  return () => {
    userContext?.signOut();
    navigate(PathPage.LOGIN);
  };
};
