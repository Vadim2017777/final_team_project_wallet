import React from 'react';

import style from './NotTransactions.module.css';

const NotTransactions = () => {
  return (
    <div className={style.emptyTransactionsList}>
      <p className={style.emptyTransactionsListText}>
        Create your first transaction!
      </p>
    </div>
  );
};

export default NotTransactions;
