import React from 'react';
import {HomePageTitle} from '../components/HomePageTitle/HomePageTitle';
import {Navigation} from '../components/Navigation/Navigation';
import {Balance} from '../components/Balance/Balance';

import s from './ProfilePage.module.css';

export const ProfilePage = () => {
  return (
    <>
      <HomePageTitle />
      <div className={s.box}>
        <Navigation />
        <Balance />
      </div>
    </>
  );
};
