import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useTableScreen from '../../hooks/UseTableScreen';
import {
  transactionsSelector,
  loadingSelector,
  addTransactionPageSelector,
} from '../../redux/transactions/selectors';
import {changeTransactionPage} from '../../redux/transactions/transactionActions';
import {getAllTransactions} from '../../redux/transactions/operations';
import {authenticatedSelector} from '../../redux/auth/authSelectors';
import TransactionItem from '../TransactionItem/TransactionItem';
import NotTransactions from '../NotTransactions/NotTransactions';
import Spiner from '../../components/Spinner/Spinner.js';
import style from './TransactionList.module.css';

const TransactionList = () => {
  const tableScreen = useTableScreen();
  const transaction = useSelector(transactionsSelector);
  const token = useSelector(authenticatedSelector);
  const isActive = useSelector(addTransactionPageSelector);
  const loading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  const updateStatus = pageStatus =>
    dispatch(changeTransactionPage(pageStatus));

  const statusPage = !isActive;
  const {transactions} = transaction;
  const isTransactions = transactions.length > 0;
  let sortedTransactionList;

  if(isTransactions) {
    sortedTransactionList =[...transactions].reverse();
  }

  useEffect(() => {
    dispatch(getAllTransactions(token));
  }, [dispatch, token]);

  return (
    <>
      {loading && <Spiner />}
      {isTransactions && !loading && (
        <>
          {tableScreen <= 767 && (
            <ul className={style.list}>
              {sortedTransactionList.map(item => {
                return <TransactionItem items={item} key={item._id} />;
              })}
            </ul>
          )}
          {tableScreen >= 768 && (
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
                  {sortedTransactionList.map(item => {
                    return <TransactionItem items={item} key={item._id} />;
                  })}
                </tbody>
              </table>
            </>
          )}
        </>
      )}
      {!loading && !isTransactions && <NotTransactions />}
      {statusPage && (
        <button
          className={style.btnAdd}
          onClick={() => updateStatus(statusPage)}
        >
          &#43;
        </button>
      )}
    </>
  );
};

export default TransactionList;
