import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTransaction} from '../../redux/transactions/operations';
import isAuth from '../../redux/auth/authSelectors';
import {getAddTransactionPage} from '../../redux/transactions/selectors';
import {changeTransactionPage} from '../../redux/transactions/transactionActions';
import style from './AddTransactionForm.module.css';
import TitleOfForm from './TitleOfForm';

const AddTransactionForm = () => {
  const isActive = useSelector(state => getAddTransactionPage(state));
  const token = useSelector(state => isAuth.isAuthenticated(state));
  const dispatch = useDispatch();
  const updateStatus = pageStatus =>
    dispatch(changeTransactionPage(pageStatus));
  const onAddTransaction = data => dispatch(addTransaction(data));

  const pageStatus = !isActive;
  const [typeOfTransaction, setTypeOfTransiction] = useState('');
  const updateTypeOfTransiction = e => {
    setAnmount('');
    setDate(currentDate);
    setComment('');
    setCategory('');
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

  const [comments, setComment] = useState('');
  const updateComment = e => {
    setComment(e.target.value);
  };

  const [category, setCategory] = useState('');
  const updateCategory = e => {
    setCategory(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      date,
      type: typeOfTransaction,
      category,
      comments,
      amount,
      token,
    };
    onAddTransaction(formData);
    updateStatus(pageStatus);
  };

  const handleClick = e => {
    if (e.target.className === style.modal) {
      updateStatus(pageStatus);
    }
  };

  return (
    <div className={style.modal} onClick={handleClick}>
      <div className={style.container}>
        <TitleOfForm />
        <div className={style.box}>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.formBox}>
              {' '}
              <label className={style.labelBox}>
                <input
                  className={style.inputRadio}
                  type="radio"
                  value="+"
                  name="typeOfTransiction"
                  checked={typeOfTransaction === '+'}
                  onChange={updateTypeOfTransiction}
                  required
                />
                <span>income</span>
              </label>{' '}
              <label className={style.labelBox}>
                <input
                  className={style.inputRadio}
                  type="radio"
                  value="-"
                  name="typeOfTransiction"
                  checked={typeOfTransaction === '-'}
                  onChange={updateTypeOfTransiction}
                />
                <span>cost</span>
              </label>{' '}
              {typeOfTransaction === '-' && (
                <label className={style.categoryBox}>
                  <select
                    className={style.inputCategory}
                    value={category}
                    onChange={updateCategory}
                    required
                  >
                    <option defaultValue="Select category">
                      Select category...
                    </option>
                    <option value="Main expenses">Main expenses</option>
                    <option value="Food">Food</option>
                    <option value="Car">Car</option>
                    <option value="Self care">Self care</option>
                    <option value="Child care">Child care</option>
                    <option value="House">House</option>
                    <option value="Education">Education</option>
                    <option value="Enterteinment">Enterteinment</option>
                    <option value="Others">Others</option>
                  </select>
                </label>
              )}
              <input
                className={style.inputNumber}
                type="number"
                placeholder="0.00"
                name="amount"
                value={amount}
                onChange={updateAnmount}
                min="1"
                pattern="\d+"
                maxLength="12"
                required
              />
              <input
                className={style.inputDate}
                type="date"
                name="date"
                value={date}
                onChange={updateDate}
                required
              />
              <label className={style.textareaBox}>
                <p className={style.commentNote}>Comment</p>
                <textarea
                  className={style.textarea}
                  type="text"
                  name="comment"
                  value={comments}
                  onChange={updateComment}
                  maxLength="30"
                  required
                >
                  Lorem impsut lorem{' '}
                </textarea>{' '}
              </label>{' '}
            </div>
            <div className={style.btnBox}>
              <button className={style.button} type="submit">
                Add transaction
              </button>{' '}
            </div>
          </form>{' '}
        </div>
      </div>
    </div>
  );
};

export default AddTransactionForm;
