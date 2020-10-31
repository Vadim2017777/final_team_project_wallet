import {createAction} from '@reduxjs/toolkit';


const ADD_TRANSACTION_REQUEST = "transaction/addRequest";
const ADD_TRANSACTION_SUCCESS = "transaction/addSuccess";
const ADD_TRANSACTION_FAILURE = "transaction/addFailure";

const FETCH_TRANSACTIONS_REQUEST = "transactions/getRequest";
const FETCH_TRANSACTIONS_SUCCESS = "transactions/getSuccess";
const FETCH_TRANSACTIONS_FAILURE = "transactions/getFailure";



export const addTransactionRequest = createAction(ADD_TRANSACTION_REQUEST);
export const addTransactionSuccess = createAction(ADD_TRANSACTION_SUCCESS);
export const addTransactionFailure = createAction(ADD_TRANSACTION_FAILURE);

export const getTransactionRequest = createAction(FETCH_TRANSACTIONS_REQUEST);
export const getTransactionSuccess = createAction(FETCH_TRANSACTIONS_SUCCESS);
export const getTransactionFailure = createAction(FETCH_TRANSACTIONS_FAILURE);