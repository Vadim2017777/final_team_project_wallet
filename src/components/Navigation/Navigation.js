import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {Home} from '../Svg/Home';
import {Timeline} from '../Svg/Timeline';
import {Money} from '../Svg/Money';
import s from './Navigation.module.css';

export const Navigation = () => {
  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen]);

  return (
    <nav className={s.nav}>
      {Number(tabletScreen) && <div className={s.effectT}></div>}
      <NavLink className={s.link} activeClassName={s.active} to="/home">
        <button className={s.button}>
          {Number(tabletScreen) < 768 ? (
            <Home s={s.svg} />
          ) : (
            <div className={s.btnBox}>
              <Home s={s.svg} />
              <span className={s.text}>Home</span>
            </div>
          )}
        </button>
      </NavLink>
      <NavLink className={s.link} activeClassName={s.active} to="/statistics">
        <button className={s.button}>
          {Number(tabletScreen) < 768 ? (
            <Timeline s={s.svg} />
          ) : (
            <div className={s.btnBox}>
              <Timeline s={s.svg} />
              <span className={s.text}>Statistics</span>
            </div>
          )}
        </button>
      </NavLink>
      {Number(tabletScreen) && <div className={s.effectB}></div>}
      {Number(tabletScreen) && (
        <div className={[s.effect, s.linkTimeline].join(' ')}></div>
      )}
      <NavLink className={s.link} activeClassName={s.active} to="/balance">
        <button className={s.button}>
          {Number(tabletScreen) < 768 ? (
            <Money s={s.svg} />
          ) : (
            <div className={[s.btnBox, s.balance].join(' ')}>
              <span className={s.text}>Balance:</span>{' '}
              <span className={s.amount}>24000 грн</span>
            </div>
          )}
        </button>
      </NavLink>
      {Number(tabletScreen) && <div className={s.effect}></div>}
    </nav>
  );
};
