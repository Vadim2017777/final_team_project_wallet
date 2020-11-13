import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getAddTransactionPage} from '../../redux/transactions/selectors';
import Navigation from '../Navigation/Navigation';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';

import style from './MainProfile.module.css';

const MainProfileInfo = ({isActive}) => {
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
      {(statusPage || Number(tabletScreen) >= 768) && (
        <div className={style.box}>
          <Navigation />
        </div>
      )}
      {!statusPage && <AddTransactionForm />}
    </>
  );
};

const mapStateToProps = state => ({
  isActive: getAddTransactionPage(state),
});

export default connect(mapStateToProps)(MainProfileInfo);
