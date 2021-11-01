import React, { useState, useEffect } from 'react'
import {TopMenu} from './Components/Pages/PageComponents/ResponsiveHeader/Header'
import {Footer,MenuLinks} from './Components/Pages/RoutesAndLinks/Footer'
import './App.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {ScrollToTop} from './Components/Library/PageDevices/ScrollToTop';
import {RouteSwitcher} from './Components/Pages/RoutesAndLinks/RouteSwitcher'
// import AxiosDemo from './Redux/components/pages/Axios';
import Login from "./Components/Library/Authorization/Login";
import Register from "./Components/Library/Authorization/Register";
import {IntlProvider} from 'react-intl'
import {LocalizationWrapper} from './LocalizationWrapper'
import {LangSelectionTool} from './Components/Library/Localization/LangSelectionTool'

import "bootstrap/dist/css/bootstrap.min.css";

import { logout } from "./Redux/actions/auth";
import PaymentService from "./Redux/services/payment.service";
import { PaymentServiceProvider } from "./Components/Context/PaymentServiceContext";
import { clearMessage } from "./Redux/actions/message";
import {HomePage} from "./Components/Pages/PageComponents/HomePage"
// import { setOrderId } from './Redux/actions'
// import messages from './Archive/Translations/common'
import config from './Redux/config'

import { history } from "./Redux/helpers/history";

console.log('ENV',process.env.REACT_APP_PRIVATE_KEY)

const paymentService = new PaymentService();

const supportedLangs = config.supportedLangs.join('|')

function App() {
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    // dispatch(setOrderId(25));

    useEffect(() => {
        if (currentUser) {
            console.log('currentUser: ', currentUser);
        }
    }, [currentUser]);

    const logOut = () => {
        dispatch(logout());
    };

  return (
    <BrowserRouter history={history}>
      <PaymentServiceProvider value={paymentService} >
      {/* <LangSelectionTool/> */}
          <Switch>
              <Route path={`/:locale(${supportedLangs})`} component={LocalizationWrapper}/>
              <Redirect to={config.defaultLang}/>
          </Switch>
          
           {/* <LocalizationWrapper /> */}
          {/* <IntlProvider
            locale="uk"
            messages={messages['uk']}
            >
            <ScrollToTop />
            {/* <RouteSwitcher/> */}
        
            {/* <TopMenu /> */}
            {/* <hr /> */}
            {/* <Footer /> */}
          {/* </IntlProvider> */} 
      </PaymentServiceProvider>
    </BrowserRouter>
    
  );
}

export default App;
