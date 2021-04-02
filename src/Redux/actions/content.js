
import axios from '../helpers/public.axios';

import { GET_CONTENT_REQ, GET_CONTENT_RES , GET_CONTENT_ERR } from '../constants';

//action creator
console.log('[file]:export const contentResponse', 'src/Redux/actions/content.js');
export const contentResponse = ( res ) => ({
    type: GET_CONTENT_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

console.log('[file]:import', 'import axios from \'../helpers/public.axios\';');
console.log('[file]', 'src/Redux/actions/content.js');
export const getContent = (id) => ( dispatch, getState ) => {
    console.log('[file]:export const getContent', 'src/Redux/actions/content.js');

    console.log('GET_STATE:', getState())
    dispatch({ type: GET_CONTENT_REQ });

    console.log('[GET_POSTS]' , id)
    axios.get(`http://smartbooker.biz/interface/content?id=${id}&language=en`)
      .then( res => {
        dispatch(contentResponse(res.data))
        console.log('[GET_CONTENT]:' , res.data)
        })

    .catch( err => {
        dispatch({ type: GET_CONTENT_ERR, error: err });
       });
   }
