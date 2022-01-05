
import axios from '../helpers/public.axios';
// import {useSelector} from "react-redux";

import { GET_HOTEL_RATES_REQ, GET_HOTEL_RATES_RES , GET_HOTEL_RATES_ERR } from '../constants';

//action creator
export const hotelRatesResponse = ( res ) => ({
    type: GET_HOTEL_RATES_RES,
    payload: res,
});


export const getHotelRates = (search_data, userId) => ( dispatch, getState ) => {

    dispatch({ type: GET_HOTEL_RATES_REQ });
    // const { user: currentUser } = useSelector((state) => state.auth);
    // const { user: currentUser } = getState((state) => state.auth);
    // console.log('getState:', getState);

    const ActionRQ = {
           "username":"Serodynringa",
            "password":"%tmMJZbABm6cB@tY",
            // "user_id" :1426,
            "user_id" :userId,
            "action":"GetPriceHotelRQ",
            "refpartner":search_data.refpartner?search_data.refpartner:null,
            "data" : 
                {       
                  "start" : search_data.start, // date of arrival  
                  "end" : search_data.end, // date of departure
                  "city_id" : search_data.city_id,
                  // search_data.city_id,         // Id of city - can`t be equel to zero
                //   "hotel_id" : search_data.city_id === search_data.id? 0 : search_data.id ,
                  "hotel_id": search_data.hotel_id,
                  // search_data.city_id === search_data.id? 320 : search_data.id,       // Id of hotel: if hotel_id = 0, must return all hotels of the pointed city in response
                  "numberofunits" : search_data.rooms,    // Quantity of rooms, 1 by default, NOT OBLIGATORY
                  "calculation_data" : 
                        {   
                          "adults" : search_data.adults,
                          "children" : search_data.children,
                          // "child_discount" : search_data.c !== 0? 0.5: null,
                          "lower_cost_limit" : 0.00, // lower cost limit of room in USD, NOT OBLIGATORY
                          "upper_cost_limit" : 200.00 // upper cost limit of room in USD, NOT OBLIGATORY
                        }
                }
            };
        
        axios.post(`${process.env.REACT_APP_SMART_URL}interface/xmlsubj/`, JSON.stringify({ActionRQ}))
            .then(response => {
              for(let key in response.data.data){
                if(key === 'hotels'){
                    dispatch(hotelRatesResponse(response.data.data[key]))
                    console.log('[REDUX_HOTEL_RATES]:' , response.data.data[key])
                }
                
              }
             }
            )
            .catch( error => {
              dispatch({type: GET_HOTEL_RATES_ERR, error: error})
               });
        }


