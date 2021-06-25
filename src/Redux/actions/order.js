import { SET_ORDER_ID } from './types';

export const setOrderId = (payload) => {
    console.log("work_with_payment: action ");
    return { type: SET_ORDER_ID, payload }
}
