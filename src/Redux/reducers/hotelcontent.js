import { GET_HOTEL_CONTENT_REQ ,GET_HOTEL_CONTENT_RES, GET_HOTEL_CONTENT_ERR} from '../constants'

const initState = {
	hotelcontent: [],
    hotelcontent_loaded: false,
    hotelerrors: []
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

        case GET_HOTEL_CONTENT_REQ:
              return({
                ...state,
                hotelcontent_loaded: false
                })
        
        case GET_HOTEL_CONTENT_RES:
              return({
                 ...state,
                 hotelcontent_loaded: true,
                 hotelcontent: action.payload
                })
        
        case GET_HOTEL_CONTENT_ERR:
              return({
                   ...state,
                   hotelerrors: [...state.errors, action.error ]
               })

        default:
			return state;
    }

}

export default reducer;