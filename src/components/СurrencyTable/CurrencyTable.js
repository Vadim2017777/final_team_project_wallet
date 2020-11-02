import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCurrencyValue} from '../../redux/currency/currencyOperation';

import {getCurrencyState} from '../../redux/currency/currencySelectors';

import s from './CurrencyTable.module.css';

const CurrencyTable = ({currency, getCurrency}) => {
  const [USD, EUR, RUB] = currency;
  useEffect(() => {
    getCurrency();
  }, [getCurrency]);

  return (
    <div className={s.CurrencyTable_form}>
      <table className={s.CurrencyTable_table}>
        <thead className={s.CurrencyTable_head}>
          <tr className={s.CurrencyTable_name}>
            <th>Currency</th>
            <th>Buy</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody className={s.CurrencyTable_body}>
          <tr className={s.CurrencyTable_row}>
            <th>EUR</th>
            <th>{EUR.purchaseRate}</th>
            <th>{EUR.saleRate}</th>
          </tr>
          <tr className={s.CurrencyTable_row}>
            <th>RUR</th>
            <th>{RUB.purchaseRate}</th>
            <th>{RUB.saleRate}</th>
          </tr>
          <tr className={s.CurrencyTable_row}>
            <th>USD</th>
            <th>{USD.purchaseRate}</th>
            <th>{USD.saleRate}</th>
          </tr>
        </tbody>
      </table>
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
