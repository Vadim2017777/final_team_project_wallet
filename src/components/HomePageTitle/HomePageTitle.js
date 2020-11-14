import {useDispatch, useSelector} from 'react-redux';
import useTableScreen from '../../hooks/UseTableScreen';
import {authOperations} from '../../redux/auth';
import getName from '../../redux/auth/authSelectors';
import {Link} from 'react-router-dom';
import {Logo} from '../Svg/Logo';
import {Exit} from '../Svg/Exit';
import style from './HomePageTitle.module.css';

const HomePageTitle = () => {
  const name = useSelector(state => getName.getUserName(state));
  const onLogout = useDispatch();
  const tableScreen = useTableScreen();

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Link
          to="/home"
          className={style.logoBox}
          style={{textDecoration: 'none'}}
        >
          <div className={style.logoBox}>
            <Logo s={style.logo} />
            <span className={style.logoName}>Wallet</span>
          </div>
        </Link>
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
