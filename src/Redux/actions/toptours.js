import axios from '../helpers/public.axios';

import { GET_TOPTOURS_REQ, GET_TOPTOURS_RES, GET_TOPTOURS_ERR} from '../constants';

console.log('[file]');
export const toptoursResponse = ( res ) => ({
    type: GET_TOPTOURS_RES,
    payload: res
});

export const getTopTours = () => ( dispatch, getState ) => {

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
