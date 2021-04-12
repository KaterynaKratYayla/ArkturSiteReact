import React from 'react';
import { Route } from 'react-router-dom';

import { localizeRoutePath, localizePath } from '../../../Redux/helpers/localizeRoutePath';

console.log('[file]:import', 'import { localizeRoutePath } from \'../../../Redux/helpers/localizeRoutePath\';');
console.log('[file]', 'src/Components/Library/Localization/LocalizationRoute.js');
export const LocalizationRoute = ({ path, ...rest }) => {
    // console.log('[file]:export const LocalizationRoute', 'src/Components/Library/Localization/LocalizationRoute.js');
    // const localizedPath = localizeRoutePath(path);
    // const localizedPath = localizePath(path);
    return(
        <Route exact path={ localizeRoutePath(path) } {...rest} />
    );
}
