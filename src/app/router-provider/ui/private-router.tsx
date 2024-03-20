import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Role } from '../../../shared/constants/roles';
import { PathPage } from '../../../shared/constants/path-page';
import { useUser } from '../../../entities/user';

interface PrivateRouterProps {
  children: ReactNode;
  roles: Role[];
}

export const PrivateRouter = ({ roles, children }: PrivateRouterProps) => {
  const userContext = useUser();
  const userRole = userContext?.user?.role ?? Role.VIEWER;
  const isInitUser = userContext?.isInit;
  const location = useLocation();

  if (isInitUser && !roles.includes(userRole)) {
    return (
      <Navigate to={PathPage.FORBIDDEN} state={{ from: location }} replace />
    );
  }

  return <>{children}</>;
};
