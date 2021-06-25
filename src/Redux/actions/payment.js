import { SET_PAYMENT_INFO, GET_PAYMENT_INFO } from './types';

export const setPaymenInfo = (payload) => {
    console.log("work_with_payment: action ");
    return { type: SET_PAYMENT_INFO, payload }
}

export const requestPaymenInfo = () => {
    console.log("work_with_payment: action ");
    return { type: GET_PAYMENT_INFO }
}

const paymentDataLoaded = (paymentData) => {
    console.log("work_with_payment: action ");
    return {
        type: 'FETCH_PAYMENT_DATA_SUCCESS',
        payload: paymentData
    }
};

const paymentDataError = (error) => {
    console.log("work_with_payment: action ");
    return {
        type: 'FETCH_PAYMENT_DATA_ERROR',
        payload: error
    }
};

export const fetchPaymentInfo = (paymentService, dispatch) => () => {
    console.log("work_with_payment: action ");
    // dispatch(requestPaymenInfo);
    paymentService.getPaymentInfo()
        .then((data) => dispatch(paymentDataLoaded(data)))
        .catch((err) => dispatch(paymentDataError(err)));
}
