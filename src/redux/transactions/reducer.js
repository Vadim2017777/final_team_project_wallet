import {createReducer} from '@reduxjs/toolkit';


import {addTransactionSuccess} from './transactionActions';

const onAddTransaction = (state, action) => {
  return [...state, action.payload];
};

export const transaction = createReducer([], {
  [addTransactionSuccess]: onAddTransaction,
});

