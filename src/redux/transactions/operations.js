import axios from 'axios';
import {addTransactionRequest, addTransactionSuccess, addTransactionFailure} from './transactionActions';

axios.defaults.baseURL = 'https://lit-mountain-68142.herokuapp.com'

export const addTransaction = ({date, type, category, comments, amount}) => async dispatch => {
  try {
    dispatch(addTransactionRequest());
    const {data} = await axios.post('/finance/addOperation', {date, type, category, comments, amount});
    console.log("operations", data);
    dispatch(addTransactionSuccess(data));
  } catch (error) {
    dispatch(addTransactionFailure(error));
  }
};
