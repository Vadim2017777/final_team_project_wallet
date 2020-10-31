import React from 'react';
import {connect} from 'react-redux';
import TransactionItem from '../TransactionItem/TransactionItem';
import {getTransactions} from '../../redux/transactions/selectors';

import s from './TransactionList.module.css';

const TransactionList = ({transactions}) => {
    
    console.log(transactions.length);
  const isTransactions = transactions.length > 0;
  console.log(isTransactions);
  return (
    <>
      {isTransactions ? (
        <ul className={s.list}>
          {/* {transactions.map(item => {
            return <TransactionItem transaction={item} key={item._id} />;
          })} */}
        </ul>
      ): <div></div>}
    </>
  );
};

const mapStateToProps = state => ({
  transactions: getTransactions(state),
});

export default connect(mapStateToProps)(TransactionList);
