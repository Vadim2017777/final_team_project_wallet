import axios from 'axios';
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
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './authActions';

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
  dispatch(registerRequest());
  dispatch(registerError(null));

  try {
    const {data} = await axios.post('/users/signup', credentials);
    token.set(data.token);
    dispatch(registerSuccess(data));
  } catch (error) {
    if (error.response.status === 409) {
      error.message = 'EMAIL ALREADY EXISTS';
    }
    dispatch(registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(loginRequest());
  dispatch(loginError(null));
  try {
    const {data} = await axios.post('/users/signin', credentials);

    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    if (error.response.status === 400 || 401) {
      error.message = 'INCORRECT EMAIL OR PASSWORD';
    }
    dispatch(loginError(error.message));
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
  dispatch(getCurrentUserRequest());
  try {
    const {data} = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export {register, logOut, logIn, getCurrentUser};
