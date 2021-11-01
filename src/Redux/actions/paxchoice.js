
// import axios from '../helpers/public.axios';

import { GET_PAX_REQ, GET_PAX_RES , GET_PAX_ERR } from '../constants';
import { GET_PAX_INNER_REQ, GET_PAX_INNER_RES , GET_PAX_INNER_ERR } from '../constants';

//action creator
export const paxResponse = ( res ) => ({
    type: GET_PAX_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

export const getPax = (adults,children,rooms) => ( dispatch, getState ) => {
    console.log('GET_PAX1:', getState())
    dispatch({ type: GET_PAX_REQ });

    // const test = getState().paxchoice.pax

    const newObject = {
        adults: adults,
        children: children,
        // infants: infants,
        rooms: rooms}

    dispatch(paxResponse(newObject))
    console.log('GET_PAX4', newObject)
   }

   //action creator
export const paxResponseInnerSearch = ( res ) => ({
    type: GET_PAX_INNER_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

export const getPaxInnerSearch = (adults,children,rooms) => ( dispatch, getState ) => {
    // console.log('GET_PAX1:', getState())
    dispatch({ type: GET_PAX_INNER_REQ });

    // const test = getState().paxchoice.pax

    const newObject = {
        adults: adults,
        children: children,
        // infants: infants,
        rooms: rooms}

    dispatch(paxResponseInnerSearch(newObject))
    // console.log('GET_PAX4', newObject)
   }