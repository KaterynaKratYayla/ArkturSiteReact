import { GET_HTLCHOICE_REQ, GET_HTLCHOICE_RES , GET_HTLCHOICE_ERR } from '../constants';

const initState = {
	hotelchoice: [{}],
    hotelchoice_loaded: false,
    errors: [],
}

const reducer = ( state = initState, action ) => {
    console.log('ACTION_avail', action)
    switch( action.type ){

        case GET_HTLCHOICE_REQ:
              return({
                ...state,
                hotelchoice_loaded: true
                })
        
        case GET_HTLCHOICE_RES:
              return({
                 ...state,
                 hotelchoice_loaded: true,
                 hotelchoice: action.payload
                })
        
        case GET_HTLCHOICE_ERR:
              return({
                   ...state,
                   errors: [...state.errors, action.error ]
               })

        default:
			return state;
    }

}

export default reducer;