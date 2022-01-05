
import axios from '../helpers/public.axios';

import { GET_HOTELS_REQ, GET_HOTELS_RES , GET_HOTELS_ERR } from '../constants';
import { GET_GENERAL_HOTELS_REQ, GET_GENERAL_HOTELS_RES , GET_GENERAL_HOTELS_ERR } from '../constants';
import {GET_HOTEL_NAME_RES,GET_HOTEL_NAME_REQ,GET_HOTEL_NAME_ERR} from '../constants';


export const hotelsResponse = ( res ) => ({
    type: GET_HOTELS_RES,
    payload: res
});

export const getHotels = () => ( dispatch) => {

    dispatch({ type: GET_HOTELS_REQ });

    axios.get(`${process.env.REACT_APP_SMART_URL}interface/classifier?classifier=hotelaccommodation`,  {
    }) 
        .then( res => {
            const hotelsArray1 = res.data.map(function(b){
              return {
                id: b.hotel_id,
                name: b.hotel_name
              } 
            })
   
               const hotelsArray2 = res.data.map(function(q){
                 return {
                   id: q.city_id,
                   name: q.city_name
                   }
               })
                  
                 const hotelsArray3 = hotelsArray2.filter((item,index,array) =>
                 array.findIndex(t => t.name === item.name && t.id === item.id)===index)
               
            console.log('[NEW ARRAY3_htl] : ' , hotelsArray3)
            dispatch(hotelsResponse([...hotelsArray1, ...hotelsArray3]))
        })
        .catch( err => {
            dispatch({ type: GET_HOTELS_ERR, error: err });
        })
    }


    export const generalHotelsResponse = ( res ) => ({
        type: GET_GENERAL_HOTELS_RES,
        payload: res
    });
    
    export const getGeneralHotels = () => ( dispatch, getState ) => {
    
        dispatch({ type: GET_GENERAL_HOTELS_REQ });
    
        axios.get(`${process.env.REACT_APP_SMART_URL}interface/classifier?classifier=hotelaccommodation`,  {
        }) 
            .then( res => {
                      
                console.log('[GeneralHotels] : ' , res.data)
                dispatch(generalHotelsResponse(res.data))
            })
            .catch( err => {
                dispatch({ type: GET_GENERAL_HOTELS_ERR, error: err });
            })
        }

        export const hotelNameResponse = ( res ) => ({
            type: GET_HOTEL_NAME_RES,
            payload: res
        });
        
        export const getHotelName = (name) => ( dispatch, getState ) => {
        
            dispatch({ type: GET_HOTEL_NAME_REQ });
            dispatch(hotelNameResponse(name))

            }
    
