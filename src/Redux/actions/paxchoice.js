
// import axios from '../helpers/public.axios';

import { GET_PAX_REQ, GET_PAX_RES , GET_PAX_ERR } from '../constants';

//action creator
export const paxResponse = ( res ) => ({
    type: GET_PAX_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

export const getPax = (adults,children,rooms) => ( dispatch, getState ) => {
    // console.log('GET_PAX5',adults,children,infants,rooms)
    console.log('GET_PAX1:', getState())
    // const test = getState().paxchoice.pax;
    dispatch({ type: GET_PAX_REQ });

    // const test = getState().paxchoice.pax

    const newObject = {
        adults: adults,
        children: children,
        // infants: infants,
        rooms: rooms}
        
        // console.log('GET_PAX4', newObject)
        // console.log('GET_PAX3', getState().paxchoice.pax)

    dispatch(paxResponse(newObject))
    console.log('GET_PAX4', newObject)
   }
