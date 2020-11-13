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
import handleDataDisplay from '../helpers/handleDataDisplay';
import filtredCosts from '../helpers/filtredCosts';
import filtredIncome from '../helpers/filterdIncome';
import TransactionItem from '../TransactionItem/TransactionItem';
import Balance from '../../components/Balance/Balance';
import CurrencyTable from '../СurrencyTable/CurrencyTable';
import Spiner from '../../components/Spinner/Spinner.js';

import style from './TransactionList.module.css';

const TransactionList = ({
  isActive,
  updateStatus,
  transaction,
  getCurrentTransactions,
  token,
  loading,
}) => {
  const statusPage = !isActive;
  const [inputMonth] = useState('');
  const [inputYear] = useState('');

  const {transactions} = transaction;
  const isTransactions = transactions.length > 0;
  useEffect(() => {
    getCurrentTransactions(token);
  }, [getCurrentTransactions, token]);

  const filteredCost = transactions.filter(({type}) => type === '-');

  const filteredIncome = transactions.filter(({type}) => type === '+');

  const cost = filtredCosts(filteredCost, inputMonth, inputYear);

  const income = filtredIncome(filteredIncome, inputMonth, inputYear);

  const dataToDisplay = handleDataDisplay(cost, income);

  let minusTransactions = dataToDisplay.costs;

  let plusTransactions = dataToDisplay.income;

  let globalBalance = plusTransactions - minusTransactions;

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
      <Balance balance={globalBalance} />
      {loading && <Spiner />}
      {isTransactions && (
        <>
          {Number(tabletScreen) <= 767 && (
            <ul className={style.list}>
              {transactions.map(item => {
                return <TransactionItem items={item} key={item._id} />;
              })}
            </ul>
          )}
          {Number(tabletScreen) >= 768 && (
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
          onClick={() => updateStatus(statusPage)}
        >
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
