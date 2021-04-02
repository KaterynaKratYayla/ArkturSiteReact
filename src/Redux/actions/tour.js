
import axios from '../helpers/public.axios';

import { GET_TOUR_REQ, GET_TOUR_RES , GET_TOUR_ERR } from '../constants';
import { GET_EN_TOUR_REQ, GET_EN_TOUR_RES , GET_EN_TOUR_ERR } from '../constants';
import { GET_IMAGES_TOUR_REQ, GET_IMAGES_TOUR_RES , GET_IMAGES_TOUR_ERR } from '../constants';

console.log('[file]:import', 'import axios from \'../helpers/public.axios\';');
console.log('[file]', 'src/Redux/actions/tour.js');
console.log('[file]:export const tourResponse', 'src/Redux/actions/tour.js');
export const tourResponse = ( res ) => ({
    type: GET_TOUR_RES,
    payload: res
});

export const getTour = () => ( dispatch, getState ) => {
    console.log('[file]:export const getTour', 'src/Redux/actions/tour.js');

    dispatch({ type: GET_TOUR_REQ });

    axios.get('https://hotelsukraine.travel/ua/my_list_hotels/?type=full&hotels=16752&json=1&_dc=1608289903506&getDescription=Ext.data.JsonP.getDescription',  {
        })
        .then( res => {
            // console.log( JSON.parse(res.data.substring(30, res.data.length-1)) );
            dispatch( tourResponse(JSON.parse(res.data.substring(30, res.data.length-1))) );

        })
        .catch( err => {
            dispatch({ type: GET_TOUR_ERR, error: err });
        });

}

console.log('[file]:export const ENtourResponse', 'src/Redux/actions/tour.js');
export const ENtourResponse = ( res ) => ({
    type: GET_EN_TOUR_RES,
    payload: res
});

export const ENgetTour = () => ( dispatch, getState ) => {
    console.log('[file]:export const ENgetTour', 'src/Redux/actions/tour.js');

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

console.log('[file]:export const IMGtourResponse', 'src/Redux/actions/tour.js');
export const IMGtourResponse = ( res ) => ({
    type: GET_IMAGES_TOUR_RES,
    payload: res
});

export const IMGgetTour = () => ( dispatch, getState ) => {
    console.log('[file]:export const IMGgetTour', 'src/Redux/actions/tour.js');

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
