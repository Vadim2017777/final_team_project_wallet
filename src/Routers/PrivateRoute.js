import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import tokenSelector from '../redux/auth/authSelectors';

const PrivateRoute = ({component: Component, ...routeProps}) => {
  const isAuth = useSelector(state => tokenSelector.isAuthenticated(state));

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;
