import React,{useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {TopMenu} from './Components/Pages/PageComponents/ResponsiveHeader/Header'
import {IntlProvider} from 'react-intl'
import {ScrollToTop} from './Components/Library/PageDevices/ScrollToTop';
import {Footer,MenuLinks} from './Components/Pages/RoutesAndLinks/Footer'
// import locales from './Components/Library/Localization/locales'
// import messages from './Archive/Translations/common'
import {ContentPages} from './Components/Pages/PageComponents/ContentPages'
import {changeLang,getLangResponse} from './Redux/actions/locale'
import {getPages} from './Redux/actions/pages'
////
import {Select} from 'antd'
import { useHistory,useLocation } from "react-router-dom";
import config from './Redux/config'
////

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const LocalizationWrapper = (props) => {

    const {locale} = props.match.params;
  
    const dispatch = useDispatch();
    const redux_locale = useSelector(state=>state.locale.current_locale)
    const switcher_locale = useSelector(state=>state.locale.locales)

      useEffect(()=>{
        dispatch(changeLang(locale))
      },[locale])

      useEffect(()=>{
        dispatch(getLangResponse())
      },[])
      

      const contentPages = ContentPages(locale)
      //  const contentPages = ContentPages(switcher_locale)
    // const contentPages = ContentPages(redux_locale)

    // console.log('LOCALE:',locale,'REDUX_LOCALE:',redux_locale,'SWITCHER_LOCALE:',switcher_locale, 'CONTENTPAGES:',contentPages)
      
    return(
       <IntlProvider
            locale={locale}
            // locale={switcher_locale}
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