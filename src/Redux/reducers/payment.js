import {
    SET_PAYMENT_INFO,
    GET_PAYMENT_INFO,
    FETCH_PAYMENT_INFO_REQUEST,
    FETCH_SET_PAYMENT_INFO_SUCCESS,
    FETCH_SET_PAYMENT_INFO_ERROR,
    FETCH_PAYMENT_DATA_SUCCESS,
    FETCH_PAYMENT_DATA_ERROR
} from '../actions/types';

const initialState = {
    paymentInfo: null,
    loading: true,
    error: null
}

function payment(state = initialState, action) {
    if (action.type === SET_PAYMENT_INFO) {
        console.log("work_with_payment: ");
        const {payload} = action;
        console.log("mapStateToProps_paymentInfo: reducer ");
        return Object.assign({}, state, {
            paymentInfo: payload,
            loading: true
        })
    }
    if (action.type === GET_PAYMENT_INFO) {
        const {payload} = action;
        console.log("work_with_payment: reducer ");
        return Object.assign({}, state, {
            paymentInfo: payload,
            loading: true
        })
    }
    if (action.type === FETCH_PAYMENT_INFO_REQUEST) {
        const {payload} = action;
        console.log("work_with_payment: reducer ");
        return Object.assign({}, state, {
            paymentInfo: payload,
            loading: true
        })
    }
    if (action.type === FETCH_SET_PAYMENT_INFO_SUCCESS) {
        const {payload} = action;
        console.log("mapStateToProps_paymentInfo: reducer ");
        return Object.assign({}, state, {
            paymentInfo: payload,
            loading: true
        })
    }
    if (action.type === FETCH_PAYMENT_DATA_SUCCESS) {
        const {payload} = action;
        console.log("work_with_payment: reducer ");
        return Object.assign({}, state, {
            paymentInfo: payload,
            loading: false
        })
    }
    if (action.type === FETCH_SET_PAYMENT_INFO_ERROR) {
        const {payload} = action;
        console.log("work_with_payment: reducer ");
        return Object.assign({}, state, {
            paymentInfo: payload,
            loading: true
        })
    }
    if (action.type === FETCH_PAYMENT_DATA_ERROR) {
        const {payload} = action;
        console.log("work_with_payment: reducer ");
        return Object.assign({}, state, {
            paymentInfo: payload,
            loading: true
        })
    }
    return state;
}

export default payment;
