import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import * as authActions from '../auth/authActions';

import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionFailure,
  getTransactionRequest,
  getTransactionSuccess,
  getTransactionFailure,
  changeTransactionPage,
} from './transactionActions';

const onAddTransaction = (state, action) => {
  return [...state, action.payload];
};

const onChangeTransactionPage = (_, action) => action.payload;

const onGetTransactions = (_, action) => action.payload;

const transactions = createReducer([], {
  [addTransactionSuccess]: onAddTransaction,
  [getTransactionSuccess]: onGetTransactions,
  [authActions.logoutSuccess]: () => [],
});

const transactionPage = createReducer(null, {
  [changeTransactionPage]: onChangeTransactionPage,
});

const loading = createReducer(false, {
  [addTransactionRequest]: () => true,
  [addTransactionSuccess]: () => false,
  [addTransactionFailure]: () => false,
  [getTransactionRequest]: () => true,
  [getTransactionSuccess]: () => false,
  [getTransactionFailure]: () => false,
});

export default combineReducers({
  transactions,
  transactionPage,
  loading,
  
});
