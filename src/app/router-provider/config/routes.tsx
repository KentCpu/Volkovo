import { RouteObject } from 'react-router-dom';
import { PathPage } from '../../../shared/constants/path-page';
import { Role } from '../../../shared/constants/roles';
import { Products } from '../../../pages/products/products';
import { Login } from '../../../pages/login/login';
import { Main } from '../../../pages/main/main';
import { Forbidden } from '../../../pages/forbidden/forbidden';

interface Route extends Omit<RouteObject, 'path'> {
  path: PathPage;
  roles: Role[];
}

export const routeConfig: Route[] = [
  {
    path: PathPage.MAIN,
    element: <Main />,
    roles: [Role.VIEWER],
  },
  {
    path: PathPage.LOGIN,
    element: <Login />,
    roles: [Role.VIEWER],
  },
  {
    path: PathPage.PRODUCTS,
    element: <Products />,
    roles: [Role.USER],
  },
  {
    path: PathPage.FORBIDDEN,
    element: <Forbidden />,
    roles: [Role.VIEWER, Role.USER],
  },
];
