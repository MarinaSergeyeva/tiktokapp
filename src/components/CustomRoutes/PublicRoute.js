import React from 'react';
import { Route } from 'react-router-dom';
import withAuth from './withRouterHoc';

const PublicRoute = ({ element: Component, ...routeProps }) => {
  return <Route element={Component} {...routeProps} />;
};

export default withAuth(PublicRoute);
