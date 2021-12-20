import axios from '../helpers/public.axios';
import { GET_HOTEL_CITIES_REQ, GET_HOTEL_CITIES_RES , GET_HOTEL_CITIES_ERR } from '../constants';

export const hotelCitiesResponse = ( res ) => ({
    type: GET_HOTEL_CITIES_RES,
    payload: res
});

export const getHotelCities = (lang) => ( dispatch, getState ) => {

    dispatch({ type: GET_HOTEL_CITIES_REQ });

    axios.get(`${process.env.REACT_APP_SMART_URL}interface/classifier?classifier=hotelaccommodationdetails&language=${lang}`,  {
    }) 
        .then( res => {
            const newobj = res.data.map((item)=>{
                
                return {eng_city_name: item.city_name,
                        city_id: item.city_id,
                        localized_city_name: item.city.display.title,
                        eng_hotel_name: item.hotel_name,
                        hotel_id: item.hotel_id,
                        localized_hotel_name: item.hotel.display.title}
            })            
            //  console.log('[HOTEL_CITIES] : ' , newobj)
            dispatch(hotelCitiesResponse(newobj))
           
        })
        .catch( err => {
            dispatch({ type: GET_HOTEL_CITIES_ERR, error: err });
        })
    }