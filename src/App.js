import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import CurrencyPage from './views/CurrencyPage';
import HomePage from './views/HomePage';
import StatisticPage from './views/StatisticPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import PublicRoute from './PublicRoute.js';
import PrivateRoute from './PrivateRoute.js';
import { HOME_ROUTE, SINGIN_ROUTE, SINGUP_ROUTE, CURRENCY_ROUTE, STATISTICS_ROUTE } from './helpers/routerConfig';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={HOME_ROUTE} />
      </Route>

      <PrivateRoute exact path={HOME_ROUTE} component={HomePage} />
      <PrivateRoute exact path={STATISTICS_ROUTE} component={StatisticPage} />
      <PrivateRoute exact path={CURRENCY_ROUTE} component={CurrencyPage} />

      <PublicRoute exact isAuth path={SINGIN_ROUTE} component={LoginPage} />
      <PublicRoute exact isAuth path={SINGUP_ROUTE} component={RegisterPage} />
    </Switch>
  );
}

export default App;
