import axios from '../helpers/public.axios';

import { GET_TOPTOURS_REQ, GET_TOPTOURS_RES, GET_TOPTOURS_ERR} from '../constants';

console.log('[file]:import', 'import axios from \'../helpers/public.axios\';');
console.log('[file]', 'src/Redux/actions/toptours.js');
console.log('[file]:export const toptoursResponse', 'src/Redux/actions/toptours.js');
export const toptoursResponse = ( res ) => ({
    type: GET_TOPTOURS_RES,
    payload: res
});

export const getTopTours = () => ( dispatch, getState ) => {
    console.log('[file]:export const getTopTours', 'src/Redux/actions/toptours.js');

    dispatch({ type: GET_TOPTOURS_REQ });

    axios.get('https://hotels-ua.biz/interface/toptours',  {
    })
        .then( res => {

            console.log('[TOP TOURS] : ' , res.data)
            dispatch(toptoursResponse(res.data))
        })
        .catch( err => {
            dispatch({ type: GET_TOPTOURS_ERR, error: err });
        })
    }
