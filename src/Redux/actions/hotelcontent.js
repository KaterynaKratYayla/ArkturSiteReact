
import axios from '../helpers/public.axios';

import { GET_HOTEL_CONTENT_REQ, GET_HOTEL_CONTENT_RES , GET_HOTEL_CONTENT_ERR } from '../constants';

//action creator
export const hotelContentResponse = ( res ) => ({
    type: GET_HOTEL_CONTENT_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

export const getHotelContent = (id) => ( dispatch, getState ) => {

    dispatch({ type: GET_HOTEL_CONTENT_REQ });

    axios.get(`https://hotels-ua.biz/interface/hotelcontent?id=${id}&language=en`)
      .then( res => {
        dispatch(hotelContentResponse(res.data))
        console.log('[REDUX_HOTEL_CONTENT]:' , res.data)
        })
      
    .catch( err => {
        dispatch({ type: GET_HOTEL_CONTENT_ERR, error: err });
       });
   }

