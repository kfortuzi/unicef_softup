import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import PrivateRoute from 'src/components/router/PrivateRoute';
import PublicRoute from 'src/components/router/PublicRoute';
import AuthBackground from 'src/layouts/AuthBackground/AuthBackground';
import PageWithNavigation from 'src/layouts/PageWithNavigation/PageWithNavigation';
import ProfileSettingsWithNavigation from 'src/layouts/ProfileSettingsWithNavigation/ProfileSettingsWithNavigation';
import ConfirmUser from 'src/screens/ConfirmUser/ConfirmUser';
import ForgotPassword from 'src/screens/ForgotPassword/ForgotPassword';
import Home from 'src/screens/Home/Home';
import Login from 'src/screens/Login/Login';
import NotFound from 'src/screens/NotFound/NotFound';
import PersonalInfo from 'src/screens/PersonalInfo/PersonalInfo';
import ResetPassword from 'src/screens/ResetPassword/ResetPassword';
import Signup from 'src/screens/Signup/Signup';

import { Route } from './enums';

const Router: React.FC = () => {
  const { isFetching } = useGetProfile();

  if (isFetching) {
    return <LoadingFullPage />;
  }

  const router = createHashRouter([
    {
      element: <PrivateRoute />,
      children: [
        {
          path: Route.ROOT,
          element: <PageWithNavigation />,
          children: [
            {
              path: Route.YOUTH_CAREER_ORIENTATION,
              element: <Home />,
            },
            {
              path: Route.RESUME,
              element: <Home />,
            },
            {
              path: Route.COVER_LETTER,
              element: <Home />,
            },
            {
              path: Route.JOBS,
              element: <Home />,
            },
            {
              path: Route.TRAINING,
              element: <Home />,
            },
            {
              path: Route.PROFILE_SETTINGS,
              element: <ProfileSettingsWithNavigation />,
              children: [
                {
                  path: Route.PERSONAL_INFO,
                  element: <PersonalInfo />,
                },
              ],
            },
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
