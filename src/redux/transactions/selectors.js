import {createSelector} from 'reselect';

export const getTransactionsSelector = state => state.transaction;
export const addTransactionPageSelector = state =>
  state.transaction.transactionPage;
export const loadingSelector = state => state.transaction.loading;
export const transactionsSelector = state => state.transaction;

export const costTransactionsSelector = createSelector(
  transactionsSelector,
  ({transactions}) => transactions.filter(item => item.type === '-'),
);
export const incomeTransactionsSelector = createSelector(
  transactionsSelector,
  ({transactions}) => transactions.filter(item => item.type === '+'),
);
