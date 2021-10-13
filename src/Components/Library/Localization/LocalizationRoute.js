import React from "react";
import {Route} from 'react-router-dom'
import { localizeRoutePath } from "../../Pages/Helpers/localizeRoutePath";
import { useHistory } from "react-router-dom";

export const LocalizationRoute =(props)=>{
    
    const {path,...rest} = props
    console.log('PROPS', props)
    
    return(
        <Route path={localizeRoutePath(path)}{...rest}/>
    )
}