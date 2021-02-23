import logo from './logo.svg';
import './App.css';
import React from 'react';
import { inject } from "mobx-react";
import App2 from './App2';

@inject('noticeStore')
class App extends React.Component {

  //생명주기

  //렌더 => 화면을 그릴떄

  //컴포넌트 디드마운트 => 화면을 다그리고 나서

  render() {
    return (
      <div>
        <App2></App2>
      </div>
    )
  }

}

export default App;
