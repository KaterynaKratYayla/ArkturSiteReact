import React, { useState, useEffect } from 'react'
import {TopMenu} from './Pages/PageComponents/ResponsiveHeader/Header'
import {Footer} from './Pages/RoutesAndLinks/Footer'
import '../App.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ScrollToTop} from './Library/PageDevices/ScrollToTop';
import {RouteSwitcher} from './Pages/PageComponents/ResponsiveHeader/Header'
// import AxiosDemo from './Redux/components/pages/Axios';
import Login from "./Library/Authorization/Login";
import Register from "./Library/Authorization/Register";
import { FormattedMessage, useIntl } from 'react-intl';

import "bootstrap/dist/css/bootstrap.min.css";

import { logout } from "../Redux/actions/auth";
import { clearMessage } from "../Redux/actions/message";
import {HomePage} from "./Pages/PageComponents/HomePage"

import { history } from "../Redux/helpers/history";

function App() {
    console.log('[file]');
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const intl = useIntl();

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
        <ScrollToTop />
        {/* <RouteSwitcher/> */}
        <TopMenu />
        {/* <hr /> */}

        <Footer />

    </BrowserRouter>
  );
}

export default App;
