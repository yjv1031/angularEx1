import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "mobx-react";
import noticeStore from "./store/noticeStore";

ReactDOM.render(
    <React.StrictMode>
      <Provider noticeStore={new noticeStore()}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
