import { createSelector } from 'reselect';

export const getTransactions = state => state.transaction;
export const getAddTransactionPage = state => state.transaction.transactionPage;
export const getLoading = state => state.transaction.loading;

export const transactionsSelector = state => state.transaction;

export const costTransactionsSelector = createSelector(
  transactionsSelector,
  transactionsList => transactionsList.filter(item => item.type === '-')
);
export const incomeTransactionsSelector = createSelector(
  transactionsSelector,
  transactionsList => transactionsList.filter(item => item.type === '+')
);
