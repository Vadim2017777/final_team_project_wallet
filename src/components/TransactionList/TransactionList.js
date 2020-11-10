import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  getTransactions,
  getLoading,
  getAddTransactionPage,
} from '../../redux/transactions/selectors';
import {changeTransactionPage} from '../../redux/transactions/transactionActions';
import {getAllTransactions} from '../../redux/transactions/operations';
import isAuth from '../../redux/auth/authSelectors';
import TransactionItem from '../TransactionItem/TransactionItem';
import Balance from '../../components/Balance/Balance';
import CurrencyTable from '../СurrencyTable/CurrencyTable';
import Spiner from '../../components/Spinner/Spinner.js';

import s from './TransactionList.module.css';

const TransactionList = ({
  isActive,
  updateStatus,
  transaction,
  getCurrentTransactions,
  token,
  loading
}) => {
  const statusPage = !isActive;

  const {transactions} = transaction;
  const isTransactions = transactions.length > 0;
  useEffect(() => {
    getCurrentTransactions(token);
  }, [getCurrentTransactions, token]);

  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);
  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen]);

  return (
    <>
      <Balance />
      {loading && <Spiner />}
      {isTransactions && (
        <>
          {Number(tabletScreen) <= 767 && (
            <ul className={s.list}>
              {transactions.map(item => {
                return <TransactionItem items={item} key={item._id} />;
              })}
            </ul>
          )}
          {Number(tabletScreen) >= 768 && (
            <>
              <table className={s.list}>
                <thead>
                  <tr className={s.raw}>
                    <td className={s.date}>Date</td>
                    <td className={s.type}>Type</td>
                    <td className={s.category}>Category</td>
                    <td className={s.comments}>Comments</td>
                    <td className={s.amount}>Amount</td>
                    <td className={s.balance}>Balance</td>
                  </tr>
                </thead>
                <tbody className={s.tbody}>
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
          <div className={s.emptyTransactionsList}>
            <p className={s.emptyTransactionsListText}>
              Create your first transaction!
            </p>
          </div>{' '}
          <CurrencyTable />
        </>
      )}

      {statusPage && (
        <button className={s.btnAdd} onClick={() => updateStatus(statusPage)}>
          &#43;
        </button>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  transaction: getTransactions(state),
  token: isAuth.isAuthenticated(state),
  isActive: getAddTransactionPage(state),
  loading: getLoading(state),
});

const mapDispatchToProps = {
  getCurrentTransactions: getAllTransactions,
  updateStatus: changeTransactionPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
