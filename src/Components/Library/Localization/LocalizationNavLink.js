import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {useIntl} from 'react-intl'
import {localizePath} from '../../Pages/Helpers/localizeRoutePath'

export const LocalizationNavLink = ({to, onClick, children}) =>{

    console.log('children',children)
    const {locale} = useIntl();
    console.log('INTLlocale',locale)
    return(
        <Link to={localizePath(to, locale)} onClick={onClick}>
            {children}
        </Link>
    )
}
