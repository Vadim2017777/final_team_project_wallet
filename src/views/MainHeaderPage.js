import React from 'react';
import HomePageTitle from '../components/HomePageTitle/HomePageTitle';
import Navigation from '../components/Navigation/Navigation';
import style from '../components/MainProfile/MainProfile.module.css';

const MAinHeaderPage = () => {
  return (
    <>
      <HomePageTitle />
      <div className={style.box}>
        <Navigation />
      </div>
    </>
  );
};

export default MAinHeaderPage;
