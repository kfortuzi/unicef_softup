import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthBackground: React.FC = () => {
  return (
    <div className="auth-background">
      <div className="background-image" />
      <Outlet />
    </div>
  );
};

export default AuthBackground;
