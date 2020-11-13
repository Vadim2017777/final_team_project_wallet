import React from 'react';
import {months, years} from '../helpers/constants.js';

import s from './CategoryTable.module.css';

const CategoryTable = ({hanleMonthUpdate, hanleYearUpdate, data}) => {
  return (
    <>
      <div className={s.form}>
        <select className={s.select} onChange={hanleMonthUpdate}>
          <option defaultValue="Month" hidden>
            Month
          </option>
          {months.map(month => (
            <option>{month}</option>
          ))}
        </select>

        <select className={s.select} onChange={hanleYearUpdate}>
          <option defaultValue="Year" hidden>
            Year
          </option>
          {years.map(year => (
            <option>{year}</option>
          ))}
        </select>
      </div>
      <table className={s.table}>
        <thead className={s.head}>
          <tr className={s.name}>
            <th className={s.nameCategory}>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className={s.body}>
          {data.expenses ? (
            <tr className={s.row}>
              <th className={`${s.th} ${s.Main_expenses}`}>Main expenses</th>
              <th>{data.expenses}</th>
            </tr>
          ) : null}
          {data.food ? (
            <tr className={s.row}>
              <th className={`${s.th} ${s.Food}`}>Food</th>
              <th>{data.food}</th>
            </tr>
          ) : null}
          {data.car ? (
            <tr className={s.row}>
              <th className={`${s.th} ${s.Car}`}>Car</th>
              <th>{data.car}</th>
            </tr>
          ) : null}
          {data.selfcare ? (
            <tr className={s.row}>
              <th className={`${s.th} ${s.Self_Care}`}>Self Care</th>
              <th>{data.selfcare}</th>
            </tr>
          ) : null}
          {data.childcare ? (
            <tr className={s.row}>
              <th className={`${s.th} ${s.Child_Care}`}>Child Care</th>
              <th>{data.childcare}</th>
            </tr>
          ) : null}
          {data.house ? (
            <tr className={s.row}>
              <th className={`${s.th} ${s.House}`}>House</th>
              <th>{data.house}</th>
            </tr>
          ) : null}
          {data.education ? (
            <tr className={s.row}>
              <th className={`${s.th} ${s.Education}`}>Education</th>
              <th>{data.education}</th>
            </tr>
          ) : null}
          {data.enterteinment ? (
            <tr className={s.row}>
              <th className={`${s.th} ${s.Enterteinment}`}>Enterteinment</th>
              <th>{data.enterteinment}</th>
            </tr>
          ) : null}
          {data.others ? (
            <tr className={s.row}>
              <th className={`${s.th} ${s.Others}`}>Others</th>
              <th>{data.others}</th>
            </tr>
          ) : null}
        </tbody>
      </table>
      <div className={s.summ}>
        <div className={`${s.summName} ${s.orangeColor}`}>
          Cost <span>{data.costs ? `${data.costs} UAH` : `0 UAH`}</span>
        </div>

        <div className={s.summName}>
          Income <span>{data.income ? `${data.income} UAH` : `0 UAH`}</span>
        </div>
      </div>
    </>
  );
};

export default CategoryTable;
