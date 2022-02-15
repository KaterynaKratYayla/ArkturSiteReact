import { GET_HTLCHOICE_REQ, GET_HTLCHOICE_RES , GET_HTLCHOICE_ERR } from '../constants';

//action creator
export const hotelChoiceTours = ( res ) => ({
    type: GET_HTLCHOICE_RES,
    payload: res,
});

export const getHotelChoiceTours = (param) => ( dispatch, getState ) => {

    dispatch({ type: GET_HTLCHOICE_REQ });
 
    dispatch(hotelChoiceTours(param))
   }
