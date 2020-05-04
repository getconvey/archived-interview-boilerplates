import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/home';
import React from 'react';

const Routes = () => (
  <Switch>
    <Route component={Home} exact path="/" />
  </Switch>
);

Routes.displayName = 'Routes';

export default Routes;
