
// import axios from '../helpers/public.axios';

import { GET_AVAIL_REQ, GET_AVAIL_RES , GET_AVAIL_ERR } from '../constants';

//action creator
export const availResponse = ( res ) => ({
    type: GET_AVAIL_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

export const getAvail = (value,index) => ( dispatch, getState ) => {
  
    // console.log('ACTIVEINDEX',activeIndex)
    dispatch({ type: GET_AVAIL_REQ });

    const avail_obj = {
        availability: value,
        activeIndex: index,
        picked: true}
 
    dispatch(availResponse(avail_obj))
    console.log('GET_AVAIL', avail_obj)
   }
