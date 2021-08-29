import { GET_HTL_SEARCH_REQ, GET_HTL_SEARCH_RES , GET_HTL_SEARCH_ERR } from '../constants';

//action creator
export const hotelsearchResponse = ( res ) => ({
    type: GET_HTL_SEARCH_RES,
    payload: res,
});

export const getHotelSearch = (param1,param2,param3) => ( dispatch, getState ) => {

    dispatch({ type: GET_HTL_SEARCH_REQ });

    const search_obj = {
        start: param1,
        end: param2,
        hotel_id: param3}
 
    dispatch(hotelsearchResponse(search_obj))
   }
