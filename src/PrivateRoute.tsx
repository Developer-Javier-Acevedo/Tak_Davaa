import React from 'react';
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
  const loggedIn = JSON.parse(String(localStorage.getItem('loggedIn'))) === false;
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
