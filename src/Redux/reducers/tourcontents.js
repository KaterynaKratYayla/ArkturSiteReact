
import { GET_TOURCONTENTS_REQ ,GET_TOURCONTENTS_RES, GET_TOURCONTENTS_ERR} from '../constants'

const initState = {
	tourcontents: [{}],
    tourcontents_loaded: false,
    tourcontents_errors: []
}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

        case GET_TOURCONTENTS_REQ:
              return({
                ...state,
                tourcontents_loaded: false
                })
        
        case GET_TOURCONTENTS_RES:
              return({
                 ...state,
                 tourcontents_loaded: true,
                 tourcontents: action.payload
                })
        
        case GET_TOURCONTENTS_ERR:
              return({
                   ...state,
                   tourcontents_errors: [...state.errors, action.error ]
               })

        default:
			return state;
    }

}

export default reducer;