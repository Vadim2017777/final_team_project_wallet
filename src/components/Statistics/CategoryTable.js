import React from 'react';

import s from './CategoryTable.module.css';

const CategoryTable = ({hanleMonthUpdate, hanleYearUpdate, data}) => {
  return (
    <div>
      <div className={s.CategoryTable_form}>
        <select className={s.CategoryTable_select} onChange={hanleMonthUpdate}>
          <option selected disabled hidden>
            Month
          </option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <select className={s.CategoryTable_select} onChange={hanleYearUpdate}>
          <option selected disabled hidden>
            Year
          </option>
          <option>2020</option>
          <option>2021</option>
        </select>
      </div>
      <table className={s.CategoryTable_table}>
        <thead className={s.CategoryTable_head}>
          <tr className={s.CategoryTable_name}>
            <th className={s.CategoryTable_nameCategory}>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className={s.CategoryTable_body}>
          {data.expenses ? (
            <tr className={s.CategoryTable_row}>
              <th className={`${s.CategoryTable_th} ${s.Main_expenses}`}>
                Main expenses
              </th>
              <th>{data.expenses}</th>
            </tr>
          ) : null}
          {data.food ? (
            <tr className={s.CategoryTable_row}>
              <th className={`${s.CategoryTable_th} ${s.Food}`}>Food</th>
              <th>{data.food}</th>
            </tr>
          ) : null}
          {data.car ? (
            <tr className={s.CategoryTable_row}>
              <th className={`${s.CategoryTable_th} ${s.Car}`}>Car</th>
              <th>{data.car}</th>
            </tr>
          ) : null}
          {data.selfcare ? (
            <tr className={s.CategoryTable_row}>
              <th className={`${s.CategoryTable_th} ${s.Self_Care}`}>
                Self Care
              </th>
              <th>{data.selfcare}</th>
            </tr>
          ) : null}
          {data.childcare ? (
            <tr className={s.CategoryTable_row}>
              <th className={`${s.CategoryTable_th} ${s.Child_Care}`}>
                Child Care
              </th>
              <th>{data.childcare}</th>
            </tr>
          ) : null}
          {data.house ? (
            <tr className={s.CategoryTable_row}>
              <th className={`${s.CategoryTable_th} ${s.House}`}>House</th>
              <th>{data.house}</th>
            </tr>
          ) : null}
          {data.education ? (
            <tr className={s.CategoryTable_row}>
              <th className={`${s.CategoryTable_th} ${s.Education}`}>
                Education
              </th>
              <th>{data.education}</th>
            </tr>
          ) : null}
          {data.enterteinment ? (
            <tr className={s.CategoryTable_row}>
              <th className={`${s.CategoryTable_th} ${s.Enterteinment}`}>
                Enterteinment
              </th>
              <th>{data.enterteinment}</th>
            </tr>
          ) : null}
          {data.others ? (
            <tr className={s.CategoryTable_row}>
              <th className={`${s.CategoryTable_th} ${s.Others}`}>Others</th>
              <th>{data.others}</th>
            </tr>
          ) : null}
        </tbody>
      </table>
      <div className={s.CategoryTable_summ}>
        <div className={`${s.CategoryTable_summName} ${s.orangeColor}`}>
          Cost <span>{data.costs ? `${data.costs} UAH` : `0 UAH`}</span>
        </div>

        <div className={s.CategoryTable_summName}>
          Income <span>{data.income ? `${data.income} UAH` : `0 UAH`}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
