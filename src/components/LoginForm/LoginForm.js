import React from "react";

import { Link } from "react-router-dom";

import s from "./LoginForm.module.css";
import iphoneImg from "./images/iPhone_6.png";
import Logo from "./images/svg/logo.svg";

const LoginForm = () => {
  return (
    <div className={s.loginForm_container}>
      <div className={s.loginForm_ImgBGWrapper}>
        <div className={s.loginForm_imgWrapper}>
          <img src={iphoneImg} alt="iphoneImage" className={s.loginForm_img} />
          <span className={s.loginForm_name}>Finance App</span>
        </div>
      </div>

      <div className={s.loginForm_formWrapper}>
        <form action="" className={s.loginForm_form}>
          <span className={s.loginForm_logo}>
            <img src={Logo} alt="Logo" className={s.loginForm_svg} />
            Wallet
          </span>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            // value=""
            className={s.loginForm_EmailInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            // value=""
            className={s.loginForm_passwordInput}
          />
          <button type="submit" className={s.loginForm_button}>
            Login
          </button>
          <Link
            to="#"
            className={s.loginForm_linkSignUp}
            activeClassName={s.loginForm_linkSignUpActive}
          >
            Sign up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
