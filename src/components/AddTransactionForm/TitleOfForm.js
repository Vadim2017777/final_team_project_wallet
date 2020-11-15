import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {addTransactionPageSelector} from '../../redux/transactions/selectors';
import {changeTransactionPage} from '../../redux/transactions/transactionActions';
import {HOME_ROUTE} from '../../helpers/routerConfig';
import style from './TitleOfForm.module.css';

const TitleOfForm = () => {
  const isActive = useSelector(addTransactionPageSelector);
  const updateStatus = useDispatch();
  const pageStatus = !isActive;

  return (
    <div className={style.wrapper}>
      <div className={style.titleBox}>
        <Link to={HOME_ROUTE}>
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
