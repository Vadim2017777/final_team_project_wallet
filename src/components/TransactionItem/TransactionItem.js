import React, {useState, useEffect} from 'react';

import s from './TransactionItem.module.css';

const TransactionItem = ({items}) => {
  const item = Object.entries(items);
  const [category, balance, , date, type, comments, amount] = item;

  const newDate = date[1].split('-').reverse().join('.');

  let currentStyle ='amount';
  if (type[1] === '-'){currentStyle = 'amountMinus'};

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
        <li className={s.item}>
          <table className={s.table}>
            <tbody className={s.bodyTable}>
              <tr className={s.raw}>
                <td className={s.point}>Date</td>
                <td>{newDate}</td>
              </tr>
              <tr className={s.raw}>
                <td className={s.point}>Type</td>
                <td className={s.type}>{type[1]}</td>
              </tr>
              <tr className={s.raw}>
                <td className={s.point}>Category</td>
                <td>{category[1] || 'Regular income'}</td>
              </tr>
              <tr className={s.raw}>
                <td className={s.point}>Comments</td>
                <td>{comments[1]}</td>
              </tr>
              <tr className={s.raw}>
                <td className={s.point}>Amount</td>
                <td className={s[`${currentStyle}`]}>{amount[1]}</td>
              </tr>
              <tr className={s.raw}>
                <td className={s.point}>Balance</td>
                <td>{balance[1]}</td>
              </tr>
            </tbody>
          </table>
          </li>
      )}
      {Number(tabletScreen) >= 768 && (
        <>
          <tr className={s.raw}>
            <td>{newDate}</td>
            <td className={s.type}>{type[1]}</td>
            <td>{category[1] || 'Regular income'}</td>
            <td>{comments[1]}</td>
            <td className={s[`${currentStyle}`]}>{amount[1]}</td>
            <td className={s.balance}>{balance[1]}</td>
          </tr>
        </>
      )}
    </>
  );
};

export default TransactionItem;
