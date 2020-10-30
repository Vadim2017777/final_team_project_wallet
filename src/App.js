import {BrowserRouter} from 'react-router-dom';

import './App.css';
// import { AddTransactionForm } from './components/AddTransactionForm/AddTransactionForm';
// import {HomePageTitle} from './components/HomePageTitle/HomePageTitle';
// import {Navigation} from './components/Navigation/Navigation';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <HomePageTitle /> */}
        {/* <Navigation /> */}
        {/* <AddTransactionForm /> */}
      </div>
      <LoginForm />
    </BrowserRouter>
  );
}

export default App;
