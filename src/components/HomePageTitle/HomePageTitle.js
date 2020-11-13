import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './HomePageTitle.module.css';
import {Logo} from '../Svg/Logo';
import {Exit} from '../Svg/Exit';
import getName from '../../redux/auth/authSelectors';
import {authOperations} from '../../redux/auth';
import {Link} from 'react-router-dom';

const HomePageTitle = () => {
  const name = useSelector(state => getName.getUserName(state));
  const onLogout = useDispatch();

  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen]);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Link
          to="/home"
          className={style.logoBox}
          style={{textDecoration: 'none'}}
        >
          <Logo s={style.logo} />
          <span className={style.logoName}>Wallet</span>
        </Link>
        <div className={style.userInfo}>
          <span className={style.userName}>{name}</span>
          <button
            className={style.logout}
            onClick={e => onLogout(authOperations.logOut())}
          >
            <Exit s={style.logoutSvg} />
            {Number(tabletScreen) >= 768 && (
              <span className={style.exit}>Exit</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageTitle;
