import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "mobx-react";
import noticeStore from "./store/noticeStore";

ReactDOM.render(
    <Provider noticeStore={new noticeStore()}>
      <App />
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
