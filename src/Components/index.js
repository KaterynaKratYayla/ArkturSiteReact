import React from 'react'

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LocalizationWrapper from './LocalizationWrapper';

import store from '../Redux/redux/store';
import config from '../Redux/config';

const supportedLangs = config.supportedLangs.join('|');

const Wrappers = () => {

  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path={`/:locale(${supportedLangs})`} component={LocalizationWrapper} />
          <Redirect to={config.defaultLocale} />
        </Switch>
      </BrowserRouter>
    </Provider>

  )
}

export default Wrappers;
