
// import axios from '../helpers/public.axios';

import { GET_PAX_REQ, GET_PAX_RES , GET_PAX_ERR } from '../constants';

//action creator
export const paxResponse = ( res ) => ({
    type: GET_PAX_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

export const getPax = (adults,children,infants) => ( dispatch, getState ) => {

    console.log('GET_PAX:', getState())
    dispatch({ type: GET_PAX_REQ });

    const newObject = {adults: adults,
        children: children,
        infants: infants}

    dispatch(paxResponse(newObject))
   }
