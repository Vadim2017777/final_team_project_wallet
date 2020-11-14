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

function App() {
  const isAuth = useSelector((state) => tokenSelector.isAuthenticated(state));
  const currentUser = useDispatch();

  useEffect(() => {
    if (isAuth) {
      currentUser(getCurrentUser());
    }
  }, [currentUser, isAuth]);

  return (
    <Switch>
        {isAuth ? (
          <>
          <Route path='/' component={MainHeaderPage}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/currency' component={CurrencyTable}/>
          <Route path='/statistics' component={StatisticPage}/>
          <Redirect to='/home'/>
          </>
        ) : (
          <>
            <Route path="/" exact component={LoginPage} />
            <Route path="/signup" exact component={RegisterPage} />
            <Redirect to="/" />
          </>
        )}
    </Switch>
  );
}

export default App;
