import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux/store";


/* ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); */

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
        <Provider store={store}>
            <App />
          </Provider>
    </React.StrictMode>,
    rootElement
    );
} else {
  render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
          </Provider>
    </React.StrictMode>,
    rootElement
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
