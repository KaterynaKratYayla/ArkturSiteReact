import React, { useState, useEffect } from 'react'
import {TopMenu} from './Components/Pages/PageComponents/ResponsiveHeader/Header'
import {Footer,MenuLinks} from './Components/Pages/RoutesAndLinks/Footer'
import './App.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ScrollToTop} from './Components/Library/PageDevices/ScrollToTop';
import {RouteSwitcher} from './Components/Pages/RoutesAndLinks/RouteSwitcher'
// import AxiosDemo from './Redux/components/pages/Axios';
import Login from "./Components/Library/Authorization/Login";
import Register from "./Components/Library/Authorization/Register";

import "bootstrap/dist/css/bootstrap.min.css";

import { logout } from "./Redux/actions/auth";
import PaymentService from "./Redux/services/payment.service";
import { PaymentServiceProvider } from "./Components/Context/PaymentServiceContext";
import { clearMessage } from "./Redux/actions/message";
import {HomePage} from "./Components/Pages/PageComponents/HomePage"
// import { setOrderId } from './Redux/actions'

import { history } from "./Redux/helpers/history";

const paymentService = new PaymentService();

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
      <PaymentServiceProvider value={paymentService} >
        <BrowserRouter history={history}>
            <ScrollToTop />
            {/* <RouteSwitcher/> */}
            <TopMenu />
            {/* <hr /> */}

            <Footer />

        </BrowserRouter>
      </PaymentServiceProvider>
  );
}

export default App;
