import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import tokenSelector from './redux/auth/authSelectors';

const PublicRoute = ({component: Component, ...routeProps}) => {
  const isAuth = useSelector(state => tokenSelector.isAuthenticated(state));

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
