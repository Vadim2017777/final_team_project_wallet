import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import isAuth from './redux/auth/authSelectors';
import {connect} from 'react-redux';
import AddTransactionForm from './components/AddTransactionForm/AddTransactionForm';
import {getAddTransactionPage} from './redux/transactions/selectors';
import {ProfilePage} from './views/ProfilePage';
import MainProfileInfo from './views/MainProfileInfo';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import TransactionList from './components/TransactionList/TransactionList';
import CurrencyTable from './components/СurrencyTable/CurrencyTable';

function App ({isAuth, transactionPage}) {
  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);
  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen]);

  return (
    <Switch>
      <>
        <div className='App'>
          {isAuth && (
            <>
              <ProfilePage />
              <Route path='/' component={MainProfileInfo} />
              <Route path='/home' component={TransactionList} />
              <Route path='/currency' component={CurrencyTable} />
              {Number(tabletScreen) >= 768 && <CurrencyTable />}
              {transactionPage && (
                <Route path='/newTransaction' component={AddTransactionForm} />
              )}
            </>
          )}
          {!isAuth && (
            <>
              <Route path='/' exact component={LoginForm} />
              <Route path='/signup' exact component={RegisterForm} />
            </>
          )}
        </div>
      </>
    </Switch>
  );
}

const mapStateToProps = state => ({
  isAuth: isAuth.isAuthenticated(state),
  transactionPage: getAddTransactionPage(state),
});

export default connect(mapStateToProps)(App);
