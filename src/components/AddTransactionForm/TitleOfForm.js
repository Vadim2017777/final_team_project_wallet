import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAddTransactionPage} from '../../redux/transactions/selectors';
import {changeTransactionPage} from '../../redux/transactions/transactionActions';
import {Link} from 'react-router-dom';
import style from './TitleOfForm.module.css';

const TitleOfForm = () => {
  const isActive = useSelector(state => getAddTransactionPage(state));
  const updateStatus = useDispatch();
  const pageStatus = !isActive;
  return (
    <div className={style.wrapper}>
      <div className={style.titleBox}>
        <Link to="/home">
          <button
            className={style.btn}
            onClick={() => updateStatus(changeTransactionPage(pageStatus))}
          >
            &lArr;
          </button>
        </Link>
        <span className={style.title}>ADD A TRANSACTION </span>
      </div>
    </div>
  );
};

export default TitleOfForm;
