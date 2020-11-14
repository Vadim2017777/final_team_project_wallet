import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import tokenSelector from './redux/auth/authSelectors';
import {getCurrentUser} from './redux/auth/authOperations';
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
      <PrivateRoute path="/home" component={HomePage} />
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
