import {GET_ROUTE_REQ, GET_ROUTE_RES , GET_ROUTE_ERR} from '../constants'

const initState = {
	route: '',
    route_loaded: false,
    errors: [],
}

const reducer = ( state = initState, action ) => {
    // console.log('ACTION_pax', action)
    switch( action.type ){

        case GET_ROUTE_REQ:
              return({
                ...state,
                route_loaded: false
                })
        
        case GET_ROUTE_RES:
              return({
                 ...state,
                 route_loaded: true,
                 route: action.payload
                })
        
        case GET_ROUTE_ERR:
              return({
                   ...state,
                   errors: [...state.errors, action.error ]
               })
               
        default:
			return state;
    }

}

export default reducer;