
import axios from '../helpers/public.axios';

import { GET_CONTENT_REQ, GET_CONTENT_RES , GET_CONTENT_ERR } from '../constants';

//action creator
export const contentResponse = ( res ) => ({
    type: GET_CONTENT_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

export const getContent = (id,locale) => ( dispatch, getState ) => {

    console.log('GET_STATE:', getState())
    dispatch({ type: GET_CONTENT_REQ });

    console.log('[GET_POSTS]' , id)
    axios.get(`${process.env.REACT_APP_SMART_URL}interface/content?id=${id}&language=${locale}`)
      .then( res => {
        dispatch(contentResponse(res.data))
        console.log('[GET_CONTENT]:' , res.data)
        })
      
    .catch( err => {
        dispatch({ type: GET_CONTENT_ERR, error: err });
       });
   }

