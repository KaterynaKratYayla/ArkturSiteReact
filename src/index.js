import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// import './index.css';
import App from './Components';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux/store";
import { IntlProvider } from 'react-intl';

import messages from './translations/common';

console.log('[file]', 'src/index.js');
ReactDOM.render(
  <React.StrictMode>
      {/*<Provider store={store}>
        <IntlProvider
          locale = "uk"
          messages = {messages['uk']}
        >
        </IntlProvider>
      </Provider>*/}
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
