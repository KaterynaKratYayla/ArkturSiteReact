import React,{useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {Select} from 'antd'
import {useIntl} from 'react-intl'
import { useDispatch} from "react-redux";
import { useHistory,useLocation } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

import config from '../../../Redux/config'
import {getLangResponse, changeLang} from '../../../Redux/actions/locale'
import { localeData } from 'moment';


export const LangSelectionTool = () =>{

    const browserhistory = createHistory();
    // const {pathname} = useLocation();
    const {locale, messages} = useIntl();

    const history = useHistory();
    const { Option } = Select;

    const supportedLangs = config.supportedLangs;

    const dispatch = useDispatch();

    const SelectRooms = (value) => {
        // setSelectedLang(value)
        history.push(`/${value}`)
        dispatch(getLangResponse(value))
        browserhistory.go(0)  
        // dispatch(changeLang(value))
    }

    // const getMatchingRoute = (language) =>{
        //Get hte key of the route the user is currently on
        // const[,route] = pathname.split(locale);
        // const routeKey = Object.keys(messages).find(key=>messages[key] === route);

        //Find the matching route for the new language

        // console.log('TEST',routeKey)

        // const matchingRoute = supportedLangs[language][routeKey];

        //Return localized route
        // console.log('TEST:', `/${language}` + matchingRoute)
        // return `/${language}` + matchingRoute;
    // }

    return(
         <Select  
           defaultValue={locale}
           onChange={SelectRooms}
             bordered={true}
             size='small'> 
              <>
                     { 
                         supportedLangs&&supportedLangs.map((item)=>{ 
                             return ( 
                                 <Option   
                                     // className='AvailableOptions'  
                                     value={item} 
                                     key={item}>  
                                             {item}  
                                 </Option>   
                             )     
                         }) 
                     } 
             </> 
        </Select> 
    )
}