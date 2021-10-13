import {CHANGE_LOCALE} from '../constants/index'

export const changeLang = (locale) =>(dispatch) =>{
    dispatch({type:CHANGE_LOCALE, payload: locale})
}