import {BrowserRouter} from 'react-router-dom';

import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <RegisterForm />
    </BrowserRouter>
  );
}

export default App;
