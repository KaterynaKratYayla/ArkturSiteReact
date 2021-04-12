import React from 'react';
import { NavLink } from 'react-router-dom';

import { localizePath } from '../../../Redux/helpers/localizeRoutePath';
import {useSelector} from "react-redux";

console.log('[file]:import', 'import { localizePath } from \'../../../Redux/helpers/localizeRoutePath\';');
console.log('[file]', 'src/Components/Library/Localization/LocalizationNavLink.js');
export const LocalizationNavLink = ({ to, children, ...rest }) => {
    console.log('[file]:export const LocalizationNavLink', 'src/Components/Library/Localization/LocalizationNavLink.js');

    const current_locale = useSelector(state => state.localization.current_locale);

    return(
        <NavLink exact to={ localizePath(to, current_locale) } {...rest} >
            { children }
        </NavLink>
    );
}
