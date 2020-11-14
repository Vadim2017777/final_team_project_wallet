import {createReducer} from '@reduxjs/toolkit';

import {getCurrencySuccess, getCurrencyFailure} from './currencyAction.js';

const onGetCurrency = (_, action) => action.payload;

const currency = createReducer([], {
  [getCurrencySuccess]: onGetCurrency,
  [getCurrencyFailure]: onGetCurrency,
});

export default currency;
