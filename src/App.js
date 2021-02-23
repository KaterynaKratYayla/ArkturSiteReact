import React from 'react'
import {TopMenu} from './Components/Pages/RoutesAndLinks/Header'
import {Footer} from './Components/Pages/RoutesAndLinks/Footer'
import './App.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ScrollToTop} from './Components/Library/PageDevices/ScrollToTop';
// import AxiosDemo from './Redux/components/pages/Axios';
import Login from "./Components/Library/Authorization/Login";
import Register from "./Components/Library/Authorization/Register";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { logout } from "./Redux/actions/auth";
import { clearMessage } from "./Redux/actions/message";

import { history } from "./Redux/helpers/history";

function App() {

  return (
    <BrowserRouter history={history}>
        <ScrollToTop />

        <TopMenu />
        {/* <hr /> */}
        <Footer />
        
     
      </Provider>
    </BrowserRouter>
  );
}

export default App;
