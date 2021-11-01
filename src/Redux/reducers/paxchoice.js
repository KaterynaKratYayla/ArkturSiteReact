import { GET_PAX_REQ ,GET_PAX_RES, GET_PAX_ERR,GET_PAX_INNER_REQ ,GET_PAX_INNER_RES, GET_PAX_INNER_ERR} from '../constants'

const initState = {
	pax: {adults:2,children:0,rooms:1},
    pax_loaded: true,
    errors: [],

    pax_inner_search: {adults:2,children:0,rooms:1},
    pax_inner_search_loaded: true,
    errors_inner_search: []
}

const reducer = ( state = initState, action ) => {
    console.log('ACTION_pax', action)
    switch( action.type ){

        case GET_PAX_REQ:
              return({
                ...state,
                pax_loaded: true
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

     case GET_PAX_INNER_REQ:
              return({
                ...state,
                pax_inner_search_loaded: true
                })
        
        case GET_PAX_INNER_RES:
              return({
                 ...state,
                 pax_inner_search_loaded: true,
                 pax_inner_search: action.payload
                })
        
        case GET_PAX_INNER_ERR:
              return({
                   ...state,
                   errors_inner_search: [...state.errors, action.error ]
               })


        default:
			return state;
    }

}

export default reducer;