import React, {useState} from 'react';
import {connect} from 'react-redux';

import {authOperations} from '../../redux/auth';

import {Link} from 'react-router-dom';

import s from './RegisterForm.module.css';
import iphoneImg from './images/iPhone_6_2.png';
import Logo from './images/svg/logo.svg';

const RegisterForm = ({onRegister}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const [name, setName] = useState('');

  const updateEmail = ({target}) => {
    setEmail(target.value);
  };

  const updatePassword = ({target}) => {
    setPassword(target.value);
  };

  const updatepasswordConfirm = ({target}) => {
    setpasswordConfirm(target.value);
  };

  const updateName = ({target}) => {
    setName(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onRegister({email, password, passwordConfirm, name});
    console.log(email);
    setEmail('');
    setPassword('');
    setpasswordConfirm('');
    setName('');
  };
  return (
    <div className={s.registerForm_container}>
      <div className={s.registerForm_ImgBGWrapper}>
        <div className={s.registerForm_imgWrapper}>
          <img
            src={iphoneImg}
            alt="iphoneImage"
            className={s.registerForm_img}
          />
          <span className={s.registerForm_name}>Finance App</span>
        </div>
      </div>

      <div className={s.registerForm_formWrapper}>
        <form onSubmit={handleSubmit} className={s.registerForm_form}>
          <span className={s.registerForm_logo}>
            <img src={Logo} alt="Logo" className={s.registerForm_svg} />
            Wallet
          </span>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={updateEmail}
            value={email}
            className={s.registerForm_EmailInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={updatePassword}
            value={password}
            autoComplete="off"
            className={s.registerForm_passwordInput}
          />

          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            onChange={updatepasswordConfirm}
            value={passwordConfirm}
            autoComplete="off"
            className={s.registerForm_passwordInput}
          />
          <div className={s.loginForm_passwordBarProgress}></div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={updateName}
            value={name}
            className={s.registerForm_nameInput}
          />
          <button type="submit" className={s.registerForm_button}>
            Login
          </button>
          <Link to="#" className={s.registerForm_linkSignUp}>
            Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default connect(null, {onRegister: authOperations.register})(
  RegisterForm,
);
