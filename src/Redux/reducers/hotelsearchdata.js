import { GET_HTL_SEARCH_REQ ,GET_HTL_SEARCH_RES, GET_HTL_SEARCH_ERR} from '../constants'

const initState = {
	hotel_search_data: [],
    loaded: false,
    errors: []
}

const reducer = ( state = initState, action ) => {
    console.log('ACTION_avail', action)
    switch( action.type ){

        case GET_HTL_SEARCH_REQ:
              return({
                ...state,
                loaded: true
                })
        
        case GET_HTL_SEARCH_RES:
              return({
                 ...state,
                 loaded: true,
                 hotel_search_data: action.payload
                })
        
        case GET_HTL_SEARCH_ERR:
              return({
                   ...state,
                   errors: [...state.errors, action.error ]
               })

        default:
			return state;
    }

}

export default reducer;