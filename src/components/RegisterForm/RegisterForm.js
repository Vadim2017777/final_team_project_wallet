import React, {useState} from 'react';
import {connect} from 'react-redux';

import {authOperations} from '../../redux/auth';

import {Link} from 'react-router-dom';
import ProgressValidationBar from './ProgressValidationBar';

import useInput from '../../hooks/UseInput.js';

import style from './RegisterForm.module.css';
import iphoneImg from './images/iPhone_6_2.png';
import Logo from './images/svg/logo.svg';
import {useEffect} from 'react';

const RegisterForm = ({onRegister, authError}) => {
  const email = useInput('', {isEmpty: true, minLength: 3});
  const password = useInput('', {isEmpty: true, minLength: 6});
  const passwordConfirm = useInput('', {isEmpty: true});
  const name = useInput('', {isEmpty: true, minLength: 3});
  const [mathchPass, setmatchPass] = useState(true);

  useEffect(() => {
    if (passwordConfirm.value !== password.value) {
      setmatchPass(true);
    } else if (passwordConfirm.value === password.value) {
      setmatchPass(false);
    }
  }, [password, passwordConfirm]);

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: email.value,
      password: password.value,
      passwordConfirm: passwordConfirm.value,
      name: name.value,
    };

    onRegister(data);
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
            <span className={style.formRegister_ErrorStringEmail}>
              EMAIL IS REQUIRED
            </span>
          )}
          {authError && (
            <span className={style.formRegister_ErrorStringEmail}>
              EMAIL ALREADY EXISTS
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
            className={style.passwordInput}
          />
          {password.isDirty && password.minLength && (
            <span className={style.formRegister_ErrorStringPassword}>
              PASSWORD MUST BE AT LEAST 6 CHARACTERS
            </span>
          )}
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            onChange={e => passwordConfirm.onChange(e)}
            onBlur={e => passwordConfirm.onBlur(e)}
            value={passwordConfirm.value}
            autoComplete="off"
            className={style.passwordInput}
          />

          {mathchPass && passwordConfirm.isDirty && (
            <span className={style.formRegister_ErrorStringConfirm}>
              PASSWORDS MUST MATCH
            </span>
          )}
          <ProgressValidationBar
            style={style.loginForm_passwordBarProgress}
            password={password.value}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={e => name.onChange(e)}
            onBlur={e => name.onBlur(e)}
            value={name.value}
            className={style.nameInput}
          />
          {name.isDirty && name.minLength && (
            <span className={style.formRegister_ErrorStringName}>
              NAME IS REQUIRED
            </span>
          )}

          <button
            disabled={!email.inputValid || !password.inputValid || mathchPass}
            type="submit"
            className={style.button}
          >
            Sign up
          </button>
          <Link to="/" className={style.linkSignUp}>
            Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

const mSTP = ({auth}) => ({authError: auth.error});

export default connect(mSTP, {onRegister: authOperations.register})(
  RegisterForm,
);
