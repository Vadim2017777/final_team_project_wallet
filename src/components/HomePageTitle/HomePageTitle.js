import React, {useState, useEffect} from 'react';
import s from './HomePageTitle.module.css';
import {Logo} from '../Svg/Logo';
import {Exit} from '../Svg/Exit';

export const HomePageTitle = () => {
  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen]);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.logoBox}>
          <Logo s={s.logo}/>
          <span className={s.logoName}>Wallet</span>
        </div>
        <div className={s.userInfo}>
          <span className={s.userName}>name</span>
          <button className={s.logout}>
            <Exit s={s.logoutSvg} />
          </button>
          {Number(tabletScreen) >= 768 && <span>Exit</span>}
        </div>
      </div>
    </div>
  );
};

