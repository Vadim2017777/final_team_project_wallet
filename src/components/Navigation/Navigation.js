import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import filtredIncome from '../../helpers/filterdIncome';
import filtredCosts from '../../helpers/filtredCosts';
import handleDataDisplay from '../../helpers/handleDataDisplay';
import useTableScreen from '../../hooks/UseTableScreen';
import {transactionsSelector} from '../../redux/transactions/selectors';
import {
  HOME_ROUTE,
  CURRENCY_ROUTE,
  STATISTICS_ROUTE,
} from '../../helpers/routerConfig';
import {Home} from '../Svg/Home';
import {Timeline} from '../Svg/Timeline';
import {Money} from '../Svg/Money';
import style from './Navigation.module.css';

const Navigation = () => {
  const transaction = useSelector(transactionsSelector);
  const tableScreen = useTableScreen();
  const [inputMonth] = useState('');
  const [inputYear] = useState('');
  const {transactions} = transaction;
  const filteredCost = transactions.filter(({type}) => type === '-');
  const filteredIncome = transactions.filter(({type}) => type === '+');
  const cost = filtredCosts(filteredCost, inputMonth, inputYear);
  const income = filtredIncome(filteredIncome, inputMonth, inputYear);
  const dataToDisplay = handleDataDisplay(cost, income);
  let minusTransactions = dataToDisplay.costs;
  let plusTransactions = dataToDisplay.income;
  let globalBalance = plusTransactions - minusTransactions;

  return (
    <div className={style.box}>
      <nav className={style.nav}>
        <NavLink
          className={style.link}
          activeClassName={style.active}
          to={HOME_ROUTE}
        >
          <button className={style.button}>
            {tableScreen <= 767 ? (
              <Home s={style.svg} />
            ) : (
              <div className={style.btnBox}>
                <Home s={style.svg} />
                <span className={style.text}>Home</span>
              </div>
            )}
          </button>
        </NavLink>
        <NavLink
          className={style.link}
          activeClassName={style.active}
          to={STATISTICS_ROUTE}
        >
          <button className={style.button}>
            {tableScreen <= 767 ? (
              <Timeline s={style.svg} />
            ) : (
              <div className={style.btnBox}>
                <Timeline s={style.svg} />
                <span className={style.text}>Statistics</span>
              </div>
            )}
          </button>
        </NavLink>
        {tableScreen <= 767 && (
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to={CURRENCY_ROUTE}
          >
            <button className={style.button}>
              <Money s={style.svg} />
            </button>
          </NavLink>
        )}
        {tableScreen >= 768 && tableScreen < 1279 && (
          <div className={[style.btnBox, style.balance, style.link].join(' ')}>
            <span className={style.text}>Balance:</span>{' '}
            <span className={style.amount}> {globalBalance} UAH</span>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
