import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import { Route } from 'src/router/enums';

const PrivateRoute: React.FC = () => {
  const { data: user, isFetching } = useGetProfile();

  if (isFetching || !user) {
    return (
      <Navigate
        to={`${Route.ACCESS}/${Route.LOGIN}`}
        replace
      />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
