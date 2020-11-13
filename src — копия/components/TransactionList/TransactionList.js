import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTransactions,
  getLoading,
  getAddTransactionPage,
} from '../../redux/transactions/selectors';
import {changeTransactionPage} from '../../redux/transactions/transactionActions';
import {getAllTransactions} from '../../redux/transactions/operations';
import isAuth from '../../redux/auth/authSelectors';
import TransactionItem from '../TransactionItem/TransactionItem';
import CurrencyTable from '../СurrencyTable/CurrencyTable';
import Spiner from '../../components/Spinner/Spinner.js';
import useTableScreen from '../../hooks/UseTableScreen';

import style from './TransactionList.module.css';

const TransactionList = () => {
  const transaction = useSelector(state => getTransactions(state));
  const token = useSelector(state => isAuth.isAuthenticated(state));
  const isActive = useSelector(state => getAddTransactionPage(state));
  const loading = useSelector(state => getLoading(state));

  const getCurrentTransactions = useDispatch();
  const updateStatus = useDispatch();

  const statusPage = !isActive;
  const {transactions} = transaction;
  const isTransactions = transactions.length > 0;
  useEffect(() => {
    getCurrentTransactions(getAllTransactions(token));
  }, [getCurrentTransactions, token]);

  const tableScreen = useTableScreen();

  return (
    <>
      {loading && <Spiner />}
      {isTransactions && (
        <>
          {Number(tableScreen) <= 767 && (
            <ul className={style.list}>
              {transactions.map(item => {
                return <TransactionItem items={item} key={item._id} />;
              })}
            </ul>
          )}
          {Number(tableScreen) >= 768 && (
            <>
              <table className={style.list}>
                <thead>
                  <tr className={style.raw}>
                    <td className={style.date}>Date</td>
                    <td className={style.type}>Type</td>
                    <td className={style.category}>Category</td>
                    <td className={style.comments}>Comments</td>
                    <td className={style.amount}>Amount</td>
                    <td className={style.balance}>Balance</td>
                  </tr>
                </thead>
                <tbody className={style.tbody}>
                  {transactions.map(item => {
                    return <TransactionItem items={item} key={item._id} />;
                  })}
                </tbody>
              </table>
              <CurrencyTable />
            </>
          )}
        </>
      )}
      {!loading && !isTransactions && (
        <>
          <div className={style.emptyTransactionsList}>
            <p className={style.emptyTransactionsListText}>
              Create your first transaction!
            </p>
          </div>{' '}
          <CurrencyTable />
        </>
      )}

      {statusPage && (
        <button
          className={style.btnAdd}
          onClick={() => updateStatus(changeTransactionPage(statusPage))}
        >
          &#43;
        </button>
      )}
    </>
  );
};

export default TransactionList;
