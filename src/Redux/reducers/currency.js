import { GET_CURRENCY_REQ, GET_CURRENCY_RES , GET_CURRENCY_ERR} from '../constants'

const initState = {
	currencies: [],
	currencies_loaded: false,
    errors: [],
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

		case GET_CURRENCY_REQ:
			return({
				...state,
				currencies_loaded: false
			})

		case GET_CURRENCY_RES:
			return({
				...state,
				currencies_loaded: true,
				currencies: action.payload
			})

		case GET_CURRENCY_ERR:
			return({
				...state,
				errors: [...state.errors, action.error ]
            })
            
        default:
			return state;
    }

}

export default reducer;