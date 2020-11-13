import React, {useState, useEffect} from 'react';

import style from './TransactionItem.module.css';

const TransactionItem = ({items}) => {
  const item = Object.entries(items);
  const [category, balance, , date, type, comments, amount] = item;

  const newDate = date[1].split('-').reverse().join('.');

  let currentStyle = 'amount';
  if (type[1] === '-') {
    currentStyle = 'amountMinus';
  }

  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);
  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen]);

  return (
    <>
      {Number(tabletScreen) <= 767 && (
        <li className={style.item}>
          <table className={style.table}>
            <tbody className={style.bodyTable}>
              <tr className={style.raw}>
                <td className={style.point}>Date</td>
                <td>{newDate}</td>
              </tr>
              <tr className={style.raw}>
                <td className={style.point}>Type</td>
                <td className={style.type}>{type[1]}</td>
              </tr>
              <tr className={style.raw}>
                <td className={style.point}>Category</td>
                <td>{category[1] || 'Regular income'}</td>
              </tr>
              <tr className={style.raw}>
                <td className={style.point}>Comments</td>
                <td>{comments[1]}</td>
              </tr>
              <tr className={style.raw}>
                <td className={style.point}>Amount</td>
                <td className={style[`${currentStyle}`]}>{amount[1]}</td>
              </tr>
              <tr className={style.raw}>
                <td className={style.point}>Balance</td>
                <td>{balance[1]}</td>
              </tr>
            </tbody>
          </table>
        </li>
      )}
      {Number(tabletScreen) >= 768 && (
        <>
          <tr className={style.raw}>
            <td>{newDate}</td>
            <td className={style.type}>{type[1]}</td>
            <td>{category[1] || 'Regular income'}</td>
            <td>{comments[1]}</td>
            <td className={style[`${currentStyle}`]}>{amount[1]}</td>
            <td className={style.balance}>{balance[1]}</td>
          </tr>
        </>
      )}
    </>
  );
};

export default TransactionItem;
