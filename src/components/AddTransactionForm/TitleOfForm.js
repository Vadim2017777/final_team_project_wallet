import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAddTransactionPage} from '../../redux/transactions/selectors';
import {changeTransactionPage} from '../../redux/transactions/transactionActions';
import style from './TitleOfForm.module.css';

const TitleOfForm = ({isActive, updateStatus}) => {
  const pageStatus = !isActive;
  return (
    <div className={style.wrapper}>
      <div className={style.titleBox}>
        <Link to="/home">
          <button
            className={style.btn}
            onClick={() => updateStatus(pageStatus)}
          >
            &lArr;
          </button>
        </Link>
        <span className={style.title}>ADD A TRANSACTION </span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isActive: getAddTransactionPage(state),
});

const mapDispatchToProps = {
  updateStatus: changeTransactionPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleOfForm);
