import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './Routes/AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute
          path="/"
        />
      </Switch>
    </BrowserRouter>
  )
};

export default App