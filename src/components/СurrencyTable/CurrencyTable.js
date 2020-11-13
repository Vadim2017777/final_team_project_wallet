import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';

import {getCurrencyValue} from '../../redux/currency/currencyOperation';

import {getCurrencyState} from '../../redux/currency/currencySelectors';

import Skeleton from 'react-loading-skeleton';

import s from './CurrencyTable.module.css';

const CurrencyTable = ({currency, getCurrency}) => {
  useEffect(() => {
    getCurrency();
  }, [getCurrency]);

  return (
    <div className={s.container}>
      <div className={s.form}>
        <table className={s.table}>
          <thead className={s.head}>
            <tr className={s.name}>
              <th>Currency</th>
              <th>Buy</th>
              <th>Sale</th>
            </tr>
          </thead>
          {currency.map(item => (
            <tbody className={s.body}>
              <tr className={s.row}>
                <th>{item.currency}</th>
                <th>
                  {currency.length && typeof currency === 'object' ? (
                    item.purchaseRate
                  ) : (
                    <Skeleton />
                  )}
                </th>
                <th>
                  {currency.length && typeof currency === 'object' ? (
                    item.saleRate
                  ) : (
                    <Skeleton />
                  )}
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currency: getCurrencyState(state),
});

const mapDispatchToProps = {
  getCurrency: getCurrencyValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyTable);
