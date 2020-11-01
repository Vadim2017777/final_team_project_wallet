import './App.css';

import {Route, Switch} from 'react-router-dom';
import isAuth from './redux/auth/authSelectors';
import {connect} from 'react-redux';
import AddTransactionForm from './components/AddTransactionForm/AddTransactionForm';
import {getAddTransactionPage} from './redux/transactions/selectors';
import {ProfilePage} from './views/ProfilePage';
import MainProfileInfo from './views/MainProfileInfo';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';

function App({isAuth, transactionPage}) {
  return (
    <Switch>
      <>
        <div className="App">
          {isAuth && (
            <>
              <ProfilePage />
              <Route path="/" component={MainProfileInfo} />
              {transactionPage && (
                <Route path="/newTransaction" component={AddTransactionForm} />
              )}
            </>
          )}
          {!isAuth && (
            <>
              <Route path="/" exact component={LoginForm} />
              <Route path="/signup" exact component={RegisterForm} />
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
