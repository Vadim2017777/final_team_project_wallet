import React from 'react';
import {connect} from 'react-redux';

// import operations from '../../redux/actions/operations';
// import themeSelector from '../../redux/selectors/themeSelectors';
// import contactsSelectors from '../../redux/selectors/contactsSelectors';

import s from './TransactionItem.module.css';

const TransactionItem = ({transaction}) => {
  const item = Object.entries(transaction);
  const [category, balance, , date, type, comments, amount] = item;
  return (
    <li>
      <table className={s.table}>
        <tbody>
          <tr>
            <td>{date[0]}</td>
            <td>{date[1]}</td>
          </tr>
          <tr>
            <td>{type[0]}</td>
            <td>{type[1]}</td>
          </tr>
          <tr>
            <td>{category[0]}</td>
            <td>{category[1]}</td>
          </tr>
          <tr>
            <td>{comments[0]}</td>
            <td>{comments[1]}</td>
          </tr>
          <tr>
            <td>{amount[0]}</td>
            <td>{amount[1]}</td>
          </tr>
          <tr>
            <td>{balance[0]}</td>
            <td>{balance[1]}</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   ...state,
// });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   //   onDeleteContact: () => dispatch(operations.deleteName(ownProps.id)),
// });

export default TransactionItem;
