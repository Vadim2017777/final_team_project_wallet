import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Home} from '../Svg/Home';
import {Timeline} from '../Svg/Timeline';
import {Money} from '../Svg/Money';
import style from './Navigation.module.css';
import {connect} from 'react-redux';
import handleDataDisplay from '../helpers/handleDataDisplay';
import filtredCosts from '../helpers/filtredCosts';
import filtredIncome from '../helpers/filterdIncome';
import {getTransactions} from '../../redux/transactions/selectors';

const Navigation = ({transaction}) => {
  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen]);

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
    <>
      <nav className={style.nav}>
        <NavLink
          className={style.link}
          activeClassName={style.active}
          to="/home"
        >
          <button className={style.button}>
            {Number(tabletScreen) <= 767 ? (
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
          to="/statistics"
        >
          <button className={style.button}>
            {Number(tabletScreen) <= 767 ? (
              <Timeline s={style.svg} />
            ) : (
              <div className={style.btnBox}>
                <Timeline s={style.svg} />
                <span className={style.text}>Statistics</span>
              </div>
            )}
          </button>
        </NavLink>
        {Number(tabletScreen) <= 767 && (
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to="/currency"
          >
            <button className={style.button}>
              <Money s={style.svg} />
            </button>
          </NavLink>
        )}
        {Number(tabletScreen) >= 768 && Number(tabletScreen) < 1279 && (
          <div className={[style.btnBox, style.balance, style.link].join(' ')}>
            <span className={style.text}>Balance:</span>{' '}
            <span className={style.amount}> {globalBalance} UAH</span>
          </div>
        )}
      </nav>
    </>
  );
};

const mapStateToProps = state => ({
  transaction: getTransactions(state),
});

export default connect(mapStateToProps)(Navigation);
