import { FETCH_PAYMENT_VOUCHER_SUCCESS } from '../actions/types';

const initialState = {
    voucherData: null
}

function voucher(state = initialState, action) {
    if (action.type === FETCH_PAYMENT_VOUCHER_SUCCESS) {
        console.log("work_with_payment: reducer3 ", action);
        const {payload} = action;
        /*const {data} = payload[0];
        console.log("work_with_payment: reducer4 ", data);*/
        return Object.assign({}, state, {
            voucherData: payload
        })
    }
    return state;
}

export default voucher;
