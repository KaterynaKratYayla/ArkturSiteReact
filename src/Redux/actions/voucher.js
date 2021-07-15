import { FETCH_PAYMENT_VOUCHER_SUCCESS } from './types';

export const getVoucher = (payload) => {
    console.log("work_with_payment: action ");
    return { type: FETCH_PAYMENT_VOUCHER_SUCCESS, payload }
}

const paymentVoucherLoaded = (paymentVoucher) => {
    console.log("work_with_payment: action ", paymentVoucher);
    return {
        type: 'FETCH_PAYMENT_VOUCHER_SUCCESS',
        payload: paymentVoucher
    }
};

const paymentVoucherError = (error) => {
    console.log("work_with_payment: action ");
    return {
        type: 'FETCH_PAYMENT_VOUCHER_ERROR',
        payload: error
    }
};

export const fetchPaymentVoucher = (paymentService, dispatch, service_id) => () => {
    console.log("work_with_payment: action ");
    // dispatch(requestPaymenInfo);
    paymentService.getPaymentVoucher(service_id)
        .then((data) => dispatch(paymentVoucherLoaded(data)))
        .catch((err) => dispatch(paymentVoucherError(err)));
}
