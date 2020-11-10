import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

import {getTransactions} from '../../redux/transactions/selectors';
import isAuth from '../../redux/auth/authSelectors';

import {getAllTransactions} from '../../redux/transactions/operations';

import s from './Statistics.module.css';
import {connect} from 'react-redux';

import Chart from './Chart';

import handleDataDisplay from './helpers/handleDataDisplay';
import filtredCosts from './helpers/filtredCosts';
import filtredIncome from './helpers/filterdIncome';
import CategoryTable from './CategoryTable';
import Balance from '../Balance/Balance';

const Statistics = ({transaction, getCurrentTransactions, token}) => {
  const [inputMonth, setInputMonth] = useState('');
  const [inputYear, setInputYear] = useState('');

  useEffect(() => {
    getCurrentTransactions(token);
  }, [getCurrentTransactions, token]);
  const {transactions} = transaction;

  const filteredCost = transactions.filter(({type}) => type === '-');

  const filteredIncome = transactions.filter(({type}) => type === '+');

  const cost = filtredCosts(filteredCost, inputMonth, inputYear);

  const income = filtredIncome(filteredIncome, inputMonth, inputYear);

  const dataToDisplay = handleDataDisplay(cost, income);

  let minusTransactions = dataToDisplay.costs;

  let plusTransactions =  dataToDisplay.income;
  
  let globalBalance = plusTransactions - minusTransactions;

  const updateInputMonth = e => {
    setInputMonth(e.target.value);
  };

  const updateInputYear = e => {
    setInputYear(e.target.value);
  };
  return (
    <>
      <Balance balance={globalBalance}/>
      <div className={s.wrapper}>
        <div className={s.header}>
          <span>Statistics</span>
        </div>
        <div className={s.StatisticsChart_wrapper}>
          <Chart chartData={dataToDisplay} />
        </div>
        <div className={s.CategoryTable}>
          <CategoryTable
            hanleMonthUpdate={updateInputMonth}
            hanleYearUpdate={updateInputYear}
            data={dataToDisplay}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  transaction: getTransactions(state),
  token: isAuth.isAuthenticated(state),
});

const mapDispatchToProps = {
  getCurrentTransactions: getAllTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
