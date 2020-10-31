import {createReducer} from '@reduxjs/toolkit';

import {addTransactionSuccess, getTransactionSuccess} from './transactionActions';

const onAddTransaction = (state, action) => {
  return [...state, action.payload];
};

const onGetTransactions = (_, action)=> action.payload;



export const transaction = createReducer([], {
  [addTransactionSuccess]: onAddTransaction,
  [getTransactionSuccess]: onGetTransactions,
});

