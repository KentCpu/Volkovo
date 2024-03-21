import {
  createBrowserRouter,
  RouteObject,
  RouterProvider as RouterDomProvider,
} from 'react-router-dom';
import { routeConfig } from '../config/routes';
import { PrivateRouter } from './private-router';

export const RouterProvider = () => {
  const routes = routeConfig.map((route) => ({
    ...route,
    element: <PrivateRouter roles={route.roles}>{route.element}</PrivateRouter>,
  }));
  const router = createBrowserRouter(routes as RouteObject[]);

  return <RouterDomProvider router={router} />;
};
