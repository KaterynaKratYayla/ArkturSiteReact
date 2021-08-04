import { GET_HOTEL_RATES_REQ ,GET_HOTEL_RATES_RES, GET_HOTEL_RATES_ERR} from '../constants'

const initState = {
	hotelrates: [],
    hotelrates_loaded: false,
    hotelrates_errors: []
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

        case GET_HOTEL_RATES_REQ:
              return({
                ...state,
                hotelrates_loaded: false
                })
        
        case GET_HOTEL_RATES_RES:
              return({
                 ...state,
                 hotelrates_loaded: true,
                 hotelrates: action.payload
                })
        
        case GET_HOTEL_RATES_ERR:
              return({
                   ...state,
                   hotelrates_errors: [...state.hotelrates_errors, action.error ]
               })

        default:
			return state;
    }

}

export default reducer;