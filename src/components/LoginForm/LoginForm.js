import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {authOperations} from '../../redux/auth';

import {Link} from 'react-router-dom';

import s from './LoginForm.module.css';
import iphoneImg from './images/iPhone_6.png';
import Logo from './images/svg/logo.svg';

const LoginForm = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = ({target}) => {
    setEmail(target.value);
  };

  const updatePassword = ({target}) => {
    setPassword(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onLogin({email, password});
    console.log(email);
    setEmail('');
    setPassword('');
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
            onChange={updateEmail}
            value={email}
            className={s.loginForm_EmailInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
            autoComplete="on"
            className={s.loginForm_passwordInput}
          />
          <button type="submit" className={s.loginForm_button}>
            Login
          </button>
          <Link to="#" className={s.loginForm_linkSignUp}>
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default connect(null, {onLogin: authOperations.logIn})(LoginForm);
