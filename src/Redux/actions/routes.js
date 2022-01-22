import { GET_ROUTE_REQ, GET_ROUTE_RES , GET_ROUTE_ERR } from '../constants';

export const routeResponse = ( res ) => ({
    type: GET_ROUTE_RES,
    payload: res,
});

export const getRoute = (route) => ( dispatch, getState ) => {
    dispatch({ type: GET_ROUTE_REQ });

    dispatch(routeResponse(route))
   }