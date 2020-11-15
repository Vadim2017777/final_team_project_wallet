import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {authenticatedSelector} from '../redux/auth/authSelectors';

const PrivateRoute = ({component: Component, ...routeProps}) => {
  const isAuth = useSelector(authenticatedSelector);

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
