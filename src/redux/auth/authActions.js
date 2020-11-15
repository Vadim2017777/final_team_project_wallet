import {createAction} from '@reduxjs/toolkit';

const FETCH_AUTH_REQUEST = 'AUTH/getRequest';
const FETCH_AUTH_SUCCESS = 'AUTH/getSuccess';
const FETCH_AUTHY_ERROR = 'AUTH/getFailure';

const FETCH_AUTH_LOGINREQUEST = 'AUTH/loginRequest';
const FETCH_AUTH_LOGINSUCCESS = 'AUTH/loginSuccess';
const FETCH_AUTHY_LOGINERROR = 'AUTH/loginError';

const FETCH_AUTH_LOGOUTINREQUEST = 'AUTH/logoutRequest';
const FETCH_AUTH_LOGOUTINSUCCESS = 'AUTH/logoutSuccess';
const FETCH_AUTHY_LOGOUTINERROR = 'AUTH/logoutError';

const FETCH_AUTH_GETCURRENTUSERREQUEST = 'AUTH/getCurrentUserRequest';
const FETCH_AUTH_GETCURRENTUSERSUCCESS = 'AUTH/getCurrentUserSuccess';
const FETCH_AUTHY_GETCURRENTUSERERROR = 'AUTH/getCurrentUserError';

export const registerRequest = createAction(FETCH_AUTH_REQUEST);
export const registerSuccess = createAction(FETCH_AUTH_SUCCESS);
export const registerError = createAction(FETCH_AUTHY_ERROR);

export const loginRequest = createAction(FETCH_AUTH_LOGINREQUEST);
export const loginSuccess = createAction(FETCH_AUTH_LOGINSUCCESS);
export const loginError = createAction(FETCH_AUTHY_LOGINERROR);

export const logoutRequest = createAction(FETCH_AUTH_LOGOUTINREQUEST);
export const logoutSuccess = createAction(FETCH_AUTH_LOGOUTINSUCCESS);
export const logoutError = createAction(FETCH_AUTHY_LOGOUTINERROR);

export const getCurrentUserRequest = createAction(
  FETCH_AUTH_GETCURRENTUSERREQUEST,
);
export const getCurrentUserSuccess = createAction(
  FETCH_AUTH_GETCURRENTUSERSUCCESS,
);
export const getCurrentUserError = createAction(
  FETCH_AUTHY_GETCURRENTUSERERROR,
);
