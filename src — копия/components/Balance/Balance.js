// import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getTransactions} from '../../redux/transactions/selectors';

import {
  filteredTypeMinus,
  filteredTypePlus,
} from '../../redux/statistics/statisticsSelectors';
import filtredCosts from '../helpers/filtredCosts.js';
import filtredIncome from '../helpers/filterdIncome.js';
import handleDataDisplay from '../helpers/handleDataDisplay.js';
import style from './Balance.module.css';
import useTableScreen from '../../hooks/UseTableScreen';

const Balance = () => {
  const transaction = useSelector(state => getTransactions(state));
  const {transactions} = transaction;

  const filteredCost = filteredTypeMinus(transactions);
  const filteredIncome = filteredTypePlus(transactions);
  const cost = filtredCosts(filteredCost);
  const income = filtredIncome(filteredIncome);
  const dataToDisplay = handleDataDisplay(cost, income);

  const tableScreen = useTableScreen();

  return (
    <div className={style.box}>
      {(Number(tableScreen) < 768 || Number(tableScreen) > 1279) && (
        <div className={style.balance}>
          <span className={style.text}>Balance</span>
          <span className={style.amount}>
            {dataToDisplay.globalBalance} UAH
          </span>
        </div>
      )}
    </div>
  );
};

export default Balance;
