import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

import {getTransactions} from '../../redux/transactions/selectors';
import isAuth from '../../redux/auth/authSelectors';

import {getAllTransactions} from '../../redux/transactions/operations';

import s from './CategoryTable.module.css';
import {connect} from 'react-redux';

import handleDataDisplay from './helpers/handleDataDisplay';

const categories = [
  {
    year: '2020',
    month: 'March',
    category: 'food',
    amount: 5,
  },
  {
    year: '2020',
    month: 'January',
    category: 'car',
    amount: 10,
  },
  {
    year: '2021',
    month: 'January',
    category: 'car',
    amount: 10,
  },
];

const CategoryTable = ({transaction, getCurrentTransactions, token}) => {
  const [inputMonth, setInputMonth] = useState('');
  const [inputYear, setInputYear] = useState('');

  console.log(token);

  useEffect(() => {
    getCurrentTransactions(token);
  }, [getCurrentTransactions, token]);
  const {transactions} = transaction;

  const filteredCost = transactions.filter(({type}) => type === '-');

  const filtered = filteredCost.filter(item => {
    console.log(inputMonth);
    if (inputMonth && inputYear) {
      return item.month === inputMonth && item.year === inputYear;
    }
    if (inputMonth && inputYear === '') {
      return item.month === inputMonth;
    }
    if (inputMonth === '' && inputYear) {
      return item.year === inputYear;
    }
    if (inputMonth === '' && inputYear === '') {
      return item;
    }
  });

  const dataToDisplay = handleDataDisplay(filtered);

  console.log(handleDataDisplay(filteredCost));

  const updateInputMonth = e => {
    console.log(e.target.value);
    setInputMonth(e.target.value);
  };

  const updateInputYear = e => {
    console.log(e.target.value);
    setInputYear(e.target.value);
  };
  return (
    <div className={s.CategoryTable}>
      <span className={s.CategoryTable_form}>
        <select className={s.CategoryTable_select} onChange={updateInputMonth}>
          <option selected>Month</option>
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
          <option>Year</option>
          <option>2020</option>
          <option>2021</option>
        </select>
      </span>

      <table className={s.CategoryTable_table}>
        <thead className={s.CategoryTable_head}>
          <tr className={s.CategoryTable_name}>
            <th className={s.CategoryTable_nameCategory}>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className={s.CategoryTable_body}>
          <tr className={s.CategoryTable_row}>
            <th>{dataToDisplay.food ? 'Food' : ''}</th>
            <th>{dataToDisplay.food ? dataToDisplay.food : ''}</th>/
          </tr>
        </tbody>
      </table>
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
