import React, {useState} from 'react';
import s from './AddTransactionForm.module.css';

export function AddTransactionForm() {
  const [typeOfTransaction, setTypeOfTransiction] = useState('');
  const updateTypeOfTransiction = e => {
    setTypeOfTransiction(e.target.value);
  };

  const [amount, setAnmount] = useState('');
  const updateAnmount = e => {
    setAnmount(e.target.value);
  };

  const currentDate = new Date()
    .toLocaleDateString()
    .split('.')
    .reverse()
    .join('-');
  const [date, setDate] = useState(currentDate);
  const updateDate = e => {
    setDate(e.target.value);
  };

  const [comment, setComment] = useState('');
  const updateComment = e => {
    setComment(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      typeOfTransaction,
      amount,
      date,
      comment,
    };
    console.log(formData);
  };

  return (
    <div className={s.container}>
      <div className={s.box}>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.formBox}>
            {' '}
            <label className={s.labelBox}>
              <input
                type="radio"
                value="income"
                name="typeOfTransiction"
                checked={typeOfTransaction === 'income'}
                onChange={updateTypeOfTransiction}
                required
              />
              income{' '}
            </label>{' '}
            <label className={s.labelBox}>
              <input
                type="radio"
                value="cost"
                name="typeOfTransiction"
                checked={typeOfTransaction === 'cost'}
                onChange={updateTypeOfTransiction}
              />
              cost{' '}
            </label>{' '}
            <label className={s.labelBox}>
              <input
                className={s.inputNumber}
                type="number"
                placeholder="0.00"
                name="amount"
                value={amount}
                onChange={updateAnmount}
                required
              />
            </label>{' '}
            <label className={s.labelBox}>
              <input
                className={s.inputDate}
                type="date"
                name="date"
                value={date}
                onChange={updateDate}
                required
              />
            </label>{' '}
            <label>
              <p className={s.commentNote}>Comment</p>
              <textarea
                className={s.textarea}
                type="text"
                name="comment"
                value={comment}
                onChange={updateComment}
                required
              >
                Lorem impsut lorem{' '}
              </textarea>{' '}
            </label>{' '}
          </div>
          <div className={s.btnBox}>
            <button className={s.button} type="submit">
              {' '}
              Add transaction{' '}
            </button>{' '}
          </div>
        </form>{' '}
      </div>
    </div>
  );
}
