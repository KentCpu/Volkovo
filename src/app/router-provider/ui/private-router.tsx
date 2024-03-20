import { ReactNode} from 'react';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {Role} from "../../../shared/constants/roles";
import {PathPage} from "../../../shared/constants/path-page";

interface PrivateRouterProps {
  children: ReactNode;
  roles: Role[];
}

export const PrivateRouter = ({ roles, children }: PrivateRouterProps) => {
  const userRole = Role.VIEWER;
  const location = useLocation();

  if (!roles.includes(userRole)) {
    return (
        <Navigate to={PathPage.FORBIDDEN} state={{ from: location }} />
    );
  }

  return <>{children}</>;
};
