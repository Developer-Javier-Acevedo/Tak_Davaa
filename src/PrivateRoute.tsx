import React from 'react';
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
  return <Outlet />;
};

export default PrivateRoute;
