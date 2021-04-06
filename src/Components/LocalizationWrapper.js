import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';

import App from './App';

import { changeLang } from '../Redux/actions';

import messages from '../translations/common';
// import locales from "./Redux/reducers/locales";

console.log('[file]:import', 'import App from \'./App\';');
console.log('[file]:import', 'import { changeLang } from \'../Redux/actions\';');
console.log('[file]', 'src/Components/LocalizationWrapper.js');
const LocalizationWrapper = ( props ) => {
    console.log('[file]:const LocalizationWrapper', 'src/Components/LocalizationWrapper.js');

    const { locale } = props.match.params;

    const dispatch = useDispatch();
    const r_locale = useSelector( state => state.localization.current_locale );

    useEffect(() => {
        dispatch(
            changeLang( locale )
        );
    }, [ locale ] );

    return(
        <>
            <IntlProvider
                locale={r_locale}
                messages={messages[r_locale]}
            >
                <App />
            </IntlProvider>
        </>
    )
}

export default LocalizationWrapper;
