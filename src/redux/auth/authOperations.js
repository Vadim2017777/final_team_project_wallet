import axios from 'axios';
import * as authActions from './authActions';

axios.defaults.baseURL = 'https://lit-mountain-68142.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());
  dispatch(authActions.registerError(null));

  try {
    const {data} = await axios.post('/users/signup', credentials);
    console.log(credentials);
    console.log(data);
    token.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  dispatch(authActions.registerError(null));
  try {
    const {data} = await axios.post('/users/signin', credentials);
    console.log(credentials);
    console.log(data);
    token.set(data.token);
    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: {token: persistedToken},
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  try {
    const {data} = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

export {register, logOut, logIn, getCurrentUser};
