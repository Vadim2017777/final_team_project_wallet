import React from 'react';
import {connect} from 'react-redux';

import {authOperations} from '../../redux/auth';

import {Link} from 'react-router-dom';

import useInput from '../hooks/UseInput.js';

import s from './LoginForm.module.css';
import iphoneImg from './images/iPhone_6.png';
import Logo from './images/svg/logo.svg';

const LoginForm = ({onLogin, authError}) => {
  const email = useInput('', {isEmpty: true, minLength: 1});
  const password = useInput('', {isEmpty: true, minLength: 1});

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      email: email.value,
      password: password.value,
    };
    onLogin(data);
    console.log(data);
  };
  return (
    <div className={s.container}>
      <div className={s.ImgBGWrapper}>
        <div className={s.imgWrapper}>
          <img src={iphoneImg} alt="iphoneImage" className={s.img} />
          <span className={s.name}>Finance App</span>
        </div>
      </div>

      <div className={s.formWrapper}>
        <form onSubmit={handleSubmit} className={s.form}>
          <span className={s.logo}>
            <img src={Logo} alt="Logo" className={s.svg} />
            Wallet
          </span>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={e => email.onChange(e)}
            onBlur={e => email.onBlur(e)}
            value={email.value}
            className={s.EmailInput}
          />

          {email.isDirty && email.minLength && (
            <span className={s.ErrorStringEmail}>EMAIL IS REQUIRED</span>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => password.onChange(e)}
            onBlur={e => password.onBlur(e)}
            value={password.value}
            autoComplete="off"
            className={s.passwordInput}
          />
          {password.isDirty && password.minLength && (
            <span className={s.ErrorStringPassword}>PASSWORD IS REQUIRED</span>
          )}
          {authError && (
            <span className={s.ErrorStringError}>
              INCORRECT EMAIL OR PASSWORD
            </span>
          )}
          <button type="submit" className={s.button}>
            Login
          </button>
          <Link to="/signup" className={s.linkSignUp}>
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

const mSTP = ({auth}) => ({authError: auth.error});
export default connect(mSTP, {onLogin: authOperations.logIn})(LoginForm);
