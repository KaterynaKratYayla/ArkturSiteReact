import { SET_ORDER_ID } from '../actions/types';

const initialState = {
    orderId: null
}

function order(state = initialState, action) {
    if (action.type === SET_ORDER_ID) {
        console.log("work_with_payment: reducer ");
        return Object.assign({}, state, {
            orderId: action.payload
        })
    }
    return state;
}

export default order;
