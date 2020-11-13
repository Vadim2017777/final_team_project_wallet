import {connect} from 'react-redux';
import style from './HomePageTitle.module.css';
import {Logo} from '../Svg/Logo';
import {Exit} from '../Svg/Exit';
import getName from '../../redux/auth/authSelectors';
import {authOperations} from '../../redux/auth';
import {Link} from 'react-router-dom';
import useTableScreen from '../../hooks/UseTableScreen';

const HomePageTitle = ({name, onLogout}) => {
  const tableScreen = useTableScreen();

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
          <button className={style.logout} onClick={onLogout}>
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

const mapStateToProps = state => ({
  name: getName.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageTitle);
