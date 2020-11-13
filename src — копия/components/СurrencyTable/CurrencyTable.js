import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrencyValue} from '../../redux/currency/currencyOperation';
import {getCurrencyState} from '../../redux/currency/currencySelectors';
import Skeleton from 'react-loading-skeleton';
import style from './CurrencyTable.module.css';

const CurrencyTable = () => {
  const currency = useSelector(state => getCurrencyState(state));
  const getCurrency = useDispatch();

  useEffect(() => {
    getCurrency(getCurrencyValue());
  }, [getCurrency]);

  return (
    <div className={style.container}>
      <div className={style.form}>
        <table className={style.table}>
          <thead className={style.head}>
            <tr className={style.name}>
              <th>Currency</th>
              <th>Buy</th>
              <th>Sale</th>
            </tr>
          </thead>

          {currency.length && typeof currency === 'object' ? (
            <tbody className={style.body}>
              {currency.map(item => (
                <tr key={item.currency} className={style.row}>
                  <th>{item.currency}</th>
                  <th>{item.purchaseRate}</th>
                  <th>{item.saleRate} </th>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody className={style.body}>
              <tr className={style.row}>
                <th>
                  <Skeleton />
                </th>
                <th>
                  <Skeleton />
                </th>
                <th>
                  <Skeleton />
                </th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CurrencyTable;
