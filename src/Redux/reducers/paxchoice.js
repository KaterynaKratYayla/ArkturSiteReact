import { GET_PAX_REQ ,GET_PAX_RES, GET_PAX_ERR} from '../constants'

const initState = {
	pax: [],
    pax_loaded: false,
    errors: []
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

        case GET_PAX_REQ:
              return({
                ...state,
                pax_loaded: false
                })
        
        case GET_PAX_RES:
              return({
                 ...state,
                 pax_loaded: true,
                 pax: action.payload
                })
        
        case GET_PAX_ERR:
              return({
                   ...state,
                   errors: [...state.errors, action.error ]
               })

        default:
			return state;
    }

}

export default reducer;