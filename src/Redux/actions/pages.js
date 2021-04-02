import axios from '../helpers/public.axios';

import { GET_PAGES_REQ, GET_PAGES_RES, GET_PAGES_ERR} from '../constants';
import { GET_PurePage_REQ, GET_PurePage_RES, GET_PurePage_ERR} from '../constants';

console.log('[file]:import', 'import axios from \'../helpers/public.axios\';');
console.log('[file]', 'src/Redux/actions/pages.js');

console.log('[file]:export const pagesResponse', 'src/Redux/actions/pages.js');
export const pagesResponse = ( res ) => ({
    type: GET_PAGES_RES,
    payload: res
});

export const getPages = () => ( dispatch, getState ) => {
    console.log('[file]:export const getPages', 'src/Redux/actions/pages.js');

    dispatch({ type: GET_PAGES_REQ });

    axios.get('http://smartbooker.biz/interface/classifier?classifier=sitepage',  {
    })
        .then( res => {

            console.log('[PAGES_INFO] : ' , res.data)
            dispatch(pagesResponse(res.data))
        })
        .catch( err => {
            dispatch({ type: GET_PAGES_ERR, error: err });
        })
    }

console.log('[file]:export const purePageResponse', 'src/Redux/actions/pages.js');
export const purePageResponse = ( res ) => ({
        type: GET_PurePage_RES,
        payload: res
    });

export const getPurePage = (id) => ( dispatch, getState ) => {
    console.log('[file]:export const getPurePage', 'src/Redux/actions/pages.js');

     dispatch({ type: GET_PurePage_REQ });

  axios.get(`http://smartbooker.biz/interface/sitepagecontent?id=${id}&language=en`,  {
     })
         .then( res => {

             console.log('[PURE_PAGE_INFO] : ' , res.data)
             dispatch(purePageResponse(res.data))
          })
          .catch( err => {
            dispatch({ type: GET_PurePage_ERR, error: err });
          })
      }

