import React, {useState} from 'react';
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

  console.log(authError);

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
    <div className={s.loginForm_container}>
      <div className={s.loginForm_ImgBGWrapper}>
        <div className={s.loginForm_imgWrapper}>
          <img src={iphoneImg} alt="iphoneImage" className={s.loginForm_img} />
          <span className={s.loginForm_name}>Finance App</span>
        </div>
      </div>

      <div className={s.loginForm_formWrapper}>
        <form onSubmit={handleSubmit} className={s.loginForm_form}>
          <span className={s.loginForm_logo}>
            <img src={Logo} alt="Logo" className={s.loginForm_svg} />
            Wallet
          </span>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={e => email.onChange(e)}
            onBlur={e => email.onBlur(e)}
            value={email.value}
            className={s.loginForm_EmailInput}
          />

          {email.isDirty && email.minLength && (
            <span className={s.loginForm_ErrorStringEmail}>
              EMAIL IS REQUIRED
            </span>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => password.onChange(e)}
            onBlur={e => password.onBlur(e)}
            value={password.value}
            autoComplete="off"
            className={s.loginForm_passwordInput}
          />
          {password.isDirty && password.minLength && (
            <span className={s.loginForm_ErrorStringPassword}>
              PASSWORD IS REQUIRED
            </span>
          )}
          {authError && (
            <span className={s.loginForm_ErrorStringError}>
              INCORRECT EMAIL OR PASSWORD
            </span>
          )}
          <button type="submit" className={s.loginForm_button}>
            Login
          </button>
          <Link to="/signup" className={s.loginForm_linkSignUp}>
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

const mSTP = ({auth}) => ({authError: auth.error});
export default connect(mSTP, {onLogin: authOperations.logIn})(LoginForm);
