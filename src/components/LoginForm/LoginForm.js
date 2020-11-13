import React from 'react';
import {connect} from 'react-redux';

import {authOperations} from '../../redux/auth';

import {Link} from 'react-router-dom';

import useInput from '../../hooks/UseInput.js';

import style from './LoginForm.module.css';
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
  };
  return (
    <div className={style.container}>
      <div className={style.ImgBGWrapper}>
        <div className={style.imgWrapper}>
          <img src={iphoneImg} alt="iphoneImage" className={style.img} />
          <span className={style.name}>Finance App</span>
        </div>
      </div>

      <div className={style.formWrapper}>
        <form onSubmit={handleSubmit} className={style.form}>
          <span className={style.logo}>
            <img src={Logo} alt="Logo" className={style.svg} />
            Wallet
          </span>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={e => email.onChange(e)}
            onBlur={e => email.onBlur(e)}
            value={email.value}
            className={style.EmailInput}
          />

          {email.isDirty && email.minLength && (
            <span className={style.ErrorStringEmail}>EMAIL IS REQUIRED</span>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => password.onChange(e)}
            onBlur={e => password.onBlur(e)}
            value={password.value}
            autoComplete="off"
            className={style.passwordInput}
          />
          {password.isDirty && password.minLength && (
            <span className={style.ErrorStringPassword}>
              PASSWORD IS REQUIRED
            </span>
          )}
          {authError && (
            <span className={style.ErrorStringError}>{authError}</span>
          )}
          <button type="submit" className={style.button}>
            Login
          </button>
          <Link to="/signup" className={style.linkSignUp}>
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

const mSTP = ({auth}) => ({authError: auth.error});
export default connect(mSTP, {onLogin: authOperations.logIn})(LoginForm);
