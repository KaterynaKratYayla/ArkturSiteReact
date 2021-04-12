import React from 'react';
import { Switch } from 'react-router-dom';

import { localizeRoutePath } from '../../../Redux/helpers/localizeRoutePath';

console.log('[file]:import', 'import { localizeRoutePath } from \'../../../Redux/helpers/localizeRoutePath\';');
console.log('[file]', 'src/Components/Library/Localization/LocalizationSwitch.js');
export const LocalizaitonSwitch = ({ children }) => {
    console.log('[file]:export const LocalizaitonSwitch', 'src/Components/Library/Localization/LocalizationSwitch.js');
    return(
        <Switch>
            {
                React.Children.map( children, children => {
                    return(
                        React.cloneElement( children, {
                            ...children.props,
                            path: localizeRoutePath(children.props.path)
                        })
                    );
                })
            }
        </Switch>
    );
}
