import React from "react";

import { Link } from "react-router-dom";

import s from "./RegisterForm.module.css";
import iphoneImg from "./images/iPhone_6_2.png";
import Logo from "./images/svg/logo.svg";

const RegisterForm = () => {
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
        <form action="" className={s.registerForm_form}>
          <span className={s.registerForm_logo}>
            <img src={Logo} alt="Logo" className={s.registerForm_svg} />
            Wallet
          </span>

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            // value=""
            className={s.registerForm_EmailInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            // value=""
            className={s.registerForm_passwordInput}
          />

          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            // value=""
            className={s.registerForm_passwordInput}
          />
          <div className={s.loginForm_passwordBarProgress}></div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            // value=""
            className={s.registerForm_nameInput}
          />
          <button type="submit" className={s.registerForm_button}>
            Login
          </button>
          <Link
            to="#"
            className={s.registerForm_linkSignUp}
            activeClassName={s.registerForm_linkSignUpActive}
          >
            Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
