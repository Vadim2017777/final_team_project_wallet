import React from 'react';
import {Switch} from 'react-router-dom';

import CurrencyTable from './components/СurrencyTable/CurrencyTable';
import MainHeaderPage from './views/MainHeaderPage';
import HomePage from './views/HomePage';
import StatisticPage from './views/StatisticPage';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import PublicRoute from './PublicRoute.js';
import PrivateRoute from './PrivateRoute.js';

function App() {
  return (
    <>
      <PrivateRoute path="/" component={MainHeaderPage} />
      <PrivateRoute path="/" component={HomePage} />
      <PrivateRoute path="/currency" component={CurrencyTable} />
      <Switch>
        <PrivateRoute path="/statistics" component={StatisticPage} />
        <PublicRoute path="/" exact component={LoginPage} />
        <PublicRoute path="/signup" exact isAuth component={RegisterPage} />
      </Switch>
    </>
  );
}

export default App;
