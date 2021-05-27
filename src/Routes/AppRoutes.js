import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import Layout from '../Layout/index';
import Dashboard from '../Pages/Dashboard';
import Products from '../Pages/Products';


const AppRoute = () => {
  return (
    <Switch>
      <PrivateRoute
        path="/dashboard/main"
        component={Dashboard}
        withLayout={Layout}
      />
      <PrivateRoute
        path="/dashboard/products"
        component={Products}
        withLayout={Layout}
      />

    </Switch>
  )
}

export default AppRoute;