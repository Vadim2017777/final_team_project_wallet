import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Home} from '../Svg/Home';
import {Timeline} from '../Svg/Timeline';
import {Money} from '../Svg/Money';
import s from './Navigation.module.css';
import {connect} from 'react-redux';

import {getTransactions} from '../../redux/transactions/selectors';
const Navigation = ({transaction}) => {
  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  console.log('----------transaction----', transaction);

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
    <>
      <nav className={s.nav}>
        <NavLink className={s.link} activeClassName={s.active} to="/home">
          <button className={s.button}>
            {Number(tabletScreen) <= 767 ? (
              <Home s={s.svg} />
            ) : (
              <div className={s.btnBox}>
                <Home s={s.svg} />
                <span className={s.text}>Home</span>
              </div>
            )}
          </button>
        </NavLink>
        <NavLink className={s.link} activeClassName={s.active} to="/statistics">
          <button className={s.button}>
            {Number(tabletScreen) <= 767 ? (
              <Timeline s={s.svg} />
            ) : (
              <div className={s.btnBox}>
                <Timeline s={s.svg} />
                <span className={s.text}>Statistics</span>
              </div>
            )}
          </button>
        </NavLink>
        {Number(tabletScreen) <= 767 && (
          <NavLink className={s.link} activeClassName={s.active} to="/currency">
            <button className={s.button}>
              <Money s={s.svg} />
            </button>
          </NavLink>
        )}
        {Number(tabletScreen) >= 768 && Number(tabletScreen) < 1279 && (
          <div className={[s.btnBox, s.balance, s.link].join(' ')}>
            <span className={s.text}>Balance:</span>{' '}
            <span className={s.amount}> {balance} грн</span>
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
