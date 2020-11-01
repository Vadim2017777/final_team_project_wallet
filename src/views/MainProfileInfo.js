import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAddTransactionPage} from '../redux/transactions/selectors';
import {changeTransactionPage} from '../redux/transactions/transactionActions';
import {Navigation} from '../components/Navigation/Navigation';
import {Balance} from '../components/Balance/Balance';
import TransactionList from '../components/TransactionList/TransactionList';

import s from './ProfilePage.module.css';

const MainProfileInfo = ({isActive, updateStatus}) => {
  const statusPage = !isActive;
  
  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);
  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen]);

  return (
    <>
      {(statusPage || Number(tabletScreen) > 768) && <div className={s.box}>
        <Navigation />
        <Balance />
        <TransactionList />
      </div>}
      <Link to="/newTransaction">
        {statusPage && <button onClick={()=> updateStatus(statusPage)}>+</button>}
      </Link>
    </>
  );
};

const mapStateToProps = state => ({
  isActive: getAddTransactionPage(state),
});

const mapDispatchToProps = {
  updateStatus: changeTransactionPage,
};


export default connect(mapStateToProps, mapDispatchToProps)(MainProfileInfo);
