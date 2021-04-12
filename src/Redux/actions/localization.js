// import { CHANGE_LOCALE } from '../constants';
import axios from '../helpers/public.axios';

import { GET_LOCALES_REQ, GET_LOCALES_RES, GET_LOCALES_ERR, CHANGE_LOCALE } from '../constants';

import config from "../config";

console.log('[file]:export const localesResponse', 'src/Redux/actions/localization.js');
export const localesResponse = ( res ) => ({
    type: GET_LOCALES_RES,
    payload: res
});

const apiUrl = config.apiUrl;

console.log('[file]:import', 'import axios from \'../helpers/public.axios\';');
console.log('[file]', 'src/Redux/actions/localization.js');
// Получаем языки
export const getLocales = () => ( dispatch ) => {
    console.log('[file]:export const getLocales', 'src/Redux/actions/localization.js');

    dispatch({ type: GET_LOCALES_REQ });

    axios.get(apiUrl + 'classifier?classifier=language',  {
    })
        .then( res => {
            const locales = res.data.map(function(b){
              return {
                id: b.id,
                name: b.name
              }
            })
            dispatch(localesResponse([...locales]))
        })
        .catch( err => {
            dispatch({ type: GET_LOCALES_ERR, error: err });
        })
    }

export const changeLang = ( locale ) => ( dispatch ) => {
    console.log('[file]:export const changeLang', 'src/Redux/actions/localization.js');
    dispatch({ type: CHANGE_LOCALE, payload: locale })
}
