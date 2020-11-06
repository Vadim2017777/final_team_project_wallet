import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAddTransactionPage} from '../../redux/transactions/selectors';
import {changeTransactionPage} from '../../redux/transactions/transactionActions';
import s from './TitleOfForm.module.css';

const TitleOfForm = ({isActive, updateStatus}) => {
  const pageStatus = !isActive;
  return (
    <div className={s.wrapper}>
      <div className={s.titleBox}>
        <Link to='/home'><button className={s.btn} onClick={()=> updateStatus(pageStatus)}>&lArr;</button></Link>
        <span className={s.title}>ADD A TRANSACTION </span>
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