import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCurrencyValue} from '../../redux/currency/currencyOperation';

import {getCurrencyState} from '../../redux/currency/currencySelectors';

import s from './CurrencyTable.module.css';

const CurrencyTable = ({currency, getCurrency}) => {
  console.log('----------->', currency);
  // const [USD, EUR, RUB] = currency;
  useEffect(() => {
    getCurrency();
  }, [getCurrency]);

  return (
    <div className={s.CurrencyTable_container}>
      {/* <div className={s.CurrencyTable_form}>
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
              <th>{currency.length ? EUR.purchaseRate : 0}</th>
              <th>{currency.length ? EUR.saleRate : 0}</th>
            </tr>
            <tr className={s.CurrencyTable_row}>
              <th>RUR</th>
              <th>{currency.length ? RUB.purchaseRate : 0}</th>
              <th>{currency.length ? RUB.saleRate : 0}</th>
            </tr>
            <tr className={s.CurrencyTable_row}>
              <th>USD</th>
              <th>{currency.length ? USD.purchaseRate : 0}</th>
              <th>{currency.length ? USD.saleRate : 0}</th>
            </tr>
          </tbody>
        </table>
      </div> */}
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
