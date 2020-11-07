import React, {useState, useEffect} from 'react';
import s from './Balance.module.css';
import {connect} from 'react-redux';

import {getTransactions} from '../../redux/transactions/selectors';

const Balance = ({transaction}) => {
  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen]);

  const {transactions} = transaction;
  const lastObj = transactions[transactions.length - 1];
  let balance = null;
  if (!lastObj) balance = 0;
  else balance = lastObj.globalBalance;

  return (
    <div className={s.box}>
      {(Number(tabletScreen) < 768 || Number(tabletScreen) > 1279) && (
        <div className={s.balance}>
          <span className={s.text}>Balance</span>
          <span className={s.amount}>{balance} грн</span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  transaction: getTransactions(state),
});

export default connect(mapStateToProps)(Balance);
