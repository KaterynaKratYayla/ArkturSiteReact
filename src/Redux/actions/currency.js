import axios from '../helpers/public.axios';
import { GET_CURRENCY_REQ, GET_CURRENCY_RES , GET_CURRENCY_ERR } from '../constants';
import {GET_PICKEDCURRENCY_REQ,GET_PICKEDCURRENCY_RES,GET_PICKEDCURRENCY_ERR} from '../constants'

export const currencyResponse = ( res ) => ({
    type: GET_CURRENCY_RES,
    payload: res
});

export const getCurrency = () => ( dispatch, getState ) => {

    dispatch({ type: GET_CURRENCY_REQ });

    axios.get(`${process.env.REACT_APP_SMART_URL}interface/classifier?classifier=currency`,  {
    }) 
        .then( res => {
            
            dispatch(currencyResponse(res.data))
           
        })
        .catch( err => {
            dispatch({ type: GET_CURRENCY_ERR, error: err });
        })
    }

    export const pickedCurrencyResponse = ( res ) => ({
        type: GET_PICKEDCURRENCY_RES,
        payload: res,
    });
    
    export const getPickedCurrencyResponse = (item) => ( dispatch, getState ) => {
        dispatch({ type: GET_PICKEDCURRENCY_REQ });
    
        dispatch(pickedCurrencyResponse(item))
       }