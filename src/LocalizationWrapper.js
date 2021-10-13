import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {TopMenu} from './Components/Pages/PageComponents/ResponsiveHeader/Header'
import {IntlProvider} from 'react-intl'
import {ScrollToTop} from './Components/Library/PageDevices/ScrollToTop';
import {Footer,MenuLinks} from './Components/Pages/RoutesAndLinks/Footer'
// import locales from './Components/Library/Localization/locales'
// import messages from './Archive/Translations/common'
import {ContentPages} from './Components/Pages/PageComponents/ContentPages'
import {changeLang} from './Redux/actions/locale'
import {getPages} from './Redux/actions/pages'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const LocalizationWrapper = (props) => {

    const {locale} = props.match.params;
    console.log('locale :',locale)
    
    const dispatch = useDispatch();
    const redux_locale = useSelector(state=>state.locale.locale)

    useEffect(()=>{
        dispatch(changeLang(locale))
      },[locale])

    const contentPages = ContentPages(redux_locale)

    return(
       <IntlProvider
            locale={locale}
            messages={contentPages}
             >
                <ScrollToTop />
                    {/* <RouteSwitcher/> */}
                 <TopMenu />
                {/* <hr /> */}
                <Footer />
       </IntlProvider>
    )
}