import { GET_PROMOCODE_REQ, GET_PROMOCODE_RES , GET_PROMOCODE_ERR } from '../constants';

export const promocodeResponse = ( res ) => ({
    type: GET_PROMOCODE_RES,
    payload: res,
});

export const getPromoCode = (code) => ( dispatch, getState ) => {
    dispatch({ type: GET_PROMOCODE_REQ });

    dispatch(promocodeResponse(code))
   }

 