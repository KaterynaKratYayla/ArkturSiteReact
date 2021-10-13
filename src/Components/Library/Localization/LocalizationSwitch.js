import React from 'react';
import {Switch} from 'react-router-dom'
import { localizeRoutePath } from '../../Pages/Helpers/localizeRoutePath';

export const LocalizationSwitch = ({children}) =>{

    return(
        <Switch>
            {
                React.Children.map(children,children=>{
                    return(
                        React.cloneElement(children, {
                            ...children.props,
                            path: localizeRoutePath(children.props.path)
                            
                        })
                    )
                })
            }
        </Switch>
    )
}