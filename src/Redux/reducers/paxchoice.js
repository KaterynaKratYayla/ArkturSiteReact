import { GET_PAX_REQ ,GET_PAX_RES, GET_PAX_ERR} from '../constants'

const initState = {
	pax: {adults:2,children:0,rooms:1},
    pax:[],
    pax_loaded: true,
    errors: []
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

        default:
			return state;
    }

}

export default reducer;