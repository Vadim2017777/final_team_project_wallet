import {useDispatch, useSelector} from 'react-redux';
import style from './HomePageTitle.module.css';
import {Logo} from '../Svg/Logo';
import {Exit} from '../Svg/Exit';
import {authOperations} from '../../redux/auth';
import getName from '../../redux/auth/authSelectors';
import useTableScreen from '../../hooks/UseTableScreen';

const HomePageTitle = () => {
  const name = useSelector(state => getName.getUserName(state));
  const onLogout = useDispatch();
  const tableScreen = useTableScreen();

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.logoBox}>
          <Logo s={style.logo} />
          <span className={style.logoName}>Wallet</span>
        </div>
        <div className={style.userInfo}>
          <span className={style.userName}>{name}</span>
          <button
            className={style.logout}
            onClick={e => onLogout(authOperations.logOut())}
          >
            <Exit s={style.logoutSvg} />
            {Number(tableScreen) >= 768 && (
              <span className={style.exit}>Exit</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageTitle;
