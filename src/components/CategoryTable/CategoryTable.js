import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

import {getTransactions} from '../../redux/transactions/selectors';
import isAuth from '../../redux/auth/authSelectors';

import {getAllTransactions} from '../../redux/transactions/operations';

import s from './CategoryTable.module.css';
import {connect} from 'react-redux';

import Chart from './Chart';

import handleDataDisplay from './helpers/handleDataDisplay';
import filtredCosts from './helpers/filtredCosts';
import filtredIncome from './helpers/filterdIncome';

const CategoryTable = ({transaction, getCurrentTransactions, token}) => {
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

  const updateInputMonth = e => {
    setInputMonth(e.target.value);
  };

  const updateInputYear = e => {
    setInputYear(e.target.value);
  };
  return (
    <div className={s.Statistics_wrapper}>
      <div className={s.Statistic_header}>
        <span>Statistics</span>
      </div>
      <div className={s.StatisticsChart_wrapper}>
        <Chart chartData={dataToDisplay} />
      </div>
      <div className={s.CategoryTable}>
        <div className={s.CategoryTable_form}>
          <select
            className={s.CategoryTable_select}
            onChange={updateInputMonth}
          >
            <option selected disabled hidden>
              Month
            </option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>

          <select className={s.CategoryTable_select} onChange={updateInputYear}>
            <option selected disabled hidden>
              Year
            </option>
            <option>2020</option>
            <option>2021</option>
          </select>
        </div>
        <table className={s.CategoryTable_table}>
          <thead className={s.CategoryTable_head}>
            <tr className={s.CategoryTable_name}>
              <th className={s.CategoryTable_nameCategory}>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className={s.CategoryTable_body}>
            {dataToDisplay.expenses ? (
              <tr className={s.CategoryTable_row}>
                <th className={`${s.CategoryTable_th} ${s.Main_expenses}`}>
                  Main expenses
                </th>
                <th>{dataToDisplay.expenses}</th>
              </tr>
            ) : null}
            {dataToDisplay.food ? (
              <tr className={s.CategoryTable_row}>
                <th className={`${s.CategoryTable_th} ${s.Food}`}>Food</th>
                <th>{dataToDisplay.food}</th>
              </tr>
            ) : null}
            {dataToDisplay.car ? (
              <tr className={s.CategoryTable_row}>
                <th className={`${s.CategoryTable_th} ${s.Car}`}>Car</th>
                <th>{dataToDisplay.car}</th>
              </tr>
            ) : null}
            {dataToDisplay.selfcare ? (
              <tr className={s.CategoryTable_row}>
                <th className={`${s.CategoryTable_th} ${s.Self_Care}`}>
                  Self Care
                </th>
                <th>{dataToDisplay.selfcare}</th>
              </tr>
            ) : null}
            {dataToDisplay.childcare ? (
              <tr className={s.CategoryTable_row}>
                <th className={`${s.CategoryTable_th} ${s.Child_Care}`}>
                  Child Care
                </th>
                <th>{dataToDisplay.childcare}</th>
              </tr>
            ) : null}
            {dataToDisplay.house ? (
              <tr className={s.CategoryTable_row}>
                <th className={`${s.CategoryTable_th} ${s.House}`}>House</th>
                <th>{dataToDisplay.house}</th>
              </tr>
            ) : null}
            {dataToDisplay.education ? (
              <tr className={s.CategoryTable_row}>
                <th className={`${s.CategoryTable_th} ${s.Education}`}>
                  Education
                </th>
                <th>{dataToDisplay.education}</th>
              </tr>
            ) : null}
            {dataToDisplay.enterteinment ? (
              <tr className={s.CategoryTable_row}>
                <th className={`${s.CategoryTable_th} ${s.Enterteinment}`}>
                  Enterteinment
                </th>
                <th>{dataToDisplay.enterteinment}</th>
              </tr>
            ) : null}
            {dataToDisplay.others ? (
              <tr className={s.CategoryTable_row}>
                <th className={`${s.CategoryTable_th} ${s.Others}`}>Others</th>
                <th>{dataToDisplay.others}</th>
              </tr>
            ) : null}
          </tbody>
        </table>
        <div className={s.CategoryTable_summ}>
          <div className={`${s.CategoryTable_summName} ${s.orangeColor}`}>
            Cost{' '}
            <span>
              {dataToDisplay.costs ? `${dataToDisplay.costs} UAH` : `0 UAH`}
            </span>
          </div>

          <div className={s.CategoryTable_summName}>
            Income{' '}
            <span>
              {dataToDisplay.income ? `${dataToDisplay.income} UAH` : `0 UAH`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  transaction: getTransactions(state),
  token: isAuth.isAuthenticated(state),
});

const mapDispatchToProps = {
  getCurrentTransactions: getAllTransactions,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTable);
