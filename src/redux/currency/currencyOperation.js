import axios from 'axios';
import {
  getCurrencyRequest,
  getCurrencySuccess,
  getCurrencyFailure,
} from './currencyAction.js';

axios.defaults.baseURL = 'https://lit-mountain-68142.herokuapp.com';

export const getCurrencyValue = () => async dispatch => {
  try {
    dispatch(getCurrencyRequest());

    const {data} = await axios.get('/finance/apiprivat');

    dispatch(getCurrencySuccess(data));
  } catch (error) {
    dispatch(getCurrencyFailure(error.message));
  }
};
