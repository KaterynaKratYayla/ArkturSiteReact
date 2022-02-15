import axios from '../helpers/public.axios';

import { GET_TOURDETAILS_REQ, GET_TOURDETAILS_RES , GET_TOURDETAILS_ERR } from '../constants';
import { GET_EN_TOUR_REQ, GET_EN_TOUR_RES , GET_EN_TOUR_ERR } from '../constants';
import { GET_IMAGES_TOUR_REQ, GET_IMAGES_TOUR_RES , GET_IMAGES_TOUR_ERR } from '../constants';

export const tourDetailsResponse = ( res ) => ({
    type: GET_TOURDETAILS_RES,
    payload: res
});

export const getTourDetails = (id, date) => ( dispatch, getState ) => {

    // console.log('REDUX',tour_id,selectionDetails)

    dispatch({ type: GET_TOURDETAILS_REQ });

    //   axios.get(`${process.env.REACT_APP_SMART_URL}interface/sitechoice3new?tour_id=${tour_id}&date=${selectionDetails}`,  {
        axios.get(`https://hotels-ua.biz/interface/sitechoice3new?tour_id=${id}&date=${date}`) 

        .then(res => {
            dispatch(tourDetailsResponse(res.data))      
            // console.log('choiceDetailsNew',res)             
        })
        .catch( err => {
            dispatch({ type: GET_TOURDETAILS_ERR, error: err });
        });

}


export const ENtourResponse = ( res ) => ({
    type: GET_EN_TOUR_RES,
    payload: res
});

export const ENgetTour = () => ( dispatch, getState ) => {

    dispatch({ type: GET_EN_TOUR_REQ });

    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=16752&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription',  {
        }) 
        .then( res => {
          
            const obj = JSON.parse(res.data.substring(30, res.data.length-1));
            for(let key in obj){
               if(key === 'en'){
                console.log(obj[key])
                dispatch(ENtourResponse(obj[key]))
               }
            }
         
        })
        .catch( err => {
            dispatch({ type: GET_EN_TOUR_ERR, error: err });
        });

}

export const IMGtourResponse = ( res ) => ({
    type: GET_IMAGES_TOUR_RES,
    payload: res
});

export const IMGgetTour = () => ( dispatch, getState ) => {

    dispatch({ type: GET_IMAGES_TOUR_REQ });

    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=16752&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription',  {
        }) 
        .then( res => {
          
            const obj = JSON.parse(res.data.substring(30, res.data.length-1));
            for(let key in obj){
               if(key === 'photo_gallery'){
                // console.log(obj[key])
                const newArr = [];
                   for(let item in obj[key]){
                       newArr.push(obj[key][item])
                    }  
                    
                dispatch(IMGtourResponse(newArr))
               }
            }
         
        })
        .catch( err => {
            dispatch({ type: GET_IMAGES_TOUR_ERR, error: err });
        });

}
