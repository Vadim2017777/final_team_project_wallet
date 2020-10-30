import './App.css';
import {Route, Switch} from 'react-router-dom';
// import { AddTransactionForm } from './components/AddTransactionForm/AddTransactionForm';
import {ProfilePage} from './views/ProfilePage';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
        <Switch>
          <>
          <div className="App">
            {/* <AddTransactionForm /> */}
            <Route path="/profile" component={ProfilePage} />
            <Route path="/" exact component={LoginForm} />
            <Route path="/signup" exact component={RegisterForm} />
          </div>
          </>
        </Switch>
    
  );
}

export default App;
