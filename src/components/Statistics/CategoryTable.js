import React from 'react';
import {months, years} from '../helpers/constants.js';

import style from './CategoryTable.module.css';

const CategoryTable = ({hanleMonthUpdate, hanleYearUpdate, data}) => {
  return (
    <>
      <div className={style.form}>
        <select className={style.select} onChange={hanleMonthUpdate}>
          <option defaultValue="Month" hidden>
            Month
          </option>
          {months.map(month => (
            <option>{month}</option>
          ))}
        </select>

        <select className={style.select} onChange={hanleYearUpdate}>
          <option defaultValue="Year" hidden>
            Year
          </option>
          {years.map(year => (
            <option>{year}</option>
          ))}
        </select>
      </div>
      <table className={style.table}>
        <thead className={style.head}>
          <tr className={style.name}>
            <th className={style.nameCategory}>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className={style.body}>
          {data.expenses ? (
            <tr className={style.row}>
              <th className={`${style.th} ${style.Main_expenses}`}>
                Main expenses
              </th>
              <th>{data.expenses}</th>
            </tr>
          ) : null}
          {data.food ? (
            <tr className={style.row}>
              <th className={`${style.th} ${style.Food}`}>Food</th>
              <th>{data.food}</th>
            </tr>
          ) : null}
          {data.car ? (
            <tr className={style.row}>
              <th className={`${style.th} ${style.Car}`}>Car</th>
              <th>{data.car}</th>
            </tr>
          ) : null}
          {data.selfcare ? (
            <tr className={style.row}>
              <th className={`${style.th} ${style.Self_Care}`}>Self Care</th>
              <th>{data.selfcare}</th>
            </tr>
          ) : null}
          {data.childcare ? (
            <tr className={style.row}>
              <th className={`${style.th} ${style.Child_Care}`}>Child Care</th>
              <th>{data.childcare}</th>
            </tr>
          ) : null}
          {data.house ? (
            <tr className={style.row}>
              <th className={`${style.th} ${style.House}`}>House</th>
              <th>{data.house}</th>
            </tr>
          ) : null}
          {data.education ? (
            <tr className={style.row}>
              <th className={`${style.th} ${style.Education}`}>Education</th>
              <th>{data.education}</th>
            </tr>
          ) : null}
          {data.enterteinment ? (
            <tr className={style.row}>
              <th className={`${style.th} ${style.Enterteinment}`}>
                Enterteinment
              </th>
              <th>{data.enterteinment}</th>
            </tr>
          ) : null}
          {data.others ? (
            <tr className={style.row}>
              <th className={`${style.th} ${style.Others}`}>Others</th>
              <th>{data.others}</th>
            </tr>
          ) : null}
        </tbody>
      </table>
      <div className={style.summ}>
        <div className={`${style.summName} ${style.orangeColor}`}>
          Cost <span>{data.costs ? `${data.costs} UAH` : `0 UAH`}</span>
        </div>

        <div className={style.summName}>
          Income <span>{data.income ? `${data.income} UAH` : `0 UAH`}</span>
        </div>
      </div>
    </>
  );
};

export default CategoryTable;
