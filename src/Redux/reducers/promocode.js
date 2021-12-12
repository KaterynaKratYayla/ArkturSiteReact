import { GET_PROMOCODE_REQ ,GET_PROMOCODE_RES, GET_PROMOCODE_ERR} from '../constants'

const initState = {
	promocode: '',
    promocode_loaded: true,
    errors: [],
}

const reducer = ( state = initState, action ) => {
    console.log('ACTION_pax', action)
    switch( action.type ){

        case GET_PROMOCODE_REQ:
              return({
                ...state,
                promocode_loaded: true
                })
        
        case GET_PROMOCODE_RES:
              return({
                 ...state,
                 promocode_loaded: true,
                 promocode: action.payload
                })
        
        case GET_PROMOCODE_ERR:
              return({
                   ...state,
                   errors: [...state.errors, action.error ]
               })
               
        default:
			return state;
    }

}

export default reducer;