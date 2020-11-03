import axios from 'axios';
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionFailure,
  getTransactionRequest,
  getTransactionSuccess,
  getTransactionFailure,
} from './transactionActions';

axios.defaults.baseURL = 'https://lit-mountain-68142.herokuapp.com';

export const addTransaction = ({
  date,
  type,
  category,
  comments,
  amount,
  token,
}) => async dispatch => {
  try {
    dispatch(addTransactionRequest());
    
    const {data} = await axios.post(
      '/finance/addOperation',
      {date, type, category, comments, amount},
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    );
    console.log('operations', data);
    dispatch(addTransactionSuccess(data));
  
  } catch (error) {
    dispatch(addTransactionFailure(error));
  }
};

export const getAllTransactions = (token) => async dispatch => {
  try {
    dispatch(getTransactionRequest());
    
    const {data} = await axios.get(
      '/finance/getdata',
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    );
    dispatch(getTransactionSuccess(data));
  } catch (error) {
    dispatch(getTransactionFailure(error));
  }
};



