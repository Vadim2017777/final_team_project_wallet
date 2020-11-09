import React, {useState, useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import isAuth from './redux/auth/authSelectors';
import {connect} from 'react-redux';
import {getAddTransactionPage} from './redux/transactions/selectors';
import {getCurrentUser} from './redux/auth/authOperations';
import {Wrapper} from './components/Wrapper/Wrapper';
import {WrapperPage} from './components/Wrapper/WrapperPage';
import {WrapperProfile} from './components/Wrapper/WrapperProfile';
import HomePageTitle from './components/HomePageTitle/HomePageTitle';
import MainProfileInfo from './components/MainProfile/MainProfileInfo';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import TransactionList from './components/TransactionList/TransactionList';
import CurrencyTable from './components/СurrencyTable/CurrencyTable';
import Statistics from './components/Statistics/Statistics';

function App ({isAuth, transactionPage, currentUser}) {
  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);
  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen, isAuth, transactionPage]);

  useEffect(() => {
    if (isAuth) {
      currentUser();
    }
  }, [currentUser, isAuth]);

  return (
    <Switch>
      <Wrapper>
        {isAuth ? (
          <>
            <HomePageTitle />
            <WrapperPage>
              <WrapperProfile>
                <MainProfileInfo />
                {!transactionPage && Number(tabletScreen) <= 767 && (
                  <>
                    <Route path='/home' exact component={TransactionList} />
                    <Route path='/statistics' exact component={Statistics} />
                  </>
                )}
                {Number(tabletScreen) >= 768 && Number(tabletScreen) <= 1279 && (
                  <>
                    <Route path='/home' exact component={TransactionList} />
                    <Route path='/statistics' exact component={Statistics} />
                  </>
                )}
                {Number(tabletScreen) >= 1280 && (
                  <>
                    <Route path='/home' exact component={TransactionList} />
                    <CurrencyTable />
                    <Route path='/statistics' exact component={Statistics} />
                  </>
                )}
              </WrapperProfile>
              {Number(tabletScreen) <= 767 && (
                <Route path='/currency' component={CurrencyTable} />
              )}
            </WrapperPage>
            <Redirect to='/home' />
          </>
        ) : (
          <>
            <Route path='/' exact component={LoginForm} />
            <Route path='/signup' exact component={RegisterForm} />
            <Redirect to='/' />
          </>
        )}
      </Wrapper>
    </Switch>
  );
}

const mapStateToProps = state => ({
  isAuth: isAuth.isAuthenticated(state),
  transactionPage: getAddTransactionPage(state),
});

const mapDispatchToProps = {
  currentUser: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
