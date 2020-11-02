import {createAction} from '@reduxjs/toolkit';

const FETCH_CURRENCY_REQUEST = 'CURRENCY/getRequest';
const FETCH_CURRENCY_SUCCESS = 'CURRENCY/getSuccess';
const FETCH_CURRENCY_FAILURE = 'CURRENCY/getFailure';

export const getCurrencyRequest = createAction(FETCH_CURRENCY_REQUEST);
export const getCurrencySuccess = createAction(FETCH_CURRENCY_SUCCESS);
export const getCurrencyFailure = createAction(FETCH_CURRENCY_FAILURE);
