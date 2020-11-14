import {useSelector} from 'react-redux';
import {getAddTransactionPage} from '../../redux/transactions/selectors';
import Navigation from '../Navigation/Navigation';
import AddTransactionForm from '../AddTransactionForm/AddTransactionForm';
import useTableScreen from '../../hooks/UseTableScreen';

import style from './MainProfile.module.css';

const MainProfileInfo = () => {
  const isActive = useSelector(state => getAddTransactionPage(state));
  const statusPage = !isActive;

  const tableScreen = useTableScreen();

  return (
    <>
      {(statusPage || Number(tableScreen) >= 768) && (
        <div className={style.box}>
          <Navigation />
        </div>
      )}
      {!statusPage && <AddTransactionForm />}
    </>
  );
};

export default MainProfileInfo;
