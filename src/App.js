import './App.css';
import {Route, Switch} from 'react-router-dom';
import isAuth from './redux/auth/authSelectors';
import {connect} from 'react-redux';
import AddTransactionForm from './components/AddTransactionForm/AddTransactionForm';
import {ProfilePage} from './views/ProfilePage';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';

function App({isAuth}) {
  console.log(isAuth)
  return (
    <Switch>
      <>
        <div className="App">
          {isAuth && (
            <>
              <Route
                path="/newTransaction"
                exact
                component={AddTransactionForm}
              />
              <Route path="/" component={ProfilePage} />
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
});

export default connect(mapStateToProps)(App);
