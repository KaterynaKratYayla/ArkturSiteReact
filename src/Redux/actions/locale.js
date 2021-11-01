import {GET_LOCALE_REQ, GET_LOCALE_RES, GET_LOCALE_ERR} from '../constants'
import { GET_LANG_REQ, GET_LANG_RES , GET_LANG_ERR } from '../constants';

export const changeLangResponce = ( res ) => ({
    type: GET_LOCALE_RES,
    payload: res
});

export const changeLang = (locale) =>(dispatch) =>{
    dispatch({type:GET_LOCALE_REQ});
    dispatch(changeLangResponce(locale))
}

export const langRepsonse = ( res ) => ({
    type: GET_LANG_RES,
    payload: res
});


export const getLangResponse = (param) => ( dispatch, getState ) => {

    dispatch({ type: GET_LANG_REQ });
    dispatch( langRepsonse(param) );
    
}