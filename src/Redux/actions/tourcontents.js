
import axios from '../helpers/public.axios';

import { GET_TOURCONTENTS_REQ, GET_TOURCONTENTS_RES , GET_TOURCONTENTS_ERR } from '../constants';

//action creator
export const tourContentsResponse = ( res ) => ({
    type: GET_TOURCONTENTS_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

export const getTourContents = (id , date) => ( dispatch, getState ) => {

    dispatch({ type: GET_TOURCONTENTS_REQ });

    axios.get(`${process.env.REACT_APP_SMART_URL}interface/sitechoice3new?tour_id=${id}&date=${date}`) 
      .then( res => {

        dispatch(tourContentsResponse(res.data))
        // console.log('[REDUX_HOTEL_CONTENT]:' , res.data)
        })
      
    .catch( err => {
        dispatch({ type: GET_TOURCONTENTS_ERR, error: err });
       });
   }

