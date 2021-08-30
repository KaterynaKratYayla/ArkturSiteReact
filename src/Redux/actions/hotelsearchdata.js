import { GET_HTL_SEARCH_REQ, GET_HTL_SEARCH_RES , GET_HTL_SEARCH_ERR } from '../constants';
import { GET_SEARCH_OCCUPANCY_REQ, GET_SEARCH_OCCUPANCY_RES , GET_SEARCH_OCCUPANCY_ERR } from '../constants';

//action creator
export const hotelsearchResponse = ( res ) => ({
    type: GET_HTL_SEARCH_RES,
    payload: res,
});

export const occupancyResponse = ( res ) => ({
    type: GET_SEARCH_OCCUPANCY_RES,
    payload: res,
});

export const getHotelSearch = (param) => ( dispatch, getState ) => {

    dispatch({ type: GET_HTL_SEARCH_REQ });
 
    dispatch(hotelsearchResponse(param))
   }

export const getOccupancySearch = (param) => ( dispatch, getState ) => {

    dispatch({ type: GET_SEARCH_OCCUPANCY_REQ });
 
    dispatch(occupancyResponse(param))
   }
