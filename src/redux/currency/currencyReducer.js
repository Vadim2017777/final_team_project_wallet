import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import {
  getCurrencyRequest,
  getCurrencySuccess,
  getCurrencyFailure,
} from './currencyAction.js';

const onGetCurrency = (_, action) => action.payload;

const currrency = createReducer([], {
  [getCurrencySuccess]: onGetCurrency,
  [getCurrencyFailure]: onGetCurrency,
});

const loading = createReducer(false, {
  [getCurrencyRequest]: () => true,
  [getCurrencySuccess]: () => false,
  [getCurrencyFailure]: () => false,
});

export default combineReducers({
  currrency,
  loading,
});
