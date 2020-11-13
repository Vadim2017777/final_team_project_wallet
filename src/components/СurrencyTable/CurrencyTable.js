import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';

import {getCurrencyValue} from '../../redux/currency/currencyOperation';

import {getCurrencyState} from '../../redux/currency/currencySelectors';

import Skeleton from 'react-loading-skeleton';

import {currency} from '../helpers/constants.js';

import s from './CurrencyTable.module.css';

const CurrencyTable = ({currency, getCurrency}) => {
  const [USD, EUR, RUB] = currency;
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
          <tbody className={s.body}>
            <tr className={s.row}>
              <th>EUR</th>
              <th>
                {currency.length && typeof currency === 'object' ? (
                  EUR.purchaseRate
                ) : (
                  <Skeleton />
                )}
              </th>
              <th>
                {currency.length && typeof currency === 'object' ? (
                  EUR.saleRate
                ) : (
                  <Skeleton />
                )}
              </th>
            </tr>
            <tr className={s.row}>
              <th>RUR</th>
              <th>
                {currency.length && typeof currency === 'object' ? (
                  RUB.purchaseRate
                ) : (
                  <Skeleton />
                )}
              </th>
              <th>
                {currency.length && typeof currency === 'object' ? (
                  RUB.saleRate
                ) : (
                  <Skeleton />
                )}
              </th>
            </tr>
            <tr className={s.row}>
              <th>USD</th>
              <th>
                {currency.length && typeof currency === 'object' ? (
                  USD.purchaseRate
                ) : (
                  <Skeleton />
                )}
              </th>
              <th>
                {currency.length && typeof currency === 'object' ? (
                  USD.saleRate
                ) : (
                  <Skeleton />
                )}
              </th>
            </tr>
          </tbody>
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
