import {createReducer} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {addTransactionSuccess, getTransactionSuccess, changeTransactionPage} from './transactionActions';

const onAddTransaction = (state, action) => {
  return [...state, action.payload];
};

const onChangeTransactionPage =(_, action) => action.payload;

const onGetTransactions = (_, action)=> action.payload;

const transactions = createReducer([], {
  [addTransactionSuccess]: onAddTransaction,
  [getTransactionSuccess]: onGetTransactions,
});

const transactionPage = createReducer(null, {
  [changeTransactionPage]: onChangeTransactionPage,
});

export default combineReducers({
  transactions,
  transactionPage
});


