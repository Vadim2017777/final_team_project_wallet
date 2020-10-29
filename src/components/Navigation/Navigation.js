import React from 'react';
import {NavLink} from 'react-router-dom';
import {Home} from '../Svg/Home';
import {Timeline} from '../Svg/Timeline';
import {Money} from '../Svg/Money';
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.link} activeClassName={s.active} to="/home"><button className={s.button}><Home s={s.svg}/></button></NavLink>
      <NavLink className={s.link} activeClassName={s.active} to="/timeline"><button className={s.button}><Timeline s={s.svg}/></button></NavLink>
      <NavLink className={s.link} activeClassName={s.active} to="/money"><button className={s.button}><Money s={s.svg}/></button></NavLink>
    </nav>
  );
};
