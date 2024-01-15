import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import { Entity } from 'src/components/acl/enums';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import PrivateRoute from 'src/components/router/PrivateRoute';
import PublicRoute from 'src/components/router/PublicRoute';
import AuthBackground from 'src/layouts/AuthBackground/AuthBackground';
import PageWithNavigation from 'src/layouts/PageWithNavigation/PageWithNavigation';
import Articles from 'src/screens/Articles/Articles';
import ConfirmUser from 'src/screens/ConfirmUser/ConfirmUser';
import ForgotPassword from 'src/screens/ForgotPassword/ForgotPassword';
import Home from 'src/screens/Home/Home';
import Login from 'src/screens/Login/Login';
import NotFound from 'src/screens/NotFound/NotFound';
import ResetPassword from 'src/screens/ResetPassword/ResetPassword';
import Signup from 'src/screens/Signup/Signup';

import { Route } from './enums';
import getAccessibleRoutes from './helpers/getAccessibleRoutes';

const Router: React.FC = () => {
  const { data: user, isFetching } = useGetProfile();

  if (isFetching) {
    return <LoadingFullPage />;
  }

  const accessibleRoutes = getAccessibleRoutes(user?.role);
  const unaccessibleRoute = { path: undefined };

  const router = createHashRouter([
    {
      element: <PrivateRoute />,
      children: [
        {
          path: Route.ROOT,
          element: <PageWithNavigation />,
          children: [
            {
              path: Route.HOME,
              element: <Home />,
            },
            accessibleRoutes[Entity.ARTICLES]
              ? {
                  path: Route.ARTICLES,
                  element: <Articles />,
                }
              : { ...unaccessibleRoute },
          ],
        },
      ],
    },
    {
      element: <PublicRoute />,
      path: Route.ACCESS,
      children: [
        {
          path: Route.ACCESS,
          element: <AuthBackground />,
          children: [
            {
              element: <Login />,
              path: Route.LOGIN,
            },
            {
              element: <Signup />,
              path: Route.SIGNUP,
            },
            {
              element: <ForgotPassword />,
              path: Route.FORGOT_PASSWORD,
            },
            {
              element: <ResetPassword />,
              path: Route.RESET_PASSWORD,
            },
            {
              element: <ConfirmUser />,
              path: Route.CONFIRM_USER,
            },
          ],
        },
      ],
    },
    {
      element: <NotFound />,
      path: '*',
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
