import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';

import App from './App';

import { changeLang } from './Redux/actions';

import messages from './translations/common';
// import locales from "./Redux/reducers/locales";

const LocalizationWrapper = ( props ) => {

    const { locale } = props.match.params;

    const dispatch = useDispatch();
    const r_locale = useSelector( state => state.localization.locale );

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
