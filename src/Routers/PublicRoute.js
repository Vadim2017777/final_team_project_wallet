import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {authenticatedSelector} from '../redux/auth/authSelectors';

const PublicRoute = ({component: Component, ...routeProps}) => {
  const isAuth = useSelector(authenticatedSelector);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
