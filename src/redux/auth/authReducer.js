import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserSuccess,
  getCurrentUserError,
  registerErrorReset,
} from './authActions';

const initialUserState = {name: null, email: null};

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, {payload}) => payload.user,
  [loginSuccess]: (_, {payload}) => payload.user,
  [getCurrentUserSuccess]: (_, {payload}) => payload,
  [logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [registerSuccess]: (_, {payload}) => payload.token,
  [loginSuccess]: (_, {payload}) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, {payload}) => payload,
  [loginError]: (_, {payload}) => payload,
  [logoutError]: (_, {payload}) => payload,
  [getCurrentUserError]: (_, {payload}) => payload,
  [registerErrorReset]: (_, {payload}) => payload,
});

const loading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  loading,
});
