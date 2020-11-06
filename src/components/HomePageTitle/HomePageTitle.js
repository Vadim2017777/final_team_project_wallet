import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import s from './HomePageTitle.module.css';
import {Logo} from '../Svg/Logo';
import {Exit} from '../Svg/Exit';
import getName from '../../redux/auth/authSelectors';
import {authOperations} from '../../redux/auth';

const HomePageTitle = ({name, onLogout}) => {
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
          <span className={s.userName}>{name}</span>
          <button className={s.logout} onClick={onLogout}>
            <Exit s={s.logoutSvg} />{Number(tabletScreen) >= 768 && <span className={s.exit}>Exit</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
 name: getName.getUserName(state)
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageTitle);

