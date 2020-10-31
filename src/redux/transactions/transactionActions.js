import {createAction} from '@reduxjs/toolkit';


const ADD_TRANSACTION_REQUEST = "transaction/addRequest";
const ADD_TRANSACTION_SUCCESS = "transaction/addSuccess";
const ADD_TRANSACTION_FAILURE = "transaction/addFailure";


export const addTransactionRequest = createAction(ADD_TRANSACTION_REQUEST);
export const addTransactionSuccess = createAction(ADD_TRANSACTION_SUCCESS);
export const addTransactionFailure = createAction(ADD_TRANSACTION_FAILURE);