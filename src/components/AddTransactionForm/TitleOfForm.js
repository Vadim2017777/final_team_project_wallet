import React from 'react';
import s from './TitleOfForm.module.css';

export const TitleOfForm = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.titleBox}>
        <button className={s.btn}>&lArr;</button>
        <span className={s.title}>ADD A TRANSACTION </span>
      </div>
    </div>
  );
};
