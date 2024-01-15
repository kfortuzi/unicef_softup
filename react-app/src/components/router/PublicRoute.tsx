import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import { Route } from 'src/router/enums';

const PublicRoute: React.FC = () => {
  const { data: user, isFetching } = useGetProfile();

  if (isFetching || !user) {
    return <Outlet />;
  }

  return (
    <Navigate
      to={Route.ROOT}
      replace
    />
  );
};

export default PublicRoute;
