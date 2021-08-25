
// import axios from '../helpers/public.axios';

import { GET_AVAIL_REQ, GET_AVAIL_RES , GET_AVAIL_ERR } from '../constants';

//action creator
export const availResponse = ( res ) => ({
    type: GET_AVAIL_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

export const getAvail = (rooms) => ( dispatch, getState ) => {
  
    dispatch({ type: GET_AVAIL_REQ });

    const avail_obj = {
        avail_rooms: rooms}
 
    dispatch(availResponse(avail_obj))
    console.log('GET_AVAIL', avail_obj)
   }
